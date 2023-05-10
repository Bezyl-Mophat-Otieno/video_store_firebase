import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { signInWithPopup } from 'firebase/auth';
import { auth , provider } from './firebase'
import Upload from './Upload';

 


function SignIn() {
    const [logon , setLogon ] = useState(undefined);
 const signInWithGoogle = (e)=>{
        e.preventDefault();
        signInWithPopup(auth,provider).then((result)=>{
            setLogon( (prev)=>{
              return{  ...prev ,name:result.user.displayName,email: result.user.email,img: result.user.photoURL,
            }
            })              
            

        }).catch((error)=>{
            console.log(error);
        })
    }
    console.log(logon);
  
  return (
    logon ? <Upload user={logon.email} /> :(
    <div className="App">

    <button class="btn btn-outline-primary" onClick={(e)=>signInWithGoogle(e)}> Sign In With Google </button> 
    


    </div>
    )
  );
}


export default SignIn;
