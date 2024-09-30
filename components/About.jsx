import Image from "next/image";

const About = () => {
  return (
    <div className="about-container">
      <h2>About Me</h2>
      <div className="flex-about">
        <div className="about-text">
          <p>
          As a developer, I have always been passionate about creating elegant and effective solutions
          to complex problems. I have a strong foundation in web development, with a focus on technologies
          such as Java, Spring Boot, TypeScript ,React ,Node js , Javascript ,Python. I enjoy working on both the front-end and back-end of 
          applications and am always looking for ways to optimize performance, improve user experience, and 
          ensure the highest level of code quality.
        </p>
          <p>
            Throughout my career, I have worked on a wide range of projects, from simple static websites to complex
            enterprise-level applications. I am experienced in working with various development tools and frameworks,
            including React.js, Next.js, Spring Boot , Node.js, and Django. I am always eager to learn and explore new technologies
            and constantly seek opportunities to improve my skills and knowledge.
          </p>
        </div>
        <div className="about-img">
          <Image src='/images/about.jpeg' className="profile-img" width={300} height={500}/>
        </div>
      </div>
    </div>
  )
}

export default About;
