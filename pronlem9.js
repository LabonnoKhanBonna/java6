function printDetails (person){
if (typeof person != "object"){
    return "please provide me a valid object"
}
else{
    const name = person.name || "nai";
    const age = person.age || "nai";
    const email = person.email || "nai";
    const bou = person.bou || "nai";

    return "amar nam " + name + " amar boyosh " + age + " amar email " + email;

   
}
console.log(name,age, email, bou)
}
const obj = {
    name : "labonno",
    age : 23,
    email : "bonnalabonnokhan2708@gmail.com"
}

console.log(printDetails(obj))