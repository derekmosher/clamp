
/* -------------------------------------------------------
  Example:
    var box = new Clamp(creative.titlePriceGroup,300 ,600)
    //boundingBox,centerOnWidth,centerOnHeight
    console.log(' W = ' + box.getWidth() )
    console.log(' H = ' + box.getHeight() )
    console.log(' X = ' + box.getX() )
    console.log(' Y = ' + box.getY() )
---------------------------------------------------------*/

Clamp = function (boundingBox,centerOnWidth,centerOnHeight) {
  var myHeight, myWidth,myX,myY,topNum,bottomNum ;
  var boundingBoxCoords = boundingBox.getBoundingClientRect();
  var kidsArray = boundingBox.children;
  var topArr=[], bottomArr=[],leftArr=[],rightArr=[];

  //get coordinates of Kids
  for(var i=0;i<kidsArray.length ; i++){
   	var box = kidsArray[i].getBoundingClientRect();
   		topArr.push(box.top);
      bottomArr.push(box.bottom);
      leftArr.push(box.left);
      rightArr.push(box.right);
   }
  topArr.sort(function(a, b){return a-b}); //lowest
  bottomArr.sort(function(a, b){return b-a}); //highest
  leftArr.sort(function(a, b){return a-b}); ;//lowest
  rightArr.sort(function(a, b){return b-a}); //highest

  //set Parent Div (x,y)
  boundingBox.style.top = topArr[0]+'px';
  boundingBox.style.left = leftArr[0]+'px';
  
  //reset kids(x,y)
  var box
  var newCoord
  for(var z=0;z<kidsArray.length ; z++){
      box = kidsArray[z].getBoundingClientRect();
      newCoord = box.top - (topArr[0]*2)
   		kidsArray[z].style.top = newCoord+'px';
      newL = box.left - (leftArr[0]*2)
      kidsArray[z].style.left = newL+'px';
   }

  this.getWidth = function(){
    return (rightArr[0] -leftArr[0]  );
  }
  this.getHeight = function(){
    return (bottomArr[0] - topArr[0] );
  }
  this.getX = function(){
    return leftArr[0];
  }
  this.getY = function(){
    return  topArr[0]; 
  }

  console.log('e2 = '+ centerOnWidth)
  console.log('e3 = '+ centerOnHeight)
  if(centerOnWidth){
     boundingBox.style.left = ((centerOnWidth- this.getWidth())/2)+'px'
  }
  if(centerOnHeight) {
    boundingBox.style.top = ((centerOnHeight- this.getHeight())/2)+'px'
  }

  //return boundingBox;
}

