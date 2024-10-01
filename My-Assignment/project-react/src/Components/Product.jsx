import React, { useEffect, useState } from 'react'

function Product() {

    const [deta, setData] = useState([]);
    const [filter, setFilter] = useState(deta);
    const [loading, setLoding] = useState(false)

    let componentMountend = true

    useEffect(() => {
        const getProducts = async () => {
            const response = await fetch("https://fakestoreapi.com/products")
            if (componentMountend) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoding(false)
                console.log(filter);



            }
            return () => {
                componentMountend = false;
            }


        }
        getProducts();
        setLoding(true)

    }, [])


    const Loading = () => {
        return (
            <>
                Loading...
            </>
        )
    }

    const filterProduct  = (cat) => {
        const updatelist = deta.filter((x)=>x.category === cat);
        setFilter(updatelist)
    }

    const ShowProducts = () => {
        return (
            <>
                <div className='buttons d-flex justify-content-center mb-5 pb-5'>

                    <button className="btn btn-outline-dark me-2" onClick={()=>setFilter(deta)}>ALL</button>
                    <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("men's clothing")}>Men's Clothing</button>
                    <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("women's clothing")}>Women's Clothing</button>
                    <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("jewelery")}>Jewelery</button>
                    <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("electronics")}>Electronic</button>
                </div>
                {filter.map((Product) => {
                    return (
                        <>
                            <div className="col-md-3 mb-4">
                                <div class="card h-100 text-center p-4" key={Product.id} >
                                    <img src={Product.image} class="card-img-top" alt={Product.title}  height="250px"/>
                                        <div class="card-body">
                                            <h5 class="card-title mb-0">{Product.title.substring(0,12)}...</h5>
                                            <p class="card-text lead fw-bold">${Product.price}</p>
                                            <a href="#" class="btn btn-outline-dark">Buy Now</a>
                                        </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </>
        )

    }

    return (
        <div className="container my-5 py-5">
            <div className="row">
                <div className="col-12 mb-5">
                    <h1 className='display-6 fw-bolder text-center'>Latest Products</h1>
                    <hr />
                </div>
            </div>
            <div className="row justify-content-center">
                {loading ? <Loading /> : <ShowProducts />}

            </div>
        </div>
    )
}

export default Product