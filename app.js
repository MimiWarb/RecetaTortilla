// Javascript program to follow a Spanish "Tortilla" recipe
/////////////////////////////////////////////////////////////

//Definition of variables
//////////////////////////

// Define input variables
var numPeople = 10; // We define the number of people that are having dinner.
                   // We can change this parameter if needed.
var salt = true; // If we want to add salt, this variable should be true. Otherwise, it should be false.
var onion = true; // If we want to add onion, this variable should be true. Otherwise, it should be false.
var yeast = true; // Levadura. If we want to add yeast, this variable should be true. Otherwise, it should be false.
//Ingredients
var numPotatoes = 0; // We define the number of onions, but we don't know yet how many will we need.
                     // We will "initialize" the number of potatoes to 0.
                     // This is a useful thing to do: if something goes wrong and we see the number of potatoes is 0 we will know this is not correct
var numEggs = 0; // Same as with potatoes above, we define the variable and "initialize" to 0.

// Ingredients that depend on the guests taste
var numOnions = 0; // We may need an onion, depending on whether the guests like it.

// Other variables
var numStep; // We will keep track of the steps needed to cook a Tortilla
var outputString; // We can store the messages we want to send the cook in this variable

// Inform the cook about the ingredients.
//////////////////////////////////////////
// Calculate the number of potatoes and eggs we need to cook the omelette,
// depending on the number of people that come to dinner.
numPotatoes = numPeople + 1; // We need a middle sized potatoe for each each person, plus an extra one.
numEggs = numPeople + 2; // We need an egg per person, plus a couple extra.

numStep = 1; // The first step to cook a Tortilla will be 1.


// Tell the cook how many potatoes and eggs are needed to cook a "tortilla" for the number of people expected
console.log("Ingredients:"); // To print information we want to give the cook, we can use the command console.log
                             // We can just write the message between 'single quotes'

// Another way to print the information is to store the message it in a variable,
// and print the variable using console.log:
outputString = "To cook a 'Tortilla' for " + numPeople + " you need:"; // We can add different variables into
                  // a single string by adding them together with the operator +
console.log(outputString);
console.log("   - " + numPotatoes + " potatoes");
console.log("   - " + numEggs + " eggs");


// If we need onion, we need to tell the cook.
if (onion){
    numOnions = 1;
    console.log("   - " + numOnions + " onions");
} else {
    console.log("   - " + numOnions + " onion")
};

// If we need salt, we need to tell the cook.
if (salt){
    console.log("   - Salt");
}


// Let's start cooking
///////////////////////
// Tell the cook we start cooking

console.log( "Let's start cooking" );

// Peel and chop the potatoes.
outputString = numStep + ". Lets start by peeling and chopping the potatoes:";
console.log( outputString );
numStep++; // Once the first step has been printed, we need to add 1 to the step counter.
           // The sentence "numStep++" is equivalent to "numStep+1"

for (let i = 1; i <= numPotatoes; i++ ){ // i++ means i+1
    console.log( numStep + ".    Peel and chop potato number " + i);
    numStep++;
}

// Prepare the pan with oil, and put it to heat
outputString = numStep + ". Put the pan to heat. Pour enough oil in it to cover the potatoes.";
console.log(outputString);
numStep++;

// Crack and beat the eggs
outputString = numStep + ". While we wait for the oil to warm up, crack and beat the eggs:";
console.log(outputString);
numStep++;

for (let i = 1; i <= numEggs; i++ ){ // i++ means i+1
    console.log( numStep + ".    Crack and pour into a bowl egg number " + i);
    numStep++;
}

outputString = numStep + ". Beat the eggs.";
console.log( outputString );
numStep++;

// If the guests like salt, add it
if (salt){
    outputString = numStep + ". Add salt to the mixture.";
    console.log( outputString );
    numStep++;
}

// Take the potatoes off the pan and rinse the oil
outputString = numStep + ". When golden, take the potatoes off the pan, rinse them, and put them in the bowl with the egg. Mix well.";
console.log( outputString );
numStep++;

// If we want yeast, we add it in now.
if(yeast){
    console.log(numStep + ". Add a sachet of yeast into the potato and egg mix.");
};
numStep++;

outputString = numStep + ". Take the oil off the pan. ";
console.log( outputString );
numStep++;

// If the guests like onion, prepare it
if (onion){
    outputString = numStep + ". Chop the onion. Fry it till golden. Add it to the mixture.";
    console.log( outputString );
    numStep++;
}

// Cook the mixture to obtain the tortilla
outputString = numStep + ". Pour the potato and egg mix into the pan. ";
console.log( outputString );
numStep++;

outputString = numStep + ". Heat for 5 minutes. ";
console.log( outputString );
numStep++;

outputString = numStep + ". Carefully flip the tortilla. ";
console.log( outputString );
numStep++;

outputString = numStep + ". Heat for 5 more minutes. ";
console.log( outputString );
numStep++;

outputString = numStep + ". Your tortilla is ready to eat. ";
console.log( outputString );
numStep++;