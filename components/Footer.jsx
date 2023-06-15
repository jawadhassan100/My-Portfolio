const Footer = () => {
    return (
        <>
            <hr />
            <div className="footer-container">
                <p>
                    © {new Date().getFullYear()} Jawad's Portfolio
                </p>
                <div className="social_icons">
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
        </>
    )
}

export default Footer;