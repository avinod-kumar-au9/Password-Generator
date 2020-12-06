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

  if (limitval > 4 && limitval < 21) {
    lengtherror.innerHTML = "";
    if (uppercase.checked) {
      let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      for (var i = 0; i < iterateVal; i++) {
        let random = Math.floor(Math.random() * 26);
        leastPassword += uppercase[random];
      }
    }
    if (lowercase.checked) {
      let lowercase = "abcdefghijklmnopqrstuvwxyz";
      for (var i = 0; i < iterateVal; i++) {
        let random = Math.floor(Math.random() * 26);
        leastPassword += lowercase[random];
      }
    }
    if (numbers.checked) {
      let Numbers = "123456789";
      for (var i = 0; i < iterateVal; i++) {
        let random = Math.floor(Math.random() * 9);
        leastPassword += Numbers[random];
      }
    }
    if (symbols.checked) {
      let symbols = "_-@#$!%&*()";
      for (var i = 0; i < iterateVal; i++) {
        let random = Math.floor(Math.random() * 9);
        leastPassword += symbols[random];
      }
    }
    calcVal = limitval - iterateVal * cnt;
    let Alphanum =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$!%&*()abcdefghijklmnopqrstuvwxyz";
    for (var i = 0; i < calcVal; i++) {
      let random = Math.floor(Math.random() * 70);
      leastPassword += Alphanum[random];
    }

    passwordval.value = leastPassword;
  } else {
    lengtherror.innerHTML =
      "Password Length should be greater than 4 and less than 21";
    lengtherror.style.color = "orange";
  }
});
