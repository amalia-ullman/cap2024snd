import React, { Component } from "react";
import './Sidebar.css';

class Sidebar extends React.Component {
    render() {
        return (
        <div class="sidebar">
                    <div class="user">
                        <i class="fa-solid fa-user fa-2x"></i>
                    </div>
                    <div class="plus">
                        <i class="fa-solid fa-plus fa-2x"></i>
                    </div>
        </div>
        )
    };
}

export default Sidebar;