import jwt from 'jsonwebtoken';
import moment from 'moment';

const ID_TOKEN = 'id_token';
const TP_TOKEN = 'tp_token';

const clearCredentials = () => {
    localStorage.removeItem(ID_TOKEN);
    localStorage.removeItem(TP_TOKEN);
};

const setCredentials = (tokenType, accessToken) => {
    localStorage.setItem(ID_TOKEN, accessToken);
    localStorage.setItem(TP_TOKEN, tokenType);
};
export const logout = () => {
    clearCredentials();
};

const getObjToken = () => {
    const idToken = localStorage.getItem('id_token');
    const tpToken = localStorage.getItem('tp_token');

    if (!idToken || !tpToken) {
        logout();
        return;
    }

    try {
        const decoded = jwt.decode(idToken, { complete: true });
        if (!decoded) {
            logout();
            return;
        }

        const now = moment(new Date());
        const exp = moment.unix(decoded.payload.exp);

        if (!now.isBefore(exp)) {
            logout();
            return;
        }
    } catch (error) {
        console.error(error);
        logout();
        return;
    }

    return { tokenType: tpToken, accessToken: idToken };
};

export const getToken = () => {
    const token = getObjToken();
    if (!token) {
        return;
    }
    return `${token.tokenType} ${token.accessToken}`;
};

export const isLogged = () => !!getToken();

export const login = (tokenType, accessToken) => {
    setCredentials(tokenType, accessToken);
};

export const getUser = () => {
    const idToken = localStorage.getItem('id_token');
    try {
        const decoded = jwt.decode(idToken, { complete: true });
        if (!decoded || !decoded.payload || !decoded.payload.user) {
            logout();
            return;
        }
        return decoded.payload.user;
    } catch (error) {
        console.error(error);
        logout();
    }
};
