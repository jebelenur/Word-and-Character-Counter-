let inputText = document.getElementById("inputText")
let charCount = document.getElementById("charCount")
let wordCount = document.getElementById("wordCount")

inputText.addEventListener("input", ()=>{
    let text = inputText.value
    let charCountDetails = charCount.innerText = text.length

    let word = text.trim().split(/\s+/) //creates an array for each word
    if (text.trim()=== ""){
        wordCount.innerText = 0

    }else{
        wordCount.innerText = word.length
    }
})