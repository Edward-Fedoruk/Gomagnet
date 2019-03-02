(function() {
  const state = {
    iterator: 0,
    translate: false,
  }

  const getElemOffset = select => 
  document.querySelector(select).getBoundingClientRect().top + window.pageYOffset - 300

  const title = document.querySelector(".weDo__title")
  const titleOffset = getElemOffset(".weDo__title")
  const aboutOffset = getElemOffset(".weDo__about")
  title.style.position = "absolute"
  title.style.top = `${titleOffset}px`

  window.addEventListener("scroll", (e) => {
    if (window.pageYOffset > titleOffset && window.pageYOffset < aboutOffset) {
      state.translate = true
    } else state.translate = false 
    if (state.translate) {
      title.style.top = `${e.currentTarget.scrollY}px`
    }
  })
})()