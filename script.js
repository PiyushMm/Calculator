function display(data){
    document.querySelector("#input").value += data;
   }
   
   function result(){
       let ans = document.querySelector("#input").value;
       let cal = eval(ans);
       document.querySelector("#input").value = cal;
   }
   
   function clearinput() {
       document.getElementById("input").value = "";
   }
