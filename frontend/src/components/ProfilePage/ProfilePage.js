import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUsers } from "../../store/users";

import './ProfilePage.css'

function ProfilePage() {
  const dispatch = useDispatch();
  // const userId = Number.parseInt(useParams().userId);
  const params = useParams();
  const testing = params;
  console.log(testing);

  // const user = useSelector((state) => state.users[userId]);
  // console.log(user);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch])

  return (
    <div className="profile-wrapper">
      <div className="profile-banner">
        <div className="profile-picture"></div>
        {/* <div className="profile-info"><p>{userId}</p></div> */}
        <div className="profile-banner__footer"></div>
      </div>
      <div className="profile-content">
        <div className="profile-feed"></div>
        <div className="profile-sidebar"></div>
      </div>
    </div>
  )

}


export default ProfilePage;
