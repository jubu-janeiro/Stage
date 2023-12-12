const nextButton = document.querySelector("#next-page")
const prevButton = document.querySelector("#prev-page")

nextButton.addEventListener("click",()=>{
$(".container-form").load("./inscription/address.html")
})
prevButton.addEventListener("click",()=>{
    alert("helooo thist is prev button ")
})
