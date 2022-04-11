import React from "react";
import Background from "../../image/lady.jpg"

const backgroundStyle = {
    width: "100%",
    height: "100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundImage: `url(${Background})`
};

const overlay = {
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
}

export default function CreateAccount() {
    return (
        <>
            <div className=" mx-20 mt-24">
                <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 content-center items-center justify-center h-full mb-10">

                    <div className="relative" style={backgroundStyle} >
                        <div className="" style={overlay}>
                            <div className="absolute bottom-0 text-white md:text-3xl text-left mx-20 pt-20 pb-5">
                                Building exceptional services with Back Office Support and Business Performance
                            </div>
                        </div>

                    </div>


                    <div className="w-full h-full">

                        <div className="relative flex flex-col min-w-full break-words w-full h-full mb-6 shadow-lg bg-blueGray-200 border-0">
                            <div className="rounded-t mb-0 px-6 py-6">
                                <div className="text-left mb-3">
                                    <h6 className="text-violet-900 text-base font-bold">
                                        Create Account
                                    </h6>
                                    <p className="text-xs">
                                        Build an exceptional business
                                    </p>
                                </div>

                                <hr className="mt-6 border-b-1 border-blueGray-300" />
                            </div>
                            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                                <form>
                                    <div className="md:flex">

                                        <div className="relative w-full md:w-6/12 mb-3 md:mr-3 border-b border-teal-500">
                                            <label
                                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                htmlFor="grid-password"
                                            >
                                                First Name
                                            </label>
                                            <input
                                                type="text"
                                                className="appearance-none bg-transparent border-none px-3 py-3 placeholder-blueGray-300 text-blueGray-600 rounded text-sm shadow w-full"
                                                placeholder="Enter your first name"
                                            />
                                        </div>
                                        <div className="relative w-full md:w-6/12 mb-3 md:ml-3 border-b border-teal-500">
                                            <label
                                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                htmlFor="grid-password"
                                            >
                                                Last Name
                                            </label>
                                            <input
                                                type="text"
                                                className="appearance-none bg-transparent border-none px-3 py-3 placeholder-blueGray-300 text-blueGray-600 rounded text-sm shadow focus:outline-none w-full"
                                                placeholder="Enter your last name"
                                            />
                                        </div>
                                    </div>

                                    <div className="relative w-full mb-3 border-b border-teal-500">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            className="appearance-none bg-transparent border-none px-3 py-3 placeholder-blueGray-300 text-blueGray-600 rounded text-sm shadow focus:outline-none w-full"
                                            placeholder="Enter your phone number"
                                        />
                                    </div>

                                    <div className="relative w-full mb-3 border-b border-teal-500">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            className="appearance-none bg-transparent border-none px-3 py-3 placeholder-blueGray-300 text-blueGray-600 rounded text-sm shadow focus:outline-none w-full"
                                            placeholder="Enter your email"
                                        />
                                    </div>

                                    <div className="relative w-full mb-3 border-b border-teal-500">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            className="appearance-none bg-transparent border-none px-3 py-3 placeholder-blueGray-300 text-blueGray-600 rounded text-sm shadow focus:outline-none w-full"
                                            placeholder="Enter your password"
                                        />
                                    </div>

                                    <div className="grid grid grid-cols-2 gap-4 ">
                                        <div className="text-left">
                                            <label className="cursor-pointer">
                                                <input
                                                    id="customCheckLogin"
                                                    type="checkbox"
                                                    className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5"
                                                />
                                                <span className="ml-2 text-sm font-semibold text-blueGray-600">
                                                    Remember me
                                                </span>
                                            </label>

                                        </div>
                                        <div className="text-right">
                                            <label className=" text-right cursor-pointer">
                                                <a href="/" className="ml-2 text-right text-sm font-semibold text-sky-400">
                                                    Forget Password?
                                                </a>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="text-center mt-6">
                                        <button
                                            className="bg-sky-400 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                                            type="button"
                                        >
                                            Sign Up
                                        </button>
                                    </div>

                                    <div className="grid grid grid-cols-3 gap-4 ">
                                        <div className="text-left">
                                            <hr className="mt-6 border-b-1 border-blueGray-300" />
                                        </div>
                                        <div className="text-center mt-2">
                                            <label className="cursor-pointer">
                                                Got an Account?
                                                <a href="/" className="ml-2 text-right text-sm font-semibold text-sky-400">
                                                    Sign In
                                                </a>
                                            </label>
                                        </div>
                                        <div className="text-left">
                                            <hr className="mt-6 border-b-1 border-blueGray-300" />
                                        </div>
                                    </div>


                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}
