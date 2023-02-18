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

// common function to get bg color
// function randomColor() {
//   let color = [];
//   for (let i = 0; i < 3; i++) {
//     color.push(Math.floor(Math.random() * 256));
//   }
//   return "rgb(" + color.join(", ") + ")";
// }
