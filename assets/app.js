const myWords = ["lizard", "pain", "beauty", "school", "development"]
const a_z = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let i = 0;
let j = 0;
const onLoad = () => {
    document.querySelector(".popup").style.display = "none"
    const getRndm = (length = 5) => Math.floor(Math.random() * length)
    let word = myWords[getRndm(myWords.length)]
    let letter1 = word[getRndm(word.length)]
    let letter2 = word[getRndm(word.length)]

    const creatingDynamicDivs = () => {
        i++
        if (i - 1 >= word.length) {
            // Ok..
        } else {
            let div = document.createElement("div")
            div.classList.add("words")
            document.querySelector(".deshes").append(div)
            creatingDynamicDivs()
        }
    }
    creatingDynamicDivs()
    document.querySelectorAll(".words")[word.indexOf(letter1)].innerHTML = letter1
    document.querySelectorAll(".words")[word.indexOf(letter2)].innerHTML = letter2

    let splitedWord = word.split("");
    const onchangeWordCheck = (event) => {
        let wordMatched = "wrong";
        a_z.forEach((letter) => {
            if (event.key == letter) {
                splitedWord.forEach((letter, index) => {
                    let checkingWords = event.key == letter;
                    if (checkingWords) {
                        wordMatched = "correct";
                        document.querySelectorAll(".words")[index].innerHTML = event.key
                        if (word.length - 1 == index) {
                            document.querySelector(".popup").style.display = "flex"
                            document.querySelector(".displayWinOrLost").innerHTML = "Congratulations You Won ! 😄"
                        }

                    }
                })
                if (wordMatched == "wrong") {
                    document.querySelectorAll(".displayNone")[j].style.display = "flex";
                    j++
                    if (j == 6) {
                        document.querySelector(".popup").style.display = "flex"
                        document.querySelector(".displayWordAfterLoss").innerHTML = `The Word was "${word}"`
                        document.querySelector(".displayWordAfterLoss").style.margin = "20px 0"
                        document.querySelector(".main").opacity = .2;
                    }
                }
            }
        })
    }
    addEventListener("keydown", onchangeWordCheck)
    const playAgain = () => {
        onload()
    }
    var el = document.querySelector(".playAgain");
    if (el) {
        el.ddEventListener("click", playAgain);
    }
}
addEventListener("load", onLoad)
