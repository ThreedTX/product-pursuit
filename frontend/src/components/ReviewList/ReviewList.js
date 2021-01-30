import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Route, useParams } from 'react-router-dom';
import { getReviews } from "../../store/review"; /** */
import Review from '../Review';
import './ReviewList.css';

function ReviewList({ product }) {
  const dispatch = useDispatch();



  const productId = product.id;





  //we want to change this to be review by productId num
  const reviews = useSelector(({ review }) =>
    Object.values(review).filter(
      (review) => review.productId === productId
    ));


  /** */
  useEffect(() => {
    dispatch(getReviews());
  }, [dispatch]);

  // useEffect(() => {
  //   dispatch(loadReviewsForProduct(productId));
  // }, [dispatch, productId]);


  let key = 0;

  return (
    <div>
      <ul>
        {reviews.map(review => (
          <li key={key++} id={review.id}>
            <Review review={review} product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReviewList;
