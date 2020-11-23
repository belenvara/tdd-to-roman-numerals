

/**
 * Conversión a números romanos.
 * @param {number} n - Un número entre 1 y 3999.
 * @returns {string} El equivalente en números romanos.
 */
export function toRoman(n) {
  // Refactorización
let result = "" ;
while (n>=1000){
  result += "M";
  n-=1000;
}
if (n>=900){
  result += "CM";
  n-=900;
}
if (n>=400){
  result += "CD";
  n-=400;
}
while (n>=100){
  result += "C";
  n-=100;
}
if (n>=90){
  result+= "XC";
  n-=90;
}
if (n>=50){
  result+= "L";
  n-=50;
}
if (n>=40){
  result += "XL";
  n-=40;
}
while (n>=10){
  result += "X";
  n-=10;
}
if (n==9){
  result +="IX"
  n-=9;
}
if (n==4){
  result +="IV" ;
  n-=4;
}
if (n>=5){ 
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


