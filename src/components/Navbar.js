import { useEffect, useState } from "react"
import { Link, useNavigate,  } from "react-router-dom"
function Navbar(){
    const navigate = useNavigate()
    const[user,setUser] = useState(null)
    useEffect(()=>{
        setUser(localStorage.getItem('user'))
    },[])
    function logout(){
      localStorage.clear()
      navigate('/login')
    }
    return(
        <>
        <div className='navbar'>
        <ul type='none'>
          <li>
            <Link to='/' style={{'textDecoration':'none','color':'black' ,'fontSize':'1.5em'}}>Home</Link>
          </li>
          <li>
            <Link to='/about' style={{'textDecoration':'none','color':'black','fontSize':'1.5em'}}>About</Link>
          </li>
        </ul>
        {user != null && <button onClick={logout} className="btn btn-danger btn-lg btn-block">Logout</button>}
      </div>
      
      </>
    )
}
export default Navbar