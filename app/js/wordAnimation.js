(function () {

  const calcDelay = (i, j) => 200 * (i + 2) * (j + 2)

  const splitRows = elem => elem.innerText.split(/\r\n|\r|\n/)

  const insert = (elem, wrappedWords) => elem.innerHTML = wrappedWords.join("<br>")

  const animateWords = elem => {
    const wrappedWords = splitRows(elem).map((row, i) => {
      return row
        .split(" ")
        .map((word, j) => 
          `<span data-aos="fade" data-aos-once="true" data-aos-anchor=".header__name"  data-aos-offset="400" data-aos-delay="${calcDelay(i, j)}">${word}</span>`
        )
        .join(" ")
    })

    insert(elem, wrappedWords)
  }

  animateWords(document.querySelector(".header__about"))

})()