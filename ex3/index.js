const howManyLetters = (string, letter) => {
    let count = 0;
    letter = letter.toLowerCase()
  
    if (typeof inputstring !== "string" && typeof inputletter !== "string") {
    }
  
    for (let i = 0; i < string.length; i++) {
      if (string[i].toLowerCase() === letter) {
        count++;
      }
    }
    return count;
  };
  
  const item101 = "Buna ziua doamna doctor"
  const item202 = "abcdee"
  
  console.log("\nStringul ce trebuie analizat este: " + item101 + "\n")
  console.log("\nLitera care urmeaza sa fie numarata este: " + item202 + "\n")
  console.log("\nLitera apare in stringul analizat :" + howManyLetters(item101, item202) + " ori" + "\n")
  console.log("")