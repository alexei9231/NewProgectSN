import s from "./Post.module.css";
import React from "react";

function Post(props: any) {
    return (
            <div className={s.item}>
                <img className={s.itemImg} src="https://10619-2.s.cdn12.com/rests/original/105_504329094.jpg"/>
                {props.message}
                <div>
                    <span> likes {props.likeCount} </span>
                </div>
            </div>)

}

export default Post