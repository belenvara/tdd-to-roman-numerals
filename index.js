

/**
 * Conversión a números romanos.
 * @param {number} n - Un número entre 1 y 3999.
 * @returns {string} El equivalente en números romanos.
 */
export function toRoman(n) {
  // Refactorización
let result = "" ;
if (n==4){
   result="IV" ;
   n-=4;
}
if (n==9){
  result="IX"
  n-=9;
}
else if (n>=10){
  result += "X";
  n-=10;
}
else if (n>=5){ 
  result += "V";
  n-=5;

}


for (let i=0; i<n; i++){
  result +="I";
}


return result;
 // if (n==2) return"II";
  //else if (n==3) return"III";
 // else return "I";
}


