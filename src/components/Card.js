import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectedPost } from "../redux/actions/selectedPostAction";
import { useNavigate } from "react-router-dom";


const Card = ({ data }) => {

    const dispatch = useDispatch();

    const navigate = useNavigate();

   function clickHandle(element) {
      dispatch(selectedPost(element));
      navigate(`/item/${element.id}`);
   }

   return data.map((element) => (
      <div
         id={element.id}
         className="card"
         onClick={() => {
            clickHandle(element);
         }}
      >
         <img
            src={`https://picsum.photos/200?random=${element.id}`}
            alt={element.title}
         />
         <p>User ID:{element.userId}</p>
         <p className="short-para">Title:{element.title}</p>
         <p>Body: {element.body}</p>
         <button class="show-button">Show All</button>
         
      </div>
   ));
};

export default Card;
