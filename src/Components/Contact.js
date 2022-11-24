import githubIcon from '../Images/github.jpg';
import linkedinIcon from '../Images/linkedin.png';
import emailIcon from '../Images/email.png';


function Contact() {

    return (
    <div id="contactDiv">
          <div id="contact">
              <h2>Contact Me</h2>
              <p>If you wish to contact me, please reach out on either my LinkedIn or Email provided below.</p> 
              <p><img id="emailIcon" src={emailIcon} alt="email" className="social-icon"/><span id="email">debbiewright@live.co.uk</span></p>
              <p><a href="https://github.com/dwright1989" target="_blank"><img src={githubIcon} alt="github" className="social-icon"/></a>
              <a href="" target="_blank"><img src={linkedinIcon} alt="linkedin" className="social-icon"/></a></p>
            
          <p className="extra-small"> <a target="_blank" href="https://icons8.com/icon/54087/nodejs" className="extra-small">Icons by </a> <a target="_blank" href="https://icons8.com" className="extra-small">Icons8</a></p>
          </div>
    </div> 
  );
}

export default Contact;
