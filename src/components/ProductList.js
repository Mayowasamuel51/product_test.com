import { LazyLoadImage, trackWindowScroll }
  from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
function ProductList({ products, scrollPosition }) {
    return (
        <>
            <div className="container text-center">
                <div className="row flex-wrap row-cols-4">
                    {
                        products.map((item, index) => {
                            return (
                                <div key={index} className=" col-md-4 d-flex  justify-content-center " style={{ maxWidth: '240px', margin: '12px' }}>

                                    <div className="card mt-3 " style={{ padding: '8px', boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}>

                                        <div>
                                            <LazyLoadImage
                                                alt={item.alt}
                                                height={item.height}
                                                effect="blur"
                                                scrollPosition={scrollPosition}
                                                src={item.images[0]} // use normal <img> attributes as props
                                                // visibleByDefault={item.images[0] === item.images[0]}
                                                style={{ width: '100%', boxSizing: 'border-box', height: '210px' }} />
                                            {/* <img src={item.images[0]} style={{ width: '100%', boxSizing: 'border-box', height: '210px' }} /> */}
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
