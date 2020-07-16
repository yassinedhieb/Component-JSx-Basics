import React from 'react';
import Add from './profile/Address.js';
import Full from './profile/FullName.js';
import Profile from './profile/ProfilPhoto';

function Main() {
    return (
        <div style={{border:"solid 5px black", backgroundColor:'#ddd'}}>
           
                <Add/>
                <Full/>
                <Profile/>
            
        </div>
    );
  }
  
  export default Main;