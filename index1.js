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
  } else if (first === true) {
    expression = expression + e;
    resultDiv.innerText = expression;
    prev = Number(expression);
    console.log("here");
    console.log(prev);
    first = false;
  } else if (e === "+" || e === "-" || e === "x" || e === "/") {
    if (op === "") {
      op = e;
      expression = "";
    } else {
      if (op === "+") {
        console.log(prev);
        expression = Number(prev) + Number(expression);
        console.log(expression);
        resultDiv.innerText = expression;
        op = e;
        prev = Number(expression);
        console.log(prev);
        expression = "";
      } else if (op === "-") {
        console.log(prev);
        expression = Number(prev) - Number(expression);
        console.log(expression);
        resultDiv.innerText = expression;
        op = e;
        prev = Number(expression);
        console.log(prev);
        expression = "";
      } else if (op === "x") {
        console.log(prev);
        expression = Number(prev) * Number(expression);
        console.log(expression);
        resultDiv.innerText = expression;
        op = e;
        prev = Number(expression);
        console.log(prev);
        expression = "";
      } else if (op === "/") {
        console.log(prev);
        expression = Number(prev) / Number(expression);
        console.log(expression);
        resultDiv.innerText = expression;
        op = e;
        prev = Number(expression);
        console.log(prev);
        expression = "";
      }
    }
  } else if (e === "del") {
    expression = resultDiv.innerText;
    if (expression === "Infinity") {
      expression = "";
      resultDiv.innerText = expression;
      return;
    }
    expression = expression.slice(0, expression.length - 1);
    resultDiv.innerText = expression;
  } else {
    expression = expression + e;
    resultDiv.innerText = expression;
  }
}
