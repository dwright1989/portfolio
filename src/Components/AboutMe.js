import githubIcon from '../Images/github.jpg';
import linkedinIcon from '../Images/linkedin.png';

function AboutMe() {

    return (
    <div id="aboutMe">
       <div className="draw">
            <div className="rectangle"></div>
        </div>
      <h1>Debbie Wright</h1>
        <div id="description">
          <h2>About Me</h2>
          <p>This is to be filled. This is to be filled.  This is to be filled.  
          This is to be filled.  This is to be filled.  This is to be filled.  
          This is to be filled.  This is to be filled.  This is to be filled.  
          This is to be filled.  This is to be filled.  This is to be filled.  
          This is to be filled.  This is to be filled.  This is to be filled.  
          This is to be filled.  This is to be filled.  This is to be filled. This is to be filled. This is to be filled.  This is to be filled.  
          This is to be filled.  This is to be filled.  This is to be filled.  
          This is to be filled.  This is to be filled.  This is to be filled.  
          This is to be filled.  This is to be filled.  This is to be filled.  
          This is to be filled.  This is to be filled.  This is to be filled.  
          This is to be filled.  This is to be filled.  This is to be filled.  </p>
          <div id="aboutMeLinks">
              <p><a href="https://github.com/dwright1989" target="_blank"><img src={githubIcon} alt="github" className="social-icon"/></a>
              <a href="" target="_blank"><img src={linkedinIcon} alt="linkedin" className="social-icon"/></a></p>
            
        </div>
        </div>
       
    </div>
  );
}

export default AboutMe;
