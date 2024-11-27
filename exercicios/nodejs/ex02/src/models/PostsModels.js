import ConnectToDatabase from "../config/dbConfig.js";
const conexao = await ConnectToDatabase(process.env.STRING_CONEXAO)

//const db representa meu db imersao-instabyte que ta no mongodb
//const colletion tá abrindo uma coleção especifica
export async function getAllPosts() {
    const db = conexao.db("Imersao-instabyte");
    const collection = db.collection("posts");
    return collection.find().toArray();
}

export async function createPost(newPost) {
    const db = conexao.db("Imersao-instabyte");
    const collection = db.collection("posts");
    return collection.insertOne(newPost);
}