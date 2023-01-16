function ajouter(){
    var item = document.getElementById("desc").value;
    document.getElementById("maListe").append(item);
    alert("L'item est bien ajouté"); // Pop-up
}

console.log("Bonjour");