// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
import Spinner from '../components/Spinner'
import Product from '../components/Product';
import { useSelector } from 'react-redux';


const Home = () => {
  const { isLoading, products } = useSelector(state => state.product)

  // now fetch products is done by createAsyncThunk in App.js
  /**
  const url = "https://fakestoreapi.com/products";
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      setIsLoading(true);
      try {
        const res = await axios.get(url);
        setProducts(res.data);
      } catch (err) {
        console.log("Error occurred in fetching products");
        setProducts([]);
      }
      setIsLoading(false);
    }
    fetchProducts();
  }, []);
 */

  return (
    <div>
      {
        isLoading ?
          (<Spinner />)
          :
          products && products.length > 0 ?
            (
              <div
                className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 space-y-10 md:space-x-5 min-h-[80vh] 
                mb-4 mx-3 md:mx-auto'
              >

                {
                  products.map((product) => (
                    <Product key={product.id} product={product} />
                  ))
                }

              </div>
            )
            :
            (
              <div className='flex justify-center items-center mt-10 font-semibold'>
                <p>No Data Found</p>
              </div>
            )
      }


    </div>
  )
}

export default Home
