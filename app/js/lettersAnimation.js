(function () {
  // mutable state
  const state = {
    recomposed: false
  }

  // functions for splitting text to letters
  const getChildren = selector => [...document.querySelector(selector).children]
  const wrapWithSpan = ct => `<span style="display: inline-block" class="spanWrapper">${ct}</span>`
  const splitInnerText = node => node.innerText.split("")
  const setToInnerHTML = node => ct => node.innerHTML = ct
  const splitNode = node => {
    const wrappedData = splitInnerText(node).map(wrapWithSpan).join("")
    setToInnerHTML(node)(wrappedData)
    return node
  }
  const splitLetters = selector => getChildren(selector).map(splitNode)
  
  // takes offset from element to the top of the screen
  const getElemOffset = select => 
    document.querySelector(select).getBoundingClientRect().top + window.pageYOffset - 100

  // transform letters to random positions 
  const spreadLetters = select => {
    [...document.querySelectorAll(select)].forEach((letter, i) => {
      const posX = i % 2 === 0 ? -(i + 10) * Math.random() * 7 : (i + 10) * Math.random() * 7
      const posY = i % 2 === 0 ? (i + 10) * Math.random() * 7 : -(i + 10) * Math.random() * 7
      letter.style.opacity = "0" 
      letter.style.transition = "all 2s cubic-bezier(0.88, 0.26, 0.3, 0.98)"
      letter.style.transform = `translate(${posX}px, ${posY}px)` 
    })
  } 

  // return to initial position
  const recomposeLetters = select => {
    [...document.querySelectorAll(select)].forEach(letter => {
      letter.style.transform = "translate(0px, 0px)"
      letter.style.opacity = "1"
    })
  }

  const createScroll = (height, selector) => e => {
    if(window.pageYOffset > height) {
      recomposeLetters(selector) 
      state.recomposed = true
    }
    if(state.recomposed) removeScroll()
  }

  const onScroll = createScroll(-1, ".header__name .spanWrapper")
  

  window.addEventListener("scroll", onScroll)
  const removeScroll = () => window.removeEventListener("scroll", onScroll)
  document.addEventListener("DOMContentLoaded", (e) => {
    splitLetters(".header__name")
    spreadLetters(".header__name .spanWrapper")
  })

})()
