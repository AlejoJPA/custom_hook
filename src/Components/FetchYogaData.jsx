import React from 'react';
import './FetchData.css'; // for stetic display in CSS
import UseFetch from './UseFetch';

const FetchData = () => {
  const [data] = UseFetch('https://api.npoint.io/4459a9a10e43812e1152');
  console.log(data);
  /* To display data at the Front End by iteration use contruct {<ul>...{data && data.map((e) => (<li>...</li>))}<ul>}*/
  return (
    <>
     <ul className='list_data_main'>
        <h1 className='usefetch_heading'>YOGA DATA</h1>
        {data && data.map((e) => (
          <li className='list_data'>
            <h3>{e.name}</h3>
            <p><strong>Benefits:</strong>{e.benefits}</p>
            <p><strong>Trainig Time:</strong>{e.time_duration}</p>
          </li>
        ))}
     </ul>
    </>
  )
};

export default FetchData;