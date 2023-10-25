function gemsToDiamond (x,y,z){
    if (typeof x != "number" || typeof y != "number" || typeof z != "number "){
        return "please provide me valid number input"
    }
    else if (x < 0 || y < 0 || z < 0){
        return "please provide me a valid number"
    }
    
const frnd1  =21;
const frnd2 = 32;
const frnd3 = 43;

const total = (x * frnd1) + (y * frnd2) + (z * frnd3);

if (total > 2000){
    return total - 2000;
}
else {
    return total;
}
}


console.log(gemsToDiamond(20,200,1670))