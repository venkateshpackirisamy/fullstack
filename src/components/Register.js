import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

function Register(){
    const navigate = useNavigate()
    const [err,seterr] = useState(null)
    const [status,setstatus] = useState(null)
    useEffect(()=>{
      if (status== 'user added')
          navigate('/login')
    },[status])
    function createemp(e){
        e.preventDefault()
         let username = document.getElementById('username').value
         let firstname = document.getElementById('firstName').value
         let lastname = document.getElementById('lastName').value
         let password = document.getElementById('password').value
         let rpasssword = document.getElementById('rpassword').value
         let email = document.getElementById('email').value
        const newuser = { username,firstname,lastname,password,rpasssword,email}
        let valid = true
        let errmsg = ` `
        Object.keys(newuser).forEach( item=>{
            if (!newuser[item]){
                valid = false
                errmsg +=`${item} should not be empty \n `
            }
        })
        if (password != rpasssword){
          valid =false
          errmsg +=` password and retype password must be same \n `
        }
        seterr(errmsg)
        if (valid)
        {
            fetch('http://localhost:3001/createuser',{
                method: "POST",
                body: JSON.stringify(newuser),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
            .then(response => response.json())
            .then(json => {setstatus(json.msg)})
            .catch(err=>{setstatus(err)})

        }

    }


    return <section className="vh-110 gradient-custom" id="res">
    <div className="container py-5 h-100">
      <div className="row justify-content-center align-items-center h-100">
        <div className="col-12 col-lg-9 col-xl-7">
          <div className="card shadow-2-strong card-registration" style={{borderRadius : "15px;"}}>
            <div className="card-body p-4 p-md-5">
              <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
              <pre style={{'color':'red'}}>{err}</pre>
            <h6 style={{'color:':'red'}}>{status}</h6>
              <form id='createform'>
              <div className="row">
                  <div className="col-md-6 mb-4">
  
                    <div data-mdb-input-init className="form-outline">
                      <input type="text" id="username" className="form-control form-control-lg" />
                      <label className="form-label" for="username">User Name</label>
                    </div>
  
                  </div>
                  <div className="col-md-6 mb-4">
  
                    
  
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-4">
  
                    <div data-mdb-input-init className="form-outline">
                      <input type="text" id="firstName" className="form-control form-control-lg" />
                      <label className="form-label" for="firstName">First Name</label>
                    </div>
  
                  </div>
                  <div className="col-md-6 mb-4">
  
                    <div data-mdb-input-init className="form-outline">
                      <input type="text" id="lastName" className="form-control form-control-lg" />
                      <label className="form-label" for="lastName">Last Name</label>
                    </div>
  
                  </div>
                </div>
  
                <div className="row">
                  <div className="col-md-6 mb-4 d-flex align-items-center">
  
                    <div data-mdb-input-init className="form-outline datepicker w-100">
                      <input type="password" className="form-control form-control-lg" id="password" />
                      <label for="password" className="form-label">New Password</label>
                    </div>
  
                  </div>
                  <div className="col-md-6 mb-4">

                  <div data-mdb-input-init className="form-outline">
                      <input type="password" id="rpassword" className="form-control form-control-lg" />
                      <label className="form-label" for="rpasssword">Retype  password</label>
                    </div>
                    
                  </div>
                </div>
  
                <div className="row">
                  <div className="col-md-6 mb-4 pb-2">
  
                    <div data-mdb-input-init className="form-outline">
                      <input type="text" id="email" className="form-control form-control-lg" />
                      <label className="form-label" for="email">Email</label>
                    </div>
  
                  </div>
                  <div className="col-md-6 mb-4 pb-2">
   
                  </div>
                </div>
   
                <div className="mt-4 pt-2">
                  <button data-mdb-ripple-init className="btn btn-primary btn-lg" onClick={ (event)=>{createemp(event) }} >Submit</button>
                </div>
  
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

}
export default Register