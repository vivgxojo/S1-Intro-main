compteur = 1;
function ajouter(){
    let item = document.getElementById("desc").value;
    let prix = document.getElementById("valeur").value;     //Ajouter le prix
    let nouveauP = document.createElement("p");             // Créer une balise <p>
    let nouveauSpan = document.createElement("span");
    nouveauP.innerText = item + " : ";                              // Écrire dans le paragraphe
    nouveauSpan.innerText =   prix + "$";
    document.getElementById("maListe").append(nouveauP);   // Ajouter le paragraphe à la liste
    nouveauP.append(nouveauSpan);                                   // mettre le span à la fin du p

    // Mettre à jour le total
    let ancienPrix = document.getElementById("total").innerText;
    let nouveauPrix = +ancienPrix + +prix;                          // +variable : convertir en numérique
    document.getElementById("total").innerText = nouveauPrix;

    //Code non expliqué
    nouveauInput = document.createElement("input");
    nouveauInput.setAttribute("value", item);
    nouveauInput.setAttribute("hidden",true);
    nouveauInput.setAttribute("name", "item "+compteur);
    compteur++;
    document.forms[0].append(nouveauInput);
    //alert("L'item est bien ajouté"); // Pop-up
}

function ajouterEmail(){
    var email = document.getElementById("email").value;
    document.forms[0].action = "mailto:"+email;
}

console.log("Bonjour");