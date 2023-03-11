let bigColor = document.querySelector('#cheng')
let colorBlack=document.querySelector('.black')
let colorYellow = document.querySelector(".yellow")
let colorRed = document.querySelector('.red')
let colorGreen = document.querySelector('.green')
let colorGrey = document.querySelector('.grey')
let colorBlue = document.querySelector('.blue')


colorBlack.onclick = () => {
    bigColor.setAttribute('src' , "img/black.jpeg")
}
colorRed.onclick = () => {
    bigColor.setAttribute('src', 'img/red.webp')
}
colorYellow.onclick = () => {
    bigColor.setAttribute('src', 'img/yellow.jpeg')
}
colorGreen.onclick = () => {
    bigColor.setAttribute('src', 'img/green.jpg')
}
colorGrey.onclick = () => {
    bigColor.setAttribute('src', 'img/grey.jpeg')
}
colorBlue.onclick = () => {
    bigColor.setAttribute('src', 'img/blue.jpeg')
}