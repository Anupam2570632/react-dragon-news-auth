import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import qzone1 from '../../assets/qZone1.png'
import qzone2 from '../../assets/qZone2.png'
import qzone3 from '../../assets/qZone3.png'
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const RightNav = () => {

    const { GoogleSignIn, GithubSignIn } = useContext(AuthContext)

    const handleGoogleSignIn = () => {
        GoogleSignIn()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error)
            })
    }
    const handleGithubSignIn = () => {
        GithubSignIn()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div className="space-y-5">
            <div>
                <h2 className="text-2xl font-bold py-3">Login With</h2>
                <button onClick={handleGoogleSignIn} className="btn w-full btn-outline mb-3 btn-info text-[18px]">
                    <FaGoogle></FaGoogle>
                    Login with google
                </button>
                <button onClick={handleGithubSignIn} className="btn w-full btn-outline text-[18px]">
                    <FaGithub></FaGithub>
                    Login with github
                </button>
            </div>

            <div>
                <h2 className="text-2xl font-bold py-3">Find Us On</h2>
                <div className="flex hover:bg-gray-200 items-center font-bold border rounded-t-lg w-full p-4">
                    <div className="mr-3 p-3 bg-gray-400 rounded-full">
                        <FaFacebook></FaFacebook>
                    </div>
                    <span className="text-[#706F6F]">Facebook</span>
                </div>
                <div className="flex hover:bg-gray-200 items-center font-bold border-x w-full p-4">
                    <div className="mr-3 p-3 bg-gray-400 rounded-full">
                        <FaTwitter></FaTwitter>
                    </div>
                    <span className="text-[#706F6F]">Twitter</span>
                </div>
                <div className="flex hover:bg-gray-200 items-center font-bold border w-full rounded-b-lg p-4">
                    <div className="mr-3 p-3 bg-gray-400 rounded-full">
                        <FaInstagram></FaInstagram>
                    </div>
                    <span className="text-[#706F6F]">Instagram</span>
                </div>
            </div>
            <div className="bg-gray-200 space-y-5 p-3">
                <h2 className="text-2xl font-bold mt-6 text-[#403F3F]">Q Zone</h2>
                <img src={qzone1} alt="" />
                <img src={qzone2} alt="" />
                <img src={qzone3} alt="" />
            </div>
        </div>
    );
};

export default RightNav;