import { useContext, useEffect, useState } from "react";
import Header from "../sharedPage/Header";
import LeftNav from "../sharedPage/LeftNav";
import Navbar from "../sharedPage/Navbar";
import RightNav from "../sharedPage/RightNav";
import LatestNews from "./LatestNews";
import { Link } from "react-router-dom";
import { FaEye, FaRegBookmark, FaShareAlt } from "react-icons/fa";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Home = () => {
    const { news } = useContext(AuthContext)

    return (
        <div>
            <Header />
            <LatestNews></LatestNews>
            <Navbar />
            <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
                <LeftNav></LeftNav>
                <div className="md:col-span-2 space-y-6">
                    <h2 className="text-2xl my-2 font-bold ">
                        Dragon News Home
                    </h2>

                    {news.length ?
                        (
                            news.map((oneNews, idx) => <div className="space-y-2 border border-[#E7E7E7] rounded-md" key={idx}>
                                <div className="flex items-center justify-between p-5 bg-[#F3F3F3]">
                                    <div className="flex gap-4 items-center">
                                        <img className="w-10 rounded-full h-10" src={oneNews.author.img} alt="" />
                                        <div className="">
                                            <h2 className="text-[#403F3F] font-semibold">{oneNews.author.name}</h2>
                                            <p>{oneNews.author.published_date}</p>
                                        </div>
                                    </div>
                                    <div className="flex text-2xl gap-3">
                                        <FaRegBookmark></FaRegBookmark>
                                        <FaShareAlt></FaShareAlt>
                                    </div>
                                </div>
                                <div className="p-5 space-y-5">
                                    <h2 className="text-[#403F3F] font-bold text-[20px]">
                                        {oneNews.title}
                                    </h2>
                                    <div>
                                        <img src={oneNews.image_url} alt="" />
                                    </div>
                                    <p className="text-[#706F6F] font-semibold">{oneNews.details.slice(0, 250)} <span className="font-semibold underline text-[#FF8C47]"><Link to={`/news/newsDetails-/${oneNews._id}`}>Read More</Link></span></p>
                                    <hr />
                                    <div className="flex items-center justify-between">
                                        <div className="flex gap-3 items-center">
                                            <div className="rating p-0">
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            </div>
                                            {oneNews.rating.number}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <FaEye></FaEye>
                                            <span>{oneNews.total_view}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                        ) :
                        <div className="text-3xl font-bold text-red-400 text-center py-10">No news found for this category</div>}
                </div>
                <RightNav></RightNav>
            </div>
        </div>
    );
};

export default Home;