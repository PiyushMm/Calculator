function dis(val){
    document.getElementById("input").value += val
 }
     
//function that evaluates the digit and return result
function solve(){
    let x = document.getElementById("input").value
    let y = eval(x)
    document.getElementById("input").value = y
 }
          
 //function that clear the display
 function clr()
 {
    document.getElementById("input").value = ""
 }
