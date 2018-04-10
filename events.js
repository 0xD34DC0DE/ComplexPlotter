function mousePressed(event)
{

	if(mouseX >= 0 && mouseX <= width)
	{
		if(mouseY >= 0 && mouseY <= height)
		{
			state.zooming = true;
			state.standby = false;
			updateDOMTags(2); // Zooming
			mouseClick.start.x = mouseX;
			mouseClick.start.y = mouseY;
			return false;
		}
	}
}

function mouseReleased(event)
{
	if(mouseX >= 0 && mouseX <= width)
	{
		if(mouseY >= 0 && mouseY <= height)
		{
			state.zooming = false;
			state.computing = true;
			state.standby = false;
			state.updatingDOM = true;
			updateDOMTags(3); // Computing

			mouseClick.stop.x = mouseX;
			mouseClick.stop.y = mouseY;

			var mappedStart = pixelToWorld(mouseClick.start.x, mouseClick.start.y);
			var mappedStop = pixelToWorld(mouseClick.stop.x, mouseClick.stop.y);
			zoomToRegion(mappedStart[0], mappedStart[1], mappedStop[0], mappedStop[1]);
		}
	}
}