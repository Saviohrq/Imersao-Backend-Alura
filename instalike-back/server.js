import express from "express";

const posts = [
    { descricao: "Uma foto teste", img: "https://placecats.com/millie/300/150", id: 1 },
    { descricao: "Gato fofo dormindo", img: "https://placecats.com/millie/300/150", id: 2 },
    { descricao: "Gato fazendo panqueca", img: "https://placecats.com/millie/300/150", id: 3 }
    // ... outros posts com seus respectivos IDs
  ]

const app = express();
app.use(express.json()); //transitar texto para json, converter texto --> json

app.listen(3000, () => {
    console.log("Servidor escutando...");
});

app.get("/posts", (req, res) => {
    res.status(200).json(posts); //esse [200] é um código HTTP, que significa "OK". HTTP => código numérico associado a um texto, que indica básicamente tudo que pode acontecer na conexão cliente <--> servidor.
});

function searchPostId(id){
    return posts.findIndex((post) => {
        return post.id === Number(id)
    })
}

app.get("/posts/:id", (req, res) => {
    const index = searchPostId(req.params.id);
    res.status(200).json(posts[index]); //ira retornar o objeto expecifico buscando seu id
});