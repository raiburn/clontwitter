import React, { useState, useEffect } from "react";
import TweetBox from "../TweetBox/TweetBox";
import Post from "../Post/Post";
import axios from "axios";
import "./Feed.css";
import FlipMove from "react-flip-move";

function Feed() {
  const [data, setData] = useState([]);

  useEffect( () => {
    const fetchData = async () => {
      try{
        const result = await axios.get(`${window.location.protocol}//${window.location.hostname}:8000/api/tweets/`);
        setData(result.data.tweets);
      }
      catch(error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <TweetBox />

      <FlipMove>
      {data.map((post) => (
          <Post
            key={post.text}
            displayName={post.users.name}
            username={post.users.username}
            verified={post.verified}
            text={post.message}
            avatar={post.avatar}
            image={post.image}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;