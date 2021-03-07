function plus(a,b) {
    let result=a+b
    resulta(result)
}
function minus(a,b) {
    let result=a-b
    resulta(result)
}
function mult(a,b) {
    let result=a*b
    resulta(result)
}
function div(a,b) {
    let result=a/b
    resulta(result)
}

function resulta(presult) {
    console.log(`${presult}`)
}

module.exports={
    toplama:plus,
    carpma:mult,
    bolme:div,
    cikarma:minus
    
}