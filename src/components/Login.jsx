// import "./Login.css";
import { NavLink, useNavigate } from "react-router-dom";

function Login({ username, password, onChange, onClick, postAuthLogin }) {
  return (
    <div className="Login mr-40 flex">
      <div className="login-wrapper m-auto flex w-400 flex-col gap-2.5">
        <div className="pl-2 text-xl font-bold">사용자 이름</div>
        <input
          className="mb-5 h-14 rounded-3xl border-2 border-gray-200 pl-5 pr-5 text-lg"
          type="text"
          id="username"
          value={username}
          onChange={onChange}
        />
        <div className="pl-2 text-xl font-bold">비밀번호</div>
        <input
          className="mb-2 h-14 rounded-3xl border-2 border-gray-200 pl-5 pr-5 text-lg"
          type="password"
          id="password"
          value={password}
          onChange={onChange}
        />
        <div className="keep-signed flex gap-2 pl-2">
          <input type="checkbox" onChange={onClick} />
          <div>자동 로그인</div>
        </div>
        <button
          className="mt-10 h-14 rounded-3xl border-2 border-amber-400 bg-amber-300 text-center text-xl font-bold"
          onClick={() => {
            postAuthLogin();
          }}
        >
          로그인
        </button>
        <div className="to-signup flex gap-2 pl-2">
          <div>인그레이트가 처음이신가요?</div>
          <NavLink to="/signup" className="font-bold">
            회원가입
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Login;
