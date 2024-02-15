const resultDiv = document.getElementById("result");

let expression = "";
let prev = 0;
let curr;
let op = "";
let first = true;
function clicked(e) {
  if (e === "C") {
    expression = "";
    prev = 0;
    first = true;
    resultDiv.innerText = expression;
    return;
  } else if (e === ".") {
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
  // else if (first === true) {
  //   if (!(e === "+" || e === "-" || e === "x" || e === "/" || e === "±")) {
  //     prev = Number(expression);
  //   }
  // }
  else if (e === "+" || e === "-" || e === "x" || e === "/") {
    if (op === "") {
      op = e;
      expression = "";
    } else {
      if (op === "+") {
        expression = Number(prev) + Number(expression);
        resultDiv.innerText = expression;
        op = e;
        expression = "";
      } else if (op === "-") {
        expression = Number(prev) - Number(expression);
        resultDiv.innerText = expression;
        op = e;
        expression = "";
      } else if (op === "x") {
        expression = Number(prev) * Number(expression);
        resultDiv.innerText = expression;
        op = e;
        expression = "";
      } else if (op === "/") {
        expression = Number(prev) / Number(expression);
        resultDiv.innerText = expression;
        op = e;
        expression = "";
      }
    }
  } else if (e === "del") {
    expression = expression.slice(0, expression.length - 1);
    resultDiv.innerText = expression;
  } else {
    expression = expression + e;
    resultDiv.innerText = expression;
  }
}
