import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('/categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])


    return (
        <div>
            <h2 className="text-2xl my-2 font-bold ">All Category</h2>
            {
                categories.map(category=><Link to={`/news/${category.id}`} className="block px-8 py-4 hover:bg-gray-300" key={category.id}>
                    {category.name}
                </Link>)
            }
        </div>
    );
};

export default LeftNav;