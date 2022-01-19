import React,{useState} from 'react';
import Movieitem from './Movieitem';
import axios from "axios";

const Movislist=()=> {

const [items,setitems] = useState([]);
const key='a61ebb0dd5msh5106bfc3ca9be2ep152fb1jsnfcebe9b38a4f';
const getmoviedata = async() => {
    const res=await axios.get('https://movie-database-imdb-alternative.p.rapidapi.com/');
    console.log(res.data);

};
getmoviedata();

  return (
  <div>
    <div className="container">
        <div className="row">
            <Movieitem/>
        </div>
    </div>
  </div>
  );
}

export default Movislist;
