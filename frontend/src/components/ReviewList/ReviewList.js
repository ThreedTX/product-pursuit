import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Route, useParams } from 'react-router-dom';
import { getReviews } from "../../store/review"; /** */
import './ReviewList.css';

function ReviewList() {
  const dispatch = useDispatch();



  const { userId } = useParams();
  const userId = Number.parseInt((useParams().userId));
  console.log(userId);

  const reviews = useSelector((state) => Object.values(state.review));


  /** */
  useEffect(() => {
    dispatch(getReviews());
  }, [dispatch]);


  let key = 0;

  return (
    <div>
      <ul>
        {reviews.map(review => (
          <li key={review.id} id={review.id}>
            <NavLink to={`/users/${review.userId}`}>userId.name</NavLink>
          </li>
        ))}
      </ul>
      <Route path='/products/:productId'>

      </Route>
    </div>
  );
}

export default ReviewList;
