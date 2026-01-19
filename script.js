const copyBtn = document.getElementById("copyBtn")
const generateBtn = document.getElementById("btn-generate")
const quoteGen = document.getElementById("generatedQuote")

const quotes = [
  "Code is like humor. When you have to explain it, it’s bad.",
  "First, solve the problem. Then, write the code.",
  "Programming is thinking, not typing.",
  "Debugging is like being a detective in a crime movie where you are also the murderer.",
  "Talk is cheap. Show me the code.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Experience is the name everyone gives to their mistakes.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Don’t watch the clock; do what it does. Keep going.",
  "Dream big. Start small. Act now.",
  "Your limitation—it’s only your imagination.",
  "Sometimes later becomes never. Do it now.",
  "Great things never come from comfort zones.",
  "Push yourself, because no one else is going to do it for you.",
  "Learning never exhausts the mind.",
  "Make today so awesome that yesterday gets jealous 😄",
  "Eat. Sleep. Code. Repeat.",
  "A bug today keeps the deadline away.",
  "If at first you don’t succeed, then call it version 1.0",
  "Computers are fast; programmers keep them slow 😅"
]

let currenQuote = ""

generateBtn.addEventListener('click', ()=> {
    const randomQuote = Math.floor(Math.random()* quotes.length)
    currenQuote = quotes[randomQuote]

    quoteGen.textContent = currenQuote
    copyBtn.classList.remove("hidden")
})

copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(currenQuote)
    
    copyBtn.innerText = 'Copied'
    copyBtn.disabled = true

    setTimeout(() => {
        copyBtn.innerText = 'Copy'
        copyBtn.disabled = false
    }, 2000)
})
