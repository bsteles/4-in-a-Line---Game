vezDoJogador = 1;
vezInicio = 1;
var point = new Array(42);
pontosP1 = 0;
pontosP2 = 0;
numJogadas = 42;

window.onload = function() {
	carregaImagens();
	zeraJogadas();
};

function carregaImagens() {
	var y = document.getElementById("tabuleiro");
	var x = y.getElementsByTagName("img");
	for (i = 0; i < x.length; i++)
		x[i].src = "img/33.jpg";
	document.getElementById("p1").innerHTML = pontosP1;
	document.getElementById("p2").innerHTML = pontosP2;
}

function zeraJogadas() {
	var x = document.getElementsByTagName("img");
	for (i = 0; i < point.length; i++) {
		point[i] = 0;
	}
}
function novoJogo() {
	zeraJogadas();
	carregaImagens();
	vezDoJogador = 1;
	pontosP1 = 0;
	pontosP2 = 0;
	numJogadas = 42;
	document.getElementById("p1").innerHTML = 0;
	document.getElementById("p2").innerHTML = 0;
}

function novaPartida() {
	zeraJogadas();
	carregaImagens();
	vezInicio = vezInicio == 1 ? 2 : 1;
	vezDoJogador = vezInicio;
	numJogadas = 42;
}
function jogar(num) {

	var x = document.getElementsByTagName("img");
	// descobre a col clicada
	for (j = 0; j <= 6; j++)
		for (i = 35 + j; i >= 0; i -= 7) {// percorre todas linhas da coluna
			if (num == i) {// para verificar se é a cluna clicada se true
				// procurar cell vaga
				for (i = 35 + j; i >= 0; i -= 7) {// //percorre todas l da c
					if (point[i] == 0) {// para saber se ha celula vaga a partir
						// da ultima

						if (vezDoJogador == 1) {
							play(0);
							point[i] = 1;// se houver seta com o numero do
							// jogador
							x[i].src = "img/12.jpg";// e pinta com a cor do
							// jogador
							numJogadas--;
							if (fim()) {
								play(1);
								pontosP1++;
								document.getElementById("p1").innerHTML = pontosP1;
							} else
								vezDoJogador = 2;

						} else if (vezDoJogador == 2) {
							play(0);
							point[i] = 2;// se houver seta com o numero do
							// jogador
							x[i].src = "img/22.jpg";// e pinta com a cor do
							// jogador
							numJogadas--;
							if (fim()) {
								pontosP2++;
								document.getElementById("p2").innerHTML = pontosP2;
							} else
								vezDoJogador = 1;
						}
						return;
					}
				}
			}
		}
}

function fim() {
	if (vezDoJogador != 0)
		a = sHorizontal();
	if (vezDoJogador != 0)
		a = sVertical();
	if (vezDoJogador != 0)
		a = sDiagonal1();
	if (vezDoJogador != 0)
		a = sDiagonal2();
	if (vezDoJogador != 0 && numJogadas == 0)
		empate();
	return a;
}

function empate() {
	play(2);
	alert("Jogo empatado!!");
	vezDoJogador = 0;
}
function sHorizontal() {
	// alert("entrou horiz");
	for (j = 0; j <= 35; j += 7) {// desloca entre linhas
		for (i = j; i <= 3 + j; i++) {// desloca intervalos pelas 4 primeira
			// colunas
			if (point[i] != 0)
				if (point[i] == point[i + 1] && point[i + 1] == point[i + 2]
						&& point[i + 2] == point[i + 3]) {
					play(1);
					alert("Jogador " + vezDoJogador + " venceu!!");
					vezDoJogador = 0;
					return true;
				}
		}
	}
	return false;
}

function sVertical() {
	// alert("entrou horiz");
	for (j = 0; j <= 14; j += 7) {// desloca entre linhas
		for (i = j; i <= 6 + j; i++) {// desloca intervalos pelas 4 primeira
			// colunas
			if (point[i] != 0)
				if (point[i] == point[i + 7] && point[i + 7] == point[i + 14]
						&& point[i + 14] == point[i + 21]) {
					play(1);
					alert("Jogador " + vezDoJogador + " venceu!!");
					vezDoJogador = 0;
					return true;
				}
		}
	}
	return false;
}
function sDiagonal2() {
	for (j = 3; j <= 17; j += 7) {// desloca entre linhas
		for (i = j; i <= 3 + j; i++) {// desloca intervalos pelas 4 primeira
			// colunas
			if (point[i] != 0)
				if (point[i] == point[i + 6] && point[i + 6] == point[i + 12]
						&& point[i + 12] == point[i + 18]) {
					play(1);
					alert("Jogador " + vezDoJogador + " venceu!!");
					vezDoJogador = 0;
					return true;
				}
		}
	}
	return false;
}
function sDiagonal1() {
	for (j = 0; j <= 14; j += 7) {// desloca entre linhas
		for (i = j; i <= 3 + j; i++) {// desloca intervalos pelas 4 primeira
			// colunas
			if (point[i] != 0)
				if (point[i] == point[i + 8] && point[i + 8] == point[i + 16]
						&& point[i + 16] == point[i + 24]) {
					play(1);
					alert("Jogador " + vezDoJogador + " venceu!!");
					vezDoJogador = 0;
					return true;
				}
		}
	}
	return false;
}
function play(m) {
	if (m == 0)
		document.getElementById('click').play();
	else if (m == 1)
		document.getElementById('vitoria').play();
	else if (m == 2)
		document.getElementById('empate').play();
}
