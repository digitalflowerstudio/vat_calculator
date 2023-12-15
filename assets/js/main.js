function calculateVAT() {
  const AmountLabel = document.querySelector(".AmountLabel");
  const netAmountLabel = document.querySelector(".netAmountLabel");
  const netAmountInput = document.getElementById("netAmount");
  const highVAT = document.getElementById("highVAT");
  const addVAT = document.getElementById("addVAT");
  const subVAT = document.getElementById("subVAT");
  const vatAmountOutput = document.getElementById("vatAmountOutput");

  // Was kostet das produkt netto bzw brutto
  const amountOutput = document.getElementById("AmountOutput");

  // Konvertieren von String zu Number
  const netAmount = Number(netAmountInput.value);

  // Entweder 19% oder 7% - je nach ausgewähltem Button
  const vatRate = highVAT.checked ? 0.19 : 0.07;

  // 1 bzw -1 um unten bei vatAmount mit -1 bzw 1 zu multiplizieren damit ein minus bzw + vor das ergebnis gesetzt wird und es trotzdem noch eine Number bleibt, alternativ könnte man auch einen string mit minus oder plus davor
  const addSub = addVAT.checked ? 1 : -1;

  // Wie oben erwähnt: Hier wird nochmal mit addSubRadio multipliziert damit wir ein minus oder plus Betrag sehen und am Ende auch der richtige Betrag steht!
  const vatAmount = netAmount * vatRate * addSub; //Mehrwertsteuerbetrag ist = Netto mal MehrwertsteuerProzentsatz (Kann Negativ oder Positiv sein)
  const grossAmount = netAmount + vatAmount; //Netto + Steuern bzw. Brutto - Steuern (je nach Auswahl)

  // Output der Ergebnisse im HTML - auf zwei Nachkommastellen begrenzt mit toFixed
  vatAmountOutput.textContent = "€" + vatAmount.toFixed(2);
  amountOutput.textContent = "€" + grossAmount.toFixed(2);

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
