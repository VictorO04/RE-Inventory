import express from "express";
import dados from "./src/data/dados.js";
const {armasRE4} = dados;

const app = express();
const serverPort = 3000;
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Site de Resident Evil");
});

app.get("/Resident-Evil-4/armas", (req, res) => {
    res.status(200).json(armasRE4);
});

app.get("/Resident-Evil-4/armas/:id", (req, res) => {
    let id = req.params.id;
    id = parseInt(id);
    const idEncontrado = armasRE4.find(i => i.id === id);

    if (idEncontrado) {
        res.status(200).json(idEncontrado);
    } else {
        res.status(404).json({
            "erro": `Arma com o id ${id} não encontrada!`
        });
    }
});

app.get("/Resident-Evil-4/armas/nome/:nome", (req, res) => {
    let nome = req.params.nome.toLowerCase();
    const armaEncontrada = armasRE4.filter(a => a.nome.toLowerCase().includes(nome));

    if (armaEncontrada.length > 0) {
        res.status(200).json(armaEncontrada);
    } else {
        res.status(404).json({
            "erro": `Arma com o nome ${nome} não encontrada!`
        });
    }
});

app.get("/Resident-Evil-4/armas/tipo/:tipo", (req, res) => {
    let tipo = req.params.tipo.toLowerCase();
    const tipoEncontrado = armasRE4.filter(t => t.tipo.toLowerCase().includes(tipo));

    if (tipoEncontrado.length > 0) {
        res.status(200).json(tipoEncontrado);
    } else {
        res.status(404).json({
            "erro": `Arma com o tipo ${tipo} não encontrada!`
        });
    }
});

app.listen(serverPort, () => {
    console.log(`O servidor está aberto em: http://localhost:${serverPort}`);
})