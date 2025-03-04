
import { useNavigate } from "react-router-dom";
// import data from "../DB/dataup";
import { useEffect, useState } from 'react';
import Navbar from "./Navbar";
function Home() {

  // const [stateindex, setStateindex] = useState(null)
  // const [disindex, setdisindex] = useState(null)
  const [country, setcountry] = useState([])
  const [state, setstate] = useState([])
  const [data, setdata] = useState([])
  const [newcountry, setnewcountry] = useState('')
  const [is_admin, setadmin] = useState('false')
  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem('user') == null)
      navigate('/login')
    setadmin(localStorage.getItem('is_admin'))
    fetchdata()
  }, [])
  const fetchdata = () => {
    fetch('http://localhost:3001/countries')
      .then(res => {
        res.json()
          .then(data => {
            setdata(data)
          })
      })
      .catch(err => { console.log(err) })
  }

  function setcountryindex(value) {
    let res = country.find((item) => item === value)
    if (res == undefined) {
      setcountry(country.concat([value]));
    }
  }
  function removecountry(value) {
    country.map((item, index) => {
      if (item == value)
        setcountry(country.slice(0, index).concat(country.slice(index + 1)))
    })
  }

  function setstatein(value) {
    let res = state.find((item) => item[0] == value[0] && item[1] == value[1])
    console.log(state)
    console.log(value)
    if (res == undefined) {
      setstate(state.concat([value]));
    }
  }

  function removestate(value) {
    state.map((item, index) => {
      if (item == value)
        setstate(state.slice(0, index).concat(state.slice(index + 1)))
    })
  }

  function addnewcountry() {
    const err = document.getElementById('cerr')
    const newcname = document.getElementById('newcname').value
    let res
    if (newcname) {

      try {
        fetch("http://localhost:3001/addcountry", {
          method: "POST",
          body: JSON.stringify({
            "cname": newcname
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        })
          .then(response => response.json())
          .then(json => {
            err.innerText = json.msg
            if (json.msg == 'country added') {
              err.innerText = ''
              document.getElementById('cform').reset()
              document.querySelector('[data-bs-dismiss="modal"]').click()
              fetchdata()
            }
          })
          .catch(err => { err.innerText = err })
      }
      catch (err) {
        console.log(err)
      }

    }
    else {
      err.innerText = 'country should me empty'
    }

  }


  function addnewstate() {
    const err = document.getElementById('serr')
    const newsname = document.getElementById('newsname').value
    const newcnames = document.getElementById('newcnames').value
    if (newsname && newcnames != '') {
      try {
        fetch("http://localhost:3001/addstate", {
          method: "POST",
          body: JSON.stringify({
            "cname": newcnames,
            "sname": newsname
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        })
          .then(response => response.json())
          .then(json => {
            err.innerText = json.msg
            if (json.msg == 'state added') {
              document.querySelector('[data-bs-dismiss="modal"]').click()
              document.getElementById('dform').reset()
              fetchdata()
            }
          })
          .catch(err => { err.innerText = err })
      }
      catch (err) {
        console.log(err)
      }

    }
    else if (!newsname) {
      err.innerText = 'state should me empty'
    } else if (newcnames == '') {
      err.innerText = 'select any country'
    }
  }

  function addnewdistrict() {
    const err = document.getElementById('derr')
    const cname = data[document.getElementById('cnamed').value].cname
    const sname = document.getElementById('snamed').value
    const dname = document.getElementById('dnamed').value
    const img = document.getElementById('imgd').value
    const des = document.getElementById('desd').value
    console.log(cname)
    if (cname && sname && dname && img && des) {

      try {
        fetch("http://localhost:3001/adddistrict", {
          method: "POST",
          body: JSON.stringify({
            "cname": cname,
            "sname": sname,
            "dname": dname,
            "img": img,
            "description": des
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        })
          .then(response => response.json())
          .then(json => {
            err.innerText = json.msg
            if (json.msg == 'district added') {
              document.getElementById('cform').reset()
              document.querySelector('[data-bs-dismiss="modal"]').click()
              fetchdata()
            }
          })
          .catch(err => { err.innerText = err })
      }
      catch (err) {
        console.log(err)
      }

    }
    else {
      err.innerText = 'all fields are mandatory'
    }


  }



  // function setDindex(value) {
  //   if (value == '')
  //     setdisindex(null)
  //   else
  //     setdisindex(value)
  // }
  // function setSindex(value) {
  //   if (value == '')
  //     setStateindex(null)
  //   else
  //     setStateindex(value)
  //   setDindex('')
  // }

  function Districtsinfo({ index, countryindex }) {

    const district = data[countryindex]['states'][index]['districts']

    function cardclick(ClickedElement) {
      ClickedElement.cname = data[countryindex].cname
      ClickedElement.sname = data[countryindex]['states'][index].sname
      navigate('/card', { state: [ClickedElement] })
    }

    return (
      <>
        {district.map(element => {
          return (
            <div className='dcard' onClick={() => { cardclick(element) }}>
              <div className='heading'> <b>{element.dname.toUpperCase()}</b></div>
              <div className='imgstyle'>
                <img src={element['img']} width='200px' ></img>
              </div>

              <div className='descriprion'> <p>{element.description}</p></div>
            </div>
          )
        })}
      </>
    )
  }

  function AllDistrictsinfo({ countryindex }) {
    const states = data[countryindex]['states']
    return (
      <>

        {
          states.map((item, index) => {
            return <Districtsinfo index={index} countryindex={countryindex} />
          })
        }
      </>
    )
  }

  return (


    <div  style={{'height':'100vh'}}>
      <Navbar />

    
      <div className='select'>
        {/* <select onChange={(event) => { setSindex(event.target.value) }}>
          <option value={''}>select Country</option>
          {data.map((element, index) => {
            return <option value={index}>{element.cname}</option>
          })}
        </select>

        <select id='selectst' onChange={(event) => { setDindex(event.target.value); }}>
          {stateindex != null && <option value={''} >select State</option>}

          {stateindex != null ? data[stateindex]['states'].map((element, index) => {
            return <option value={index}>{element.name}</option>
          }) : <option>select country</option>
          }
        </select> */}

        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Select Country
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            {data.map((element, index) => {
              return <a className="dropdown-item" value={index} onClick={() => { setcountryindex(index) }}>{element.cname}</a>
            })}

            {is_admin == 'true' && <a className="dropdown-item" data-bs-toggle="modal" data-bs-target="#addcountry">
              Add coutry
            </a>}
          </div>
        </div>

        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Select State
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            {country.length >= 1 && country.map((item) => {
              return data[item]['states'].map((element, index) => {
                return <a className="dropdown-item" value={index} onClick={() => { setstatein([item, index]) }}>{element.sname}</a>
              })
            })}
            {is_admin == 'true' && <a className="dropdown-item" data-bs-toggle="modal" data-bs-target="#addstate">
              Add State
            </a>}
          </div>
        </div>
        {is_admin == 'true' && <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#adddistrict">
          Add district
        </button>}


        <div className="modal fade" id="addcountry" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">New Country</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => { document.getElementById('cform').reset(); document.getElementById('cerr').innerText = '' }}></button>
              </div>
              <div className="modal-body">
                <p id='cerr'></p>
                <form id="cform">
                  <label htmlFor="newcname">Enter Country Name: </label>
                  <input type="text" id="newcname" style={{ 'width': "50%" }}></input>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => { document.getElementById('cform').reset(); document.getElementById('cerr').innerText = '' }} >Close</button>
                <button type="button" className="btn btn-primary" onClick={addnewcountry}>Save changes</button>
              </div>
            </div>
          </div>
        </div>

        <div className="modal fade" id="addstate" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">New state</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => { document.getElementById('sform').reset(); document.getElementById('serr').innerText = '' }} ></button>
              </div>
              <div className="modal-body">
                <p id='serr'></p>
                <form id="sform">
                  <div style={{ 'padding': '10px 3px 10px 13px' }}>
                    <label htmlFor=""> Select  Country :</label>
                    <select id='newcnames' onChange={(event) => { }} style={{ 'width': '50%' }} >
                      <option value={''}>select Country</option>
                      {data.map((element) => {
                        return <option value={element.cname}>{element.cname}</option>
                      })}
                    </select>
                  </div>
                  <label htmlFor="newsname">Enter State Name: </label>
                  <input type="text" id="newsname" style={{ 'width': "50%" }}></input>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => { document.getElementById('sform').reset(); document.getElementById('serr').innerText = '' }}>Close</button>
                <button type="button" className="btn btn-primary" onClick={addnewstate}>Save changes</button>
              </div>
            </div>
          </div>
        </div>

        <div className="modal fade" id="adddistrict" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">New District</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => { document.getElementById('dform').reset(); document.getElementById('derr').innerText = '' }} ></button>
              </div>
              <div className="modal-body">
                <p id='derr'></p>
                <form id='dform' style={{ 'display': 'flex', 'flexDirection': 'column', 'alignItems': 'center', 'gap': '5px' }}>


                  <select id='cnamed' style={{ 'width': '90%' }} onChange={(event) => { setnewcountry(event.target.value) }} >
                    <option value={''}>select Country</option>
                    {data.map((element, index) => {
                      return <option value={index}>{element.cname}</option>
                    })}
                  </select>


                  <select id='snamed' style={{ 'width': '90%' }} onChange={(event) => { }} >
                    {newcountry != '' ?
                      <>
                        <option value={''}>select state</option>
                        {data[newcountry]['states'].map((element) => {
                          return <option value={element.sname}>{element.sname}</option>
                        })}</> : <option>select country</option>}
                  </select>

                  <input type="text" id="dnamed" placeholder="Enter district name" style={{ 'width': "90%" }}></input>

                  <input type="text" id="imgd" placeholder="Enter image url" style={{ 'width': "90%" }}></input>

                  <textarea type="text" id="desd" placeholder="Enter description" style={{ 'width': "90%" }}></textarea>

                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => { document.getElementById('dform').reset(); document.getElementById('derr').innerText = '' }}>Close</button>
                <button type="button" className="btn btn-primary" onClick={addnewdistrict}>Save changes</button>
              </div>
            </div>
          </div>
        </div>

        {(country.length >= 1 && state.length <= 0) &&
          country.map((item) => { return <span id="span">{data[item].cname} <button type="button" class="btn-close" aria-label="Close" onClick={() => removecountry(item)}></button> </span> })}

        {state.length >= 1 &&
          state.map((item) => { return <span id="span">{data[item[0]]['states'][item[1]].sname} <button type="button" class="btn-close" aria-label="Close" onClick={() => removestate(item)} ></button> </span> })}



      </div>
         
      

      <div className="divcard">

        {/* {disindex == null && stateindex == null ? <h1> select country</h1> : ''}
        {disindex != null && stateindex != null ? <div className='main'> <div><Districtsinfo index={disindex} />  </div> </div> :
          <div>
            {stateindex != null ? <div className='main'> <div><AllDistrictsinfo></AllDistrictsinfo></div> </div> : ''}
          </div>
        } */}
        {/* new  */}
        <div className='main'> <div>
          {state.length >= 1 &&
            <>{state.map((item) => {
              return <Districtsinfo index={item[1]} countryindex={item[0]}></Districtsinfo>
            })} </>}

          {(country.length >= 1 && state.length <= 0) && <> {country.map((item) => {
            return <AllDistrictsinfo countryindex={item}></AllDistrictsinfo>
          })} </>}

          {(country.length <= 0 && state.length <= 0) && <> {data.map((item, index) => {
            return <AllDistrictsinfo countryindex={index}></AllDistrictsinfo>
          })}
          </>}

          { is_admin == 'true' && <div className="dcard" data-bs-toggle="modal" data-bs-target="#adddistrict" style={{ 'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center', 'padding': '30px' }}>

            <h1 align='center'>
              click her to add new district
            </h1>

          </div>}
        </div> </div>

      </div>
    </div>

  );
}
export default Home
