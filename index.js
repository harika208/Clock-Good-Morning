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
    let image = document.getElementsByClassName("morning");
    let two12 = document.getElementsByClassName("two1");
    
   var good1 = " ";
    var two1 = " ";
    if((hours < 12) && (meridian == "AM") ){
          good1 = good1 + "GOOD MORNING!! WAKE UP!!";
          two1 = two1 + "GRAB SOME HEALTHY BREAKFAST!!!"; 
          image[0].src = "./wind.jpg";
           
    }
     else if((hours == 12) || (hours < 4) && (meridian == "PM")){
      good1 = good1 + "GOOD AFTERNOON!! TAKE SOME SLEEP";
        two1 = two1 + "LET'S HAVE SOME LUNCH !!";
        image[0].src = "./lunchpic.jpg";
         
     }
     else if((hours >= 4) && (hours <= 7) && (meridian == "PM")){
      good1 = good1 + "GOOD EVENING !!";
        two1 = two1 + "STOP YAWNING, GET SOME TEA... ITS JUST EVENNG! "; 
        image[0].src = "./coffee.jpg";
         
     }
     else{
        two1 = two1 + "CLOSE YOUR EYES AND GO TO SLEEP";
         image[0].src = "./goodnigth.jpg";
         good1 = good1 + "GOOD NIGHT !!"; 
     }
     two12[0].innerText = two1;
     good12[0].innerHTML = good1;

    
    

}
setInterval(() => {
    clock();
},1000);

function alaram(){
   let wake = document.getElementsByClassName("last1");
   let wake1 = document.querySelector("#morn").value;
   wake[0].innerHTML = `Wake Up Time: ${wake1}`;

   let after1 = document.getElementsByClassName("last2");
   let after12 = document.querySelector("#after").value;
   after1[0].innerHTML = `Lunch Time: ${after12}`;

   let even1 = document.getElementsByClassName("last3");
   let even12 = document.querySelector("#even").value;
   even1[0].innerHTML = `Nap Time: ${even12}`;

   let night1 = document.getElementsByClassName("last4");
   let night12 = document.querySelector("#night").value;
   night1[0].innerHTML = `Night Time: ${night12}`;
   
}
alaram();