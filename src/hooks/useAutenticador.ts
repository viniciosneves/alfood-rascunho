import http from "../http";
import IToken from "../interfaces/IToken";

const useAutenticador = () => {

    return (token: IToken) => {
        sessionStorage.setItem('access_token', token.access);
        sessionStorage.setItem('refresh_token', token.refresh);
        setInterval(() => {
            const refreshToken = sessionStorage.getItem('refresh_token')
            http.post<IToken>('/token/refresh/', {
                refresh: refreshToken
            }).then(resposta => {
                sessionStorage.setItem('access_token', resposta.data.access);
            })
        }, 2000)
    }
}

export default useAutenticador