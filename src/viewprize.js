import React, { useContext,useEffect, useState } from 'react'
import Topn from './topnme'
import Navibar from './navibar'
import { store2 } from './App'
import { useLocation } from 'react-router-dom'
import Hoc from './hoc'
import axios from 'axios'

const Viewprize = () => {

    const user = useContext(store2)

    const location = useLocation()
    const queryParm = new URLSearchParams(location.search);
    const email = queryParm.get('email')
    const gifno = queryParm.get('gifno')
    const gifname = queryParm.get('gifname')
    const gifdisc = queryParm.get('gifdisc')
    const giftime = queryParm.get('giftime')
    const email1 = queryParm.get('email1')
    const rank = queryParm.get('rank')
    const gifimgurl = queryParm.get('gifimgurl')
    localStorage.setItem('email', email);

    const reactkey = process.env.REACT_APP_API_KEY

    useEffect(() => {
          fetch(`https://3.87.25.45/winnn/data/${email}?key=${reactkey}`)
          .then(res => res.json())
          .then(info => setData(info))
  
        fetch(`https://3.87.25.45/way01/${email}?key=${reactkey}`)
      .then(res => res.json())
      .then(data => setQnoo(data))

      fetch(`https://3.87.25.45/gif/won/data/${email1}?key=${reactkey}`)
      .then(res => res.json())
      .then(data => setWondata(data))
      },[])

      const [wondata, setWondata] = useState([])
      const [data, setData] = useState([])
      const [qnoo, setQnoo] = useState([])

      const Submitt = (e) =>{
        e.preventDefault();
        axios.post('https://3.87.25.45/check/won/data',{email1})
        .then(res => {
            if(res.data.Status === "None"){
                e.preventDefault();
                axios.post('https://3.87.25.45/gif/won/data',{gifno, gifname,gifdisc, giftime, email1, gifimgurl,rank, })
                .then(res => {
                    if(res.data.Status === "OK"){
                        window.location.reload()
                    }else{
                        alert("Something Went Wrong")
                    }
                })
            } else{
                window.location.reload()
            }
        })
      }


  return (
    <div>
        <Navibar />
        <Topn/>
        {user.email === email &&
      <center>
        {qnoo.qno1 === "Yes" ?
        <div>
            <span>You'r Out Now</span>
        </div> 
        :
        <div>
            <div>
                {wondata.map((user, u) =>{
                    if(user.email1 === email){
                        return(
                            <div key={u}>
                                <div className='viw-cnt-01'>
                                <snap className='viw-cnt-01-snap-01'>{user.rank} Rank</snap><br />
                                <snap className='viw-cnt-01-snap-02'>{user.gifname}</snap><br />
                                <div className='viw-cnt-02'>
                                    <img src={user.gifimgurl} alt='img' />
                                </div>
                                <snap className='viw-cnt-01-snap-03'>{user.giftime}</snap>
                                <p className='viw-cnt-01-p-01'>{user.gifdisc}</p>
                                </div> 
                            </div>
                        )
                    }
                })}

                {qnoo.qno7 === "True" && 
                <div>
                    {data.map((user) =>{
                        return(
                            <div>
                                <center>
                                    {user.email === email &&
                                    <div>
                                        <form onSubmit={Submitt}>
                                            <button type='submit' className='vwz-btn-01' >View</button>
                                        </form>
                                    </div>
                                    }
                                </center>
                            </div>
                        )
                    })}
                </div>}

            </div>
        </div>}
      </center>}
    </div>
  )
}

export default Hoc(Viewprize)
