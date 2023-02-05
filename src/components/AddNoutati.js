import React from "react";
import { useState } from "react";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import "../Pages/NoutatiPage.css";
import api from "../api/API";
import axios from "axios";

const AddNoutati = ({ noutati, setNoutati }) => {
  const [title, setTitile] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");
  let navigate = useNavigate();

  const imgSelectedHandler = (e) => {
    console.log(e.target.files);
    setImage(URL.createObjectURL(e.target.files[0]));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = noutati.length ? noutati[noutati.length - 1].id + 1 : 1;
    const datetime = format(new Date(), "dd-MM-yyyy");
    const newPost = {
      id,
      src: "images/stire.jpg",
      datetime: datetime,
      title: title,
      body: body,
    };
    try {
      await api.post("/noutati", newPost);
      const allPosts = [...noutati, newPost];
      setNoutati(allPosts);
      setTitile("");
      setBody("");
      navigate(`/noutati`);
    } catch (err) {
      console.log(`Error:${err.message}`);
    }
  };
  return (
    <main className="NewPost">
      <h2>New Post</h2>
      <form className="newPostForm" onSubmit={handleSubmit}>
        <label htmlFor="postTitle">Title:</label>
        <input
          id="postTitle"
          required
          type="text"
          value={title}
          onChange={(e) => {
            setTitile(e.target.value);
          }}
        />
        <label htmlFor="postBody">Noutate:</label>
        <textarea
          id="postBody"
          required
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            imgSelectedHandler(e);
          }}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default AddNoutati;
