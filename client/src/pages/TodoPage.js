import React, { useState, useEffect } from 'react';
import {Container, Row, Col} from './../components/Grid';

import TaskInput from './../components/TodoComps/TaskInput';
import List from './../components/TodoComps/List';
import ListFooter from './../components/TodoComps/ListFooter';
import {DataProvider} from './../components/TodoComps/DataProvider';
import './../components/TodoComps/style.css';


function TodoPage(){ 
    
    const [newStyle, setNewStyle] = useState({})
    const [newerStyle, setNewerStyle] = useState({})
    const [newestStyle, setNewestStyle] = useState({})

    const isLoggedIn = (localStorage.getItem('lightOn') === 'true');

    useEffect(() => {
        if(isLoggedIn) {
          const newLight = setNewStyle("light1")
          clearInterval(newLight)
          const newerLight = setNewerStyle("lighter1")
          clearInterval(newerLight)
          const newestLight = setNewestStyle("lighter2")
          clearInterval(newestLight)
        }else{
          const newDark = setNewStyle("dark1")
        clearInterval(newDark)
        const newDarker = setNewerStyle("darker1")
        clearInterval(newDarker)
        const newDarkest = setNewestStyle("darker2")
        clearInterval(newDarkest)
        }
      }, [isLoggedIn])

    return(
        <Container>
        <div className={newStyle}>
            <p> Reminders and Tips </p>
        </div>
        <div className={newerStyle}>             
            <div className="content-wrap">                    
                <Container>                   
                    <Row>
                        <Col size="md-12">
                            <h1>To Do List</h1>
                            <div className="todoexplain">
                                <DataProvider>
                                    <div className="todoList">                                    
                                        <TaskInput />
                                        <List />
                                        <ListFooter />
                                    </div>
                                </DataProvider>                           
                            </div>                                                                                                            
                        </Col>
                    </Row>                    
                   
                    <Row>
                        <Col size="md-12">
                            <h1>Tips and Tricks!</h1>
                            <br />
                            <div className={newestStyle}>
                                <p> Need some help getting there on time? We all do sometimes!</p><p> Break your routine down into steps 
                                    like getting ready, packing/prepping anything you need to bring, getting anything done you need to do before you leave 
                                    (feeding pets, getting the slowcooker ready, taking medication, etc.), grabbing your keys, and set smaller reminders for yourself
                                    so the act of leaving doesn't feel like such a huge task! It helps you remember what you need to do and gets rid of the anxiety 
                                    that you forgot something that can hold you up at the door.</p><p> Notice you're low on gas? Add it to your reminders so you 
                                    remember to leave a little bit earlier the next day or grab it on the way back from your event! No more worries!
                                    </p>
                                    <p>
                                    Feels good to get organized, doesn't it? 😉
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>  
        </div>

    </Container>
    )
}

export default TodoPage;