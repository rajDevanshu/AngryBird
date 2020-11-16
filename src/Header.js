import React from 'react';
import './index.css';
import { MdNotificationsNone, MdSearch,MdKeyboardArrowDown,MdKeyboardArrowUp } from "react-icons/md";
import Avatar from 'react-avatar';
import {TransitionGroup} from 'react-transition-group';

export default class Header extends React.Component {

    constructor() {
        super();
        this.state = {
           prime: true,
           request: false,
           hoover: false
        }
     }
     handleSubscription=()=>{
         this.setState({
             prime: true,
             request: false
         })
     }
     handleMovie=()=>{
      this.setState({
          prime: false,
          request: true
      })
  }
     hooverProfile=()=>{
        this.setState({
           hoover:!(this.state.hoover)
        })
     }
     hooverLeave=()=>{
        this.setState({
           hoover:true
        })
     }

   render() {
 
      return (
         <div className="mainHeader">

               <div className="header1">
                  <h2 className="mov">Mov</h2>
                  <h2 className="mov2">iex</h2>
               </div>


        { this.state.prime?
         
            <button onClick={()=> this.handleSubscription()} class="buttons" style={{outline: 'none'}}>
            
            Premium
            
         </button> : <button onClick={()=> this.handleSubscription()} class="buttonUnpress" style={{outline: 'none'}}>
            Premium
         </button>}

         {this.state.request?
         <button class="buttons" style={{outline: 'none'}} onClick={()=> this.handleMovie()} >
         
            Request Movie
         </button>:
         <button class="buttonUnpress" style={{outline: 'none'}} onClick={()=> this.handleMovie()}>
            Request Movie
         </button>}

           <input className="InputHeader" style={{outline: 'none'}} />
            <MdSearch style={{marginTop:18, marginLeft:10,cursor:'pointer'}} color="grey" size={20} />
            <div className="bell" size={17}>
            <MdNotificationsNone style={{cursor:'pointer'}}/>
            </div>
         
         <div>
            <button 
            onClick={()=>this.hooverProfile()}
            onMouseEnter={()=>this.hooverLeave()}
            class="profile" 
            style={{outline: 'none',cursor:'pointer'}}>
            <div className="AvatarN">
            <Avatar  size="27" round 
            src="https://mypustak-5.s3.ap-south-1.amazonaws.com/uploads/avatar/funny-png-avatar-2.png"/>
            </div>
            <p class="Hello">Hii, Swati</p>
            {this.state.hoover?
               <MdKeyboardArrowUp color='#000' style={{marginTop:19, marginLeft:15}}/>
               :
            <MdKeyboardArrowDown color='#000' style={{marginTop:19, marginLeft:15}}/>}
            </button>

            {this.state.hoover?
            <div className="hovertext">
               <li style={{fontSize:14, color:'#000', marginTop:5, listStyleType:'none', borderBottomWidth:0.5,
               cusror:'pointer'}} className="hoover">My Profile</li> 
               <li style={{fontSize:14, color:'#000',  listStyleType:'none'}} className="hoover">My Movies</li> 
            </div>: null
            }
         </div>
         </div>
      );
   }
}