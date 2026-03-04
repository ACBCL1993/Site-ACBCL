// Petit script très simple pour afficher un message
// quand on clique sur le bouton "Adhérer maintenant"

const adhesionButton = document.getElementById("adhesionButton");
const adhesionMessage = document.getElementById("adhesionMessage");

if (adhesionButton && adhesionMessage) {
  adhesionButton.addEventListener("click", () => {
    // On affiche le message (enlève la classe "hidden")
    adhesionMessage.classList.remove("hidden");

    // Option : on change le texte du bouton
    adhesionButton.textContent = "Demande envoyée ✔";
    adhesionButton.disabled = true;
  });
}
