# ComplexPlotter
A javascript based complex function plotter

How to use:

click and drag into the plot to create a region to zoom to.

Enter a formula into the textbox and click plot to generate the plot for that formula

To resize the canvas enter a new resolution in the textbox beside the resize button in the format '1234,1234'
and click on the resize button. The plot will automatically resize itself and recompute with the appropriate resolution
(Warning no bounds are defined on the resolution so if you enter something to big, expect the browser to hang)


To override the current rendering region, use the format 1234,1234:1234,1234 wich represent the top left corner and the bottom righ corner, no floating point only integers
