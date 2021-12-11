import React from 'react';
import '../App.css';
import "./singlePost.css";

export default function singlePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="images/img14.jpg"
          alt=""
        />
        <h1 className="singlePostTitle">
          Soft-shell Crab
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
            User
            </b>
          </span>
          <span>1 day ago</span>
        </div>
        <p className="singlePostDesc">
          Ingredients:
          <br />
          <br />
          1 1/2 cups all-purpose flour,
          <br />
          2 teaspoons coarse salt,
          <br />
          1 teaspoon freshly ground pepper,
          <br />
          12 soft-shell crabs, cleaned,
          <br />
          12 tablespoons vegetable oil,
          <br />
          6 tablespoons unsalted butter,
          <br />
          1/4 cup loosely packed fresh flat-leaf parsley leaves, chopped,
          <br />
          3 lemons, cut in half.
          <br />
          <br />
          <br />
          Directions:
           <br />
           <br />
          Whisk flour, salt, and pepper; place on a dinner plate.
          <br />
          Dredge 2 soft-shell crabs in flour mixture, shaking off excess (make sure crabs are completely coated).
          <br />
          Heat 2 tablespoons oil in a medium pan over medium-high heat.
          <br />
          The oil should be very hot but not smoking.
          <br />
          Place flour-coated crabs, back side down, in pan; reduce heat to medium if pan starts to smoke.
          <br />
          Add 1 tablespoon butter and a large pinch of parsley to skillet. Squeeze the juice of half a lemon over crabs.
          <br />
          Keep warm in a low oven. Repeat process until all the crabs are cooked.
        </p>
      </div>
    </div>
  );
}
