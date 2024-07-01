import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import UserHeader from "../components/UserHeader";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

function Cancel_page({ username }) {
  const nav = useNavigate();
  const [user, setUser] = useState(username);

  useEffect(() => {
    setUser(username);
  }, [username]);

  return (
    <>
      <Navbar user={user}></Navbar>
      <UserHeader user={user}></UserHeader>
      <div className="m-auto mt-6 flex w-11/12 flex-col gap-32">
        <h3 className="text-5xl">회원 탈퇴</h3>
        <div className="flex flex-col gap-2">
          <div className="ml-2 text-xl font-bold">비밀번호</div>
          <input type="text" className="h-12 w-80 rounded-3xl border-2" />
        </div>
      </div>
      <div className="button-section absolute bottom-6 left-1/2 m-auto flex w-11/12 -translate-x-1/2 -translate-y-1/2 justify-start gap-6">
        <Button
          text={"뒤로가기"}
          onClick={() => {
            nav(-1);
          }}
        ></Button>
        <Button
          text={"탈퇴하기"}
          onClick={() => {
            nav("/");
          }}
        ></Button>
      </div>
    </>
  );
}

export default Cancel_page;
