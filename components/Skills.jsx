import Image from "next/image";
const Skills = () => {
  return (
    <div className="skills-container">
      <h2>Skills</h2>
      <div className="grid-skills">
        <div className="skill-card html">
          <i className="fa-brands fa-html5 html-icon"></i>
          <p>HTML</p>
        </div>
        <div className="skill-card css">
          <i className="fa-brands fa-css3-alt css-icon"></i>
          <p>CSS</p>
        </div>
        <div className="skill-card js">
          <i className="fa-brands fa-js-square js-icon"></i>
          <p>JavaScript</p>
        </div>
        <div className="skill-card react">
          <i className="fa-brands fa-react react-icon"></i>
          <p>React</p>
        </div>
        <div className="skill-card node">
          <i className="fa-brands fa-node-js node-icon"></i>
          <p>Node</p>
        </div>
        <div className="skill-card python">
          <i className="fa-brands fa-python python-icon"></i>
          <p>Python</p>
        </div>
         <div className="skill-card bootstrap">
          <i className="fa-brands fa-bootstrap python-icon"></i>
          <p>Bootstrap</p>
        </div>
        <div className="skill-card NEXT">
          <i className="fa-brands fa- python-icon"></i>
          <Image src='/images/nextjsicon.png' className=" fa-brands pyhton-icon" width={30} height={30}/>
          <p>Next-Js</p>
        </div>
         <div className="skill-card MongoDB">
          <i className="fa-brands fa- python-icon"></i>
          <Image src='/images/mongodb-icon.png' className=" fa-brands pyhton-icon mongodb" width={0} height={0}/>
          <p>MongoDB</p>
        </div>
         <div className="skill-card MySQL">
          <i className="fa-brands fa- python-icon"></i>
          <Image src='/images/mysql.png' className=" fa-brands pyhton-icon mysql" width={0} height={0}/>
          <p>MySQL</p>
        </div>
      </div>
    </div>
  )
}

export default Skills;