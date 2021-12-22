import React from "react";

import { initializeApp } from "firebase/app";
import sendMail from "./sendMail";

const firebaseConfig = {
  apiKey: "AIzaSyBaUzKD7cppj8fHVheYw-bHyqmMtfMi7Jg",
  authDomain: "fplayground-3dc09.firebaseapp.com",
  projectId: "fplayground-3dc09",
  storageBucket: "fplayground-3dc09.appspot.com",
  messagingSenderId: "816853923301",
  appId: "1:816853923301:web:5432189e99b155785deb0c",
  databaseURL: "https://fplayground-3dc09.firebaseio.com",
};

// Initialize app setup
initializeApp(firebaseConfig);

const Mailer: React.FC = () => {
  const handleClick = async () => {
    await sendMail({
      to: "dora.horvat7@gmail.com",
      from: "tester@test",
      message: "Test again",
      subject: "Mjau you the moistiest",
    });
  };

  return (
    <div>
      <button onClick={handleClick}>Send Mail</button>
    </div>
  );
};

export default Mailer;
