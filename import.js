/* 
	import.js

	Import d'un fichier json sous forme de DataBase de type MondoDB

*/

// j'importe ma lib mongoose
var mongoose = require('mongoose');
var srcListe = require('./data/liste.js');
// je crée mon schema
var eleveSchema = mongoose.Schema({
    "nom": String, 
    "prenom": String, 
    "javascript": String, 
    "fav_web": String, 
    "fav_web_why": String, 
    "fav_app": String, 
    "fav_app_why": String, 
    "before_ifa": String, 
    "why_ifa": String, 
    "contact_mail": String, 
});
// je crée un model et j'attache le schema ci dessus
var Eleve = mongoose.model('Eleves', eleveSchema);

// je me connecte a la db
var promise = mongoose.connect('mongodb://localhost:27017/ifa', {
  useMongoClient: true,
});
// quand la connection est réussie
promise.then(function(db) {

	console.log('db.connected');
	console.log(db);
	console.log(srcListe);
	
	// console.log(db);
	// je crée un nouvel eleve
	//var test = new Eleve({"nom" : 'leo'});
	// je le save en db
	//test.save(function(err, eleve){
	//	if(err){
	//		return console.log(err);
	//	}
	//	else{
	//		console.log("eleve success");
	//		console.log(eleve);
	//	}
	//}) */

	// Parcours du fichier source pour import dans la bdd
	srcListe.forEach(function(eleveSrc){
		console.log(eleveSrc);

		var eleveToSave = new Eleve(eleveSrc);

		eleveToSave.save(function(err, success){
			if(err){
				return console.log(err);
			}
			else{
				console.log(success);
			}
		});
	})
});
console.log(srcListe);