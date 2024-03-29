import * as Icon from "react-bootstrap-icons";
import { NavLink } from 'react-router-dom';

import './bottom-bar.scss';


const BottomBar = (props) => {
    return (
        <nav className="bottom-bar">
            <div className="d-mode-bg navbar fixed-bottom">
                <div className="container-fluid">
                    <div className="d-mode-text open-left-bar-menu-with-tracks navigation-button nav-link btn btn-outline-primary" data-bs-toggle="offcanvas" href="#offcanvasTracks" aria-controls="offcanvasTracks">
                        <Icon.MusicNote className="icon-styled"/>
                        <span className="text-inside-button">Tracks</span>
                    </div>


                    <div className="navigation-button nav nav-pills">
                        <NavLink to='/post-upload' className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
                            <div className='d-mode-text nav-item d-flex align-items-center justify-content-center'>
                                <Icon.PlusSquareFill className="icon-styled"/>
                                <span className="text-inside-button">New post</span>
                            </div>
                        </NavLink>
                    </div>
                        
                    <div className="d-mode-text open-right-bar-menu-with-people navigation-button nav-link btn btn-outline-primary" data-bs-toggle="offcanvas" href="#offcanvasPeople" aria-controls="offcanvasPeople">
                        <Icon.PeopleFill className="icon-styled"/>
                        <span className="text-inside-button">Users</span>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default BottomBar;