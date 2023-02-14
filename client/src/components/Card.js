import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AiOutlineEllipsis } from "react-icons/ai";
import { MdEdit, MdOutlineDeleteOutline } from "react-icons/md";
const Card = () => {
  const navigate = useNavigate();
  const [post, setPost] = useState([]);
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(-1);
  useEffect(() => {
    getpost();
  }, []);
  const getpost = () => {
    axios
      .get("http://localhost:4200/posts")
      .then((res) => setPost(res.data))
      .catch((err) => console.log(err));
  };
  const handleDelet = async (_id) => {
    await axios
      .delete(`http://localhost:4200/posts/delete/${_id}`)
      .then((res) => {
        alert("post is deleted");
        getpost();
      })
      .catch((err) => console.log(err));
  };
  const handleupdate = (_id) => {
    navigate("/editpost/" + _id);
  };
  return (
    <div className="cards">
      
      {post.map((posts, index) => {
        return (
          <div key={index} className="card">
            
            <img
              src={`http://localhost:4200/${posts.image}`}
              alt="image loading"
            />
            {console.log(post)}
            <h3>{posts.title}</h3> <button>{posts.category}</button>
            <AiOutlineEllipsis
              onClick={() => {
                setOpen(!open);
                setCurrent(index);
              }}
              className="dropdown"
              size={30}
            />
            {open && index === current && (
              <div>
                
                <ul className="setting">
                  
                  <li>
                    
                    <MdEdit onClick={() => handleupdate(posts._id)} /> edit
                  </li>
                  <li>
                    
                    <MdOutlineDeleteOutline
                      onClick={() => handleDelet(posts._id)}
                    />
                    delete
                  </li>
                </ul>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
export default Card;
