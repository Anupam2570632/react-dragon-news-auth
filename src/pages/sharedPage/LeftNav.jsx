import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const LeftNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('/categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    const { filterNews } = useContext(AuthContext)

    const handleFilterNews = (category) => {
        filterNews(category)
    }


    return (
        <div>
            <h2 className="text-2xl my-2 font-bold ">All Category</h2>
            {
                categories.map(category => <button onClick={() => handleFilterNews(category.id)} className="block px-8 py-4 w-full text-start hover:bg-gray-300" key={category.id}>
                    {category.name}
                </button>)
            }
        </div>
    );
};

export default LeftNav;