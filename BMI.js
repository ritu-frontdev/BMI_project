// function cal(){
// var height = document.querySelector("#num1").value
// var weight = document.querySelector("#num2").value
// var result = document.querySelector("#result")
// if(height=="" || weight==""){
//     result.innerHTML = "plz enter valid number"
// }
// else{
// result.innerHTML = ((weight/Math.pow(height,2))*10000).toFixed(2)
// }
// var bmi = ((weight/Math.pow(height,2))*10000).toFixed(2)
// if(bmi<18.6){
//     result.innerHTML = "under weight:" + bmi;
// } else if(bmi>18.6 && bmi<24.9){
//     result.innerHTML = "Normal:" + bmi;
// }
// else{
//     result.innerHTML = "Over Weight:"+ bmi;
// }
// }
// window.onload = ()=>{
//     var button = document.getElementById("btn");
//     button.onclick = cal_1
//     button.addEventListener("click", cal_2)
// };

var button = document.getElementById("mybtn");
button.addEventListener("click", cal);
function cal(){
var height = document.querySelector("#num1").value
var weight = document.querySelector("#num2").value
var result = document.querySelector("#result")

if(height=="" || weight==""){
    result.innerHTML = "plz enter valid number"
}
else{
result.innerHTML = ((weight/Math.pow(height,2))*10000).toFixed(2)
}
var bmi = ((weight/Math.pow(height,2))*10000).toFixed(2)
if(bmi<18.6){
    result.innerHTML = "under weight:" + bmi;
} else if(bmi>18.6 && bmi<24.9){
    result.innerHTML = "Normal:" + bmi;
}
else{
    result.innerHTML = "Over Weight:"+ bmi;
}
}


