import { http } from "./http";
import "./websocket/client";
import "./websocket/admin"

http.listen(3333, () => console.log('Server is running on port 3333'));


/**
 * GET = Buscas
 * POST = Criação
 * PUT = Alteração
 * DELETE = Deletar
 * PATCH = Alterar uma informação específica
 */

// app.get("/", (request, response) => {
//     return response.json({
//         message: 'Olá, NLW 05!'
//     });
// });

// app.post("/", (request, response) => {
//     return response.json({ message: "Usuário salvo com sucesso!" });
// });

