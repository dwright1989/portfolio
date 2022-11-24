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
          <p>Hi, my name is Debbie and thank you for visiting my portfolio. </p>
          <p>I am a Computer Science graduate (BSc Hons 2.1 University of Strathclyde, MSc University of St Andrews) with 2 years of professional experience.  
            However, I am currently working as a nurse and looking to get back into software development. At the moment, I am working through "The Odin Project".  Some of my projects can be seen below. 
          </p>
          <div id="aboutMeLinks">
              <p><a href="https://github.com/dwright1989" target="_blank"><img src={githubIcon} alt="github" className="social-icon"/></a>
              <a href="" target="_blank"><img src={linkedinIcon} alt="linkedin" className="social-icon"/></a></p>
            
        </div>
        </div>
       
    </div>
  );
}

export default AboutMe;
