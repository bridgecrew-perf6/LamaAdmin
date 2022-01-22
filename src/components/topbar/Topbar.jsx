import React from 'react'
import './topbar.css';
import {NotificationsNone,Language,Settings} from '@material-ui/icons';

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">Vinh dep trai admin</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone/>
                        <span className="topIconBag">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language/>
                        <span className="topIconBag">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings/>
                        
                    </div>
                    <img src="https://scontent.fvca1-4.fna.fbcdn.net/v/t1.15752-9/227460539_820426602179501_3609767264726908897_n.jpg?_nc_cat=109&ccb=1-4&_nc_sid=ae9488&_nc_ohc=6qVxYjNEaEIAX-0FjdY&tn=LiijmfxaT4oUelwV&_nc_ht=scontent.fvca1-4.fna&oh=73d15755ca5d29af2cc1cb3346ac94d2&oe=613A0888" 
                    alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}
