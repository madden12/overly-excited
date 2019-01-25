// Create an array that contains the words in the sentence
let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
function addExcitement (theWordArray, punctuationParam, numberofTimes) {

    // Each time the for loop executes, you're going to add one more word to this string
   let finalPunctuation = ""
    for(let i=0; i < numberofTimes; i++){
        finalPunctuation = finalPunctuation + punctuationParam;
    }
    let buildMeUp = ""

for (let i = 0; i < theWordArray.length; i++){
    let wordToAdd = theWordArray[i];
     
        if((i+1)% 3 === 0 && i != 0){
            // buildMeUp = `${buildMeUp} ${theWordArray[i]}!`
            wordToAdd = wordToAdd + "!";
            wordToAdd = wordToAdd + finalPunctuation;
        }
        else {
            buildMeUp = buildMeUp + " " + theWordArray[i]
        }
        // Concatenate the new word onto buildMeUp
             /*
            If the current value of `i` divided by 3 has no
            remainder, add an exclamation point to the end of
            the word and then concatenate it to `buildMeUp`.

            Otherwise, just concatenate the word itself.
         */
console.log(buildMeUp)
debugger;

        // Print buildMeUp to the console
    }

}

addExcitement(sentence, "$", 7)
            
     
        
        // Print buildMeUp to the console
    



// Invoke the function and pass in the array
