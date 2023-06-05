import reactjs from "Assets/reactjs.svg";
import js from "Assets/js.svg"
import git from "Assets/git.svg"
import css from "Assets/css.svg"
import html from "Assets/html.svg"
const Right = () =>{
    return(
        <>
    <div className="coding">
        <span className="opening">&lt;</span>
        <span className="slash">/</span>
        coding
        <span className="closing">&gt;</span>
    </div>
    <img src={reactjs} className="reactjs"/>
    <img src={js} className="js"/>
    <img src={git} className="git"/>
    <img src={css} className="css"/>
    <img src={html} className="html"/>
        </>
    )
}
export default Right