let password = document.getElementsByClassName("password")[0];
      let letter = "abcdefghijklmnopqrstuvwxyz1234567890!@#$%&*|\>?/,.";
      function myfunction() {
        console.log(letter[letter.length - 1]);
        let p = "";
        for (let i = 0; i < 16; i++) {
          let randomNumber = Math.floor(Math.random() * (letter.length - 1));

          p += letter[randomNumber];
        }

        password.innerHTML = p;
      }