import React from "react";
import { useDispatch, useSelector } from "react-redux";

//// import classes from './Home.module.css'
import Sidebar from "../components/Sidebar";
import Compose from "../components/Compose";
import Sent from "../components/Sent";
import Received from "../components/Received";
import { replaceMail } from "../store/mail-actions";
import { updateMail } from "../store/mail-actions";

const Home = () => {
  const state = useSelector((state) => state.show);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const firstTime = useSelector((state) => state.mail.firstTime);
  const currentMailData = useSelector((state) => state.mail.mailData);
  const dispatch = useDispatch();

  if (isLoggedIn && firstTime) {
    const loggedUserEmail = JSON.parse(localStorage.getItem("idToken")).email;
    const emailUrl = loggedUserEmail.replace("@", "").replace(".", "");
    dispatch(replaceMail(emailUrl, loggedUserEmail));
  }

  if (isLoggedIn) {
    const loggedUserEmail = JSON.parse(localStorage.getItem("idToken")).email;
    const emailUrl = loggedUserEmail.replace("@", "").replace(".", "");
    dispatch(updateMail(emailUrl, loggedUserEmail, currentMailData));
  }
  return (
    <React.Fragment>
      <Sidebar />
      {state.compose && <Compose />}
      {state.sent && <Sent />}
      {state.received && <Received />}
    </React.Fragment>
  );
};

export default Home;
