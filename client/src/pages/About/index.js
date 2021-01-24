import React from "react";
import {Col, Row, Container} from "../../components/Grid";
import "./style.css"

export default function About(){
    return(
        <div className="page-container">
            <div className="content-wrap">
                <Container>
                    <Row>
                        <Col size="md-12">
                        <h1>About Page</h1>
                                <br />
                                
                                <br />
                                <br />
                                <p> This application is designed to allow the user to integrate tasks, appointments, reminders and more into a calendar. This calendar will then remind the user of the items input at a desired interval and also helpshow the user how much time needs to be allocated to accomplish that task on time.</p>
                                <br />
                                <p> A lot of us struggle with time management. The goal of this application is to aid those in need of morestructure and guidance into managing their time, as well as, those who just simply want reminders to keepthemselves on track.</p>
                                <br />      
                            <div className="card">
                                <h5 className="card-header">Meet the Creators!</h5>
                                <div className="card-body">
                                    <div id="about-developers-text">
                                    <div className= "row">

                                        <div className="col-md-6">
                                        <div className="row">
                                            <div className="col-md-2">
                                            <img className ="developer" src="https://image.shutterstock.com/image-vector/male-silhouette-avatar-profile-picture-260nw-199246382.jpg"/> <br/>
                                            </div>  
                                        
                                            <div className="col-md-10">
                                            <h5 className="dev-name">Tyler Dahlgren</h5>
                                            
                                            <p className="dev-odd-fact">I am a 25 year old software developer currently enrolled in the UCLA coding Bootcamp.
                                            <br/>Email: <a href="mailto:dahlgren15@gmail.com">dahlgren15@gmail.com</a>
                                            <br/><a href="https://github.com/tylerdahl123">Github</a>
                                            </p>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="col-md-6">
                                        <div className="row">
                                            <div className="col-md-2">
                                            <img className ="developer" src="https://avatars.githubusercontent.com/u/69021459?s=460&u=0864f5ffd1d6f54699f58544af63a9243375efc3&v=4"/> <br/>
                                            </div>  
                                        
                                            <div className="col-md-10">
                                            <h5 className="dev-name">Alex Kelly</h5>
                                            
                                            <p className="dev-odd-fact">Full Stack Web Developer, Lifelong Learner
                                            <br/>Email: <a href="mailto:itsalexkelly@gmail.com">itsalexkelly@gmail.com</a>
                                            <br/><a href="https://github.com/luvwitch">Github</a>
                                            </p>
                                            </div>
                                        </div>
                                        </div>
                                    </div>

                                    <div className= "row mt-4">
                                        <div className="col-md-6 m-auto">
                                        <div className="row">
                                            <div className="col-md-2">
                                            <img className ="developer" src="https://avatars.githubusercontent.com/u/70187829?s=460&u=d32b9be03e9cd0a339e87ecb70cd573a554d62df&v=4"/> <br/>
                                            </div>  
                                        
                                            
                                            <div className="col-md-10">
                                            <h5 className="dev-name">Tito Rivera</h5>
                                            
                                            <p className="dev-odd-fact">Aspiring full-stack web developer currently attending UCLA's coding boot camp.
                                            <br/>Email: <a href="mailto:titorivera0707@gmail.com">titorivera0707@gmail.com</a>
                                            <br/><a href="https://github.com/titorivera0707">Github</a>
                                            </p>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="col-md-6 m-auto">
                                        <div className="row">
                                            <div className="col-md-2">
                                            <img className ="developer" src="https://avatars.githubusercontent.com/u/72284343?s=460&u=900f7b4afc45e93392d8ef52791d93978a2c2653&v=4"/> <br/>
                                            </div>  
                                        

                                            <div className="col-md-10">
                                            <h5 className="dev-name">Kyle Gibson</h5>
                                            
                                            <p className="dev-odd-fact">I am currently learning full-stack web development at UCLAs coding boot camp program
                                            <br/>Email: <a href="mailto:kyle.gibson22@yahoo.com">kyle.gibson22@yahoo.com</a>
                                            <br/><a href="https://github.com/kyle-gibson">Github</a>
                                            </p>
                                            </div>
                                        </div>
                                        </div>
                                    </div>

                                    <div className= "row mt-4">
                                        <div className="col-md-6 m-auto">
                                        <div className="row">
                                            <div className="col-md-2">
                                            <img className ="developer" src="https://ca.slack-edge.com/T01C8L6GK9Q-U01CJ5GTL4T-799742d52139-512"/> <br/>
                                            </div>  
                                        

                                            <div className="col-md-10">
                                            <h5 className="dev-name">Javier Caro</h5>
                                            
                                            <p className="dev-odd-fact">I am currently learning full-stack web development at UCLAs coding boot camp program.
                                            <br/>Email: <a href="mailto:Jcaro1993@gmail.com">Jcaro1993@gmail.com</a>
                                            <br/><a href="https://github.com/jcaro1993">Github</a>
                                            </p>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    

                                    </div>
                                </div>
                                </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
