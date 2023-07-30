var agora=new Date()
var now=agora.getHours()
var a = document.getElementById("agr")
var b = document.getElementById("hora")
var c =document.getElementById("tenha")

if (now<18){
    a.innerHTML=`Agora são exatamente${now} horas`
    b.innerHTML=`<img src="img/Amanhecer01.jpg" alt="">`
    c.innerHTML=`Tenha uma boa tarde`
} else if (now<24) {
    a.innerHTML=`Agora são exatamente${now} horas`
    b.innerHTML=`<img src="img/images.jpeg" alt="">`
    c.innerHTML=`Tenha uma boa noite`
} else if (now<12){
    a.innerHTML=`Agora são exatamente${now} horas`
    b.innerHTML=`<img src="img/pexels-photo-2386144.webp" alt=""></img>`
    c.innerHTML=`Tenha um bom dia`
}


