function calculerMargeBeneficiaire(cout, vente) {
  return vente - cout;
}

document.getElementById("calculer").addEventListener("click", function() {
  const cout = parseFloat(document.getElementById("cout").value);
  const vente = parseFloat(document.getElementById("vente").value);
  const resultatDiv = document.getElementById("resultat");

  if (isNaN(cout) || isNaN(vente)) {
    resultatDiv.textContent = "Veuillez entrer des valeurs valides.";
    resultatDiv.style.color = "#e74c3c";
    return;
  }

  const marge = calculerMargeBeneficiaire(cout, vente);
  let message = "";

  if (marge > 0) {
    message = "Bonne nouvelle ! Vous êtes bénéficiaire.";
    resultatDiv.style.color = "#27ae60";
  } else if (marge === 0) {
    message = "Votre marge est nulle.";
    resultatDiv.style.color = "#f39c12";
  } else {
    message = "Attention, vous êtes en perte.";
    resultatDiv.style.color = "#e74c3c";
  }

  resultatDiv.textContent = `Marge : ${marge} FCFA. ${message}`;
});
