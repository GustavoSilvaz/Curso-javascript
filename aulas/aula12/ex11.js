var idade=4
if (idade < 16){
    console.log(`Não pode votar`)
} else if (idade < 18 || idade > 60) {
    console.log(`Vote se quiser`)
} else if (idade > 16) {
    console.log (`Pode votar`)
}