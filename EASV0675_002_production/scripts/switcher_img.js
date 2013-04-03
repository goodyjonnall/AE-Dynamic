var langName;

var controllerBox = comp("002_Controller").layer("Controller");

var multiLang = 
controllerBox.effect("EN")("Checkbox") +
controllerBox.effect("FR")("Checkbox") +
controllerBox.effect("DE")("Checkbox") +
controllerBox.effect("ES")("Checkbox") +
controllerBox.effect("IT")("Checkbox") +
controllerBox.effect("NL")("Checkbox") +
controllerBox.effect("PT")("Checkbox") ;


if (multiLang >= 2) {

	langName = "none";
	
} else if (controllerBox.effect("EN")("Checkbox") == true) {

	langName = "EN";
	
} else if (controllerBox.effect("FR")("Checkbox") == true) {

	langName = "FR";
	
} else if (controllerBox.effect("DE")("Checkbox") == true) {

	langName = "DE";
	
} else if (controllerBox.effect("ES")("Checkbox") == true) {

	langName = "ES";
	
} else if (controllerBox.effect("IT")("Checkbox") == true) {

	langName = "IT";
	
} else if (controllerBox.effect("NL")("Checkbox") == true) {

	langName = "NL";
	
} else if (controllerBox.effect("PT")("Checkbox") == true) {

	langName = "PT";
	
} else {

	langName = "none";
	
};

var OP;

if (thisLayer.name == langName) {
	OP = 100;
} else {
	OP = 0;
};

[OP]