import AuthProfile from "../components/Auth";
import type { NextComponentType } from "next";

const Auth: NextComponentType = () => {
  return (
    <div className="w-full items-center justify-center flex">
      <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 2xl:w-1/4 mx-4">
        <AuthProfile />
      </div>
    </div>
  );
};

export default Auth;
