
var creative = {};
  //
  creative.titlePriceGroup = document.getElementById("titlePriceGroup")

  //boundingBox,centerOnWidth,centerOnHeight
  var box = new Clamp(creative.titlePriceGroup,300 ,600)
  console.log(' W = ' + box.getWidth() )
  console.log(' H = ' + box.getHeight() )
  console.log(' X = ' + box.getX() )
  console.log(' Y = ' + box.getY() )
