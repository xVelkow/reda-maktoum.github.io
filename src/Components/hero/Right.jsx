import reactjs from "Assets/reactjs.svg";
import js from "Assets/js.svg"
import git from "Assets/git.svg"
import css from "Assets/css.svg"
import html from "Assets/html.svg"
const Right = () =>{
    return(
        <section>
            <div className="coding">
                <span className="opening">&lt;</span>
                <span className="slash">/</span>
                coding
                <span className="closing">&gt;</span>
            </div>
            <img src={reactjs} className="reactjs" alt="reactjs"/>
            <img src={js} className="js" alt="js"/>
            <img src={git} className="git" alt="git"/>
            <img src={css} className="css" alt="css"/>
            <img src={html} className="html" alt="html"/>
        </section>
    )
}
export default Right