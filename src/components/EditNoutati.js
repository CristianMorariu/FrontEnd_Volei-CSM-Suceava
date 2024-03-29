import { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import api from "../api/API";
const EditNoutati = ({ noutati, setNoutati }) => {
  const [editTitle, setEditTitle] = useState("");
  const [editBody, setEditBody] = useState("");
  const { id } = useParams();
  const post = noutati.find((noutate) => noutate.id.toString() === id);
  const navigate = useNavigate();

  const handleEdit = async (id) => {
    const datetime = format(new Date(), "dd-MM-yyyy");
    const updatedPost = {
      id,
      src: "images/stire.jpg",
      datetime: datetime,
      title: editTitle,
      body: editBody,
    };
    try {
      const response = await api.put(`/noutati/edit/:${id}`, updatedPost);
      setNoutati(
        noutati.map((noutate) => (noutate.id === id ? updatedPost : noutate))
      );
      setEditTitle("");
      setEditBody("");
      navigate(`/noutati`);
    } catch (err) {
      console.log(`Error:${err.message}`);
    }
  };

  useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditBody(post.body);
    }
  }, [post, setEditTitle, setEditBody]);
  return (
    <main className="NewPost">
      {editTitle && (
        <>
          <h2>Edit Post</h2>
          <form className="newPostForm" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="postTitle">Title:</label>
            <input
              id="postTitle"
              type="text"
              required
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />
            <label htmlFor="postBody">Post:</label>
            <textarea
              id="postBody"
              required
              value={editBody}
              onChange={(e) => setEditBody(e.target.value)}
            />
            <button type="submit" onClick={() => handleEdit(post.id)}>
              Submit
            </button>
          </form>
        </>
      )}
      {!editTitle && (
        <>
          <h2>Post Not Found</h2>
          <p>Well, that's disappointing.</p>
          <p>
            <Link to="/">Visit Our Homepage</Link>
          </p>
        </>
      )}
    </main>
  );
};

export default EditNoutati;
