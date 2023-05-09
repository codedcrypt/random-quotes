const btn = document.getElementById("btn")
const pen = document.getElementById("pen")

quotes = ["We cannot solve problems with the kind of thinking we employed when we came up with them.","When you change your thoughts, remember to also change your world.","The road to success and the road to failure are almost exactly the same","I never dreamed about success. I worked for it.","To know how much there is to know is the beginning of learning to live."]

 btn.addEventListener('click', function(){
   let randomnumbers = Math.floor(Math.random()*quotes.length)
   let RanDom = quotes[randomnumbers]
    pen.textContent = RanDom
    pen.style.color = "red"
    pen.style.backgroundColor = "white"
    pen.style.border
   
 })