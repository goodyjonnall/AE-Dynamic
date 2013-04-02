

/*   NUTCRACKER   */

importValue = /*SLIDER*/;
var keyFrameValue = Math.floor(importValue);
var thisValue = thisLayer.index;
var totalFrames = thisComp.numLayers;
var thisOpacity;

	if (keyFrameValue == thisValue) {
		thisOpacity = 100;
		} else {
		thisOpacity = 0;
		};
		
	
/*   DISC   */
	
importValue = /*SLIDER*/;
var keyFrameValue = Math.floor(importValue);
var thisValue = thisLayer.index;
var totalFrames = thisComp.numLayers;
var thisOpacity;

	if (keyFrameValue == thisValue ||  keyFrameValue == (thisValue + totalFrames) ||  keyFrameValue == (thisValue + (totalFrames *2 )) ||  keyFrameValue == (thisValue + (totalFrames *3 ))   ) {
		thisOpacity = 100;
		} else {
		thisOpacity = 0;
		};	