 // 1
document.querySelector(".btnr").onclick = function right() {
    document.querySelector(".question").style.display = "none"
    document.querySelector(".question1").style.display = "block"
}
document.querySelector(".btnm").onclick = function mistake() {
    alert ('Сыыһа')
}
document.querySelector(".btnm1").onclick = function mistake() {
    alert ('Сыыһа')
}
document.querySelector(".btnm2").onclick = function mistake() {
    alert ('Сыыһа')
}
// 2
document.querySelector(".btn1r").onclick = function right() {
    document.querySelector(".question1").style.display = "none"
    document.querySelector(".question2").style.display = "block"
}
document.querySelector(".btn1m").onclick = function mistake() {
    alert ('Сыыһа')
}
// 3
document.querySelector(".btnr2").onclick = function nright3() {
    document.querySelector(".question2").style.display = "none"
    document.querySelector(".question3").style.display = "block"
}
document.querySelector(".btnm3").onclick = function mistake() {
    alert ('Сыыһа')
}
document.querySelector(".btnm4").onclick = function mistake() {
    alert ('Сыыһа')
}
document.querySelector(".btnm5").onclick = function mistake() {
    alert ('Сыыһа')
}
// 4
document.querySelector(".btn1r2").onclick = function right() {
    document.querySelector(".question3").style.display = "none"
    document.querySelector(".question4").style.display = "block"
}
document.querySelector(".btn1m2").onclick = function mistake() {
    alert ('Сыыһа')
}
// 5
btni.onclick = function que() {
    let a = document.getElementById('que').value
    if (a == 3142) {
        document.querySelector(".question4").style.display = "none"
        document.querySelector(".question5").style.display = "block"
    }
    else{
        alert('Сыыһа')
    }
}