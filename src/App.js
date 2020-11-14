import React from 'react';
import './index.css';
import Header from './Header';
import BelowHeader from './BelowHeader'
import Body from './Body';

class App extends React.Component {
   constructor() {
      super();
      this.state = {
        
         date: 4555,
         shown: false
      }
   }
   getWindowDimensions = () => {
      const { innerWidth: width, innerHeight: height } = window;
      return {
        width,
        height
      };
    }
   
   render() {
      
      return (
         <div style={{backgroundColor:'#eeeeee', height: window.innerHeight}} className="container">
         
         <div className="done">
            <Header/>

         </div>
         <BelowHeader />
         <Body />
         </div>
      );
   }
}


export default App;

