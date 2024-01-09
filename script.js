compteur = 4; //Variable globale
function ajouter(){
    let item = document.getElementById("desc").value;   //Récupérer la description
    let prix = document.getElementById("valeur").value;     //Récupérer le prix
    let nouveauP = document.createElement("p");  // Créer une balise <p>
    let nouveauSpan = document.createElement("span"); // Créer une balise span
    nouveauP.innerText = item + " : ";     // Écrire dans le paragraphe
    nouveauSpan.innerText =   prix + "$";
    nouveauP.append(nouveauSpan);         // mettre le span à la fin du p
    document.getElementById("maListe").append(nouveauP);   // Ajouter le paragraphe à la liste

    // Mettre à jour le total
    let total = document.getElementById("total")
    let ancienPrix = total.innerText;
    let nouveauPrix = +ancienPrix + +prix;   // +variable : convertir en numérique
    total.innerText = nouveauPrix;

    //Créer des nouveaux input hidden dans le formulaire pour envoyer par courriel
    nouveauInput = document.createElement("input");
    nouveauInput.setAttribute("hidden",true);
    nouveauInput.setAttribute("name", "Item_"+compteur);
    nouveauInput.setAttribute("value", item);
    document.forms[0].append(nouveauInput);
    compteur++;
    //alert("L'item est bien ajouté"); // Pop-up
}

function ajouterEmail(){
    var email = document.getElementById("email").value;
    document.forms[0].action = "mailto:"+email;
}

function effacer(){
    document.forms[0].action = "";
}

console.log("Bonjour");