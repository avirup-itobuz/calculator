const resultDiv = document.getElementById("result");

let expression = "";

function clicked(e) {
  let flag = 0;
  if (e === "C") {
    localStorage.setItem("prevVal", JSON.stringify(0));
    localStorage.setItem("currVal", JSON.stringify(0));
    localStorage.setItem("op", JSON.stringify("first"));
    expression = "";
    resultDiv.innerText = expression;
    return;
  }
  if (e === ".") {
    flag = 0;
    for (let i = 0; i < expression.length; i++) {
      if (expression.charAt(i) === ".") {
        flag = 1;
      }
    }
    if (flag === 1) return;
    else {
      expression = expression + ".";
      resultDiv.innerText = expression;
      return;
    }
  }
  if (e === "%") {
    expression = (parseFloat(expression) / 100.0).toFixed(2);
    resultDiv.innerText = expression;
    return;
  }
  if (e === "+" || e === "-" || e === "x" || e === "/") {
    console.log("press");
    let prevVal = JSON.parse(localStorage.getItem("prevVal"));
    let currVal = JSON.parse(localStorage.getItem("currVal"));
    localStorage.setItem("prevVal", JSON.stringify(currVal));
    localStorage.setItem("currVal", JSON.stringify(0));

    if (e === "+") {
      expression = Number(prevVal) + Number(expression);
      localStorage.setItem("prevVal", JSON.stringify(expression));
      resultDiv.innerText = expression;
      expression = "";
      localStorage.setItem("op", JSON.stringify(e));
    } else if (e === "-") {
      expression = Number(prevVal) - Number(expression);
      localStorage.setItem("prevVal", JSON.stringify(expression));
      resultDiv.innerText = expression;
      expression = "";
      localStorage.setItem("op", JSON.stringify(e));
    } else if (e === "x") {
      console.log("x");
      expression = Number(prevVal) * Number(expression);
      localStorage.setItem("prevVal", JSON.stringify(expression));
      resultDiv.innerText = expression;
      expression = "";
      localStorage.setItem("op", JSON.stringify(e));
    } else if (e === "/") {
      expression = Number(prevVal) / Number(expression);
      localStorage.setItem("prevVal", JSON.stringify(expression));
      resultDiv.innerText = expression;
      expression = "";
      localStorage.setItem("op", JSON.stringify(e));
    }
  } else {
    expression = expression + e;
    localStorage.setItem("currVal", JSON.stringify(expression));
    resultDiv.innerText = expression;
  }
}
// function clicked(e) {
//   if (e === "C") {
//     expression = "";
//     resultDiv.innerText = expression;
//     return;
//   } else if (e === ".") {
//     flag = 0;
//     for (let i = 0; i < expression.length; i++) {
//       if (expression.charAt(i) === ".") {
//         flag = 1;
//       }
//     }
//     if (flag === 1) return;
//     else {
//         if (Number.isInteger()) expression = expression + ".";
//       resultDiv.innerText = expression;
//       return;
//     }
//   } else if (e === "del") {
//     expression = expression.slice(0, expression.length - 1);
//     resultDiv.innerText = expression;
//     return;
//   } else {
//     expression = expression + e;
//     resultDiv.innerText = expression;
//   }
// }

// if (!localStorage.getItem("prevVal"))
//   localStorage.setItem("prevVal", JSON.stringify("0"));
// if (!localStorage.getItem("currVal"))
//   localStorage.setItem("currVal", JSON.stringify("0"));
// if (!localStorage.getItem("op"))
//   localStorage.setItem("op", JSON.stringify("first"));
