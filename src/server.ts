import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
import mainRoutes from './routes/index';

//informa à aplicação o conteudo de .env (variáveis de ambiente)
dotenv.config();

//Cria uma instancia express para o servidor
const server = express();

//define o template engine que será utilizado
server.set('view engine', 'mustache');
//define o caminho dos arquivos de view
server.set('views', path.join(__dirname, 'views'));
//configura o template engina no servidor
server.engine('mustache', mustache());

//define a pasta de arquivos estáticos
server.use(express.static(path.join(__dirname,'../public')));

//rotas
//define a rota principal (index.ts)
server.use(mainRoutes);

//rota para pagina não encontrada
server.use((req, res) =>{
    res.send("Página não encontrada")
} ) 

//inicia o servidor
server.listen(process.env.PORT);