import React from 'react';
import Sidebar from "../Sidebar/Sidebar";
import Feed from "../Feed/Feed";
import Widgets from "../Widgets/Widgets";
import isAutenticated from "../../services/IsAutenticated";


function Home (){
    console.log(localStorage.getItem('token'));
    if(isAutenticated()){
        return (
            <div className="app">
                <Sidebar />
                <Feed />
                <Widgets />
            </div>
        )
    }
}

export default Home;