import {getAllPosts, createPost} from "../models/PostsModels.js";

export async function listedPost(req, res) {
    //Chama a função para buscar os posts
const posts = await getAllPosts();
//Envia uma resposta HTTP com status 200 (OK) e os posts no formato JSON
res.status(200).json(posts);
}
 
export async function postarNovoPost(req, res) {
    const postNew = req.body;
    try{
        const postcreated = await createPost(newPost);
        res.status(200).json(postcreated);
    } catch(erro){
        console.error(erro.message);
        res.status(500).json({"Erro":"Falha na requisição"})
    }
}
