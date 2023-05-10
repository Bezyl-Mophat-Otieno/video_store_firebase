import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
 import app from './firebase';
 import Video from './Video';
 


function App() {
  const [video , setVideo] = useState(undefined)
  const [uploadedVideoUrl , setUploadedVideoUrl] = useState("")
  const [videoPerc,setVideoPerc] = useState(0)

  const uploadFile = (file) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
           setVideoPerc(Math.round(progress));
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
            break;
        }
      },
      (error) => {
        console.log(error)
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setUploadedVideoUrl(downloadURL);
        });
      }
    );
  };
  useEffect(()=>{
   video && uploadFile(video)
  },[video])

  const printUrl = (e)=>{
    e.preventDefault();
    console.log(uploadedVideoUrl)

  }
  

  return (
    <div className="App">
    <form>
    <label class="form-label" for="customFile">Default file input example</label>
    <input type="file" class="form-control" accept='video/*' id="customFile" onChange={(e)=>setVideo(e.target.files[0])}/>
    { videoPerc > 0 ? `uploading ${videoPerc} %`: 
    (<button class="btn btn-primary" onClick={(e)=>printUrl(e)} > Upload </button> )
    }
    
        

    </form>

    {uploadedVideoUrl && <Video videUrl={uploadedVideoUrl}/>}

    </div>
  );
}

export default App;
