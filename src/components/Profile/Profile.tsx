import React from "react";
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";

function Profile() {
    return (
        <div className={s.appWrapperContent}>
            <div>
                <img src="https://taurica.net/data/posts/2016/06/08/1465378383_vichod_i_zahod_solnca.jpg"/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>)
}

export default Profile