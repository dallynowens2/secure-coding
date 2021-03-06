import React, {useEffect} from 'react'
import Login from './Login'
import Logout from './Logout'
import { useAuth0 } from "@auth0/auth0-react";
import Comments from './Comments';

const LoginLogout = () => {
  const { user, getAccessTokenSilently } = useAuth0();
  
  useEffect(() => {
    (async () => {
        try {
            const token = await getAccessTokenSilently({
              audience: 'https://secure/api',
              scope: 'read:userInfo, post:userInfo',
            });
    }catch (e) {
        console.error(e);
      }
        
    })();
  }, [])

  return (
    <div>
        <h1>Welcome!</h1>
        {!user ? <h3>Please sign in</h3>: <h3>Hello {user.name}</h3>}
        <Login/>
        {!user ? <div></div>: <Logout/>}
        <Comments user={user}/>
    </div>
  )
}

export default LoginLogout