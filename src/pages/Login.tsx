import React from "react";
import { wallpapers, user } from "~/configs";
import type { MacActions } from "~/types";

export default function Login(props: MacActions) {
  const [password, setPassword] = useState("");
  const [sign, setSign] = useState("Click to enter");
  const dark = useStore((state) => state.dark);

  const keyPress = (e: React.KeyboardEvent) => {
    const keyCode = e.key;
    if (keyCode === "Enter") loginHandle();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
  };

  const loginHandle = () => {
    if (user.password === "" || user.password === password) {
      // not set password or password correct
      props.setLogin(true);
    } else if (password !== "") {
      // password not null and incorrect
      setSign("Incorrect password");
    }
  };

  return (
    <div
      className="size-full login text-center"
      style={{
        background: `url(${
          dark ? wallpapers.night : wallpapers.day
        }) center/cover no-repeat`
      }}
      onClick={() => loginHandle()}
    >
      <div className="inline-block w-auto relative top-1/2 -mt-40">
        {/* Avatar */}
        <img className="rounded-full size-24 my-0 mx-auto" src={user.avatar} alt="img" />
        <div className="font-semibold mt-2 text-xl text-white">{user.name}</div>

        {/* Password Input */}
        <div className="mx-auto grid grid-cols-5 w-44 h-8 mt-4 rounded-md backdrop-blur-2xl bg-gray-300/50">
          <input
            className="text-sm text-white col-start-1 col-span-4 no-outline bg-transparent px-2"
            type="password"
            placeholder="Enter Password"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={keyPress}
            value={password}
            onChange={handleInputChange}
          />
          <div className="col-start-5 col-span-1 flex-center">
            <span className="i-bi:question-square-fill text-white ml-1" />
          </div>
        </div>

        <div mt-2 cursor-pointer text="sm gray-200">
          {sign}
        </div>
      </div>
    </div>
  );
}
