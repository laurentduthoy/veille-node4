const express = require('express');
const app = express();
app.use(express.static('public'));
//=======================================================Route /html/01form.html
app.get('/formulaire', function (req, res) {
 console.log(__dirname);
 res.sendFile( __dirname + "/public/hmtl" + "01_form.html" );
})
//=======================================================Route
app.get('/', (req, res) => {
 console.log('accueil')
 res.end('<h1>Accueil</h1>')
})

//=======================================================Route /traiter_get
app.get('/traiter_get', function (req, res) {
 // Preparer l'output en format JSON

console.log('la route /traiter_get')

// on utilise l'objet req.query pour récupérer les données GET
 reponse = {
 prenom:req.query.prenom,
 nom:req.query.nom,
 courriel:req.query.courriel,
 telephone:req.query.telephone
 };
console.log(reponse);
 //res.end(JSON.stringify(reponse));

 const fs = require("fs");
 let data = fs.readFileSync('public/data/membres.txt');
console.log(data);
 //data.push(res.end(JSON.stringify(reponse)));

})

//==================================Route :membres
app.get("membres",(req,res)=> {

});

var server = app.listen(8081, function () {
 var host = server.address().address
 var port = server.address().port
 
 console.log("Exemple l'application écoute sur http://%s:%s", host, port)

})