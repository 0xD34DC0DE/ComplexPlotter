function loadDOMTags()
{
	stateTag = document.getElementById("stateTag");
	formulaInputTag = document.getElementById("formulaInputTag");
	coordLTTag = document.getElementById("coordLTTag");
	coordBRTag = document.getElementById("coordBRTag");
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