import Image from "next/image";

const Hero = () => {
  return (
    <div className="hero-container">
      <Image src='/images/myPic.jfif' className="profile-img" width={300} height={300} alt="My personal img" />
      <div className="hero-text">
        <h1>Hey, I'm Jawad 👋</h1>
        <p>
          I'm a Full Stack developer based in Mansehra, Pakistan. I specialize in building (and occasionally designing)
          exceptional websites, applications, and everything in between.
        </p>
          <div className="myicons">
                    <a
                        href="https://www.facebook.com/profile.php?id=100058239802816"
                        aria-label="Upwork"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-facebook"></i>
                    </a>
                    <a
                        href="https://github.com/jawadhassan100"
                        aria-label="GitHub"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/jawad-khan-a9028b27b/"
                        aria-label="LinkedIn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                </div>
      </div>
    </div>
  )
}

export default Hero;