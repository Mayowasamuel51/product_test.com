import { Link } from "react-router-dom";



function CategoriesList({ categories }) {
    return (
        <>

            <div className="container text-center  ">
                <div className="row ">
                    {
                        categories.map((item, index) => {
                            return (
                                <div key={index} className="col-3" >
                                    <div style={{ height: 'fit-content', boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }}  >
                                        <Link className="text-center m-3 mt-3 p-2 fw-bolder" to={`${item}`} style={{ textDecoration: 'none' }}>{item}</Link>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        </>
    )
}

export default CategoriesList;


// GOOD
// CHEAP
// FAST

