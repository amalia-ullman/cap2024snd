import React, { Component } from "react";
import './Sidebar.css';
import {Link} from "react-router";

export default function Sidebar(){
   
        return (
        <div class="sidebar">
                    <Link to="/test">
                    <div class="user">
                        <i class="fa-solid fa-user fa-2x"></i>
                    </div>
                    </Link>
                    <Link to="">
                    <div class="plus">
                        <i class="fa-solid fa-plus fa-2x"></i>
                    </div>
                    </Link>
                    <Link to="/">
                    <div class="home">
                        <i class="fa-solid fa-home fa-2x"></i>
                    </div>
                    </Link>
        </div>
        )
    };

