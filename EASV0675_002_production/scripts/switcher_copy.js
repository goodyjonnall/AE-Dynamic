var langIndex;

var multiLang = 
controllerBox.effect("EN")("Checkbox") +
controllerBox.effect("FR")("Checkbox") +
controllerBox.effect("DE")("Checkbox") +
controllerBox.effect("ES")("Checkbox") +
controllerBox.effect("IT")("Checkbox") +
controllerBox.effect("NL")("Checkbox") +
controllerBox.effect("PT")("Checkbox") ;


if (multiLang >= 2) {

	langIndex = lang.YY;
	
} else if (controllerBox.effect("EN")("Checkbox") == true) {

	langIndex = lang.EN;
	
} else if (controllerBox.effect("FR")("Checkbox") == true) {

	langIndex = lang.FR;
	
} else if (controllerBox.effect("DE")("Checkbox") == true) {

	langIndex = lang.DE;
	
} else if (controllerBox.effect("ES")("Checkbox") == true) {

	langIndex = lang.ES;
	
} else if (controllerBox.effect("IT")("Checkbox") == true) {

	langIndex = lang.IT;
	
} else if (controllerBox.effect("NL")("Checkbox") == true) {

	langIndex = lang.NL;
	
} else if (controllerBox.effect("PT")("Checkbox") == true) {

	langIndex = lang.PT;
	
} else {

	langIndex = lang.XX;
	
};
