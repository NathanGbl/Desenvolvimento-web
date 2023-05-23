const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const { render } = require('ejs');
const { any } = require('webidl-conversions');
const MongoClient = require("mongodb").MongoClient;

const uri = `mongodb+srv://nathangabrielfleite:nathanpao123@cluster0.8t5dwbn.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true });

var app = express();
app.use(express.static('./public'));
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(80, () => {
  console.log('server started');
});

app.get('/', (req, res) => {
  res.redirect("/home/home.html")
});

app.get('/enviar', (req, res) => {
  res.redirect('cadastro/cadastro.html')
})

app.post("/cadastra_post", function(req, res) {
      client.db("Cluster0").collection("posts").insertOne(
        { db_titulo: req.body.titulo, db_resumo: req.body.resumo, db_conteudo: req.body.conteudo }, function (err) {
        if (err) {
          res.render('resposta', {resposta: "Erro ao cadastrar usuário!"})
        }else {
          res.render('resposta', {resposta: "Post cadastrado!"})
        };
      });
    });

app.get("/home", function(req, resp) {
    client.db("Cluster0").collection("posts").find().toArray(function(err, items) {
      resp.render("home", { posts: items });
          });
      });  