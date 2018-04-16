function loadDOMTags()
{
	stateTag = document.getElementById("stateTag");
	formulaInputTag = document.getElementById("formulaInputTag");
	coordLTTag = document.getElementById("coordLTTag");
	coordBRTag = document.getElementById("coordBRTag");
	canvasSizeInputTag = document.getElementById("canvasSizeInputTag");
	canvasRegionOverrideInputTag = document.getElementById("regionOverrideInputTag");
}

function updateDOMTags(state)
{
	stateTag.innerHTML = "State: ";
	switch(state)
	{
		case 0:
		stateTag.innerHTML += "Standby...";
		break;
		case 1:
		stateTag.innerHTML += "Plotting...";
		break;
		case 2:
		stateTag.innerHTML += "Zooming...";
		break;
		case 3:
		stateTag.innerHTML += "Computing...";
		break;
		default:
		stateTag.innerHTML += "Unknown State...";
		break;
	}
}

function loadFormula()
{
	formula = math.parse(formulaInputTag.value);
}

function updateCoordTags()
{
	coordLTTag.innerHTML = region.lt.x + "," + region.lt.y;
	coordBRTag.innerHTML = region.br.x + "," + region.br.y;
}

function parseResizeInputTag()
{
	var regx = /(\d+,\d+)/g;
	var newSizeString = canvasSizeInputTag.value;
	newSizeString.match(regx);
	var sizes = newSizeString.split(',');
	width = parseInt(sizes[0]);
    height = parseInt(sizes[1]);
    refreshPlot();
}

function parseRegionOverrideInputTag() 
{
	var regx = /(\d+,\d+):(\d+,\d+)/g;
	var newRegionString = canvasRegionOverrideInputTag.value;
	newRegionString.match(regx);
	var newCoords = newRegionString.split(':');
	var lt = newCoords[0].split(',');
	var br = newCoords[1].split(',');
	region.lt.x = parseInt(lt[0]);
	region.lt.y = parseInt(lt[1]);
	region.br.x = parseInt(br[0]);
	region.br.y = parseInt(br[1]);
	refreshPlot();
}