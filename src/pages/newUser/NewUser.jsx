import React from 'react'
import './newUser.css';


export default function newUser() {
    return (
        <div className="newUser">
            <h1 className="newUserTitle">New User</h1>
            <form action="" className="newUserForm">
                <div className="newUserItem">
                    <label>Username</label>
                    <input type="text"  placeholder="abc xyz"/>
                </div>
                <div className="newUserItem">
                    <label>Full Name</label>
                    <input type="text"  placeholder="abc xyz"/>
                </div>
                <div className="newUserItem">
                    <label>Email</label>
                    <input type="text"  placeholder="abcxyz@gmail.com"/>
                </div>
                <div className="newUserItem">
                    <label>Password</label>
                    <input type="password"  placeholder="abc xyz"/>
                </div>
                <div className="newUserItem">
                    <label>Phone</label>
                    <input type="text"  placeholder="+84 124125125"/>
                </div>
                <div className="newUserItem">
                    <label>Address</label>
                    <input type="text"  placeholder="ABC City"/>
                </div>
                <div className="newUserItem">
                    <label>Gender</label>
                    <div className="newUserGender">

                    <input type="Radio" name="gender" id="male" value="male"/>
                    <label for="male">Male</label>
                    <input type="Radio" name="gender" id="female" value="female"/>
                    <label for="female">Female</label>
                    <input type="Radio" name="gender" id="other" value="other"/>
                    <label for="other">Other</label>
                    </div>
                </div>
                <div className="newUserItem">
                    <label>Active</label>
                    <select name="active" id="active" className="newUserSelect">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>

                    </select>
                </div>
                <div className="newUserButton">
                    Create
                </div>
            </form>
        </div>
    )
}
