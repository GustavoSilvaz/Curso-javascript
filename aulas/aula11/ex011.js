function calcular(){
    var txtv = window.document.getElementById('txtvel')
    var res = window.document.getElementById('res')
    var vel = Number(txtv.value)
    res.innerHTML = `Sua velocidade atual é de ${vel}hm/`
    if (vel>40){
        res.innerHTML = `Você está sendo multado!`
    } else {
    res.innerHTML = `Dirija sempre com segurança`
    }
    }