import React, { useContext } from 'react'
import { UserContext } from './UserContext';
import FirstPage from './FirstPage';
import LoginAndRegister from './LoginAndRegister';


export default function Routes() {
    const {username, id} = useContext(UserContext);
    
    if(username){
      return <FirstPage/>;
    }
  return (
    <LoginAndRegister/>
  )
}
