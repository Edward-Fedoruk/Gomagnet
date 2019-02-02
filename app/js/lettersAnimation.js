(function() {

  const careerHeight =  document.querySelector(".career").getBoundingClientRect().top + window.pageYOffset
  let recomposed = false

  const recomposeLetters = () => {
    [...document.querySelectorAll(".career__title span")].forEach(letter => {
      letter.style.transform = "translate(0px, 0px)"
      letter.style.opacity = "1"
    })
  }

  const spreadLetters = () => {
    [...document.querySelectorAll(".career__title span")].forEach((letter, i) => {
      const posX = i % 2 === 0 ? -(i + 10) * Math.random() * 7 : (i + 10) * Math.random() * 7
      const posY = i % 2 === 0 ? (i + 10) * Math.random() * 7 : -(i + 10) * Math.random() * 7
      letter.style.opacity = "0" 
      letter.style.transition = "all 2s cubic-bezier(0.88, 0.26, 0.3, 0.98)"
      letter.style.transform = `translate(${posX}px, ${posY}px)` 
    })
  } 

  const scroll = e => {
    if(window.pageYOffset > careerHeight) {
      recomposeLetters() 
      recomposed = true
    }
    if(recomposed) removeScroll()
  }

  window.addEventListener("scroll", scroll)
  const removeScroll = () => window.removeEventListener("scroll", scroll)
  document.addEventListener("DOMContentLoaded", spreadLetters)

})()
