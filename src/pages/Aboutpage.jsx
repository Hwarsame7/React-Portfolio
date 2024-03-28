import portrait from '../assets/Portfolio.JPG';

export default function AboutPage() {
    return (
        <div className="blur-content">
            <img src={portrait} alt="Picture of Ben Lealan" className="portrait" />
            <p className="content-box">
                I am a junior fullstack web developer with certfication from university
                of Birmingham fullstack bootcamp. My expertise spans both frontend and backend technologies, with a focus on mobile-first design and development. 
                As an innovative problem-solver, I excel in creative teamwork and project execution from ideation to completion. 
                My proficiency in HTML, CSS, and JavaScript enables me to create visually appealing and user-friendly interfaces. 
                </p>
        </div>
    );
}