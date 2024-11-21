import express from "express";
import { listedPost } from "../controllers/postsController.js";

 const routes = (app) => {
    app.use(express.json());//Vai pegar oque tem cara de Json e converter em Json
   
        //Rota para buscar todos os post
    app.get("/posts", listedPost);
}
export default routes;
