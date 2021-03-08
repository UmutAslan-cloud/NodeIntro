//Toplama fonksiyonumuz
function plus(a, b) {
    let result = a + b
    resulta(result)
}
//cikarma fonksiyonumuz
function minus(a, b) {
    let result = a - b
    resulta(result)
}
//carpma fonksiyonumuz
function mult(a, b) {
    let result = a * b
    resulta(result)
}
//bolme fonksiyonumuz
function div(a, b) {
    let result = a / b
    resulta(result)
}
//Yazdirma fonksiyonumuz
function resulta(presult) {
    console.log(`${presult}`)
}
//Fonksiyonlarimizi bir obje olarak import ediyoruz
module.exports = {
    toplama: plus,
    carpma: mult,
    bolme: div,
    cikarma: minus

}