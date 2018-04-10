function zoomToRegion(ltx, lty, brx, bry)
{
	// The ternary operators are used to make sure lt is smaller than br
	// if not, they are swapped (only the coordiante that matters)
	region.lt.x = (ltx < brx) ? ltx : brx;
	region.lt.y = (lty < bry) ? lty : bry;
	region.br.x = (ltx < brx) ? brx : lty;
	region.br.y = (lty < bry) ? bry : lty;
}

function pixelToWorld(x, y) {
	x = map(x, 0.0, width, region.lt.x, region.br.x);
	y = map(y, 0.0, height, region.lt.y, region.br.y);
	return [x, y];
}

function worldToPixel(x, y) {
	x = map(x, region.lt.x, region.br.x, 0.0, width);
	y = map(y, region.lt.y, region.br.y, 0.0, height);
	return [x, y];
}

function compute()
{
	var coords = [2];
	var val;
	var complx;
	for(y = 0; y != height; y++)
	{
		for(x = 0; x != width; x++)
		{
			coords = pixelToWorld(x, y);
			complx = math.complex(formula.eval({z: math.complex(coords[0], coords[1])}));
			val = norm(complx.toPolar().phi, -PI, PI, 0.0, 0.5);
			plot.set(x, y, color(val, 1.0, 1.0));
		}
	}
	plot.updatePixels();
}

function refreshPlot()
{
	state.computing = true;
	state.standby = false;
	state.updatingDOM = true;
	loadFormula();
	updateDOMTags(3);
	compute();
}