var width = 2**8;
var height = 2**8;


var halfWidth= width / 2.0;
var halfHeight = height / 2.0;

var canvas;
var plot;

var mouseClick = {
	start: { x: 0, y: 0 },
	stop: { x: 0, y: 0 }
};

var region = {
	lt: { x: -halfWidth, y: -halfHeight }, // Left top
	br: { x: halfWidth, y: halfHeight }, // Bottom right
};

var state = {
	plotting: true, // True for initial drawing
	zooming: false,
	computing: false,
	updatingDOM: false, // Needed when the DOM tree update needs a delay to refresh itself before computation
	standby: false,
};

var stateTag;
var formulaInputTag;
var coordLTTag;
var coordBRTag;
var canvasSizeInputTag;

var zDef = math.compile("z = x + (y * i)"); // Complex number
var formula;