import {NavLink} from "react-router-dom";


const ToolBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-primary-subtle">
            <div className="container">
                <NavLink className="navbar-brand" to="/">TV Shows</NavLink>
            </div>
        </nav>
    );
};

export default ToolBar;