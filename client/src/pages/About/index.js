import React, {useState, useEffect} from "react";
import {Col, Row, Container} from "../../components/Grid";
import "./style.css"
import DevInfo from "../../components/DevInfo"

export default function About(){

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

    return(
        <Container>
        <div className="page-container">
            <div className={newStyle}>                    
                <div className={newerStyle}>
                    <Col size="md-12">
                        <h1>Curious About Early Bird?</h1>
                        <br />
                        <p>Early Bird is designed to help you with time management. It integrates your google calendar to show you your big events (and lets you add them, too!) with external information like real-time traffic in your area and current weather so you can accurately plan ahead. No more leaving the house and suddenly realizing you need an extra 10 minutes because of a traffic jam!</p>
                        <br />
                        <p> A big struggle for many people is remembering all the minor things that can hold you up. Our convenient reminders page lets you add tasks to a list so you don't have to worry about forgetting something like grabbibg milk from the store, getting gas before work, or grabbing a sweater before you leave. We'll remember so you never forget!</p>
                        <br /> 
                    </Col>     
                    <div className="card" className={newStyle} id="newColor">
                        <h3 className="card-header" className={newerStyle}>Meet the Early Bird team!</h3>
                         <div className="card-body">
                            <div className={newStyle} id="about-developers-text">
                                <Row>
                                    <Col size="md-6">
                                        <DevInfo DevPic={"https://avatars.githubusercontent.com/u/71345539?s=460&u=a726dbdbfd9076fe93775d98e1e199af37980b85&v=4"} DevName={"Tyler Dahlgren"} DevFact={"I am a 25 year old software developer currently enrolled in the UCLA coding Bootcamp."} EmailDev={"mailto:dahlgren15@gmail.com"} DevEmail={"dahlgren15@gmail.com"} DevGit={"https://github.com/tylerdahl123"}/>
                                    </Col> 
                                    <Col size="md-6">
                                        <DevInfo DevPic={"https://avatars.githubusercontent.com/u/69021459?s=460&u=0864f5ffd1d6f54699f58544af63a9243375efc3&v=4"} DevName={"Alex Kelly"} DevFact={"Full Stack Web Developer, Lifelong Learner"} EmailDev={"mailto:itsalexkelly@gmail.com"} DevEmail={"itsalexkelly@gmail.com"} DevGit={"https://github.com/luvwitch"}/>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col size="md-6">
                                        <DevInfo DevPic={"https://avatars.githubusercontent.com/u/70187829?s=460&u=d32b9be03e9cd0a339e87ecb70cd573a554d62df&v=4"} DevName={"Tito Rivera"} DevFact={"Aspiring full-stack web developer currently attending UCLA's coding boot camp."} EmailDev={"mailto:titorivera0707@gmail.com"} DevEmail={"titorivera0707@gmail.com"} DevGit={"https://github.com/titorivera0707"}/>
                                    </Col>
                                    <Col size="md-6">
                                        <DevInfo DevPic={"https://avatars.githubusercontent.com/u/72284343?s=460&u=900f7b4afc45e93392d8ef52791d93978a2c2653&v=4"} DevName={"Kyle Gibson"} DevFact={"I am currently learning full-stack web development at UCLAs coding boot camp program."} EmailDev={"mailto:kyle.gibson22@yahoo.com"} DevEmail={"kyle.gibson22@yahoo.com"} DevGit={"https://github.com/kyle-gibson"} />
                                    </Col>
                                </Row>

                                <Row>
                                    <Col size="md-3"></Col>
                                    <Col size="md-6">
                                        <DevInfo DevPic={"https://ca.slack-edge.com/T01C8L6GK9Q-U01CJ5GTL4T-799742d52139-512"} DevName={"Javier Caro"} DevFact={"I am currently learning full-stack web development at UCLAs coding boot camp program."} EmailDev={"mailto:Jcaro1993@gmail.com"} DevEmail={"Jcaro1993@gmail.com"} DevGit={"https://github.com/jcaro1993"}/>                                    
                                    </Col>
                                    <Col size="md-3"></Col>
                                </Row>                                   
                            </div>
                        </div>
                    </div>
                </div>                                
            </div>
        </div>
        </Container>
    )
}
