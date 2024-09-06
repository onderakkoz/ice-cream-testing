import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Toppings = () => {
  // sosların state'i
const [data, setData] = useState([]);

//seçilen sos çeşitlerin state'i
const [basket, setBasket] = useState([]);

  useEffect(() =>{
    axios
    .get("http://localhost:3000/toppings")
    .then((res)=> setData(res.data));
  },[]);

//iki proops alacak 1. eleman tiklendimi 2. tiklenilen proopun bilgileri
const handleChange = ( isChecked, item) => {
  //eğer tiklendiyse elemanı ekle eğer tik kaldırıldıysa sepetten elemanı filtr ile kaldır
isChecked 
? setBasket([...basket,item]) 
: setBasket(basket.filter((i) => i.name !== item.name));

};
console.log(basket);
  return (
    <div>
      <h1>Sos Çeşitleri</h1>
      <p>Tanesi: <span className='text-success p-1'>3</span>₺</p>
      {/**sosların toplam ücreti */}
      <h3>Solar Ücreti:{" "} <span data-testid="total" className='text-success p-1'>{basket.length * 3}</span></h3>

      <div className='row mt-4 gap-3 p-3'>
{data.map((i)=>(
  <div className='top-card col' key={i.id}> 
  <label htmlFor={i.name}>
  <img src={i.imagePath} height={100} alt="" />
  <p className='text-nowrap text-center'>{i.name}</p>
  
  </label>
  <input onChange={(e) => handleChange(e.target.checked, i)} 
  id={i.name} type="checkbox" />
   </div>
))}
      </div>
        
    </div>
  );
}

export default Toppings;