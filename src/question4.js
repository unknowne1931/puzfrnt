import React, { useContext, useEffect, useState } from 'react'
import {  store, store2 } from './App'
import Navibar from './navibar'
import './App.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import Hoc from './hoc'

const Ques04 = () => {
    const [data, setData] = useState([])
    const user = useContext(store2)

    const location = useLocation()
    const queryParm = new URLSearchParams(location.search);
    const email = queryParm.get('email')
    localStorage.setItem('email', email);

    const [datta, setDatta] = useState([])

    const reactkey = process.env.REACT_APP_API_KEY

    useEffect(() =>{
      fetch(`https://3.87.25.45/user/${email}?key=${reactkey}`)
      .then(res => res.json())
      .then(info => setDatta(info))

      fetch(`https://3.87.25.45/dataway04?key=${reactkey}`)
      .then(res => res.json())
      .then(info => setData(info))

  },[])
  const Wayeng = () =>{
    window.location.href=`/add4?email=${email}`
  }
    return(
      <div className='qstn-cnt-01'><Navibar/>
        <center>
          <h1>Stawro</h1>
          <button onClick={Wayeng} className='btn-admin-pnl-01'>add eng 04</button><br />
          <span>Way 04</span>
          {datta.role ==="admin" ? 
          <div>
            
            {data.map((user, i) => {
              return(
                <div key={i} className='hom-01-brd'>
                  <span>Question NO : <strong>{user.qno}</strong></span>
                  <h2 className='hom-01-h2'>{user.Question}</h2>
                  {user.img !== "" &&
                    <div>
                      <div className='que-img-i-thnk'>
                        <img src={user.img} alt='img'/>
                      </div>
                    </div>
                  }
                  <div className='hom-02-cnt'>
                    <button className='hom-btn'>{user.option1}</button>
                  </div>
                  <div className='hom-02-cnt'>
                    <button className='hom-btn'>{user.option2}</button>
                  </div> <br />
                  <div className='hom-02-cnt'>
                    <button className='hom-btn'>{user.option3}</button>
                  </div>
                  <div className='hom-02-cnt'>
                    <button className='hom-btn'>{user.option4}</button>
                  </div><br />
                  <Link className='btn-01-01' to={`/delet4?email=${email}&id=${user._id}`} >Delete</Link>
                </div>
              )
            })}
          </div> :
          <div>
          </div>
            }
        </center>

      </div>
    )
}

export default Hoc(Ques04) ;
