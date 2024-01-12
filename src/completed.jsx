export default function Complete({comparr}){

    return(
        <div>
            <h3>Completed Tasks:</h3>
            {
            comparr.map((obj)=>(
                    <>
                    <h4><span className="comptask">{obj}</span></h4>
                    </>
                )
            )
            }
        </div>
    )
}