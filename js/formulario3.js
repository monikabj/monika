var base=document.getElementById("base");
var altura=document.getElementById("altura");
var baseDato;
var alturaDato;
base.addEventListener("blur",()=>{
 baseDato=document.getElementById("base").value;

});
altura,addEventListener("blur",()=>{
alturaDato=document.getElementById("altura").value;
var area=baseDato* alturaDato / 2;
document.getElementById("area").value=area;
var areaDiv=document.getElementById("area");
areaDiv.innerHTML=area;
});
