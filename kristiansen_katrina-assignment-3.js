// Katrina Kristiansen
// SDI 1
// 1210

// Global Variables

var relax = " Write Vampire and the Alchemist. ";
function activity(){
    
}
activity();
console.log(relax);

// conditional
var a = 1;
if (a === 1){
    console.log("Channing gave his life for equilvlent exchange to make Kitty human.");
    a = 0
}
else {
    console.log("Channing did not make the right elixer and died for nothing." + a)
};

var channingHeart = 10;
var channingElix =  234;
var channingGiveUp = 0;
if(channingHeart == 10 || channingHeart == 20)
{
    if(channingElix >= 231 && channingElix <= 400)
        channingGiveUp = "everything";
        else
        channingGiveUp = "just his heart";
        console.log("Channing is giving up " + channingHeart + " percent of his being. " );
}
else if(channingHeart == 15 || channingHeart == 36)

      if (channingElix >= 450 && channingElix <= 500)
           channingGiveUp = " His sight.";
       else
          channingGiveUp = " His hearing. "

       else
          console.log("channing gave up everything to show kitty his love " + channingHeart);
          
// global variable

var a = 10;

alchemistJason();

function alchemistJason()
   {
   var a = 20;
   console.log(" Alchemist Jason is saddend that Channing got the right formula" );
   }

console.log("Jason makes elixer " + a + " memory for Kitty to remember Channing.");

// return a value
 function jasonHelp(a,b){
    return a*b;
 }
console.log("Jason puts " + jasonHelp(50*40) + " percent into making Kitty happy again.")


// returned boolean


//
Math


var x =4-2
console.log(x + " Kitty mourns the death of Channing for " + x + " months .");

// for loop

for (var jasonSendsRoses = 15; jasonSendsRoses >0; jasonSendsRoses --){
      console.log(jasonSendsRoses + "Jason sends roses to help Kitty Mourn and feel better.");
      
};
console.log("The last rose is a fake and will never die" + " He tells her that when the last rose dies, his love for her dies.");


// json data

var json = {
    "lovers": [
        {
            "date": "103112",
            "name": "Jason",
            "place": "Club Immortal",
            "what": "proposal"
        },
    
{

        "date": "110112",
        "name" : "Kitty",
        "place": "Club Immortal dance floor",
        "what" : "accepting proposal"
    }
    
   ]
};

var proposalData = function (json){
    for (var i = 0; i < json.lovers.length; i++){
        var people =json.lovers[i];
        console.log("Date : " + people.date + " Lovers name " + people.name + "Place of date " + people.place + "what Jason and Kitty are doing, " + people.what);
        
    }
};
proposalData(json);

// property boolean

var dress= new Boolean("Kitty models dress A. ");
console.log ("Kitty is planning her wedding " + dress);

// method accessor and mutator

var wedding = {
    "name": "kittyWed",
    "dress": 3000,
    "cake" : 4000,
    "hotel": 5000,
    "Dj"   : 400,
    "venue": 6000,
    "budget": function(){
       var totalBudget = this.cake + this.Dj + this.dress + this.hotel + this.venue;
       return totalBudget;
    }
};
console.log("the total budget so far is " + wedding.budget());

// argument array

function calcBudget()
{
   var trueBudget = 150000
   for(var i=0; i<arguments.length; i++)
      trueBudget = trueBudget + arguments[i]
   var money= trueBudget/arguments.length
   return money
}
console.log("Money its gonna cost for her wedding is = " + calcBudget(3000, 4000, 5000, 400 , 6000))

// property array

var i;
var myCakes = new Array();
myCakes[0] = "Chocolate cake, with white fondant, with hazelnut cream filling ";
myCakes[1] = "6 tiered red velvet, cream cheese filling, White fondant with chocolate branches and cherry blossom flowers ";
myCakes[2] = "3 tiered vanilla, with raspberry filling, pink, red, and purple fondant, red, black, purple roses going up the side of the cake. ";

for (i=2;i<myCakes.length;i++)
{
console.log(myCakes[i] + "cake testing day. ");

};

// property string
var animalName="Maximous the Huskymous";
var animalName2= "Skeeter the cat"
var jasonSays=" Maximous the Huskymous will stand or sit next to me. ";
var kittySays=" Skeeter the cat will stand next to me. ";
var maxAndSkeeter= "Bark Bark Bark!!! Meow meow, meow!!!" 

console.log(animalName + " Best Dog")
console.log(animalName2 + "Best kitten")
console.log(jasonSays + " Being the best dog.")
console.log(kittySays+ " Being the best kitten. ")
console.log(maxAndSkeeter+ " these are the animal's words..")

// return number

function church(number)
{
     var number1 = number*number;
     
     return number1;
}

var x = 4;
// Here we invoke the function and capture the result
var des = church(x);
var res = des/2;
console.log(" The church - "+res );

//method function

// property function

// for loop

for (var getDone = 30; getDone >0; getDone--) {
    console.log(getDone + " Getting the wedding done. ");
    
};
console.log(" The Wedding is over.");
