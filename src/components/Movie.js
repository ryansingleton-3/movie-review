import React, { useEffect, useState } from "react";
import Description from "./Description";
import Reviews from "./Reviews";
import StarRating from "./StarReview";
import Services, { getReviews, createReview, deleteReview, updateReview} from "./Services";

function Movie() {
  const [data, setData] = useState();
  const [review, setReview] = useState("");
  const [editing, setEditing] = useState({});
  const [editedReview, setEditedReview] = useState(null)
  const [newReview, setNewReview] = useState("")

  const addReview = async (e) => {
    e.preventDefault();
    await createReview(review);
    let newReviews = [...data, review];
    setData(newReviews);
    setReview("");
    getData()
  };

  

  const REVIEWS_ENDPOINT =
    "https://63792d007eb4705cf27caba9.mockapi.io/reviews";

  async function getData() {
    try {
      const response = await fetch(REVIEWS_ENDPOINT);
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getData();
    console.log("use effect ran");
  }, []);

  return (
    <div>
      <Description />
      <StarRating />
      {Reviews && (
        <Reviews
          data={data}
          setData={setData}
          review={review}
          setReview={setReview}
          addReview={addReview}
          getData={getData}
          deleteReview={deleteReview}
          editing={editing}
          setEditing={setEditing}
          editedReview={editedReview}
          setEditedReview={setEditedReview}
          newReview={newReview}
          setNewReview={setNewReview}
          // handleEdit={handleEdit}
          // refreshReviews={refreshReviews}
        />
      )}
    </div>
  );
}

export default Movie;
