var calcButton = document.getElementById("calcButton");

function onButtonClick() {
	var num1 = parseFloat(document.getElementById("num1").value);
	var den1 = parseFloat(document.getElementById("den1").value);
	var num2 = parseFloat(document.getElementById("num2").value);
	var den2 = parseFloat(document.getElementById("den2").value);
	var operator = document.getElementById("operator").value;
	var result;

	if (!num1) {
		document.getElementById("eText").textContent = "Please insert value on numerator 1"; 
		return null;
	} else if (!den1) {
		document.getElementById("eText").textContent = "Please insert value on denominator 1"; 
		return null;
	} else if (!num2) {
		document.getElementById("eText").textContent = "Please insert value on numerator 2"; 
		return null;
	} else if (!den2) {
		document.getElementById("eText").textContent = "Please insert value on denominator 2"; 
		return null;
	} else if (!operator) {
		document.getElementById("eText").textContent = "Please pick an operator"; 
		return null;
	} else {
		if (operator === "plus") {
			document.getElementById("rText").innerHTML = "Question : " + num1 + "/" + den1 + " + " + num2 + "/" + den2 + "<br>";  
		    result = (num1 / den1) + (num2 / den2);
		} else if (operator === "min") {
			document.getElementById("rText").innerHTML = "Question : " + num1 + "/" + den1 + " - " + num2 + "/" + den2 + "<br>";  
		    result = (num1 / den1) - (num2 / den2);
		} else if (operator === "div") {
			document.getElementById("rText").innerHTML = "Question : " + num1 + "/" + den1 + " / " + num2 + "/" + den2 + "<br>";   
		    result = (num1 / den1) / (num2 / den2);
		} else {
			document.getElementById("rText").innerHTML = "Question : " + num1 + "/" + den1 + " * " + num2 + "/" + den2 + "<br>";  
		    result = (num1 / den1) * (num2 / den2);
		}
		document.getElementById("rText").innerHTML += "Result : " + result;  
	}
}
calcButton.addEventListener("click", onButtonClick);