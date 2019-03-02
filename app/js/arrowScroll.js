(function() {

  const agreementArrow = document.querySelector(".agreement__arrow")
  const agreementArrowBox = document.querySelector(".agreement__arrow-box")
  const marqueeArrow = document.querySelector(".marquee__arrow")

  const scrollTo = elem => () => elem.scrollIntoView({inline: "end", behavior: "smooth"})


  agreementArrow.addEventListener(
    "click", 
    scrollTo(document.querySelector(".agreement__header"))
  )
  agreementArrowBox.addEventListener(
    "click", 
    scrollTo(document.querySelector(".marquee__header"))
  )
  marqueeArrow.addEventListener(
    "click", 
    scrollTo(document.querySelector(".socialSection__header"))
  )

})()