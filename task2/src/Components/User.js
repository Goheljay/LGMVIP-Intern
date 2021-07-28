import React from 'react'
import  "./css/Users.css";
const Users = ({loading,users}) => {
    return loading ? (   
          <div id="loders">
            <h3 className="loader">No Data Found</h3>
            <h4 className="loaders">Click On Get User</h4>
          </div>
        ) : 
        (
          <div id="main">
    
          {users.map(user =>

              <div className="project column3">
              
              <div className="profile">
                <img src={user.avatar} alt={user.avatar} className="avatar"></img>
                <div className="profileData">
                  <h1 className="name">{user.first_name} {user.last_name}</h1>
                  <p className="email">{user.email}</p>
                  <p>User ID: {user.id}</p>
                </div>
              </div>
            </div>  
            )
          }
          </div>
        )
}

export default Users;