import React,{useState, useEffect} from 'react';
import Movieitem from './Movieitem';
import axios from "axios";

const Movislist=()=> {

const [items,setitems] = useState([]);
useEffect(() => {
    const key='14f0dc0be5b9cb517fe06c0023585aef';
    const getmoviedata = async() => {
    const res=await axios.get('https://api.themoviedb.org/3/movie/550?api_key=${key}');
    setitems(res.data.results);

    };
    getmoviedata();


}, []);

  return (
  <div>
    <div className="container">
        <div className="row">
            {items.map( (item) => (
                <Movieitem key={items.id} item={item}/>
            ))}
            
        </div>
    </div>
  </div>
  );
}

export default Movislist;
