(function() {
  let state = {
    animated: false
  } 

  // takes offset from element to the top of the screen
  const getElemOffset = select => 
    document.querySelector(select).getBoundingClientRect().top + window.pageYOffset - 300

  const sectionOffset = getElemOffset(".youGet")

  const onScroll = (e) => {
    if(window.pageYOffset > sectionOffset) {
      [...document.querySelectorAll(".youGet .lattice")].forEach((elem) => {
        elem.classList.add(`${elem.classList[1]}-finish`)
      })
      state.animated = true
    }
    if(state.animated) window.removeEventListener("scroll", onScroll)
  }

  window.addEventListener("scroll", onScroll)

})()