function calculateVAT() {
  const AmountLabel = document.querySelector(".AmountLabel");
  const netAmountLabel = document.querySelector(".netAmountLabel");
  const netAmountInput = document.getElementById("netAmount");
  const highVAT = document.getElementById("highVAT");
  const addVAT = document.getElementById("addVAT");
  const subVAT = document.getElementById("subVAT");
  const vatAmountOutput = document.getElementById("vatAmountOutput");
  const amountOutput = document.getElementById("AmountOutput");

  // Konvertieren von String zu Number
  const netAmount = Number(netAmountInput.value);

  // Entweder 19% oder 7% - je nach ausgewähltem Button
  const vatRate = highVAT.checked ? 0.19 : 0.07;

  // 1 bzw -1 um unten bei vatAmount mit -1 bzw 1 zu multiplizieren damit negatives bzw. positives Ergebnis herauskommen kann und es für den finalen Betrag entweder addiert ++ oder subtrahiert +- wird.
  const vatValue = addVAT.checked ? 1 : -1;

  // Hier wird der MehrwertsteuerBetrag ermittlelt. Dieser kann Negativ oder Positiv sein (je nachdem ob vatValue true oder false ist) Der Mehrwertsteuerbetrag ist = Netto mal MehrwertsteuerProzentsatz (Kann Negativ oder Positiv sein)
  const vatAmount = netAmount * vatRate * vatValue;
  //Netto + Steuern bzw. Brutto - Steuern (je nach Auswahl) um den finalen Betrag zu errechnen.
  const finalAmount = netAmount + vatAmount;

  // Output der Ergebnisse im HTML - auf zwei Nachkommastellen begrenzt mit toFixed
  vatAmountOutput.textContent = "€" + vatAmount.toFixed(2);
  amountOutput.textContent = "€" + finalAmount.toFixed(2);

  //Funktion zum Aktualisieren der Texte (Je nach Auswahl)

  const updateLabels = () => {
    AmountLabel.textContent = addVAT.checked
      ? "Gross Amount (final price)"
      : "Net Amount";

    netAmountLabel.textContent = addVAT.checked
      ? "Net Amount in Euro"
      : "Gross Amount in Euro";
  };

  // Event listeners für die Radio Buttons, er guckt nach dem "change" event
  addVAT.addEventListener("change", updateLabels);
  subVAT.addEventListener("change", updateLabels);
}

// Aufrufen der Funktion damit sich die Labels auch ändern wenn noch keine Beträge eingegeben worden sind oder submittet worden ist!
calculateVAT();
