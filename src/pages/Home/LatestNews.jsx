import Marquee from "react-fast-marquee";

const LatestNews = () => {
    return (
        <div className="p-4 flex bg-gray-300 rounded-sm">
            <button className="px-6 py-2 bg-red-700 text-white font-bold">Latest</button>
            <Marquee>
                I can be a React component, multiple React components, or just some text.
            </Marquee>
        </div>
    );
};

export default LatestNews;