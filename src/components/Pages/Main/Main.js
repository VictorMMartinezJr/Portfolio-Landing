import './Main.css';
import Stars from '../../Stars/Stars';
import Contact from '../../ContactMe/ContactMe';

const Main = () => {
    return (
        <section className='main' id='home'>
            <Stars />
            <div className='main-content'>
                <div className='main-background-text'>DEVELOPER</div>
                <div className="main-content-images mobile-images">
                    <img className='html-logo' src='./assets/images/html.png' alt="html-logo" />
                    <img className='css-logo' src='./assets/images/css.png' alt="css-logo" />
                </div>
                <div className='main-content-text'>
                    <h1 className='main-content-h1'><span className='dark-h1'>I'm a</span><br></br>FRONT END<br></br><span className='h1-span'>WEB DEVELOPER</span><i className="fas fa-square-full main-period"></i></h1>
                    <a href='#contact'><button className='main-content-btn'>CONTACT ME</button></a>
                </div>
                <div className="main-content-images desktop-images">
                    <img className='html-logo' src='./assets/images/html.png' alt="html-logo" />
                    <img className='css-logo' src='./assets/images/css.png' alt="css-logo" />
                    <img className='js-logo' src='./assets/images/js.png' alt="js-logo" />
                    <img className='react-logo' src='./assets/images/react.png' alt="react-logo" />
                </div>
                <div className="main-content-images mobile-images">
                    <img className='js-logo' src='./assets/images/js.png' alt="js-logo" />
                    <img className='react-logo' src='./assets/images/react.png' alt="react-logo" />
                </div>
            </div>
            <Contact />
        </section>
    )
}

export default Main
