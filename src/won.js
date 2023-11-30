import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import Hoc from './hoc';
import Navibar from './navibar';
import { ipp3 } from './App';
import axios from 'axios';
import Topn from './topnme';
import Winn from './images/winstamp.png'

const Won = () => {


  const location = useLocation()
    const queryParm = new URLSearchParams(location.search);
    const email = queryParm.get('email')
    const id = queryParm.get('id')
    localStorage.setItem('email', email);

    const IP = useContext(ipp3);

    const [verify, setVerify] = useState([])


    const[count, setCount] = useState([])

    const[prize, setPrize] = useState([])
    const[prize5, setPrize5] = useState([])
    const[prize4, setPrize4] = useState([])
    const[prize3, setPrize3] = useState([])
    const[prize2, setPrize2] = useState([])
    const[prize1, setPrize1] = useState([])
    const[starget , setStarget] = useState([])

    const reactkey = process.env.REACT_APP_API_KEY

    useEffect(() => {
      fetch(`https://3.87.25.45/way01/${email}?key=${reactkey}`)
        .then(res => res.json())
        .then(info => setVerify(info))

        fetch(`https://3.87.25.45/star/tot/one/get/${email}?key=${reactkey}`)
        .then(res => res.json())
        .then(info => setStarget(info))

        fetch(`https://3.87.25.45/winnn/length?key=${reactkey}`)
        .then(res => res.json())
        .then(info => setCount(info))

        fetch(`https://3.87.25.45/prize/data?key=${reactkey}`)
        .then(res => res.json())
        .then(info => setPrize(info))

        fetch(`https://3.87.25.45/prize/05/data?key=${reactkey}`)
        .then(res => res.json())
        .then(info => setPrize5(info))

        fetch(`https://3.87.25.45/prize/04/data?key=${reactkey}`)
        .then(res => res.json())
        .then(info => setPrize4(info))

        fetch(`https://3.87.25.45/prize/03/data?key=${reactkey}`)
        .then(res => res.json())
        .then(info => setPrize3(info))

        fetch(`https://3.87.25.45/prize/02/data?key=${reactkey}`)
        .then(res => res.json())
        .then(info => setPrize2(info))

        axios.get(`https://3.87.25.45/prize/01/data?key=${reactkey}`)
        .then(res =>{
          setPrize1(res.data)
        })
        .catch(err => console.log(err))

        fetch(`https://3.87.25.45/user/${email}?key=${reactkey}`)
        .then(res => res.json())
        .then(info => setData(info))


    }, [])

    const [data, setData] = useState([])
    const username = data.username;

    

    const [qno1 , setQno1] = useState({
      qno1: "Yes",
    })
  
    const [qno2 , setQno2] = useState({
      qno2: "Out",
    })
  
    const [qno3 , setQno3] = useState({
      qno3: "Out",
    })
  
    const [qno4 , setQno4] = useState({
      qno4: "Out",
    })
  
    const [qno5 , setQno5] = useState({
      qno5: "Out",
    })
  
    const [qno6 , setQno6] = useState({
      qno6: "Out",
    })
  
    const [qno7 , setQno7] = useState({
      qno7: "Out",
    })
  
    const [qno8 , setQno8] = useState({
      qno8: "Out",
    })
  
    const [qno9 , setQno9] = useState({
      qno9: "Out",
    })
  
    const [qno10 , setQno10] = useState({
      qno10: "Out",
    })
    
  
    const Elim1 = async (e) => {
      const response = await fetch(`https://3.87.25.45/way01/put/${id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(qno1),
          });
          
          if (response.ok) {            
              const response = await fetch(`https://3.87.25.45/way01/put/${id}`, {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(qno1),
              });
          } else {
            console.error('Failed to update resource');
          }
          alert("We Blocked You, Because You Cheated Us")
          window.location.href=`/fired?email=${email}&id=${id}`
          
    }


    const Elim2 = async (e) => {
      const response = await fetch(`https://3.87.25.45/way01/put/${id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(qno2),
          });
          
          if (response.ok) {            
              const response = await fetch(`https://3.87.25.45/way01/put/${id}`, {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(qno1),
              });
          } else {
            console.error('Failed to update resource');
          }
          alert("We Blocked You, Because You Cheated Us")
          window.location.href=`/fired?email=${email}&id=${id}`
          
    }

    const Elim3 = async (e) => {
      const response = await fetch(`https://3.87.25.45/way01/put/${id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(qno3),
          });
          
          if (response.ok) {            
              const response = await fetch(`https://3.87.25.45/way01/put/${id}`, {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(qno1),
              });
          } else {
            console.error('Failed to update resource');
          }
          alert("We Blocked You, Because You Cheated Us")
          window.location.href=`/fired?email=${email}&id=${id}`
          
    }

    const Elim4 = async (e) => {
      const response = await fetch(`https://3.87.25.45/way01/put/${id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(qno4),
          });
          
          if (response.ok) {            
              const response = await fetch(`https://3.87.25.45/way01/put/${id}`, {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(qno1),
              });
          } else {
            console.error('Failed to update resource');
          }
          alert("We Blocked You, Because You Cheated Us")
          window.location.href=`/fired?email=${email}&id=${id}`
          
    }

    const Elim5 = async (e) => {
      const response = await fetch(`https://3.87.25.45/way01/put/${id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(qno5),
          });
          
          if (response.ok) {            
              const response = await fetch(`https://3.87.25.45/way01/put/${id}`, {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(qno1),
              });
          } else {
            console.error('Failed to update resource');
          }
          alert("We Blocked You, Because You Cheated Us")
          window.location.href=`/fired?email=${email}&id=${id}`
          
    }

    const Elim6 = async (e) => {
      const response = await fetch(`https://3.87.25.45/way01/put/${id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(qno6),
          });
          
          if (response.ok) {            
              const response = await fetch(`https://3.87.25.45/way01/put/${id}`, {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(qno1),
              });
          } else {
            console.error('Failed to update resource');
          }
          alert("We Blocked You, Because You Cheated Us")
          window.location.href=`/fired?email=${email}&id=${id}`
          
    }

    const Elim7 = async (e) => {
      const response = await fetch(`https://3.87.25.45/way01/put/${id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(qno7),
          });
          
          if (response.ok) {            
              const response = await fetch(`https://3.87.25.45/way01/put/${id}`, {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(qno1),
              });
          } else {
            console.error('Failed to update resource');
          }
          alert("We Blocked You, Because You Cheated Us")
          window.location.href=`/fired?email=${email}&id=${id}`
          
    }

    const Elim8 = async (e) => {
      const response = await fetch(`https://3.87.25.45/way01/put/${id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(qno8),
          });
          
          if (response.ok) {            
              const response = await fetch(`https://3.87.25.45/way01/put/${id}`, {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(qno1),
              });
          } else {
            console.error('Failed to update resource');
          }
          alert("We Blocked You, Because You Cheated Us")
          window.location.href=`/fired?email=${email}&id=${id}`
          
    }

    const Elim9 = async (e) => {
      const response = await fetch(`https://3.87.25.45/way01/put/${id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(qno9),
          });
          
          if (response.ok) {            
              const response = await fetch(`https://3.87.25.45/way01/put/${id}`, {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(qno1),
              });
          } else {
            console.error('Failed to update resource');
          }
          alert("We Blocked You, Because You Cheated Us")
          window.location.href=`/fired?email=${email}&id=${id}`
          
    }

    const Elim10 = async (e) => {
      const response = await fetch(`https://3.87.25.45/way01/put/${id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(qno10),
          });
          
          if (response.ok) {            
              const response = await fetch(`https://3.87.25.45/way01/put/${id}`, {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(qno1),
              });
          } else {
            console.error('Failed to update resource');
          }
          alert("We Blocked You, Because You Cheated Us")
          window.location.href=`/fired?email=${email}&id=${id}`
          
    }


    function Run(){
      window.location.href=`/fired?email=${email}&id=${id}`
    }

    function Won(){
      axios.post('https://3.87.25.45/won/id/check',{email})
      .then(res => {
        if(res.data.Status === "OK"){
          const no = count.dataLength+1;
          window.location.href = `/prize?email=${email}&no=${no}`
        }else{
          const rank = count.dataLength+1;
          axios.post("https://3.87.25.45/won/match" ,{email , IP, rank})
          .then(res => {
            if(res.data.Status === "OK"){
              Star()
            }else{
              alert("something went wrong")
            }
          })
        }
      })
    }

    const Star = () =>{
      const no = count.dataLength+1;
      {prize.map((user,i) =>{
        if(no <= user.total){
          const star = "0"
          axios.post("https://3.87.25.45/winnn",{email, IP, star, no, username})
          .then(res =>{
            if(res.data.Status === "OK"){
              window.location.href = `/prize?email=${email}&no=${no}`
            }
          })
        }else{
          Star5()
        }
      })}
    }

    const Star5 = () =>{
      const no = count.dataLength+1;
      {prize5.map((user,i) =>{
        if(no <= user.total){
          const star = "5"
          axios.post("https://3.87.25.45/winnn",{email, IP, star, no, username})
          .then(res =>{
            if(res.data.Status === "OK"){
              Add5()
            }
          })
        }else{
          Star4()
        }
      })}
    }
    const Add5 = () =>{
      axios.post("https://3.87.25.45/chek/star",{email})
      .then(res=>{
        if(res.data.Status === "OK"){
          const no = count.dataLength+1;
          {starget.map((user) =>{
            const stars = parseInt(user.stars) + 5
            axios.put(`https://3.87.25.45/star/tot/put/${user._id}`,{stars})
            .then(res => {
              if(res.data.Status === "OK"){
                window.location.href = `/prize?email=${email}&no=${no}`
              }
            })
          })}
        }else{
          const stars = "5"
          const no = count.dataLength+1;
          axios.post("https://3.87.25.45/star/tot", {email, stars})
          .then(res =>{
            if(res.data.Status === "OK"){
              window.location.href = `/prize?email=${email}&no=${no}`
            }else{
              alert("something went")
            }
          })
        }
      })      
    }

    

    const Star4 = () =>{
      const no = count.dataLength+1;
      {prize4.map((user,i) =>{
        if(no <= user.total){
          const star = "4"
          axios.post("https://3.87.25.45/winnn",{email, IP, star, no, username})
          .then(res =>{
            if(res.data.Status === "OK"){
              Add4()
            }
          })
        }else{
          Star3()
        }
      })}
    }



    const Add4 = () =>{
      axios.post("https://3.87.25.45/chek/star",{email})
      .then(res=>{
        if(res.data.Status === "OK"){
          const no = count.dataLength+1;
          {starget.map((user) =>{
            const stars = parseInt(user.stars) + 4
            axios.put(`https://3.87.25.45/star/tot/put/${user._id}`,{stars})
            .then(res => {
              if(res.data.Status === "OK"){
                window.location.href = `/prize?email=${email}&no=${no}`
              }
            })
          })}
        }else{
          const stars = "4"
          const no = count.dataLength+1;
          axios.post("https://3.87.25.45/star/tot", {email, stars})
          .then(res =>{
            if(res.data.Status === "OK"){
              window.location.href = `/prize?email=${email}&no=${no}`
            }else{
              alert("something went")
            }
          })
        }
      })      
    }


    const Star3 = () =>{
      const no = count.dataLength+1;
      {prize3.map((user,i) =>{
        if(no <= user.total){
          const star = "3"
          axios.post("https://3.87.25.45/winnn",{email, IP, star, no, username})
          .then(res =>{
            if(res.data.Status === "OK"){
              Add3()
            }
          })
        }else{
          Star2()
        }
      })}
    }



    const Add3 = () =>{
      axios.post("https://3.87.25.45/chek/star",{email})
      .then(res=>{
        if(res.data.Status === "OK"){
          const no = count.dataLength+1;
          {starget.map((user) =>{
            const stars = parseInt(user.stars) + 3
            axios.put(`https://3.87.25.45/star/tot/put/${user._id}`,{stars})
            .then(res => {
              if(res.data.Status === "OK"){
                window.location.href = `/prize?email=${email}&no=${no}`
              }
            })
          })}
        }else{
          const stars = "3"
          const no = count.dataLength+1;
          axios.post("https://3.87.25.45/star/tot", {email, stars})
          .then(res =>{
            if(res.data.Status === "OK"){
              window.location.href = `/prize?email=${email}&no=${no}`
            }else{
              alert("something went")
            }
          })
        }
      })      
    }

    const Star2 = () =>{
      const no = count.dataLength+1;
      {prize2.map((user,i) =>{
        if(no <= user.total){
          const star = "2"
          axios.post("https://3.87.25.45/winnn",{email, IP, star, no, username})
          .then(res =>{
            if(res.data.Status === "OK"){
              Add2()
            }
          })
        }else{
          Star1()
        }
      })}
    }



    const Add2 = () =>{
      axios.post("https://3.87.25.45/chek/star",{email})
      .then(res=>{
        if(res.data.Status === "OK"){
          const no = count.dataLength+1;
          {starget.map((user) =>{
            const stars = parseInt(user.stars) + 2
            axios.put(`https://3.87.25.45/star/tot/put/${user._id}`,{stars})
            .then(res => {
              if(res.data.Status === "OK"){
                window.location.href = `/prize?email=${email}&no=${no}`
              }
            })
          })}
        }else{
          const stars = "2"
          const no = count.dataLength+1;
          axios.post("https://3.87.25.45/star/tot", {email, stars})
          .then(res =>{
            if(res.data.Status === "OK"){
              window.location.href = `/prize?email=${email}&no=${no}`
            }else{
              alert("something went")
            }
          })
        }
      })      
    }

    const Star1 = () =>{
      const no = count.dataLength+1;
      {prize1.map((user,i) =>{
        if(no <= user.total){
          const star = "1"
          axios.post("https://3.87.25.45/winnn",{email, IP, star, no, username})
          .then(res =>{
            if(res.data.Status === "OK"){
              Add1()
            }
          })
        }else{
          window.location.reload()
        }
      })}
    }



    const Add1 = () =>{
      axios.post("https://3.87.25.45/chek/star",{email})
      .then(res=>{
        if(res.data.Status === "OK"){
          const no = count.dataLength+1;
          {starget.map((user) =>{
            const stars = parseInt(user.stars) + 1
            axios.put(`https://3.87.25.45/star/tot/put/${user._id}`,{stars})
            .then(res => {
              if(res.data.Status === "OK"){
                window.location.href = `/prize?email=${email}&no=${no}`
              }
            })
          })}
        }else{
          const stars = "1"
          const no = count.dataLength+1;
          axios.post("https://3.87.25.45/star/tot", {email, stars})
          .then(res =>{
            if(res.data.Status === "OK"){
              window.location.href = `/prize?email=${email}&no=${no}`
            }else{
              alert("something went")
            }
          })
        }
      })      
    }

  return (
    <div>
      <Navibar />
      {verify.qno10 === "Yes" ?  
      <div>
        <center>
        <h2>You Are Out Now </h2>
        </center>
      </div>
      :
      <div>
        <Navibar />
        <Topn/>
      <center>
        <h1 className='win-cnt-un-01-h1'> You Won The Match</h1>

        {verify.qno1 === "false" && Elim1()}
        {verify.qno1 === "Out" && Elim1()}
        {verify.qno2 === "false" && Elim2()}
        {verify.qno2 === "Out" && Elim2()}
        {verify.qno3 === "false" && Elim3()}
        {verify.qno3 === "Out" && Elim3()}
        {verify.qno4 === "false" && Elim4()}
        {verify.qno4 === "Out" && Elim4()}
        {verify.qno5 === "false" && Elim5()}
        {verify.qno5 === "Out" && Elim5()}
        {verify.qno6 === "false" && Elim6()}
        {verify.qno6 === "Out" && Elim6()}
        {verify.qno7 === "false" && Elim7()}
        {verify.qno7 === "Out" && Elim7()}
        {verify.qno8 === "false" && Elim8()}
        {verify.qno8 === "Out" && Elim8()}
        {verify.qno9 === "false" && Elim9()}
        {verify.qno9 === "Out" && Elim9()}
        {verify.qno10 === "false" && Elim10()}
        {verify.qno10 === "Out" && Elim10()}
        {verify.qno1 === "Yes" && Run()}
        {verify.qno1 === "True" && <div>
          <button onClick={Won} className='btn-1' >Finish</button>
          <div className='won-cnt-01-div-may-be-04-cnt-04-img'>
          <img src={Winn} alt='img'/>
          </div>
          </div>
          
          }
      </center>
      </div>
      }
    </div>
  )
}

export default Hoc(Won)