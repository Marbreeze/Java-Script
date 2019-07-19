

console.log("Can I pass function to another functions?")


function sing(){
    console.log("Twinkle,twinkle little star");
    console.log("how I woder....");
}

   setInterval(sing, 1000);

   //to stop  the function clearInterval(2);

   setInterval(function(){   // this funct is created onyl for the set inveral is not gonna run outside
       console.log("Im anonymous function");
       console.log("This is awesome");
   }, 2000); // it calls the code every two seconds
   
