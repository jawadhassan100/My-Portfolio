import Link from "next/link";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo">
        <Link href="/">
          Jawad's Portfolio
        </Link>
      </div>
      <a href="/images/Resume.pdf" className="cta-btn" download>Resume</a>
    </div>
  )
}

export default Navbar;
