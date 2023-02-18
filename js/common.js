// common  function to display data
function displayData(triangleShapeName, triangleTotalArea) {
  //   show the data using function
  const container = document.getElementById("table-container");
  const tr = document.createElement("tr");
  tr.innerHTML = `
          <td>${serial}.</td>
          <td>${triangleShapeName}</td>
          <td>${triangleTotalArea}cm<sup>2</sup></td>
          <button class="metter-btn">Covert to m<sup>2</sup></button>
        `;

  container.appendChild(tr);
}

function getAllData() {
  const peraShapeName = document.getElementById("pera-shape-title").innerText;

  const peraFirstInput = document.getElementById(
    "pera-first-input-field"
  ).value;
  const peraSecondInput = document.getElementById(
    "pera-second-input-field"
  ).value;
}
