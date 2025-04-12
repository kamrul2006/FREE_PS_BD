
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../Providers/AuthProvider";
import { auth } from '../Firebase/firebase.config'
import { sendEmailVerification } from "firebase/auth";
import { FaAnglesLeft } from "react-icons/fa6";
import Swal from "sweetalert2";
// import Footer from "../Components/Footer";
import { useTypewriter } from "react-simple-typewriter";
// import visa from '../assets/visa.gif'

const SignUpSection = () => {
    const [text] = useTypewriter({
        words: ['K-Visas'],
        loop: true
    })


    // useEffect(() => {
    //     document.title = "K-Visa || Sign Up"
    // }, [])

    const navigate = useNavigate()
    //--------------------------Context use--------------------------
    const { CreateUserByMailPass, setUser, updatedProfile, GoogleLogin } = useContext(AuthContext)

    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)
    const [show, setShow] = useState(false)

    const HandleSignUp = (e) => {
        e.preventDefault();
        // -------------------clearing error +success msg
        setError(null)
        setSuccess(null)

        const Email = e.target.email.value
        const Password = e.target.password.value
        const Name = e.target.name.value
        const Photo = e.target.photoUrl.value
        const Terms = e.target.terms.checked
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

        if (!Terms) {
            setError('Pleas accept all terms and conditions.')
            return
        }
        else if (Password.length < 6) {
            setError('Password should must be 6 character or more !!')
            return
        }
        else if (!passwordRegex.test(Password)) {
            setError('Password should contain a-z, A-Z, 0-9 and a special character.')
            return
        }


        CreateUserByMailPass(Email, Password)
            .then((userCredential) => {
                //         // ----------------------------Signed up 
                const user = userCredential.user;
                setUser(user)
                setSuccess('Sign Up Successful.')

                updatedProfile({ displayName: Name, photoURL: Photo })
                    .then(() => {

                        Swal.fire({
                            title: 'Successful',
                            text: 'Account created  Properly.',
                            icon: 'success',
                            confirmButtonText: "It's Great"
                        })

                        navigate('/')
                    }).catch(err => setError(err.massage))


                sendEmailVerification(auth.currentUser)
                    .then(() => {
                        //  console.log('Email verification sent!')
                    })
            });


    }

    //------------------- HAndle google--------------
    const HandleGoogleLogin = () => {
        GoogleLogin()
            .then((res) => {
                // console.log(res.user)
                setUser(res.user)
                navigate('/')
            })
            .catch(err => {
                // console.log(err);
                setUser(null)
            })
    }

    const ShowPassWord = (e) => {
        e.preventDefault();
        setShow(!show)
    }



    return (
        <div className="py-10 bg-black">
            <div className="flex items-center justify-center min-w-full mt-20">
                <div className="p-8  w-1/2 my-5 bg-gray-900 rounded-2xl shadow-lg border border-red-500">
                    <h2 className="text-3xl font-bold text-white text-center mb-6">
                        Sign up to <span className="text-green-500">Free Palestine - BD</span>
                    </h2>

                    <form onSubmit={HandleSignUp} className="space-y-6">
                        {/* Full Name */}
                        <div className="relative">
                            <label className="my-3 text-sm mx-2 text-gray-300">Full Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-green-500 text-white"
                                placeholder="First name + Last Name"
                                required
                            />
                        </div>

                        {/* Photo URL */}
                        <div className="relative">
                            <label className="my-3 text-sm mx-2 text-gray-300">Photo URL:</label>
                            <input
                                type="text"
                                id="photo"
                                name="photoUrl"
                                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-green-500 text-white"
                                placeholder="Photo URL"
                                required
                            />
                        </div>

                        {/* Email */}
                        <div className="">
                            <label className="my-3 text-sm mx-2 text-gray-300">Email Address:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-green-500 text-white"
                                placeholder="Email"
                                required
                            />
                        </div>

                        {/* Password */}
                        <div className="relative">
                            <label className="my-3 text-sm mx-2 text-gray-300">Password:</label>
                            <input
                                type={show ? "text" : "password"}
                                id="password"
                                name="password"
                                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-green-500 text-white"
                                placeholder="Password"
                                required
                            />
                            <button
                                onClick={ShowPassWord}
                                type="button"
                                className="absolute right-3 top-8 text-lg text-white"
                            >
                                {show ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>

                        {/* Terms & Conditions */}
                        <div className="">
                            <label className="cursor-pointer flex items-center gap-2 text-gray-300">
                                <input
                                    type="checkbox"
                                    name="terms"
                                    className="checkbox checkbox-success"
                                />
                                <span>Accept all terms and conditions</span>
                            </label>
                        </div>

                        {/* Feedback */}
                        {error && (
                            <p className="text-xs font-semibold text-red-500 text-center">{error}</p>
                        )}
                        {success && (
                            <p className="text-xs font-semibold text-green-500 text-center">{success}</p>
                        )}

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold transition"
                        >
                            Sign Up
                        </button>
                    </form>

                    <div className="divider divider-success mt-8">or</div>

                    {/* Google Button */}
                    <button
                        onClick={HandleGoogleLogin}
                        className="btn btn-sm rounded-full bg-neutral-800 hover:bg-neutral-700 text-white w-full mt-1 flex items-center justify-center gap-2"
                    >
                        Log in With Google
                        <img
                            src="https://img.icons8.com/fluency/50/google-logo.png"
                            alt="google-logo"
                            className="w-5"
                        />
                    </button>

                    {/* Already have an account */}
                    <p className="text-center text-gray-300 mt-2">
                        Already have an account?{" "}
                        <Link to={"/logIn"} className="text-green-400 hover:underline">
                            Log in
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUpSection;

