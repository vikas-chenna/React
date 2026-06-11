import React, { useEffect, useState } from "react";
import {useLoaderData} from 'react-router-dom'

function Github() {
  const data = useLoaderData();


  // this is take a little long time to fetch we can use another method that will fetch when user hover on it in this case navbar github  

  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch("https://api.github.com/users/vikas-chenna")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);

  return (
    <>
      <div className="text-center m-4 bg-gray-800 text-white p-4 text-3xl rounded-3xl relative left-[35%] w-[30%]">
        My Github Followers : {data.followers}
        <img
          className=" rounded-2xl m-4 relative mt-10 left-[20%]"
          src={data.avatar_url}
          alt="Git picture"
          width={300}
        />
        <h3>{data.name}</h3>
      </div>
    </>
  );
}

export default Github


export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/vikas-chenna")
  return response.json()
}