var h = `Hj é `
var m =` meu rei`
var agora=new Date()
var diasem = agora.getDay()


switch (diasem) {
    case 0:
    console.log(`${h}Domingo${m}`)
        break;

    case 1:
    console.log(`${h}segunda${m}`)
        break;

    case 2:
    console.log(`${h}treça${m}`)
        break;

    case 3:
    console.log(`${h}quarta${m}`)
        break;

    case 4:
    console.log(`${h}quinta${m}`)
        break;

    case 5:
    console.log(`sexta`)
        break;

    case 6:
    console.log(`sábado`)
        break;

    default:

        break;
}