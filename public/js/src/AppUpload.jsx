//Import dependacies
import React from 'react';
import logo from '../../images/logo.png';
import '../../css/style.css';

//Instantiate class
class AppUpload extends React.Component {
  render(){
  return (
    <div>
        {/* Create file input object */}
        <h2 style={{paddingTop:"3em"}}>Upload Component</h2>
        <p><span style={{fontWeight: "bold", fontSize:"2em"}}>U</span>pload your files below</p>
        <input id="myfile" type="file" onChange={this.HandleEvent}/>
    </div>
  )};

  //This fucntion handles the change in the input tage
  HandleEvent = (evt) => {
    evt.preventDefault();
    const files = evt.target.files
    const formData = new FormData();
    formData.append('myFile', files[0]);

    // This fetch API sends the image (or any other document) to the server
    fetch('http://localhost:5000/api/saveImage', {
        method: 'POST',
        body: formData,
        // files: formData,
        }).then(response => console.log("File Sent"))
        .catch(err => console.log(err))
  }
}

//Export components
export default  AppUpload