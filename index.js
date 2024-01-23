const oldIntroductionStart = " My name is";
const oldMyName = " Rufus";

const oldFullIntro = oldIntroductionStart + oldMyName;

console.log("Hello" + oldFullIntro);

const newIntroductionStart = " my name is ";
const newMyName = "Rufus";

console.log(`Hello${newIntroductionStart}${newMyName}`);

//Shopping list time
//Adding two strings with an array

const shoppingList = ["chocolate", " cereals", " vegetables", " turkey breast"];

shoppingList.push(" and ice cream");

const listAsString = shoppingList.join();

const shoppingListPre = "I need to pickup ";
const shoppingListPost = " from the supermarch\xE9.";

console.log(`${shoppingListPre}${listAsString}${shoppingListPost}`);


// console.log(`${shoppingListPre} shoppingList.join() ${shoppingListPost}`);
// Above deliberatly doesnt work but Id like to know why.

//ToDo
//Create alt shopping list whereby shoppingListPre and shoppingListPost are added using array methods push and unshift
//Work out how to add an item to the shopping list at any index.
