function squareRoot(x,n,init){
  var y = init;
  if(!y){
    y = 1;
  }
  if(!n){
    n = 10;
  }
  for(var i =0;i<n;i++){
    var q = x/y;
     y= (q+y)/2
     console.log(y);
  }
}


squareRoot(26,5);
