import React, { useContext, useEffect, useState } from 'react'
import Hoc from './hoc';
import { Link, useLocation } from 'react-router-dom';
import { store2 } from './App';
import Topn from './topnme';
import Navibar from './navibar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Prizecheck = () => {

  const user = useContext(store2)
  const location = useLocation()
    const queryParm = new URLSearchParams(location.search);
    const email = queryParm.get('email')
    const gifno = queryParm.get('no')
    localStorage.setItem('email', email);

    const reactkey = process.env.REACT_APP_API_KEY

    useEffect(() => {
      fetch(`https://3.87.25.45/gif/data/${gifno}?key=${reactkey}`)
        .then(res => res.json())
        .then(info => setDatta(info))

      fetch(`https://3.87.25.45/wonnn/data/${gifno}?key=${reactkey}`)
      .then(res => res.json())
      .then(data => setWinnOne(data))

        fetch(`https://3.87.25.45/winnn/data/${email}?key=${reactkey}`)
        .then(res => res.json())
        .then(info => setData(info))

        fetch(`https://3.87.25.45/prize/data?key=${reactkey}`)
        .then(res => res.json())
        .then(info => setStar(info))


      fetch(`https://3.87.25.45/way01/${email}?key=${reactkey}`)
    .then(res => res.json())
    .then(data => setQnoo(data))

    fetch(`https://3.87.25.45/winnn/data/${email}?key=${reactkey}`)
    .then(res => res.json())
    .then(data => setValid(data))

    fetch(`https://3.87.25.45/won/data/${email}?key=${reactkey}`)
    .then(res => res.json())
    .then(info => setWondata(info))

    },[])

    const [wondata, setWondata] = useState([])
    const [datta, setDatta] = useState([]);
    const [data, setData] = useState([]);
    const [qnoo, setQnoo] = useState([]);
    const [star, setStar] = useState([]);
    const [valid, setValid] = useState([]);
    const [winnone , setWinnOne] = useState([])

    console.log("rank" + wondata.rank)


  return (
    <div>
      <Navibar />
      <Topn/>
      <center>
      </center>
      {gifno === wondata.rank &&
      <div>
      {user.email === email &&
      <center>
        {qnoo.qno1 === "Yes" ?
        <div>
        <center>
          <Navibar />
          <h2>You Are Out Now </h2>
        </center>
      </div> :
        <div>
          <div>{datta.map((user, i) => {
            return(<div key={i}>
              <div className='prz-chck-div-cnt-01'>
                <img src='https://blog.empuls.io/content/images/2022/01/what-are-employee-rewards-and-recognition.png' alt='prizes'/>
              </div>
              <span className='prz-spn-no-un-may-be-01'>Click To Claim reward</span><br/>
              <span ><Link to={`/viewprize?email=${email}&gifno=${user.gifno}&gifname=${user.gifname}&gifdisc=${user.gifdisc}&giftime=${user.giftime}&email1=${email}&rank=${gifno}&gifimgurl=${user.gifimgurl}`} className='prz-lnk-may-be-01'>Claim Reward</Link></span>
            </div>)
           })}
           </div>
        </div>}
      </center>}
      {star.map((user, i) =>{
        if(gifno > user.total){
          return(
            <div key={i}>
              <center>
                <div>
                  {winnone.star === "1" && 
                  <div className='prz-str-cnt-01'>
                    <h2>You Got {winnone.star} <span>star</span></h2>
                    <span className='prz-glo-str'><FontAwesomeIcon className='glow-5-1' icon={faStar} /></span>
                  </div>}
                  {winnone.star === "2" && 
                  <div className='prz-str-cnt-01'>
                    <h2>You Got {winnone.star} <span>stars</span></h2>
                    <span className='prz-glo-str'><FontAwesomeIcon className='glow-5-1' icon={faStar} /><FontAwesomeIcon className='glow-5-2' icon={faStar} /></span>
                  </div>}
                  {winnone.star === "3" && 
                  <div className='prz-str-cnt-01'>
                    <h2>You Got {winnone.star} <span>stars</span></h2>
                    <span className='prz-glo-str'><FontAwesomeIcon className='glow-5-1' icon={faStar} /><FontAwesomeIcon className='glow-5-2' icon={faStar} /><FontAwesomeIcon className='glow-5-3' icon={faStar} /></span>
                  </div>}
                  {winnone.star === "4" && 
                  <div className='prz-str-cnt-01'>
                    <h2>You Got {winnone.star} <span>stars</span></h2>
                    <span className='prz-glo-str'><FontAwesomeIcon className='glow-5-1' icon={faStar} /><FontAwesomeIcon className='glow-5-2' icon={faStar} /><FontAwesomeIcon className='glow-5-3' icon={faStar} /><FontAwesomeIcon className='glow-5-4' icon={faStar} /></span>
                  </div>}
                  {winnone.star === "5" && 
                  <div className='prz-str-cnt-01'>
                    <h2>You Got {winnone.star} <span>stars</span></h2>
                    <span className='prz-glo-str'><FontAwesomeIcon className='glow-5-1' icon={faStar} /><FontAwesomeIcon className='glow-5-2' icon={faStar} /><FontAwesomeIcon className='glow-5-3' icon={faStar} /><FontAwesomeIcon className='glow-5-4' icon={faStar} /><FontAwesomeIcon className='glow-5-5' icon={faStar} /></span>
                  </div>}
                  
                </div>
              </center>
            </div>
          )
        }
      })} 
      </div>}
    </div>
  )
}
export default Hoc(Prizecheck); 