var chiffreUn = 0;
var chiffreDeux = 0;
var resultatCalc = 0;
var chiffreEnCours = "";
var operateur;
var resultataff = 0;

function ecrire(nombre){
	if (resultataff == 1){
		resultataff = 0;
		document.getElementById('textbox').value = nombre;
		chiffreEnCours += nombre;
	}
	else{
		document.getElementById('textbox').value += nombre;
		chiffreEnCours = chiffreEnCours + nombre;
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
		case "X":
			resultatCalc = chiffreUn * chiffreDeux;
			break;
	}
	document.getElementById('textbox').value = resultatCalc;
	chiffreUn = "";
	chiffreDeux = "";
	chiffreEnCours = "";
	resultataff = 1;
}

function operations(ope){
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
}
