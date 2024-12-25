import React, { useEffect, useState } from "react";
import { cache } from "react";
import Counter from "./Counter";

const User = () => {
  const [users, setUser] = useState([]);
  const [error, setError] = useState(false);
  const [id, setId] = useState("");

  useEffect(() => {
    const controller = new AbortController()
    const fetchUser = async()=>{
      try{
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}` ,{signal:controller.signal})
      const json = await res.json()
      setUser(json)
      console.log(json)
      }catch(error){
        setError(true)
      }
  
      
    }
    fetchUser()
    return ()=>{
      controller.abort()
    }
  }, [id]);
  // const searchHandler = async()=>{
  //   const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  //   const json = await res.json()
  //   console.log(json)
  // }

  return (
    <>
    {/* {id > 10 && <Counter/>} */}
      <input
        type="text"
        placeholder="enter id"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      {/* <button onClick={searchHandler}>Search</button> */}
      {!users.length && !error && <h1>wrong!</h1>}
      {/* <ul>
    
    {users.map((user) =>(<li key={user.id}>{user.name}</li>))}
  </ul> */}
    </>
  );
};

export default User;
