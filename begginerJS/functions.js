console.log("replace the string")

function kebabosToSnakes(str){
    return str.replace(/-/g, '_');    
}

function isEven(num){
    if(num % 2 === 0){
        return(true);
    }
    else{
        return(false);
    }
}
 
function factorial(num){
    var res = 1;
 for(i = 2; i <= num;i++){
    res *= i;
    
 }
 return res;
}