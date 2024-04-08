import { useState } from 'react';
import BmiForm from './BmiForm'
import CalculateBmi from './CalculateBmi';
import calculation from './calculation';
import results from './result';

const MainComponent=() =>{
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);

    const handleWeight = (e) =>setWeight(e.target.value);
    const handleHeight = (e) =>setHeight(e.target.value);
    const bmi = calculation(weight,height)
    const result = results(bmi)
    return (
        <div style={{ textAlign: 'center' }}>
            <h4 >BMI Calculator</h4>
            <BmiForm wtInput={handleWeight} wt={weight} htInput={handleHeight} ht={height}/>
            <CalculateBmi bmi={bmi} result={result}/>
        </div>
    )
}

export default MainComponent;