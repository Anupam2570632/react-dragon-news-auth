import { Link, useParams } from "react-router-dom";
import Navbar from "../sharedPage/Navbar";
import Header from "../sharedPage/Header";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import RightNav from "../sharedPage/RightNav";

const NewsDetails = () => {
    const { id } = useParams()
    const { news } = useContext(AuthContext)
    const aNews = news.find((ne) => ne._id == id)
    console.log(id)

    const { filterNews } = useContext(AuthContext)
    const handleFilterNews = (category) => {
        filterNews(category)
    }

    return (
        <div>
            <Header />
            <Navbar></Navbar>
            <div className="grid grid-cols-4 gap-8 ">
                <div className="col-span-3 p-8 space-y-6">
                    <img src={aNews.image_url} alt="" />
                    <h2 className="text-2xl font-bold">
                        {aNews.title}
                    </h2>
                    <p>
                        {aNews.details}
                    </p>
                    <div>
                        <Link to={'/'} onClick={() => handleFilterNews(aNews.category_id)} className="py-2 px-8 bg-rose-700 text-white font-bold">ALl news on this category</Link>
                    </div>                </div>
                <RightNav />
            </div>
        </div>
    );
};

export default NewsDetails;