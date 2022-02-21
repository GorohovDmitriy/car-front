import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/tesla.svg";
import MenuAdmin from "../../admin/MenuAdmin";
import userStore from "../../../store/userStore";
import Categories from "../../Сategories";
import { FiSettings } from "react-icons/fi";
import { Button, Container, Logo, Menu, Settings } from "../../Navbar/style";
import { Roles, WebsiteUrls } from "../../../types/enums";
import { signOut } from "next-auth/react";
import { FC, useState } from "react";
import { IUser } from "../../../types/user";
import { NextRouter, useRouter } from "next/router";

interface ISignOutProps {
  admin?: IUser;
}

const SignOut: FC<ISignOutProps> = ({ admin }) => {
  const router: NextRouter = useRouter();
  const [popup, setPopup] = useState(false);

  const signOutHandler = () => {
    userStore.removeUser();
    signOut();
    router.push(WebsiteUrls.HOME);
  };

  const popupHandler = () => {
    setPopup(!popup);
  };

  return (
    <Container>
      <Logo>
        <Link href={WebsiteUrls.HOME}>
          <a>
            <Image src={logo} alt="logo" width={130} height={50} />
          </a>
        </Link>
      </Logo>
      <Categories />
      <Menu>
        {admin?.roles[0] === Roles.ADMIN && (
          <>
            <Settings onClick={popupHandler}>
              <FiSettings />
            </Settings>
            {popup && <MenuAdmin name={admin?.name} email={admin?.email} />}
          </>
        )}
        <Button onClick={signOutHandler}>Sign out</Button>
      </Menu>
    </Container>
  );
};

export default SignOut;
