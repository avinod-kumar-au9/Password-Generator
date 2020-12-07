const limit = document.querySelector(".length");
let uppercase = document.querySelector(".uppercase");
const lowercase = document.querySelector(".lowercase");
const numbers = document.querySelector(".numbers");
const symbols = document.querySelector(".symbols");
const button = document.querySelector("button");
const passwordval = document.querySelector(".password");
const lengtherror = document.querySelector(".lengtherror");

button.addEventListener("click", function () {
  let leastPassword = "";
  let Alphanum = "";
  let AlphanumCnt = 0;
  let cnt = 0;
  let limitval = limit.value;
  let iterateVal = 0;
  let calcVal = 0;

  if (uppercase.checked) {
    cnt += 1;
  }
  if (lowercase.checked) {
    cnt += 1;
  }
  if (numbers.checked) {
    cnt += 1;
  }
  if (symbols.checked) {
    cnt += 1;
  }
  iterateVal = Math.floor(limitval / cnt);

  if (limitval > 4 && limitval < 25) {
    lengtherror.innerHTML = "";
    if (uppercase.checked) {
      let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      for (var i = 0; i < iterateVal; i++) {
        let random = Math.floor(Math.random() * 26);
        leastPassword += uppercase[random];
      }
      Alphanum += uppercase;
      AlphanumCnt += 26;
    }
    if (lowercase.checked) {
      let lowercase = "abcdefghijklmnopqrstuvwxyz";
      for (var i = 0; i < iterateVal; i++) {
        let random = Math.floor(Math.random() * 26);
        leastPassword += lowercase[random];
      }
      Alphanum += lowercase;
      AlphanumCnt += 26;
    }
    if (numbers.checked) {
      let Numbers = "123456789";
      for (var i = 0; i < iterateVal; i++) {
        let random = Math.floor(Math.random() * 9);
        leastPassword += Numbers[random];
      }
      Alphanum += Numbers;
      AlphanumCnt += 9;
    }
    if (symbols.checked) {
      let symbols = "_-@#$!%&*()";
      for (var i = 0; i < iterateVal; i++) {
        let random = Math.floor(Math.random() * 11);
        leastPassword += symbols[random];
      }
      Alphanum += symbols;
      AlphanumCnt += 11;
    }
    calcVal = limitval - iterateVal * cnt;
    console.log(Alphanum);
    for (var i = 0; i < calcVal; i++) {
      let random = Math.floor(Math.random() * AlphanumCnt);
      leastPassword += Alphanum[random];
    }

    passwordval.value = leastPassword;
  } else {
    lengtherror.innerHTML =
      "Password Length should be greater than 4 and less than 25";
    lengtherror.style.color = "orange";
  }
});
