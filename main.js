function b1(Vnumero) {
    document.getElementById("labelEpika").innerHTML += Vnumero
    console.log(Vnumero)
}
function igual() {
    local = document.getElementById("labelEpika").innerHTML
    local = local.replace("x","*");local = local.replace("÷","/")
    document.getElementById("labelEpika").innerHTML = eval(local)
}