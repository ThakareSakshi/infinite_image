
import './App.css';
import Header from './components/Header';
import { useEffect, useState } from 'react';
import axios from 'axios'
import Images from './components/Images';

function App() {
  const [data,setData]=useState([]);
  const apikey="kVeJ9_FubrJNuP7sxiJx4M9Dc49gg5vSRaZMhr2VTj0";


  useEffect(()=>{
    const fetchData=async()=>{
      try{
        const response=await axios.get(`https://api.unsplash.com/photos/random/?client_id=${apikey}&count=10`);
         console.log(response.data)
         setData(response.data)
      }
      catch(e){
         console.log("error aala",e);
      }
    }

    fetchData()
     

  },[])

  return (
    <div className="App">
      <Header/>
      <div className='images-wrapper'>
        {
          data.map((images)=> {
            return <Images data={images}/>
          })
        }
      </div>
    </div>
  );
}

export default App;
