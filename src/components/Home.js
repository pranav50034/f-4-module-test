import React, {useEffect} from 'react'
import {fetchAPI} from "../redux/actions/fetchActions";
import { useDispatch, useSelector } from "react-redux";
import Card from './Card';

const Home = () => {

    const dispatch = useDispatch();

    const { loading, products, error } = useSelector((state) => state.posts);

    useEffect(() => {
       dispatch(fetchAPI());
    }, []);

  return (
     <div className="card-container">
        {loading && <h1>Loading...</h1>}
        {error && <h1>Error occurred while fetching data</h1>}
        {products.length && <Card data={products} />}
     </div>
  );
}

export default Home