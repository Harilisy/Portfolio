
// Affiche la présentation
const phrase=document.querySelector("span")
const word ="Bonjour , je suis Harilisy Joel RAMORASATA"
const letter =word.split('')
let index=0

function AfficheMotParMot(){
    if(index<letter.length){
        phrase.textContent+=letter[index] + ""
        index++
    }else{
        clearInterval(interval)
    }
}

const interval = setInterval(AfficheMotParMot,200)