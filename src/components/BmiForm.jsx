const BmiForm = ({wt,ht,wtInput,htInput}) =>{
    return (
        <div className="border border-2 border-primary rounded-2 m-2 p-2">
            <form>
                <div className="form-group row p-2">
                    <label htmlFor="weight" className="col-sm-2  col-form-label">Weight(Kg)</label>
                    
                    <div className="col-sm-10" >
                        <input type="text" className="form-control" id="weight" placeholder="Enter Weight(Kg)" value={wt} onChange={wtInput} />
                        </div>
                </div>
                <div className="form-group row p-2">
                    <label htmlFor="height" className="col-sm-2  col-form-label">Height(m)</label>
                    
                    <div className="col-sm-10" >
                        <input type="text"className="form-control" id="height" placeholder="Enter Height(m)"  value={ht} onChange={htInput} />
                        </div>
                </div>
                </form>

        </div>
    )
}
export default BmiForm;