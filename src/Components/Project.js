
import githubIcon from '../Images/github.jpg';
import openIcon from '../Images/open.png';
function Project(props) {

    const proj = props.proj;

    return (
    <div className="project">
        <img src={proj.url} alt="project"/>
        <div className="links">
            <p className="proj-title">{proj.name}</p>
            <a href={proj.repo} target="_blank"><img src={githubIcon} alt="repo" className="social-icon"/></a>
            <a href={proj.live} target="_blank"><img src={openIcon} alt="live" className="social-icon"/></a>
        </div>
        <p>{proj.description}</p>
    </div>
  );
}

export default Project;
