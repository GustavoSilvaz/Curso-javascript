var a=document.getElementById("ano")
var y=new Date()
var hj=y.getFullYear()
var r=document.getElementById("res")
var n2=Number(hj.valueOf)
var n1=Number(a.value)
var cal=hj-n1


function verif () {
    
    r.innerHTML=`<p>É um homem de ${cal} anos</p>`;
}