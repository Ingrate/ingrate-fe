import "./Search.css";
import List from "./List";
import InputValue from "./InputValue";
import { useEffect, useState } from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../api/url";

function Search({ onChange }) {
  const [search, setSearch] = useState("");
  const [select, setSelect] = useState(false);
  const nav = useNavigate();
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    axiosInstance
      .get(`/ingredient/unit`)
      .then((response) => {
        setDatas(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const onClickSearch = () => {
    if (select === true) {
      setSelect(false);
    }
    onChange({ target: { id: "name", value: "" } });
  };

  const onClickList = (e) => {
    onChange({ target: { id: "name", value: e.target.innerText } });
    setSearch(e.target.innerText);
    setSelect(true);
  };

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredData = () => {
    if (search === "") {
      return [];
    }
    return datas.filter((data) =>
      data.name.toLowerCase().includes(search.toLowerCase()),
    );
  };

  const filteredDatas = getFilteredData();
  return (
    <div className="Search flex flex-col gap-4">
      <div className="search-wrapper m-auto flex w-600 flex-col justify-center rounded-4xl bg-amber-300 p-4 align-middle">
        <input
          className="bg-transparent p-1 text-center text-2xl placeholder-stone-400 outline-none"
          id="name"
          value={search}
          onChange={onChangeSearch}
          onClick={onClickSearch}
          type="text"
          placeholder="식재료 이름으로 검색하세요"
        />
        <div
          className={`list-wrapper ${select ? "hidden" : ""} ${filteredDatas.length ? "mt-4" : ""} max-h-64 overflow-auto rounded-3xl bg-white text-lg`}
        >
          {filteredDatas.map((data) => {
            return (
              <List
                key={data.name}
                value={data.name}
                onClick={onClickList}
              ></List>
            );
          })}
        </div>
      </div>
      <div
        className={`list-wrapper m-4 flex flex-col gap-7 ${select ? "" : "hidden"}`}
      >
        <InputValue onChange={onChange}></InputValue>
        <div className="m-auto flex w-600 justify-between p-1">
          <Button
            text="뒤로가기"
            color="gray"
            onClick={() => {
              setSearch("");
              onClickSearch();
            }}
          ></Button>
          <div className="flex gap-6">
            <Button
              text="비교하기"
              color="gray"
              onClick={() => {
                nav("/rate");
              }}
            ></Button>
            <Button
              text="등록하기"
              color="gray"
              onClick={() => {
                nav("/save");
              }}
            ></Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
