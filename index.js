let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P",
"Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k",
"l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
 "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
 "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+",
 "=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let randomPass = document.querySelector("#passButton");
let passwordOne = document.querySelector("#passwordOne");
let passwordTwo = document.querySelector("#passwordTwo");
let checkboxOne = document.querySelector("#cb1");
let checkboxTwo = document.querySelector("#cb2");

function randomPassGenerator(l,arr){
   let password="";
   for(let y=0;y<l;y++){
      let i=Math.floor(Math.random()*arr.length)
      password += arr[i];
   }
   return password;

}
randomPass.addEventListener("click",function(){
   if(document.getElementById("lengthBox").value.length != 0){
      let arr= updateList();
      let x=document.getElementById("lengthBox").value;
      let first=randomPassGenerator(x,arr);
      let second=randomPassGenerator(x,arr);

      passwordOne.textContent=first;
      passwordTwo.textContent=second;
   }else{alert("Please specify the password length !");}
});

passwordOne.addEventListener("click",function() {
   if(passwordOne.innerHTML.length !=0){
      navigator.clipboard.writeText(passwordOne.innerHTML);
      alert("Copied the text: " + passwordOne.innerHTML);
   }
})
passwordTwo.addEventListener("click",function(){
   if(passwordTwo.innerHTML.length !=0){
      navigator.clipboard.writeText(passwordTwo.innerHTML);
      alert("Copied the text: " + passwordTwo.innerHTML);
   }
})
function checkboxState(){
   let cb1=checkboxOne.checked;
   let cb2=checkboxTwo.checked;
   if(!cb1 && !cb2){return 1;}
   if(!cb1 && cb2){return 2;}
   if(cb1 && !cb2){return 3;}
}
function updateList(){
   let state=checkboxState();
   if(state===1){
      let arr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P",
      "Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k",
      "l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
      return arr;
   }
   else if(state===2){
      let arr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P",
      "Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k",
      "l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
      "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
      return arr;
   }
   else if(state===3){
      let arr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P",
      "Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k",
      "l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
      "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+",
      "=","{","[","}","]",",","|",":",";","<",">",".","?",
      "/"];
      return arr;
   }
   else {return characters;}
   
}