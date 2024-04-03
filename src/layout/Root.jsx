import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="w-11/12 mx-auto md:w-[85%]">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;