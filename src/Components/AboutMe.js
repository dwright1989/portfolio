
import profilePic from "../Images/placeholderImage.jpg"

function AboutMe() {

    return (
    <div id="aboutMe">
       <div className="draw">
            <div className="rectangle"></div>
        </div>
      <h2>Debbie Wright</h2>
      <div id="imgDiv">
        <img src={profilePic} alt="profile"/>
      </div>
        <div id="description">
          <h3>About Me</h3>
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
