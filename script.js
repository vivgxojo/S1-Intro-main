compteur = 1;
function ajouter(){
    var item = document.getElementById("desc").value;
    nouveauP = document.createElement("p");
    nouveauP.innerText = item;
    document.getElementById("maListe").append(nouveauP);

    nouveauInput = document.createElement("input");
    nouveauInput.setAttribute("value", item);
    nouveauInput.setAttribute("hidden",true);
    nouveauInput.setAttribute("name", "item "+compteur);
    compteur++;
    document.forms[0].append(nouveauInput);
    alert("L'item est bien ajouté"); // Pop-up
}

function ajouterEmail(){
    var email = document.getElementById("email").value;
    document.forms[0].action = "mailto:"+email;
}

console.log("Bonjour");