let num = [1,2,3,4,5]
num.sort()
console.log(num)
console.log(`Nosso vetor é ${num.length}`)
console.log(num[0])

/*for(let pos=0;pos<5;pos++){
    console.log(pos)
}

for(let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num}`)
}*/

let pos = num.indexOf(8)
console.log(`O valor 8 está na posição ${pos}`)