var chiffreUn = 0;
var chiffreDeux = 0;
var resultatCalc = 0;

function ecrire(nombre){
	document.getElementById('textbox').value += nombre;
}

function supprimerun(){
	var valText = document.getElementById('textbox').value;
	var valTextNew = valText.slice(0, -1);
	document.getElementById('textbox').value = valTextNew;
}

function supprimertout(){
	document.getElementById('textbox').value = '';
	document.getElementById('operation').value = '';
}

function resultat(){
	chiffreDeux = parseFloat(document.getElementById('textbox').value);
	switch (document.getElementById('operation').value){
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
	document.getElementById('operation').value = '';
}

function operations(ope){
	chiffreUn = parseFloat(document.getElementById('textbox').value);
	document.getElementById('textbox').value = '';
	document.getElementById('operation').value = ope;
}
