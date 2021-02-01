import { useDispatch } from "react-redux";
import * as sessionActions from '../../store/session';
import './LoginForm.css';



function DemoUserButton() {
  const dispatch = useDispatch();


  const demoUserLogin = () => {
    return dispatch(sessionActions.login({ credential: 'Demo-lition', password: 'password' }))
  };


  return (
    <div>
      <button className="demo-user__button" onClick={demoUserLogin}>Demo User</button>
    </div>
  )
}

export default DemoUserButton;
