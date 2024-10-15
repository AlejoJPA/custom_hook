import React from 'react';
import UseFetch from './UseFetch';

const FetchData = () => {
  const [data] = UseFetch('');
  console.log(data);
  return (
    <>
     <ul className='list_data_main'>
        <h1 className='usefetch_heading'>Use Fetch Custom Hook</h1>
     </ul>
    </>
  )
};

export default FetchData;