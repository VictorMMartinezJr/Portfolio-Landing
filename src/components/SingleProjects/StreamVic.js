// import './Main.css';
import Stars from '../Stars/Stars';

const StreamVic = () => {
    return (
        <>
            <section className='main' id='home'>
                <div className='main-background-text show-ipad'>
                    <span className='background-text show-ipad-background-text'>WEB</span>
                </div>
                <div className='main-background-text'>
                    <span className='background-text'>DEVELOPER</span>
                </div>
                <Stars />
                <div className="main-content-images show-mobile">
                    <img className='html-logo' src='Portfolio-Landing/images/html.png' alt="html-logo" />
                    <img className='css-logo' src='Portfolio-Landing/images/css.png' alt="css-logo" />
                </div>
                <div className='main-content'>
                    <h1 className='main-content-h1'><span className='dark-h1'>I'm a</span> <br></br>FRONT END<br></br><span className='h1-span'>WEB DEVELOPER</span><i className="fas fa-square-full main-period"></i></h1>
                    <a href='#contact'><button className='main-content-btn'>CONTACT ME</button></a>
                </div>
                <div className="main-content-images show-mobile">
                    <img className='js-logo' src='Portfolio-Landing/images/js.png' alt="js-logo" />
                    <img className='react-logo' src='Portfolio-Landing/images/react.png' alt="react-logo" />
                </div>
                <div className="main-content-images hidden">
                    <img className='html-logo' src='Portfolio-Landing/images/html.png' alt="html-logo" />
                    <img className='css-logo' src='Portfolio-Landing/images/css.png' alt="css-logo" />
                    <img className='js-logo' src='Portfolio-Landing/images/js.png' alt="js-logo" />
                    <img className='react-logo' src='Portfolio-Landing/images/react.png' alt="react-logo" />
                </div>
            </section>
        </>
    )
}

export default StreamVic;
