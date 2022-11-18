
import profilePic from "../Images/placeholderImage.jpg"

function AboutMe() {

    return (
    <div id="aboutMe">
       <div className="draw">
            <div className="rectangle"></div>
        </div>
      <h1>Debbie Wright</h1>
      <div id="imgDiv">
        <img src={profilePic} alt="profile"/>
      </div>
        <div id="description">
          <h2>About Me</h2>
          <p>This is to be filled. This is to be filled.  This is to be filled.  
          This is to be filled.  This is to be filled.  This is to be filled.  
          This is to be filled.  This is to be filled.  This is to be filled.  
          This is to be filled.  This is to be filled.  This is to be filled.  
          This is to be filled.  This is to be filled.  This is to be filled.  
          This is to be filled.  This is to be filled.  This is to be filled.   </p>
        </div>
    </div>
  );
}

export default AboutMe;
