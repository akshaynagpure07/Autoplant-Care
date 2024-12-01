function LoginCard() {
  return (
    <div>
      <div className="Login-Card-Main flex flex-col items-center justify-center gap-3 rounded-2xl bg-black bg-opacity-65 backdrop-blur-sm border-white border-2 h-96 w-80 lg:w-96 lg:h-2/3 ">
        <div className="heading text-white text-3xl font-semibold shadow-xs">
          User Login
        </div>
        <div className="input-with-btn flex flex-col items-center justify-between gap-2">
          <div className="emailbox">
            <input
              className="rounded-md px-3 py-2 text-sm w-56 hover:selection:red"
              type="text"
              placeholder="example@email.com"
            />
          </div>
          <div className="Password">
            {" "}
            <input
              className="rounded-md p-3 py-2 text-sm w-56"
              type="text"
              placeholder="Password"
            />{" "}
          </div>
          <div className="submit-btn">
            <button className="helloji bg-green-500  px-10 py-1 rounded-lg font-semibold text-lg shadow-md ">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginCard;
