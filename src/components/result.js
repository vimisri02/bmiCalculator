export default function results(bmi){
    let result =''
    if(bmi<18.5){
        result = 'Underweight';
    } else if(bmi>18.5 && bmi<25){
        result='Normal weight';
    } else if(bmi>25 && bmi<29.9){
        result='Overweight'
    }else {
        result='Obese'
    }
    return result;
}