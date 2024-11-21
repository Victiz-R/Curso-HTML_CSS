import getAllPosts from "../models/PostsModels.js";

export async function listedPost(req, res) {
    //Chama a função para buscar os posts
const posts = await getAllPosts();
//Envia uma resposta HTTP com status 200 (OK) e os posts no formato JSON
res.status(200).json(posts);
}
 

