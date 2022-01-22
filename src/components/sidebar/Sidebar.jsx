import React from 'react'
import './sidebar.css';
import {
    LineStyle,
    Timeline,
    TrendingUp,
    PermIdentity,
    Storefront,
    BarChart,
    AttachMoney,
    MailOutline,
    DynamicFeed,
    ChatBubbleOutline,
    WorkOutline,
    Report,
} from '@material-ui/icons';
import { Link } from 'react-router-dom';


export default function Sidebar() {
    return (
        <div>
            <div className="sidebar">
                <div className="sidebarWrapper">
                    <div className="sidebarMenu">
                        <h3 className="sidebarTitle">Dashboard</h3>
                        <ul className="sidebarList">
                            <Link to="/" className="link">
                             <li className="sidebarListItem active">
                                <LineStyle/>
                                Home
                            </li>
                            </Link>
                           
                            <li className="sidebarListItem">
                                <Timeline/>
                                Analytics
                            </li>
                            <li className="sidebarListItem">
                                <TrendingUp/>
                                Sales
                            </li>
                        </ul>
                    </div>
                    <div className="sidebarMenu">
                        <h3 className="sidebarTitle">Quick Menu</h3>
                        <ul className="sidebarList">
                            <Link to="/users" className="link">
                                <li className="sidebarListItem">
                                    <PermIdentity/>
                                    Users
                                </li>
                            </Link> 

                            <Link to="/products" className="link">
                                <li className="sidebarListItem">
                                    <Storefront/>
                                Products
                                </li>
                            </Link>
                            <li className="sidebarListItem">
                                <AttachMoney/>
                               Transactions
                            </li>
                            <li className="sidebarListItem">
                                <BarChart/>
                               Reports
                            </li>
                        </ul>
                    </div>
                    <div className="sidebarMenu">
                        <h3 className="sidebarTitle">Notifications</h3>
                        <ul className="sidebarList">
                            <li className="sidebarListItem">
                                <MailOutline/>
                                Mail
                            </li>
                            <li className="sidebarListItem">
                                <DynamicFeed/>
                               Feedback
                            </li>
                            <li className="sidebarListItem">
                                <ChatBubbleOutline/>
                               Messages
                            </li>
                            
                        </ul>
                    </div>
                    <div className="sidebarMenu">
                        <h3 className="sidebarTitle">Staff</h3>
                        <ul className="sidebarList">
                            <li className="sidebarListItem">
                                <WorkOutline/>
                                Manage
                            </li>
                            <li className="sidebarListItem">
                                <Timeline/>
                               Analytics
                            </li>
                            <li className="sidebarListItem">
                                <Report/>
                               Reports
                            </li>
                        </ul>
                    </div>
                </div>
            </div>            
        </div>
    )
}
