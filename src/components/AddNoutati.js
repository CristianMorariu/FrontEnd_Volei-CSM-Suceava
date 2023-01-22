import React from "react";
import { useState } from "react";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import "../Pages/NoutatiPage.css";
const AddNoutati = ({ noutati, setNoutati }) => {
  const [title, setTitile] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");
  let navigate = useNavigate();

  const imgSelectedHandler = (event) => {
    setImage(event.target.files[0]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = noutati.length ? noutati[noutati.length - 1].id + 1 : 1;
    // const datetime = format(new Date(), "dd MM, yyyy pp");
    const newPost = { id, title: title, textbody: body };
    const allPosts = [...noutati, newPost];
    setNoutati(allPosts);
    setTitile("");
    setBody("");
    navigate(`/noutati`);
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
          onChange={(e) => {
            imgSelectedHandler(e);
          }}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </main>

    // <form className="addForm">
    //   <label htmlFor="addItem">AddNoutate</label>
    //   <input
    //     autoFocus
    //     id="addNoutate"
    //     type="text"
    //     placeholder="Add Noutate"
    //     required
    //   />
    //   <button type="submit" aria-label="AddNoutate">
    //     <FaPlus />
    //   </button>
    // </form>
  );
};

export default AddNoutati;
