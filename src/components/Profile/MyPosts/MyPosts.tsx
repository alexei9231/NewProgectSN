import React from "react";
import s from "./MyPost.module.css"
import Post from "./Post/Post";

function MyPosts() {
    return (
            <div>
                My post
                <div>
                    <textarea></textarea>
                    <button> Add post </button>
                    <button> Remove </button>
                </div>
                <div className={s.posts}>
                    <Post message="Hello, I don`t give a fuck"
                          likeCount={2}
                    />
                    <Post message="It`s my first page"
                          likeCount={6}
                    />
                </div>

            </div>
       )
}

export default MyPosts