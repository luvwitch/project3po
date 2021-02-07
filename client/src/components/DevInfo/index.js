import React from "react";
import {Col} from "../Grid"

export default function DevInfo({DevPic, DevName, DevFact, EmailDev, DevEmail, DevGit}){

    return( 
        <div>    
            <Col size="md-2">
                <img className ="developer" src={DevPic}/>
            </Col>              
            <Col size="md-10">
                <h5 className="dev-name">{DevName}</h5>                
                <p className="dev-odd-fact">{DevFact}
                <br/>Email: <a href={EmailDev}>{DevEmail}</a>
                <br/><a href={DevGit}>Github</a>
                </p>
            </Col> 
        </div>      
    )
}