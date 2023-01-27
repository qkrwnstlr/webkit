var reset = document.getElementById("ac");
var addtion = document.getElementById("+");
var subtraction = document.getElementById("-");
var multiplication = document.getElementById("*");
var division = document.getElementById("/");
var erase = document.getElementById("<");
var equal = document.getElementById("=");
var nums = document.getElementsByClassName("num");
var display = document.getElementById("display");
var result = 0;
var pushed = "";
var isPushed = false;

reset.addEventListener("click", function () {
	display.value = 0;
	result = 0;
	pushed = "";
	isPushed = false;
});

addtion.addEventListener("click", function () {
	if(pushed == "") {
		result = Number(display.value);
	} else {
		calculation(pushed);
	}
	pushed = this.id;
	isPushed = true;
});

subtraction.addEventListener("click", function () {
	if(pushed == "") {
		result = Number(display.value);
	} else {
		calculation(pushed);
	}
	pushed = this.id;
	isPushed = true;
});

multiplication.addEventListener("click", function () {
	if(pushed == "") {
		result = Number(display.value);
	} else {
		calculation(pushed);
	}
	pushed = this.id;
	isPushed = true;
});

division.addEventListener("click", function () {
	if(pushed == "") {
		result = Number(display.value);
	} else {
		calculation(pushed);
	}
	pushed = this.id;
	isPushed = true;
});

erase.addEventListener("click", function () {
	if(display.value.length == 1) {
		display.value = 0;
	}	else {
		display.value = display.value.substrint(0, display.value.length - 2);
	}
});

equal.addEventListener("click", function () {
	calculation(pushed);
	pushed = "";
	isPushed = false;
});

for(var num of nums) {
	num.addEventListener("click", function () {
		if(display.value == 0) {
			display.value = Number(this.innerText);
		} else {
			if(isPushed) {
				display.value = Number(this.innerText);
				isPushed = false;
			} else {
				display.value += Number(this.innerText);
			}
		}
	});
}

function calculation(value) {
	switch(value) {
		case "+":
      result += Number(display.value);
      break;
		case "-":
      result -= Number(display.value);
      break;
		case "*":
      result *= Number(display.value);
      break;
		case "/":
      result /= Number(display.value);
			break;
		default:
				break;
	}
	if(result < 0) result = -result;
	display.value = result;
}