var agora=new Date()
var hora=agora.getHours()

if (hora<18){
    window.onload = function mudar(){
        b=document.getElementById("a")
        b.style.backgroundColor="Yellow"
    }
}