export default function calculation(weight, height){
    const totalHeight= height*height;
    const bmi = weight/totalHeight;
    return bmi;
}