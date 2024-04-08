const CalculateBmi =({bmi, result})=>{

    return (
        <div className="border border-2 border-success rounded-2 m-2 p-2">
            <h5>Your BMI : {bmi.toFixed(2)}</h5>
            <h5>Result: {result}</h5>
        </div>
    )
}

export default CalculateBmi