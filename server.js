const express = require("express");
const app = express();

app.use('/img', express.static(__dirname + '/src/publico/img'));
app.use('/csspublico', express.static(__dirname + '/publico/css'));
app.use('/css', express.static(__dirname + '/src/publico/css'));
app.use('/js', express.static(__dirname + '/src/publico/js'));
app.use('/vendor', express.static(__dirname + '/vendor'));
app.use('/bscss', express.static('./node_modules/bootstrap/dist/css'));
app.use('/views', express.static(__dirname + '/assets/src/views'));

 const PORTA = process.env.PORT || 8081;
 app.listen(PORTA,function(){
     console.log('Servidor rodando na porta 8081');
 });

 app.get('/',function(req, res){
    res.sendFile(__dirname + '/src/views/index.html');
});

app.get('/conteudos',function(req, res){
    res.sendFile(__dirname + '/src/views/conteudos.html');
});

app.get('/compostos',function(req, res){
    res.sendFile(__dirname + '/src/views/compostos.html');
});
