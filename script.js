function sentenceProcessor(sentence) {
  let count = 0;

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === " ") {
      continue;
    }

    count += 1;

    // console.log(i);
  }
  let words = 1;
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      continue;
    }
    words += 1;
  }
  let vowelsCount = 0;
  let vowels = ["a", "e", "i", "o", "u", "y"];
  for (let i = 0; i < sentence.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (sentence[i] !== vowels[j]) {
        continue;
      }
      vowelsCount++;
    }
  }

  return `This sentence is ${count} characters long !! And It exactly has ${words} words and ${vowelsCount} vowels`;
}
// Sentence must be in lowercase for javascript to find all vowels
