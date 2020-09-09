function collide(object1, object2){
    object1RightEdge= object1.x + object1.width;
    object2LeftEdge = object2.x;
    if (object1RightEdge>=object2LeftEdge){
       return true;
    }
    else{
      return false;
    }
  }
  function isTouching(object3, object4){
    if(object3.x-object4.x < object4.width/2 +object3.width/2
        && object4.x- object3.x < object4.width/2 +object3.width/2
        && object3.y-object4.y < object4.height/2 +object3.height/2
        && object4.y- object3.y < object4.height/2 +object3.height/2 ){
            return true;
        } 
         else {
            return false;
  }
}