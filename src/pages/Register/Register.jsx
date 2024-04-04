import { Link } from "react-router-dom";
import Navbar from "../sharedPage/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { FaCommentsDollar } from "react-icons/fa";

const Register = () => {

    const { createUser } = useContext(AuthContext)

    const handleRegister = (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const photoURL = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')

        createUser(email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div className="">
            <Navbar />
            <div className="mx-auto lg:w-[750px] border card px-[100px] py-[20px] shrink-0 w-full">
                <h2 className="text-3xl font-bold py-4">
                    Login Your Account
                </h2>
                <hr />
                <form onSubmit={handleRegister} className="card-body bg-white">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input name="name" type="text" placeholder="Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input name="photo" type="text" placeholder="Photo URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name="email" type="email" placeholder="Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name="password" type="password" placeholder="Password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <div>
                        <p>Already Have An Account ? <Link className="underline text-red-400 font-bold" to={'/login'}>Login</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;