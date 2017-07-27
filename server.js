// console.log('May Node be with you');
// déclarer l'utilisation du module express
const express = require('express');
// déclarer l'utilisation du module body-parser
const bodyParser= require('body-parser');
// déclarer l'utilisation du module mongodb
const MongoClient = require('mongodb').MongoClient;
var db;

// initilialiser le serveur express
const app = express();

MongoClient.connect('mongodb://localhost:27017', (err, database) => {
  if(err){
  	console.log(err);
  } else {
  	db = database;
  // Mon objet app écoute sur le port 3000
  	app.listen(3000, function() {
    console.log('listening on 3000');
  	}); 
  };
});

var liste = [
 {
   "id":0,
   "nom": "BOITEUX",
   "prenom": "Rémi",
   "javascript": "Non",
   "fav_web": "http://motogp.com/fr",
   "fav_web_why": "Le design est agréable et j’y trouve toutes les infos dont j’ai besoin",
   "fav_app": "WEC (World Endurance Championship)",
   "fav_app_why": "Pour y trouver toutes les infos quand je ne peux pas suivre les courses",
   "before_ifa": "Chef de projets SEM",
   "why_ifa": "Pour acquérir des compétences en développement et mieux comprendre les différents langages",
   "contact_mail": "boiteux.remi@gmail.com"
 },
 {
   "id":1,
   "nom": "DOS SANTOS",
   "prenom": "Christophe",
   "javascript": "Pas d'expérience",
   "fav_web": "behance / themeforest",
   "fav_web_why": "",
   "fav_app": "pas d'appli",
   "fav_app_why": "",
   "before_ifa": "graphiste / webdesigner",
   "why_ifa": "Pour acquérir des compétences en développement intégration",
   "contact_mail": "contact@christopheds.com Www.christopheds.com"
}
]

// toutes les données passées au server seront analysées avant.
app.use(bodyParser.urlencoded({extended: true}));

// console.log("express est initialisé");



/*
app.get('/', (req, res) => {
  res.send('hello world')
});
*/

// Déclaration d'un "route". 
// __dirname est une variable globale de node qui permet de récupèrer le repertoire de travail
app.get('/', (req, res) => {
  res.sendFile( __dirname + '/index.html');
});

// quand il recoit quelque chose à l'url '/quotes'
app.post('/quotes', (req, res) => {
  // j'affiche le contenu de mon tableau "req" dans la console
  console.log(req.body);
  console.log("My name is : " + req.body.nom );
  // je dis au client que c'est ok
  var newUser = {
  	nom : req.body.nom,
  	prenom : req.body.prenom
  };
  liste.push(newUser);
  res.send(200);
});



app.get('/api/liste', (req, res) => {
	res.json(liste);
});


