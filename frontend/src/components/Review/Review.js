import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Route, useParams } from 'react-router-dom';
import { loadReviews, loadReviewsForProduct } from "../../store/review"; /** */
import './Review.css';

function Review({ review, product }) {
  const dispatch = useDispatch();



  const productId = product.id;
  // const userId = Number.parseInt((useParams().review.userId));
  // console.log(userId);
  // console.log(review);

  //we want to change this to be review by productId num
  const reviews = useSelector((state) => Object.values(state.review));


  /** */
  // useEffect(() => {
  //   dispatch(loadReviewsForProduct(productId));
  // }, [dispatch, productId]);


  let key = 0;

  return (
    <div>
      <div>
        <NavLink to={`/users/${review.userId}`}>userId.name</NavLink>
        <p>{review.rating}/5</p>
      </div>
      <p>{review.comment}</p>
      <p>{review.createdAt}</p>
    </div>
  );
}

export default Review;
