import React from "react";
import { useSelector } from "react-redux";

const Element = () => {
   let post = useSelector((state) => state.selected);

   return (
      <div className="mainCart">
         {post && (
            <div className="details" key={post.id}>
               <h1>Details Page For Post With ID {post.id}</h1>
               <img
                  src={`https://picsum.photos/200?random=${post.id}`}
                  alt={post.title}
               ></img>
               <p>
                  <strong>User ID : </strong> {post.userId}
               </p>
               <p>
                  <strong>Title : </strong> {post.title}
               </p>
               <strong>Body : </strong> {post.body}
            </div>
         )}
      </div>
   );
};

export default Element;
