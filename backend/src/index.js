const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors( /*{origin: 'http://meuapp.com'}*/ ));
app.use(express.json());
app.use(routes);
/**
 * Minhas anotações:
 * 
 * Request: Guarda todos os dados que vem através da requisição do usuario
 * Response: O responsavel por retornar uma resposta para o usuario 
 */

/**
 * Rota / Recursos
 */

/**
 * Método HTTP
 *  
 * GET: Buscar/listar uma informação do Back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */


app.listen(3333);