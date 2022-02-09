const MainButton = ({type, link, text}) => {
    return ( 
        <a href={link}><button className={type}>{text}</button></a>
     );
}
 
export default MainButton;