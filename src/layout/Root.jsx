import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="h-full  min-h-screen flex flex-col ">
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
// "h-full bg-home-bg bg-cover bg- bg-no-repeat min-h-screen flex flex-col"
