import '../components/UI/UIStyle.css';
import passwordGenerator from'./src/assets/password-Generator.png';
import workday-Schedular from'./src/assets/workday-Schedular.png';
import daily-Pulse from'./src/assets/daily-Pulse.png';
import weather-Dashboard from'./src/assets/weather-Dashboard';
import note-Taker from'./src/assets/noteTaker.png';
import employee-Tracker from './src/assets/employee-Tracker.png';

export default function PortfolioPage() {

    return (
        <div>
            <div className="container">
                <img src={passwordGenerator} alt="Password generator" className="image"/>
                <div className="middle">
                    <div class="text">
                        <b>Password generator</b>
                        </div>
                    <div class="text"><a href='https://github.com/Hwarsame7/passwordgenerator' target="_blank" rel="noopener noreferrer">GitHub</a> / <a href='https://github.com/Hwarsame7/passwordgenerator' target="_blank" rel="noopener noreferrer">Deployed Link</a></div>
                </div>
            </div>
            <div className="container">
                <img src={dayScheduler} alt="Work Day Scheduler" className="image"/>
                <div className="middle">
                <div class="text">
                        <b>Weather Dashboard</b>
                        </div>
                    <div class="text"><a href='https://hwarsame7.github.io/06-Weather-Dashboard/' target="_blank" rel="noopener noreferrer">GitHub</a> / <a href='https://hwarsame7.github.io/06-Weather-Dashboard/ target="_blank" rel="noopener noreferrer"'>Deployed Link</a></div>
                </div>
            </div>
            <div className="container">
                <img src={projectRecipe} alt="Employee-Tracker" className="image"/>
                <div className="middle">
                <div class="text">
                        <b>Employee Tracker</b>
                        </div>
                    <div class="text"><a href='https://github.com/Hwarsame7/Employee-Tracker' target="_blank" rel="noopener noreferrer">GitHub</a> / <a href='https://github.com/Hwarsame7/Employee-Tracker' target="_blank" rel="noopener noreferrer">Deployed Link</a></div>
                </div>
            </div>
            <div className="container">
                <img src={svgLogo} alt="SVG Logo Maker" className="image"/>
                <div className="middle">
                <div class="text">
                        <b>SVG Logo Maker</b>
                        </div>
                    <div class="text"><a href='https://github.com/Hwarsame7/object-oriented-programming-svg-logo-maker' target="_blank" rel="noopener noreferrer">GitHub</a></div>
                </div>
            </div>
            <div className="container">
                <img src={projectTravel} alt="Workday Schedular" className="image"/>
                <div className="middle">
                <div class="text">
                        <b>Workday Scheduler</b>
                        </div>
                    <div class="text"><a href='https://hwarsame7.github.io/week5-workday-planner/' target="_blank" rel="noopener noreferrer">GitHub</a> / <a href='https://github.com/Hwarsame7/week5-workday-planner' target="_blank" rel="noopener noreferrer">Deployed Link</a></div>
                </div>
            </div>
            <div className="container">
                <img src={pwaTextEditor} alt="PWA Text Editor" className="image"/>
                <div className="middle">
                <div class="text">
                        <b>PWA Text Editor</b>
                        </div>
                    <div class="text"><a href='https://pwa-text-editor-efeb.onrender.com/' target="_blank" rel="noopener noreferrer">GitHub</a> / <a href='https://github.com/Hwarsame7/PWA-text-editor' target="_blank" rel="noopener noreferrer">Deployed Link</a></div>
                </div>
            </div>
        </div>
    );
}