import nodeIcon from '../Images/node.png';
import mongodbIcon from '../Images/mongodb.png';
import htmlIcon from '../Images/html.png';
import reactIcon from '../Images/react.png';
import javascriptIcon from '../Images/javascript.png';
import cssIcon from '../Images/css.png';
import javaIcon from '../Images/java.png';
import phpIcon from '../Images/php.png';
import sqlIcon from '../Images/sql.png';

function Experience() {

    return (
    <div id="experience">
       <h2>Currently Learning</h2>
       <div className="exp-icons current">
            <img src={nodeIcon} alt="node" className="exp-icon"/>
            <img src={mongodbIcon} alt="mongodb" className="exp-icon"/>
            <h4>Node JS</h4>
            <h4>MongoDB</h4>
       </div>
       <hr/>
       <h2>Most Recent Experience</h2>
       <div className="exp-icons recent">
            <img src={htmlIcon} alt="html" className="exp-icon"/>
            <img src={cssIcon} alt="css" className="exp-icon"/>
            <img src={javascriptIcon} alt="javascript" className="exp-icon"/>
            <img src={reactIcon} alt="react" className="exp-icon"/>
            <h4>HTML</h4>
            <h4>CSS</h4>
            <h4>JavaScript</h4>
            <h4>React</h4>
       </div>
       <hr/>
       <h2>Previous Professional Experience</h2>
       <div className="exp-icons professional">
       <img src={htmlIcon} alt="html" className="exp-icon"/>
            <img src={cssIcon} alt="css" className="exp-icon"/>
            <img src={javascriptIcon} alt="javascript" className="exp-icon"/>
            <img src={javaIcon} alt="java" className="exp-icon"/>
            <img src={phpIcon} alt="php" className="exp-icon"/>
            <img src={sqlIcon} alt="sql" className="exp-icon"/>
            <h4>HTML</h4>
            <h4>CSS</h4>
            <h4>JavaScript</h4>
            <h4>Java</h4>
            <h4>PHP</h4>
            <h4>SQL</h4>
       </div>
    </div>
  );
}

export default Experience;
