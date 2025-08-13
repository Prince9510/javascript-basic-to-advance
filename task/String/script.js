function frequency() {
  let input = document.querySelector("input");
  let inputValue = input.value.trimEnd();
  let firstThead = document.querySelector(".firstThead");
  let characterCount = document.querySelector(".characterCount");
  let wordCount = document.querySelector(".wordCount");

  if (inputValue.trim() == "") {
    alert("Please fill the blank");
    return;
  }

  let charCount = inputValue.length;
  let splitTheWord = inputValue.trimEnd().split(" ");
  let obj = {};

  splitTheWord.forEach((element) => {
    if (obj.hasOwnProperty(element)) {
      obj[element] += 1;
    } else {
      obj[element] = 1;
    }
  });

  characterCount.innerText = charCount;
  wordCount.innerText = splitTheWord.length;

  let tr = "";
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      tr += `
         <tr>   
             <th>${key}</th>
             <td>${obj[key]}</td>
         </tr>
        `;
    }
  }
  firstThead.innerHTML = tr;
}
