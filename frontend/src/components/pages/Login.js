import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import { useHistory } from 'react-router';
import LoginBackground from './LoginBackground';
import { useCookies } from 'react-cookie';


const Login = () => {
    const[email, setEmail] = useState("");
    const[userName, setUserName] = useState("");
    const[password, setPassword] = useState("");
    const[isPending, setIsPending] = useState(false);
    const[cookies, setCookie] = useCookies(['user'])
    const history = useHistory();

    //const dispatch = useDispatch();



    
    const handleSubmit = (e) => {
        e.preventDefault();
        const UserInfo = {userName, email, password}

        setIsPending(true);
        fetch("http://localhost:3456/api/verify/login",{
          method:"POST",
          headers:{"Content-Type": "application/json"},
          body:JSON.stringify(UserInfo)
        }).then((res) => {
          setIsPending(false);
          return res.json();
          //history.push('/UserPage');
        }).then(data => {
          const items = data;
          if(items != 'undefined'){
            setCookie('userName', items.userName, { path:'/'});
            setCookie('_id', items._id, { path:'/' });
            setCookie('email', items.email, { path:'/' });
            setCookie('level', items.level, { path: '/'});
            history.push('/UserPage');
          }
          
        })
        
    }
    

    return(
      <div className='signup-wrap'>
        <LoginBackground/>
        <div className="CreateYourOwnRecipe">
          <br></br>
          <br></br>
          <h2>Log In</h2>
          <form onSubmit={handleSubmit}>
              <label>E-mail</label>
              <input
                type="string"
                required
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>UserName</label>
              <input
                type="string"
                required
                name='username'
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
              <label>Password</label>
              <input
                type="password"
                required
                id="pwd"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              
              { !isPending && <button>Log In</button>}
              { isPending && <button disabled>loading...</button>}
          </form>
          <br></br>
          <p>
            Don't have account?
          </p>
          <Link
          to="/SignUp">
            Sign Up
          </Link>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
        </div>
      </div>
  )
}

export default Login;