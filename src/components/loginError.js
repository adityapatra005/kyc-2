import React, { Component } from 'react'
import {Link, Redirect} from 'react-router-dom'



export default class LoginErr extends Component {
    constructor(props){
        let token = localStorage.getItem("token");
        let tokenC = localStorage.getItem("token2");
        let tokenS = localStorage.getItem("tokenS");
        let tokenG = localStorage.getItem("tokenG");
        let tokenE = localStorage.getItem("lerr");

        let ta = localStorage.getItem("t1");
        super(props)
        this.state = {
             token , ta, tokenC, tokenS, tokenG, tokenE
        };
        
    }
    render() {
      /*  if(this.state.tokenE !== "lerr")
{        if(this.state.token != "qwertyuiop")
        {
            return(
                <Redirect to="/"/>
            );
        } 
        if(this.state.tokenC != "abc")
        {
            return(
                <Redirect to="/customer"/>
            );
        }
        if(this.state.tokenS != "abc")
        {
            return(
                <Redirect to="/selfie"/>
            );
        }
        if(this.state.tokenG != "abc")
        {
            return(
                <Redirect to="/gid"/>
            );
        }}
    */
          return (
            <div className='backgnd'>              
                <h1 style={{color: "red" }}><b>Error: Invalid login</b> </h1>
                <br/> 
                <br/>
                <Link className='' to="/"><h3>Back to Login screen</h3></Link>
            </div>
        );
    }
}