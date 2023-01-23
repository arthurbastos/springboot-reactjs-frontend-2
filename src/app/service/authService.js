import LocalStorageService from './localstorageService'
import ApiService from "../apiservice";

export const USUARIO_LOGADO = '_usuario_logado'
export const TOKEN = 'access-token'

export default class AuthService{

    static isUsuarioAutenticado(){
        var jwt = require('jsonwebtoken');
        const token =  LocalStorageService.obterItem(TOKEN);
        if (token){
            const decodedToken = jwt.decode(token)
            const expiration = decodedToken.exp;
            const isTokenInvalidoValido = Date.now() >= (expiration * 1000)

            return !isTokenInvalidoValido;
        }else{
            return false;
        }

    }

    static removerUsuarioAutenticado(){
        LocalStorageService.removerItem(USUARIO_LOGADO)
        LocalStorageService.removerItem(TOKEN)
    }

    static logar(usuario, token){
        LocalStorageService.adicionarItem(USUARIO_LOGADO, usuario)
        LocalStorageService.adicionarItem(TOKEN, token)
        ApiService.registrarToken(token)
    }

    static obterUsuarioAutenticado(){
        return LocalStorageService.obterItem(USUARIO_LOGADO);
    }

    static refreshSession(){
        const token = LocalStorageService.obterItem(TOKEN)
        const usuario = this.obterUsuarioAutenticado()
        this.logar(usuario, token);
        return usuario;
    }
}