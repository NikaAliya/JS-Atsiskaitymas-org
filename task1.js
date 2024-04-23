document
  .getElementById("weightForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const kg = parseFloat(document.getElementById("kgInput").value);

    const lb = kg * 2.2046;
    const g = kg / 0.001;
    const oz = kg * 35.274;

    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = `
      <p><strong>Svorio konvertavimas:</strong></p>
      <ul>
        <li>${kg} kilogramu yra ${lb.toFixed(2)} svaru</li>
        <li>${kg} kilogramu yra ${g.toFixed(2)} gramu</li>
        <li>${kg} kilogramu yra ${oz.toFixed(2)} unciju</li>
      </ul>
    `;
  });
