var num1Txt = document.querySelector("#num1");
var operTxt = document.querySelector("#oper");
var num2Txt = document.querySelector("#num2");
var resultTxt = document.querySelector("#result");
var resultBtn = document.querySelector("#resultBtn");

resultBtn.addEventListener("click", calculate);

function calculate() {
	var num1 = Number(num1Txt.value) > Number(num2Txt.value) ? Number(num1Txt.value) : Number(num2Txt.value);
	var num2 = Number(num1Txt.value) > Number(num2Txt.value) ? Number(num2Txt.value) : Number(num1Txt.value);
	var oper = operTxt.value;

	if (oper == "+") {
		result = num1 + num2;
		alert(result);
	} else if (oper == "-") {
		result = num1 - num2;
		alert(result);
	} else if (oper == "*") {
		result = num1 * num2;
		alert(result);
	} else {
		result = num1 / num2;
		alert(result);
	}
}

function alert(result) {
	if (result >= 0) {
		resultTxt.innerHTML = "The result is: " + result;
	} else {
		resultTxt.innerHTML = "The result is: " + (-result);
	}
}
