import LoginCard from "../Components/LoginCard";
import SubNav from "../Components/SubNav";

function UserLoginPage() {
  return (
    <div className="flex flex-col items-center justify-center ">
      
      <div className="card  lg:w-full">
        <LoginCard />
      </div>
    </div>
  );
}

export default UserLoginPage;
