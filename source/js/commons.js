document.addEventListener("DOMContentLoaded", function(event) {
  //do work
  setInterval(ResizeCards(), 100);
});
function ResizeCards(){
  //alert(document.body.clientWidth);
  var array = document.getElementsByClassName('card')

  Array.prototype.forEach.call(array, function(i){
    var num = document.body.clientWidth - 10;
    if(num <= 600){
      i.style.width = "" + num + "px";
    }else{
      i.style.width = "auto"
    }
  })

}
