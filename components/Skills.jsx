import Image from "next/image";
import typescript from "../public/images/typeblack.png"
import springboot from "../public/images/s.png"
const Skills = () => {
  return (
    <div className="skills-container">
      <h2>Skills</h2>
      <div className="grid-skills">
        <div className="skill-card react">
          <i className="fa-brands fa-java java-icon"></i>
          <p>Java</p>
        </div>
        <div className="skill-card node">
        <Image src={springboot} className="fa-brands python-icon " width={20} height={20}/>
          <p>Spring Boot</p>
        </div>
        <div className="skill-card python">
      <Image src={typescript} className="fa-brands python-icon " width={20} height={20}/>
          <p>TypeScript</p>
        </div>
        <div className="skill-card django">
          <i className="fa-brands fa-python django-icon"></i>
          <p>Django</p>
        </div>
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
          <i className="fa-brands fa-bootstrap bootstrap-icon"></i>
          <p>Bootstrap</p>
        </div>
        <div className="skill-card NEXT">
          <i className="fa-brands fa- python-icon"></i>
          <Image src='/images/nextjsicon.png' className="fa-brands python-icon" width={30} height={30} />
          <p>Next.js</p>
        </div>
        <div className="skill-card MongoDB">
          <i className="fa-brands fa-mongodb mongodb-icon"></i>
          <Image src='/images/mongodb-icon.png' className="fa-brands python-icon mongodb" width={0} height={0} />
          <p>MongoDB</p>
        </div>
        <div className="skill-card MySQL">
          <i className="fa-brands fa-mysql mysql-icon"></i>
          <Image src='/images/mysql.png' className="fa-brands python-icon mysql" width={0} height={0} />
          <p>MySQL</p>
        </div>
        <div className="skill-card VScode">
          <i className="fa-brands fa-vscode vscode-icon"></i>
          <Image src='/images/vscode.png' className="fa-brands python-icon vscode" width={20} height={30} />
          <p>VS Code</p>
        </div>
        <div className="skill-card Figma">
          <i className="fa-brands fa-figma figma-icon"></i>
          <p>Figma</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
