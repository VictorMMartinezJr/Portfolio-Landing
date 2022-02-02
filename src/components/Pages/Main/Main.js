import './Main.css';
import Stars from '../../Stars/Stars';
import Contact from '../../ContactMe/ContactMe';
import {useRef, useEffect} from 'react';
import {gsap} from 'gsap'

const Main = () => {
    const greenLineRef = useRef(null);
    const yellowLineRef = useRef(null);
    const redLineRef = useRef(null);
    const blueLineRef = useRef(null);
    const rightHandRef = useRef(null);
    const leftHandRef = useRef(null);
    const greenLineStart = "M204 109H202V113H204V109Z";
    const greenLineEnd = "M229 109H202V113H229V109Z";
    const yellowLineStart = "M203 88H202V92H203V88Z";
    const yellowLineEnd = "M248 88H202V92H248V88Z";
    const redLineStart = "M203 79H202V83H203V79Z";
    const redLineEnd = "M259 79H202V83H259V79Z";
    const blueLineStart = "M193 99H192V103H193V99Z";
    const blueLineEnd = "M259 99H192V103H259V99Z";

    useEffect(() => {
        gsap.fromTo(greenLineRef.current, {attr: {d: greenLineStart}}, {attr: {d: greenLineEnd}, repeat: -1, duration: 1});
        gsap.fromTo(yellowLineRef.current, {attr: {d: yellowLineStart}}, {attr: {d: yellowLineEnd}, repeat: -1, duration: 1.1});
        gsap.fromTo(redLineRef.current, {attr: {d: redLineStart}}, {attr: {d: redLineEnd}, repeat: -1, duration: 1.3});
        gsap.fromTo(blueLineRef.current, {attr: {d: blueLineStart}}, {attr: {d: blueLineEnd}, repeat: -1, duration: 1.5});
        gsap.fromTo(rightHandRef.current,{rotation: 0}, {rotation: 3.5, repeat: -1, yoyo: true});
        gsap.fromTo(leftHandRef.current,{rotation: 0}, {rotation: -3.5, repeat: -1, yoyo: true});
    }, [])
    return (
        <section className='main' id='home'>
            <Stars />
            <div className='main-content'>
                <div className='main-background-text'>DEVELOPER</div>
                <div className='main-content-text'>
                    <h1 className='main-content-h1'><span className='dark-h1'>I'm a</span><br></br>FRONT END<br></br><span className='h1-span'>WEB DEVELOPER</span><i className="fas fa-square-full main-period"></i></h1>
                    <a href='#contact'><button className='main-content-btn'>CONTACT ME</button></a>
                </div>
                <div className="main-svg">
                    {/* svg */}
                    <svg width="800" height="800" viewBox="0 0 406 306" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="coding-type">
                        <path id="Vector" d="M278.607 42.365H150.931V131.269H278.607V42.365Z" fill="#E6E6E6"/>
                        <path id="Vector_2" d="M265.879 145.296H164.877V186.749H265.879V145.296Z" fill="#C9C9C9"/>
                        <path id="Vector_3" d="M234.759 191.895H194.626V211.119H234.759V191.895Z" fill="#C9C9C9"/>
                        <path id="Vector_4" d="M270.152 50.6272H159.264V120.683H270.152V50.6272Z" fill="#656D78"/>
                        <path id="blue-line" d="M259 99H192V103H259V99Z" fill="#0057FF" ref={blueLineRef}/>
                        <path id="yellow-line" d="M248 88H202V92H248V88Z" fill="#FFCE54" ref={yellowLineRef}/>
                        <path id="green-line" d="M229 109H202V113H229V109Z" fill="#29DA70" ref={greenLineRef}/>
                        <path id="Vector_5" d="M194.413 108.918H178.447V112.907H194.413V108.918Z" fill="#742FC2"/>
                        <path id="Vector_6" d="M184.202 99.2861H168.236V103.275H184.202V99.2861Z" fill="white"/>
                        <path id="Vector_7" d="M172.103 59.2243C173.141 59.2243 173.981 58.3836 173.981 57.3465C173.981 56.3094 173.141 55.4688 172.103 55.4688C171.066 55.4688 170.226 56.3094 170.226 57.3465C170.226 58.3836 171.066 59.2243 172.103 59.2243Z" fill="#0057FF"/>
                        <path id="Vector_8" d="M177.371 59.2243C178.408 59.2243 179.249 58.3836 179.249 57.3465C179.249 56.3094 178.408 55.4688 177.371 55.4688C176.334 55.4688 175.494 56.3094 175.494 57.3465C175.494 58.3836 176.334 59.2243 177.371 59.2243Z" fill="#FFCE54"/>
                        <path id="Vector_9" d="M184.202 68.9683H168.236V72.9572H184.202V68.9683Z" fill="#E31B1B"/>
                        <path id="Vector_10" d="M194.413 78.9355H178.447V82.9245H194.413V78.9355Z" fill="#0057FF"/>
                        <path id="red-line" d="M259 79H202V83H259V79Z" fill="#E31B1B" ref={redLineRef}/>
                        <path id="Vector_11" d="M194.413 88.1821H178.447V92.1711H194.413V88.1821Z" fill="#29DA70"/>
                        <path id="purple-line" d="M264 69H191V73H264V69Z" fill="#742FC2"/>
                        <g className="right-hand" ref={rightHandRef} style={{transformOrigin: 'bottomCenter'}}>
                        <path id="Vector_12" d="M251.365 198.411C251.365 198.411 234.526 194.27 235.815 184.201C237.104 174.132 247.995 179.796 247.995 179.796C247.995 179.796 245.143 166.083 241.002 162.186C236.86 158.288 245.66 151.589 252.4 158.055C259.14 164.52 260.439 159.334 265.879 166.063C271.32 172.793 271.32 191.935 271.32 191.935L251.365 198.411Z" fill="#F4A28C"/>
                        <path id="Vector_13" opacity="0.08" d="M252.4 158.014C252.4 158.014 264.824 152.29 270.142 163.17C275.461 174.051 278.607 176.863 278.607 176.863V211.119L251.365 190.646L252.4 158.014Z" fill="black"/>
                        </g>
                        <path id="Vector_14" d="M244.591 195.903L266.388 252.589L308.596 238.529L271.281 188.354L244.591 195.903Z" fill="#68E1FD"/>
                        <path id="Vector_15" d="M166.521 59.2243C167.558 59.2243 168.399 58.3836 168.399 57.3465C168.399 56.3094 167.558 55.4688 166.521 55.4688C165.484 55.4688 164.643 56.3094 164.643 57.3465C164.643 58.3836 165.484 59.2243 166.521 59.2243Z" fill="#29DA70"/>
                        <g className="left-hand" ref={leftHandRef} style={{transformOrigin: 'bottomCenter'}}>
                        <path id="Vector_16" opacity="0.08" d="M191.662 153.233C191.662 153.233 204.918 150.473 201.883 163.262C198.849 176.051 208.988 174.315 207.019 184.333C205.05 194.351 191.662 218.549 191.662 218.549H166.521L179.31 171.422L191.662 153.233Z" fill="black"/>
                        <path id="Vector_17" d="M181.482 192.971C181.482 192.971 198.321 188.819 197.032 178.761C195.743 168.702 184.852 174.356 184.852 174.356C184.852 174.356 187.694 160.653 191.845 156.745C195.996 152.838 187.176 146.159 180.437 152.614C173.697 159.07 172.408 153.893 166.968 160.633C161.527 167.372 161.527 186.495 161.527 186.495L181.482 192.971Z" fill="#F4A28C"/>
                        </g>
                        <path id="Vector_18" d="M186.702 191.29L163.64 247.474L121.754 232.472L160.186 183.146L186.702 191.29Z" fill="#68E1FD"/>
                        </g>
                    </svg>
                </div>
            </div>
        </section>
    )
}

export default Main
