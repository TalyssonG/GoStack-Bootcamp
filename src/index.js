
//Criando um servidor:
const express = require('express');

const app = express();
/* 
- Métodos HTTP:
- GET: Buscar informações do back-end
- POST: Criar uma informação no back-end 
- PUT/PATCH: Alterar uma informação no back-end 
- DELETE: Deletar uma informação no back-end
*/
app.get('/projects', (request, response) => {
    return response.json([
        'Projeto 1',
        'Projeto 2',
    ]);
});

//Criar um projeto
app.post('/projects', (request, response) => {
    return response.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 3',
    ]);
});

//Alterar o projeto
app.put('/projects/:id', (request, response) => {
    return response.json([
        'Projeto 4',
        'Projeto 2',
        'Projeto 3',
    ]);
});

//Deletar um projeto
app.delete('/projects/:id', (request, response) => {
    return response.json([
        'Projeto 2',
        'Projeto 3',
    ]);
});
app.listen(3333, () => {
    console.log('🚀 Back-end started! ') 
}); 