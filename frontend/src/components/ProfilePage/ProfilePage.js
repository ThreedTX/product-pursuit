import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUsers } from "../../store/users";

import './ProfilePage.css'

function ProfilePage() {
  const dispatch = useDispatch();
  // const userId = user.id;

  const userId = Number.parseInt(useParams().userId);
  console.log(userId);
  // const selectUserById = (state, userId) => state.users.find(user => user.id === userId)

  const user = useSelector(({ users }) =>
    Object.values(users).filter(
      (user) => user.id === userId
    )
  );
  console.log(user, " USER ");


  // const user = useSelector((state) => state.users);
  // console.log(selectUserById);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch])

  return (
    <div className="profile-wrapper">
      <div className="profile-banner">
        <div className="profile-banner__content">
          <div className="profile-picture"></div>
          <div className="profile-info">
            <h2>{user[0].username}</h2>
            <p>Update your bio to let us know a little bit more about you!

            </p>
          </div>
        </div>
        <div className="profile-banner__footer"></div>
      </div>
      <div className="profile-content">
        <div className="profile-feed">

        </div>
        <div className="profile-sidebar"></div>
      </div>
    </div>
  )

}


export default ProfilePage;
