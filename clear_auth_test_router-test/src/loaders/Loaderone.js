import { Triangle } from "react-loader-spinner"
function Loaderone() {
    return (
        <>
            <div className="d-flex justify-content-center mb-5 ">
                <div>
                <Triangle
                height="80"
                width="180"
                color="#4fa94d"
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
            />


                </div>
         </div>
        </>
    )
}

export default Loaderone