import { useNavigate } from "react-router-dom"
import users from '../DB/users'
import { useState } from "react"
function Login() {
    const navigate = useNavigate()
    const [err, setErr] = useState(null)
    function validateUser() {
        const user = document.getElementById('UserName').value
        const password = document.getElementById('Password').value
        let user_found = false
        let password_true = false
        users.forEach((item, index) => {
            if (user == item.username) {
                if (password == item.password) {
                    password_true = true
                    console.log('logined')
                    setErr(null)
                }
                user_found = true
            }

        })

        if (user_found && !password_true)
            setErr('invalid password')
        else if (!user_found)
            setErr('invalid UserName')

    }
    return (
        <div id="loginPage">
            <div id="logincard">
                <form method="" id="loginForm">
                    <h3 align='center'>Login</h3>
                    <div>
                        <label htmlFor="UserName">UserName</label>
                        <input type="text" id="UserName" name="UserName"></input>
                    </div>
                    <div>
                        <label htmlFor="Password">Password</label>
                        <input type="password" id="Password" name="Password"></input>
                    </div>
                </form>
                <div id="buttons">
                    <button onClick={() => { document.getElementById('loginForm').reset() }}>Reset</button>
                    <button onClick={() => { validateUser() }}>Login</button>
                </div>
            </div>

          
        </div>
    )
}
export default Login