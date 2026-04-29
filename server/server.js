require("colors")


var http = require('http');
var express = require('express');
var app = express();

app.use(express.static('./public'));
var bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended: false }))
app.use(bodyParser.json())

var server = http.createServer(app);    

server.listen(3000);

app.set('view engine', 'ejs')
app.set('views', './views');

console.log("Servidor Rodando...".rainbow)

app.get("/", function(req, res){
    res.redirect("Aula08/index.html")
})

app.get("/inicio", function(req, res){
    var text = req.query.info;
    var number = req.query.number;
    var color = req.query.color;

    console.log(text, number, color);

    res.redirect("Aula08/index.html")

    
} )

app.post("/inicio", function(req, res){
    var text = req.body.info;
    var number = req.body.number;
    var color = req.body.color;

    console.log(text, number, color);
    console.log("requisição feita por POST")
})

app.post("/cadastro", function(req, res){
        var nome = req.body.nome;
        var login = req.body.login;
        var senha = req.body.senha;

        console.log(nome, login, senha);

        res.render("resposta.ejs", {resposta: "Usuário cadastrado com sucesso!"})
})  

app.get("/for", function(req, res){

    var qtde = req.query.qtde;
    res.render("exemplo_for.ejs", {qtde: qtde})


})