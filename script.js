var isPaused = false;
var num_lignes = 3;
var phrases  = [];

String.prototype.shuffle = function () {
	var a = this.split(""),
	n = a.length;
		
	if (this.includes("'")) {
		var a = this.split("'")[1].split(""),
		n = a.length;
	}
	

	console.log(a);	

    for(var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
		if(j == 0) {
			j = j+1
		}
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
	
	if (this.includes("'")) {
		return this.split("'")[0]+"'"+a.join("");
	} 
	else {
		return a.join("");
	}
}
var num_lignes = prompt("Entrez le nombre de lignes à écrire", "1");

for (var i = 0 ; i < num_lignes ; i++) {
	var phrase = prompt("Entrez la phrase à mélanger...", "Si vous êtes en manque d'inspiration, je peux vous proposer cette phrase.");
	phrases.push(phrase);
}
for (var i = 0 ; i < phrases.length ; i++) {
	
	tab = phrases[i].split(" ");
	res=""
	for (var j = 0 ; j < tab.length ; j++) {
		res = res + tab[j].shuffle()+" ";
	}
	
	var ul = document.getElementById("liste");
	var li = document.createElement("li");
	li.innerHTML=res;
	li.setAttribute("id", "li"+i);
	ul.appendChild(li);
}
//var phrase = "Pardon Cathy pour le retard je suis très confus j'espère que ça ne pose pas de problèmes"

function actualise() {
	if (!isPaused) {
		for (var i = 0 ; i < phrases.length ; i++) {
			
			tab = phrases[i].split(" ");
			res=""
			for (var j = 0 ; j < tab.length ; j++) {
				res = res + tab[j].shuffle()+" ";
			}
			document.getElementById("li"+i).innerHTML = res;
		}
	}
}

function resume() {
	console.log("click");
	if (!isPaused) {
		isPaused = true;
	}
	else {
		isPaused = false;
	}
}
setInterval(actualise, 1000);
