import { usuario } from '@prisma/client';
import {Request, Response, Router} from 'express';
import {retornaUsuario, retornaTodosUsuarios} from '../controllers/usuarioController';

//objeto da rota
const router = Router();

//Rotas de usuario
router.get('/', async (req: Request, res: Response)=> {

    res.render('home', {
        msg: 'Pagina Home'
    });
});

router.get('/usuario', async (req: Request, res: Response)=>{

    const usuarios: usuario[] = await retornaTodosUsuarios();

    res.render('usuario', {
        usuarios
    })
})

router.get('/usuario/:id', async (req: Request, res: Response) => {    

    const usuario: usuario = await retornaUsuario(parseInt(req.params.id));
    
    res.render('usuario', {
         usuario,
    }) 
})

export default router;