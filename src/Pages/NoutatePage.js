import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Missing from "./Missing";
const NoutatePage = ({ noutati, setNoutati }) => {
  const { id } = useParams();
  const noutate = noutati.find((noutate) => noutate.id.toString() === id);
  const navigate = useNavigate();
  const handleDelete = (id) => {
    // <Route path={`/noutati/:${id}`} element={<Navigate to={"/noutati"} />} />;
    // <Route path="/redirect" element={<Navigate to="/noutati" />} />;
    const listaNoutati = noutati.filter((noutate) => noutate.id !== id);
    setNoutati(listaNoutati);
    navigate("/noutati");
    console.log(listaNoutati);
  };

  return (
    <main className="PostPage">
      <article className="post">
        {noutate && (
          <>
            <div className="card-item-info">
              <h4 className="postTitle">{noutate.title}</h4>
              <p className="postDate">{noutate.datatime}</p>
              <p className="postBody">{noutate.body}</p>
            </div>
            <div className="card-image">
              <img className="card-item-img" src={noutate.src} alt="Stire" />
            </div>
            <button onClick={() => handleDelete(noutate.id)}>
              Delete Noutate
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
