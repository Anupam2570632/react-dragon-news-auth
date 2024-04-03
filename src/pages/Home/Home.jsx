import Header from "../sharedPage/Header";
import LeftNav from "../sharedPage/LeftNav";
import Navbar from "../sharedPage/Navbar";
import RightNav from "../sharedPage/RightNav";
import LatestNews from "./LatestNews";

const Home = () => {
    return (
        <div>
            <Header />
            <LatestNews></LatestNews>
            <Navbar />
            <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
                <LeftNav></LeftNav>
                <div className="md:col-span-2 border">middle side</div>
                <RightNav></RightNav>
            </div>
        </div>
    );
};

export default Home;