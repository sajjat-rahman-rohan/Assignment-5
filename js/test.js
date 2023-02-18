// // fourth card
// document
//   .getElementById("rhombus-card-btn")
//   .addEventListener("click", function () {
//     //   get the data from html using id

//     serial += 1;

//     const rhombusShapeName = document.getElementById(
//       "rhombus-shape-title"
//     ).innerText;

//     const rhombusFirstInput = document.getElementById(
//       "rhombus-first-input-field"
//     ).value;
//     const rhombusSecondInput = document.getElementById(
//       "rhombus-second-input-field"
//     ).value;

//     if (
//       rhombusFirstInput == "" ||
//       rhombusSecondInput == "" ||
//       rhombusFirstInput <= 0 ||
//       rhombusSecondInput <= 0 ||
//       typeof rhombusFirstInput !== "string" ||
//       typeof rhombusSecondInput !== "string"
//     ) {
//       return alert("please enter any valid number");
//     }

//     const rhombusTotalArea =
//       0.5 * parseInt(rhombusFirstInput) * parseInt(rhombusSecondInput);

//     // show displayData
//     displayData(rhombusShapeName, rhombusTotalArea);
//   });

// // fiveth card
// document
//   .getElementById("pentagon-card-btn")
//   .addEventListener("click", function () {
//     //   get the data from html using id

//     serial += 1;

//     const pentagonShapeName = document.getElementById(
//       "pentagon-shape-title"
//     ).innerText;

//     const pentagonFirstInput = document.getElementById(
//       "pentagon-first-input-field"
//     ).value;
//     const pentagonSecondInput = document.getElementById(
//       "pentagon-second-input-field"
//     ).value;

//     if (
//       pentagonFirstInput == "" ||
//       pentagonSecondInput == "" ||
//       pentagonFirstInput <= 0 ||
//       pentagonSecondInput <= 0 ||
//       typeof pentagonFirstInput !== "string" ||
//       typeof pentagonSecondInput !== "string"
//     ) {
//       return alert("please enter any valid number");
//     }

//     const pentagonTotalArea =
//       0.5 * parseInt(pentagonFirstInput) * parseInt(pentagonSecondInput);

//     // show displayData
//     displayData(pentagonShapeName, pentagonTotalArea);
//   });

// // sixth card
// document
//   .getElementById("ellipse-card-btn")
//   .addEventListener("click", function () {
//     //   get the data from html using id

//     serial += 1;

//     const ellipseShapeName = document.getElementById(
//       "ellipse-shape-title"
//     ).innerText;

//     const ellipseFirstInput = document.getElementById(
//       "ellipse-first-input-field"
//     ).value;
//     const ellipseSecondInput = document.getElementById(
//       "ellipse-second-input-field"
//     ).value;

//     if (
//       ellipseFirstInput == "" ||
//       ellipseSecondInput == "" ||
//       ellipseFirstInput <= 0 ||
//       ellipseSecondInput <= 0 ||
//       typeof ellipseFirstInput !== "string" ||
//       typeof ellipseSecondInput !== "string"
//     ) {
//       return alert("please enter any valid number");
//     }

//     const ellipseTotalArea =
//       0.5 * parseInt(ellipseFirstInput) * parseInt(ellipseSecondInput);

//     // show displayData
//     displayData(ellipseShapeName, ellipseTotalArea);
//   });
