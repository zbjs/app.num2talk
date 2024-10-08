import {
    num2Arabic,
    num2Bangla,
    num2Chinese,
    num2English,
    num2Hindi,
    num2Japanese,
    num2Portuguese,
    num2Russian,
    num2Spanish,
    num2Urdu
} from 'num2talk';



const languageMap =  () => {
    const number = 2432144423

    console.log(num2English(number))
    console.log(num2Hindi(number))
    console.log(num2Japanese(number))
    console.log(num2Portuguese(number))
    console.log(num2Russian(number))
    console.log(num2Spanish(number))
    console.log(num2Urdu(number))
    console.log(num2Arabic(number))
    console.log(num2Bangla(number))
    console.log(num2Chinese(number))


}

export default languageMap