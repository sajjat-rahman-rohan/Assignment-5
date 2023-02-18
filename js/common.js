// common  function to display data
function displayData(triangleShapeName, triangleTotalArea) {
  //   show the data using function
  const container = document.getElementById("table-container");
  const tr = document.createElement("tr");
  tr.innerHTML = `
          <td>${serial}.</td>
          <td>${triangleShapeName}</td>
          <td>${triangleTotalArea}cm<sup>2</sup></td>
          <td><button class="metter-btn mt-1 mb-1">Covert to m<sup>2</sup></button></td>
        `;

  container.appendChild(tr);
}

// common function to get data using getElementById method
function getData(shapeTitle, inputFieldOne, inputFieldTow) {
  // get the data from htm using id

  const shapeName = document.getElementById(shapeTitle).innerText;
  const firstInput = document.getElementById(inputFieldOne).value;
  const secondInput = document.getElementById(inputFieldTow).value;

  const shape = {
    shapeName: shapeName,
    firstInput: firstInput,
    secondInput: secondInput,
  };
  return shape;
}
