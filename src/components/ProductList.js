


function ProductList({ products }) {
    return (
        <>
            <div className="container text-center">
            <div className="row">
                {
                    products.map((item, index) => {
                        return (
                            <div key={index} className="col-3  d-flex flex-wrap justify-content-center " style={{ maxWidth: '210px', margin: '25px' }}>

                                <div className="card mt-3 " style={{ padding: '12px', boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}>
                                    
                                    <div>
                                        <img src={item.images[0]} style={{ width: '100%', boxSizing: 'border-box', height: '210px' }} />
                                    </div>

                                    <hr />

                                    <div className="m-2">
                                        <p className="fw-bolder">{item.title}</p>
                                        <p> &#36;  <span>{item.price}</span></p>

                                        <div className="mt-1">
                                            {item.description}
                                        </div>
                                    </div>

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

export default ProductList;