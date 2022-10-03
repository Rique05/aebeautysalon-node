import { usuario } from '@prisma/client';
import {buscaUsuario, buscaTodosUsuarios} from '../models/usuarioModel'

//retorna um usuário pelo id
export async function retornaUsuario(id: number){

    const usuario: usuario = await buscaUsuario(id);
    return usuario;
}

//retorna todos os usuarios
export async function retornaTodosUsuarios(){
    return await buscaTodosUsuarios();
}