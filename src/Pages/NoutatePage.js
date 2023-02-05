import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Missing from "./Missing";
import api from "../api/API";

const NoutatePage = ({ noutati, setNoutati }) => {
  const { id } = useParams();
  const noutate = noutati.find(
    (noutate) => noutate.id.toString() === id.toString()
  );
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    try {
      await api.delete(`/noutati/:${id}`);
      const listaNoutati = noutati.filter((noutate) => noutate.id !== id);
      setNoutati(listaNoutati);
      navigate("/noutati");
      console.log(listaNoutati);
    } catch (err) {
      console.log(`Error:${err.message}`);
    }
  };
  return (
    <main className="PostPage">
      <article className="post">
        {noutate && (
          <>
            <div className="card-item-info">
              <h4 className="postTitle">{noutate.title}</h4>
              <p className="postDate">{noutate.datatime}</p>
              <div className="bodycontainer">
                <p className="postBody">{noutate.body}</p>
              </div>
            </div>
            <div className="card-image">
              <img className="card-item-img" src={noutate.src} alt="Stire" />
            </div>
            <Link to={`/noutati/edit/${noutate.id}`}>
              <button className="editButton">Edit Noutate</button>
            </Link>
            <button
              className="deleteButton"
              onClick={() => handleDelete(noutate.id)}
            >
              Delete Post
            </button>
          </>
        )}
        {!noutate && (
          <>
            <Missing />
          </>
        )}
      </article>
    </main>
  );
};

export default NoutatePage;
