import React, { Component } from "react";
import './account.css';
import Sidebar from "./Sidebar";

class Account extends React.Component {
    render() {
        return (
            <div class="whole-account">
                
                <Sidebar />

                <div class = "userinfo">
                <div class = "bio">
                <i class="fa-solid fa-user fa-10x"></i>
                    <div class = "bio-facts">
                    <h1 class="username">User_Name</h1>
                    <h3 class="info">John Rolfe</h3>
                    <h3 class="info">snd district maybe???</h3>
                    <div class="tags-acc">
                        <span class="ldtag">LD</span>
                        <span class="pftag">PF</span>
                    </div>
                    </div>
                </div>
                <div class="profile">
                <h5 class="long-bio">I have done s&d for 0.5 years. I have secured tobacco seeds from some unknown source. I have done s&d for 0.5 years. I have secured tobacco seeds from some unknown source. I like utilitarianism and democracy.</h5>
                    <h2 class="recent">RECENT POSTS</h2>
                    <div class="recent-posts">
                        <div class="post-preview">
                            <div class="post-side"></div>
                            <div class="post-info">
                            <h4>Post title</h4>
                            <div class="tags">
                                <span class="ldtag">LD</span>
                                <span class="afftag">Aff</span>
                            </div>
                            </div>
                        </div>

                        <div class="post-preview">
                            <div class="post-side"></div>
                            <div class="post-info">
                            <h4>Post title</h4>
                            <div class="tags">
                                <span class="pftag">LD</span>
                                <span class="archivedtag">Aff</span>
                            </div>
                            </div>
                        </div>

                        <div class="post-preview">
                            <div class="post-side"></div>
                            <div class="post-info">
                            <h4>Post title</h4>
                            <div class="tags">
                                <span class="ldtag">LD</span>
                                <span class="afftag">Aff</span>
                                <span class="negtag">Neg</span>
                            </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                </div>
            </div>
        );
    };

}

export default Account;


// export default function Account(){
//     return(
//     <div>
//     <div>
//         <img></img>
//         <h1>John Rolfe</h1>
//         <h3>snd district maybe???</h3>
//         <div>
//             {/* tags */}
//         </div>
//         <h5>I have done s&d for 0.5 years. I have secured tobacco seeds from some unknown source. I have done s&d for 0.5 years. I have secured tobacco seeds from some unknown source. I like utilitarianism and democracy.</h5>
//     </div>
//     <div>
//         <h2>Recent Posts</h2>
//         <div>
//             <h4>Post title</h4>
//             <div>
//                 {/* tags */}
//             </div>
//         </div>
//     </div>
//     </div>
//     );

// };