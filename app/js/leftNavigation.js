(function() {
  const state = {
    fixed: false,
    sectionCount: 1
  }

  const sectionIndicator = document.querySelector(".sectionIndicator")
  const sectionIndicatorOffset = sectionIndicator.getBoundingClientRect().top + window.pageYOffset

  const sectionSelectors = {
    ".advice__contentWrap": "need more?", 
    ".youGet": "what we do", 
    ".agreement": "agreement",
    ".socialSection": "Management"
  }

  const sectionsOffsets = Object.keys(sectionSelectors).map((selector) => { 
    return document
      .querySelector(selector)
      .getBoundingClientRect()
      .top + window.pageYOffset
  })

  const changeNavName = () => {
    const sectionOffset = sectionsOffsets.find(offset => window.pageYOffset < offset)
    const sectionCount = sectionsOffsets.indexOf(sectionOffset) 

    if (sectionCount === state.sectionCount) {
      return
    } else if (sectionCount === -1) {
      const navTexts = Object.values(sectionSelectors)
      state.sectionCount = sectionCount
      document.querySelector(".sectionIndicator__name").innerHTML = navTexts[navTexts.length - 1]
      document.querySelector(".sectionIndicator__sectionCount").innerHTML = `0${navTexts.length}`
    } else {
      const navTexts = Object.values(sectionSelectors)
      state.sectionCount = sectionCount
      document.querySelector(".sectionIndicator__name").innerHTML = navTexts[sectionCount - 1] === undefined ? navTexts[sectionCount] : navTexts[sectionCount - 1]
      document.querySelector(".sectionIndicator__sectionCount").innerHTML = `0${sectionCount}`
      console.log(navTexts[sectionCount - 1])
    } 

  }

  window.addEventListener("scroll", () => {
    if (state.fixed && window.pageYOffset > sectionIndicatorOffset) {
      changeNavName()
      return 
    } else if (state.fixed && window.pageYOffset < sectionIndicatorOffset) {
      sectionIndicator.classList.remove("fixed")
      state.fixed = false
    } else if (window.pageYOffset > sectionIndicatorOffset) {
      sectionIndicator.classList.add("fixed")
      state.fixed = true
    }
  })
  
})()