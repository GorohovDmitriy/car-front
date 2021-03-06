import axios from "axios";
import userStore from "../../store/userStore";
import LoginComponent from "../LoginComponent";
import { observer } from "mobx-react-lite";
import { NextRouter, useRouter } from "next/router";
import { FC, useState } from "react";
import { BaseUrl, WebsiteUrls } from "../../types/enums";
import { Values } from "../../types/formik";

const Login: FC = () => {
  const [exist, setExist] = useState(false);
  const router: NextRouter = useRouter();

  const submitHandler = async (values: Values) => {
    try {
      await axios
        .post(`${BaseUrl.URL}auth/login`, values)
        .then(({ data }) => {
          userStore.addUser(data.user);
          router.push(WebsiteUrls.HOME);
        })
        .catch(({ response }) => {
          response.status === 400 && setExist(true);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LoginComponent
      heading="Sign in"
      link="Sign in with Social"
      href={WebsiteUrls.SOCIAL}
      exist={exist}
      submitHandler={submitHandler}
      error="email address not found"
      account="Back"
    />
  );
};

export default observer(Login);
