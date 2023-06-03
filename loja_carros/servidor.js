const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const { render } = require('ejs');
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
  res.redirect("usuarios/html/cadastro.html")
});

app.post("/cadastrar_usuario", function(req, res) {

    // realiza conexão com banco de dados
    client.connect((err) => {
      // salva dados no banco
      client.db("Lojacarros").collection("usuarios").insertOne(
        { db_nome: req.body.nome, db_login: req.body.login, db_senha: req.body.senha }, function (err) {
        if (err) {
          res.render('resposta_cadastro_usuario', {resposta: "Erro ao cadastrar usuário!"})
        }else {
          res.render('resposta_cadastro_usuario', {resposta: "Usuário cadastrado com sucesso!"})        
        };
      });
    });
  
});

app.post("/logar_usuario", function(req, res) {

    // realiza conexão com banco de dados
    client.connect((err) => {
      // busca um usuário no banco de dados
      client.db("Lojacarros").collection("usuarios").find(
        {db_login: req.body.login, db_senha: req.body.senha }).toArray(function(err, items) {
          console.log(items);
          if (items.length == 0) {
            res.render('resposta_login_usuario', {resposta: "Usuário/senha não encontrado!"})
          }else if (err) {
            res.render('resposta_login_usuario', {resposta: "Erro ao logar usuário!"})
          }else {
            res.render('resposta_login_usuario', {resposta: "Usuário logado com sucesso!"})        
          };
        });
    });  
  
});

app.post("/cadastrar_carro", function(req, res) {

    // realiza conexão com banco de dados
    client.connect((err) => {
      // salva dados no banco
      client.db("Lojacarros").collection("carros").insertOne(
        { db_marca: req.body.marca, db_modelo: req.body.modelo, db_ano: req.body.ano, db_qtde_disponivel: req.body.qtde_disponivel }, function (err) {
        if (err) {
          res.render('resposta_cadastro_carro', {resposta: "Erro ao cadastrar carro!"})
        }else {
          res.render('resposta_cadastro_carro', {resposta: "Carro cadastrado com sucesso!"})        
        };
      });
    });
  
});

app.get("/lista_carros", function(req, res) {
  client.connect((err) => {
    client.db("Lojacarros").collection("carros").find().toArray(function(err, items) {
        res.render("lista_carros", { carros: items });
      });
  });  
});

app.get("/venda", function(req, res) {
  client.connect((err) => {
    client.db("Lojacarros").collection("carros").find().toArray(function(err, items) {
        res.render("venda", { carros: items });
      });
  });  
});

app.post("/update_carro", function(req, res) {
     client.connect((err) => {
       client.db("Lojacarros").collection("carros").updateOne(
           { db_marca: req.body.marca, db_modelo: req.body.modelo, db_ano: req.body.ano, db_qtde_disponivel: req.body.qtde_disponivel }, 
           { $set: {db_marca: req.body.novamarca, db_modelo: req.body.novomodelo, db_ano: req.body.novoano, db_qtde_disponivel: req.body.novaqtnd_disponivel} }, function (err, result) {
             console.log(result);
             if (result.modifiedCount == 0) {
               res.render('resposta_update_carro', {resposta: "Carro não encontrado!"})
             }else if (err) {
               res.render('resposta_update_carro', {resposta: "Erro ao atualizar carro!"})
             }else {
               res.render('resposta_update_carro', {resposta: "Carro atualizado com sucesso!"})        
             };
       });
     });
   
   });

app.post("/remover_carro", function(req, res) {

    // realiza conexão com banco de dados
     client.connect((err) => {
   
       // remove do usuário
       client.db("Lojacarros").collection("carros").deleteOne(
         { db_marca: req.body.marca, db_modelo: req.body.modelo, db_ano: req.body.ano, db_qtde_disponivel: req.body.qtde_disponivel } , function (err, result) {
           console.log(result);
           if (result.deletedCount == 0) {
             res.render('resposta_remove_carro', {resposta: "Carro não encontrado!"})
           }else if (err) {
             res.render('resposta_remove_carro', {resposta: "Erro ao remover carro!"})
           }else {
             res.render('resposta_remove_carro', {resposta: "Carro removido com sucesso!"})        
           };
         });
       });
});

app.post("/compra", function(req, res) {
  client.connect((err) => {
    client.db("Lojacarros").collection("carros").updateOne(
      {
      db_marca: req.body.marca, 
      db_modelo: req.body.modelo, 
      db_ano: req.body.ano, 
      db_qtde_disponivel: req.body.qtde_disponivel 
      }, 
      { $set: {db_qtde_disponivel: parseInt(req.body.qtde_disponivel) - 1} }, function (err, result) {
        console.log(result);
        if (result.modifiedCount == 0) {
          res.render('resposta_compra', {resposta: "Carro indisponível!"})
        }else if (err) {
          res.render('resposta_compra', {resposta: "Erro ao comprar carro!"})
        }else {
          res.render('resposta_compra', {resposta: "Carro comprado com sucesso!"})        
        };
        });
  });
});

   