import AuthProfile from "../components/Auth";
import type { NextPage } from "next";

const Auth: NextPage = () => {
  return (
    <div className="w-full items-center justify-center flex">
      <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 2xl:w-1/3 mx-4">
        <AuthProfile />
      </div>
    </div>
  );
};

export default Auth;
