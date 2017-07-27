function processRequest(event){
	console.log(event);
	console.log(marequete.readyState);
	console.log(marequete.status);
	// console.log(event);
	
	if(marequete.readyState == 4 && marequete.status == 200){
		// var mareponse = marequete.response;
		var mareponseText = marequete.responseText;
		mareponseText = JSON.parse(mareponseText);
		
		
	}

}

// je crée mon objet requete 
var marequete = new XMLHttpRequest();
// j'ouvre une requete get
marequete.open('GET', "http://localhost:3000/api/liste", true);
// je lanche ma requete
marequete.send();

// on écoute ce qu'il se passe
marequete.addEventListener("readystatechange", processRequest, false);
