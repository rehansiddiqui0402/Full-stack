function Greetings(name){
    return function(){
         console.log("Welcome to RICR!!!", name);
    };
   
}

const greetRehan = Greetings("Rehan");
const greetWaquar = Greetings("Waquar");

greetWaquar();
greetRehan();