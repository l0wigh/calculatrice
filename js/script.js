var chiffreUn = 0;
var chiffreDeux = 0;
var resultatCalc = 0;
var chiffreEnCours = "";
var operateur = "";
var resultataff = 0;
var point = 0;

function ecrire(nombre){
	if (resultataff == 1){
		resultataff = 0;
		document.getElementById('textbox').value = nombre;
		chiffreEnCours += nombre;
	}
	else{
		document.getElementById('textbox').value += nombre;
		chiffreEnCours += nombre;
	}
}

function ecrirepoint(){
	if (point == 1){
		console.log("nope");
	}
	else{
		document.getElementById('textbox').value += ".";
		chiffreEnCours += ".";
		point = 1;
	}
}

function supprimerun(){
	var valText = document.getElementById('textbox').value;
	var valTextNew = valText.slice(0, -1);
	document.getElementById('textbox').value = valTextNew;
	chiffreEnCours = valTextNew;
}

function supprimertout(){
	document.getElementById('textbox').value = '';
	document.getElementById('operation').value = '';
	chiffreUn = "";
	chiffreDeux = "";
	chiffreEnCours = "";
	operateur = "";
	point = 0
}

function resultat(){
	chiffreDeux = parseFloat(chiffreEnCours);
	switch (operateur){
		case "+":
			resultatCalc = chiffreUn + chiffreDeux;
			break;
		case "-":
			resultatCalc = chiffreUn - chiffreDeux;
			break;
		case "/":
			resultatCalc = chiffreUn / chiffreDeux;
			break;
		case "x":
			resultatCalc = chiffreUn * chiffreDeux;
			break;
	}
	document.getElementById('textbox').value = resultatCalc;
	chiffreUn = "";
	chiffreDeux = "";
	chiffreEnCours = "";
	resultataff = 1;
	operateur = "";
	point = 0;
}

function operations(ope){
	if (operateur != ""){
		console.log("nope");
	}
	else{
		if (resultataff == 1){
			chiffreUn = parseFloat(document.getElementById('textbox').value);
			resultataff = 0;
		}
		else{
			chiffreUn = parseFloat(chiffreEnCours);
		}
		document.getElementById('textbox').value += ope;
		chiffreEnCours = "";
		operateur = ope;
		point = 0;
	}
}
