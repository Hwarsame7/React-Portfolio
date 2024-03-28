import githubLogo from '../../assets/github-mark-white.png';
import linkedinLogo from '../../assets/linkedin-logo-white.png';

export default function Footer(){

    return (
        <div className="footer">
            <h6 className="footerText">B Lealan ©2024</h6>
            <div className="icon-boxes">
                <div>
                    <a href="https://github.com/Hwarsame7" target="_blank" rel="noopener noreferrer">
                    <img className="footer-icons" src={githubLogo}/>
                    </a>
                </div>
                <div>
                    <a href="www.linkedin.com/in/hassan-warsame-289068289" target="_blank" rel="noopener noreferrer">
                    <img className="footer-icons" src={linkedinLogo} href=""/>
                    </a>
                </div>
                <div>
            
                </div>
            </div>
        </div>
    )
}