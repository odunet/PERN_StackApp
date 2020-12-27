//Import dependencies
import React from 'react';
import logo from '../../images/logo.png';
import '../../css/style.css';


//Main component
class AppMain extends React.Component {
  render(){
  return (
    <div className="App">
      <header className="App-header">

        {/* Sample image with css animation */}
        <img src={logo} className="App-logo" alt="logo" />

        {/* Sample text using lorem Ipsum */}
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fringilla, 
        ipsum a aliquam tristique, nisi metus ullamcorper dui, in sollicitudin velit 
        leo in nulla. Praesent vel ultrices enim. In commodo leo id quam mollis, ac 
        consequat sem suscipit. Proin quis dui sapien. Maecenas hendrerit hendrerit <br></br>
        Lectus, in maximus ligula pellentesque eu. Fusce in lectus eu arcu condimentum fermentum.
         Morbi molestie ante a ex blandit, quis feugiat metus rutrum. Donec tristique ipsum risus, 
         in iaculis sapien fringilla non. Phasellus ut elit id nulla pharetra rutrum. Nam iaculis 
         volutpat nunc et scelerisque. Ut consectetur hendrerit sapien malesuada ornare. Morbi cursus. <br></br>
         <code>Lorem Ipsum</code>
        </p>

        {/* Sample link tag */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          style={{paddingTop: "3em"}}
        >
          Learn React
        </a>
      </header>
    </div>
  )};
}

//Export components
export default  AppMain