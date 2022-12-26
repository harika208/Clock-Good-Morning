function clock(){

    
let date = new Date();
console.log(date);


let hours = date.getHours();
console.log(hours);
let mins = date.getMinutes();
console.log(mins);
let secs = date.getSeconds();
console.log(secs);


let meridian;
   if(hours > 12){
    meridian = "PM";
    hours -= 12;
   }
   else{
    meridian = "AM";
   }

   if(hours < 10){
    hours = `0${hours}`;
   }
   if(mins < 10){
    mins = `0${mins}`;
   }
   if(secs < 10){
    secs = `0${secs}`;
   }

   
    let hour1 = document.getElementsByClassName("hour12");
    hour1[0].innerHTML = `${hours}`

    let min1 = document.getElementsByClassName("min12");
    min1[0].innerHTML = `${mins}`;

    let sec1 = document.getElementsByClassName("sec12");
    sec1[0].innerHTML = `${secs}`
    
    let meridian1 = document.getElementsByClassName("meridian");
    meridian1[0].innerHTML = meridian;

    let good12 = document.getElementsByClassName("good1");
    
   var good1 = " ";
    if((hours < 12) && (meridian == "AM") ){
          good1 = good1 + "GOOD MORNING!! WAKE UP!!";
        
           
    }
     else if((hours == 12) || (hours < 4) && (meridian == "PM")){
      good1 = good1 + "GOOD AFTERNOON!! TAKE SOME SLEEP";
    
         
     }
     else if((hours >= 4) && (hours <= 7) && (meridian == "PM")){
      good1 = good1 + "GOOD EVENING !!";
    
         
     }
     else{
        
    
         good1 = good1 + "GOOD NIGHT !!"; 
     }
     good12[0].innerHTML = good1;

    
    

}
setInterval(() => {
    clock();
},1000);

function alaram(){
   
  
   let wake = document.getElementsByClassName("last1");
  wake[0].innerHTML = "Wake Up Time: " + " " + morn.options[morn.selectedIndex].text;

  let after1 = document.getElementsByClassName("last2");
  after1[0].innerHTML = "Lunch Time: " + " " + after.options[after.selectedIndex].text;
  
  

  let even1 = document.getElementsByClassName("last3");
  even1[0].innerHTML = "Nap Time: " + " " + even.options[even.selectedIndex].text;

   let night1 = document.getElementsByClassName("last4");
   night1[0].innerHTML = "Night Time: " + " " + night.options[night.selectedIndex].text;
 

  let morn123 = document.getElementById('morn').value;
  let after123 = document.getElementById('after').value;
  let even123 = document.getElementById('even').value;
  let night123 = document.getElementById('night').value;

  let time = new Date();
  if(time.getHours() == morn123){

    document.getElementById('two1').innerText = "GRAB SOME HEALTHY BREAKFAST!!!";
    document.getElementById("morning").src = "./wind.jpg";
    }

  else if(time.getHours() == after123){

    document.getElementById('two1').innerText = "LET'S HAVE SOME LUNCH !!";
    document.getElementById("morning").src = "./lunchpic.jpg";
    }

   else if(time.getHours() == even123){

    document.getElementById('two1').innerText = "STOP YAWNING, GET SOME TEA... ITS JUST EVENNG! ";
    document.getElementById("morning").src = "./coffee.jpg";
    }

  else if(time.getHours() == night123){

    document.getElementById('two1').innerText = "CLOSE YOUR EYES AND GO TO SLEEP";
    document.getElementById("morning").src = "./goodnigth.jpg";
  }

}
   
alaram();