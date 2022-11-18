

function Project(props) {

    const proj = props.proj;

    return (
    <div className="project">
        <img src={proj.url} alt="project"/>
        <div className="links">
            <p>{proj.name}</p>
            <a href="">Live</a>
            <a href="">Repo</a>
        </div>
        <p>{proj.description}</p>
    </div>
  );
}

export default Project;
