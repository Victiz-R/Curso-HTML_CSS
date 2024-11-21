import express from "express" //importando o express
import routes from "./src/routes/postRoutes.js";

const app = express(); 
routes(app)

app.listen (3000, () => { //aqui o listen(escutando) o app(express/servidor), o 3000 é a porta de acesso
    console.log("Servidor escutando..."); //Console.log vai mostrar algo no console
});

    //Essa function recebe um número de id
//function searchPostById(id) {
    //da minha lista de posts encontra o index post por post
//    return posts.findIndex((post) => {
//        return post.id === Number(id);
//    })
//}
//
//app.get("/posts/:id", (req, res) =>{
//    const index = searchPostById(req.params.id);
//    res.status(200).json(posts[index]);
//});  