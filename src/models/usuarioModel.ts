import { PrismaClient, usuario } from "@prisma/client";

const prisma = new PrismaClient();

//retorna um usuário pelo id
export const buscaUsuario = async (id: number) => {

    const usuario: usuario = await prisma.usuario.findUnique(
    {
         where:{
            id: id,
        }
    }) as usuario;

    return usuario;
    
    prisma.$disconnect;    
}

//função que busca todos os usuários
export const buscaTodosUsuarios = async () => {

    const usuarios: usuario[] = await prisma.usuario.findMany() as usuario[];
    return usuarios;

    prisma.$disconnect;
}




