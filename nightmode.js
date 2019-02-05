
var Body ={
  setColor : function(color){
    document.querySelector('body').style.color = color;
  },
  setBackgroudColor : function(color){
    document.querySelector('body').style.backgroundColor = color;
  }
}

var links ={
  setColor : function(color) {
  var list = document.querySelectorAll('a');
  for (var i=0; i<list.length; i++){
    list[i].style.color = color;
  }
}
}

function mode_fuction(self){

if(self.value === 'Night'){
  Body.setBackgroudColor('black');
  Body.setColor('white');
  self.value ='Day';
  links.setColor('powderblue');

}else {
  Body.setBackgroudColor('white');
  Body.setColor('black');
  self.value ='Night';
  links.setColor('blue');
}
}
