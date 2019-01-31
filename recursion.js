function isEven(n){
    if(n%2 ===0){
        return n + "\n true "    
    }
    else if(n<0){ return "\n false"
 }  
    else{ return n + "\n  false"
}

} 
console.log(isEven(50))
console.log(isEven(75))
console.log(isEven(-1))
