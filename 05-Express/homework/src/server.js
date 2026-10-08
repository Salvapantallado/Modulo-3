const bodyParser = require('body-parser');
const express = require('express');

const STATUS_USER_ERROR = 422;

// This array of posts persists in memory across requests. Feel free
// to change this to a let binding if you need to reassign it.
const posts = [];

const server = express();
// to enable parsing of json bodies for post requests
server.use(bodyParser.json());

server.post("/posts", (req, res) => {
    const { title, contents } = req.body;
   // const { id} = req.params;

    if (!title || !contents) {
        return res.status(400).json({
            error: "No se recibieron los parámetros necesarios para crear el Post"
        });
    }

    const nuevoPost = {
        id: posts.length +1,
        title: title,
        contents: contents
    };
  
    posts.push(nuevoPost);

    res.status(201).json(nuevoPost);
});

server.get("/posts", (req, res) => {
    const { term } = req.query;

    if (term) {
        const resultados = posts.filter((post) => {
            return (
                post.title.includes(term) ||
                post.contents.includes(term)
            );
        });

        return res.json(resultados);
    }

    res.json(posts);
});

server.put("/posts/:id", (req, res) => {
    const { title, contents } = req.body;
    const { id} = req.params;

    if (id === undefined || title === undefined || contents === undefined) {
        return res.status(400).json({
            error: "No se recibieron los parámetros necesarios para modificar el Post"
        });
    }

    const post = posts.find((post) => post.id === id);

    if (!post) {
        return res.status(404).json({
            error: "No existe un Post con el id indicado"
        });
    }

    post.title = title;
    post.contents = contents;

    res.status(200).json(post);
});

server.delete("/posts/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const index = posts.findIndex(item => item.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Item not found" });
  }

  posts.splice(index, 1);

  res.status(200).json({ message: "Item deleted successfully" });
});

// TODO: your code to handle requests

module.exports = { posts, server };
