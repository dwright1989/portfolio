import Project from '../Components/Project';
import Projects from "../Components/Projects";
function Work() {

    return (
        <div id="work">
        <h2>My Work</h2>
        <div id="projects">
            {Projects.map( (project) =>{
                    return <Project proj={project}/>
              })}
        </div>
    </div>
  );
}

export default Work;
