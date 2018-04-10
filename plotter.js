

function setup()
{
	canvas = createCanvas(width, height);
	colorMode(HSB, 1.0);

	plot = createGraphics(width, height);
	plot.colorMode(HSB, 1.0);
	noFill();

	// Move the canvas so it’s inside our <div id="canvasHolder">.
  	canvas.parent('canvasHolder');

	loadDOMTags();
	loadFormula();
	updateDOMTags(3);
	compute();
	updateDOMTags(0);
	updateCoordTags();
}

function draw()
{

	if(state.standby == true)
	{
		if(state.updatingDOM == true) // avoid unnecessary DOM tree updates
		{
			state.updatingDOM = false;
			updateDOMTags(0); // Standby
		}
	}

	if(state.plotting == true)
	{
		background(0);
		image(plot, 0, 0);

		state.plotting = false;
		state.standby = true;
		state.updatingDOM = true;
	}

	if(state.zooming == true)
	{
		background(0);
		image(plot, 0, 0);
		stroke(1.0);
		strokeWeight(2);
		rect(mouseClick.start.x, mouseClick.start.y, mouseX - mouseClick.start.x, mouseY - mouseClick.start.y);
	}

	if(state.computing == true)
	{

		if(state.updatingDOM == false) // Need to skip some frames to let the DOM tree update otherwhise the "Computing" state won't show
		{
			compute(); // Make it asynchronous
			
			state.computing = false;
			state.plotting = true;
			state.standby = true;
			state.updatingDOM = true;
			updateDOMTags(1); // Plotting
			updateCoordTags();

		}

		if(state.updatingDOM == true)  // The frame is skipped next frame we can compute
		{ 
			state.updatingDOM = false; 
		}
	}


}