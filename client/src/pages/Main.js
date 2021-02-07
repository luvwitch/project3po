import React,  {useState, useEffect} from "react";
import {Col, Row, Container} from "../components/Grid";
import "./style.css"
import { Login } from "../components/Login";

export default function Main(){

    const [seconds, setSeconds] = useState(0);
    const [secondsTwo, setSecondsTwo]= useState(0);
    const [newStyle, setNewStyle] = useState({})
    const [newerStyle, setNewerStyle] = useState({})

    const isLoggedIn = (localStorage.getItem('lightOn') === 'true');

  useEffect(() => {
  if(isLoggedIn) {
    const newLight = setNewStyle("light")
    clearInterval(newLight)
    const newerLight = setNewerStyle("lighter")
    clearInterval(newerLight)
  }else{
    const newDark = setNewStyle("dark")
  clearInterval(newDark)
  const newDarker = setNewerStyle("darker")
  clearInterval(newDarker)
  }
}, [isLoggedIn])

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsTwo(secondsTwo => secondsTwo + 1);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return(
    <div className="content-wrap"> 
      <Container>
        <div className="page-container view">               
          <div className="size">
            <br />
            <br />  
            <h1 style={{color:"black", marginRight:"25rem"}}> Welcome to Early Bird! </h1>          
          </div>
          <Row>                    
            <Col size="md-8">
            
              <div>
                <br />
                <h2 className="hcolor">Have trouble staying on time? We can help!</h2>
                <br /> 
                <br />                                
              </div>
              <br/>
              <h3 className="hcolor">How your mind measures time: {seconds}</h3>
              <br/>
              <h3 className="hcolor">How time actually goes: {secondsTwo}</h3>
              <br/>
              <h2 className="hcolor"></h2>
              <br/>
              <br/>
              <div className="spacing"></div>              
            </Col>
            <Col size="md-4"></Col>

            {/* Places the 3 boxes at the bottom of the screen */}
                        
            <div className="md-12 boxes" id={newStyle}>
              <div className="columns">
                <div>
                  <h2>Time Management</h2>
                  <p style={{margin:".5rem"}}>
                    We all have those moments where we think we have our schedule under control. Suddenly, we realize we only have 5 minutes to get somewhere 30 mintutes away.
                  </p>
                </div>
              </div>
              <div className="columns">
                <div>
                  <h2>Login</h2>
                  <p style={{margin:".5rem"}}>
                    Login to be able to use this application across your devices and never lose your schedule or forget your reminders. 
                  </p>
                </div>
              </div>
              <div className="columns">
                <div>
                  <h2>Never Be Late Again</h2>
                  <p style={{margin:".5rem"}}>
                    Early Bird takes into account the little things in life that add up to a lot of time. The time it takes for you to brush your teeth, take a shower, put on clothes, etc. can all be taken into account when creating your schedule.
                  </p>
                </div>
              </div>
            </div>
          </Row>
        </div>       
      </Container>            
    </div>
    )
}
