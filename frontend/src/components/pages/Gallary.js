import React, { useEffect, useState } from "react";
import "../../App.css";
import GalleryPic from "../GalleryPic";
import useFetch from "../useFetch";
// import { useParams } from "react-router-dom";
//import data from "./../../data.json";

const Gallary = () => {
  //const [galleryPosts, setGalleryPosts] = useState([]);
  //useEffect(() => {
    // call the API and set the response to galleryPosts state, after that remove this line and like  5:
  //  setGalleryPosts(data);
  //}, []);
  const {data:galleryPosts, isPending, error} = useFetch('http://localhost:3456/api/gallery/');
  return (
    <section className="main">
    { isPending && <div> Loading... </div> }
    { error && <div> {error} </div>}
    {galleryPosts && 
      <div className="container">
          {galleryPosts.map((post) => (
            <GalleryPic post={post} />
          ))}
        </div>
      }
      </section>
  );
};

export default Gallary;
