import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
function Card() {
    const { state } = useLocation();
    const navigate = useNavigate()
    function deletedistrict(value){
        try {
            fetch("http://localhost:3001/deletedistrict", {
              method: "POST",
              body: JSON.stringify({       
                "cname":value.cname,
                "sname":value.sname,
                "dname":value.dname
              }),
              headers: {
                "Content-type": "application/json; charset=UTF-8"
              }
            })
              .then(response => response.json())
              .then(json => {
                if (json.msg == 'district deleted') {
                  navigate('/')
                }
              })
              .catch(err => { console.log(err) })
          }
          catch (err) {
            console.log(err)
          }
    }

    return (
        <>
        <Navbar />
        <div className="selectedCard">
            <div>
                <h3> {state[0]['dname'].toUpperCase()}</h3>
                <img src={state[0]['img']} width="600px"></img>
                <p>{state[0]['description']}</p>
            </div>
            
            
            { localStorage.getItem('is_admin')=='true' && <button className="btn btn-danger" onClick={()=>(deletedistrict(state[0]))}>Delete</button>}
        </div>
        </>
    )
}
export default Card