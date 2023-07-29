var agora=new Date()
var hora=agora.getHours()
console.log(`Agora são exatamente ${hora} horas`)
if (hora < 12 ) {
    console.log(`Bom dia meu rei`)
} else if (hora < 18) {
    console.log(`Boa tarde meu rei`)
} else if (hora < 24) {
    console.log(`boa noite meu rei`)
}