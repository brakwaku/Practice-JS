/* NOTE: The instructions are in index.html */

/* --- STEP (2) ---
 * - Make this function take an array as a parameter.
 * - Return the count of items in the array that are multiples of three.
 * - Keep this function stand-alone. I.e. it should not know ANYTING about DOM.
 */
function countThreevens(arrayParameter) {
    let myCounter = 0;
    for (let i = 0; i < arrayParameter.length; i++) {
      if (arrayParameter[i] % 3 === 0) {
        myCounter++;
      }
    }
    return myCounter;
  }
  
  /* --- STEP (5) ---
   * - Add a click handler on the button.
   * - Read the numbers from the input and turn them into an array.
   * - Call countThreevens with the array.
   * - Replace "blah" (and only blah) with the result.
   */
  function handleClick() {
    let theArray = document.getElementById("arrayToBePassed").value;
    let newArray = theArray.split(" ");
    let blahNumber = countThreevens(newArray);
    document.getElementById("blahId").innerHTML = blahNumber;
  }
  