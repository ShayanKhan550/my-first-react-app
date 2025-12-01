import { Link, NavLink } from "react-router-dom";
import img from "../../assets/image.png"
import img2 from "../../assets/currency.png"

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-4xl font-extrabold sm:text-5xl leading-snug">
                            Learn Modern Web Development
                            <span className="hidden sm:block text-4xl text-orange-700">
                                Build Your Future
                            </span>
                        </h2>

                        {/* <Link
                            className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
                            to="/"
                        >
                            
                            <svg
                                fill="white"
                                width="24"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            >
                                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                            </svg>
                            &nbsp; Download now
                        </Link> */}
                    </div>
                </div>

                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
                    <img className="w-96" src={img} />
                </div>
            </aside>

            <div className="grid sm:grid-cols-2 grid-cols-1 items-center gap-8 sm:mt-20 px-4 sm:px-0">

                {/* TEXT SECTION */}
                <div className="space-y-4 text-center sm:text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
                        My Projects
                    </h2>
                    <p className="text-gray-600 sm:text-lg leading-relaxed">
                        Explore some of the projects I’ve built using React, TailwindCSS, and modern web technologies.
                        Each project is designed to demonstrate clean code, responsive design, and practical features.
                    </p>
                    <Link
                        to="/projects"
                        className="inline-block mt-4 px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-all duration-200 font-medium"
                    >
                        View All Projects
                    </Link>
                </div>

                {/* IMAGE SECTION */}
                <Link to="https://currency-convertor-g5t2.vercel.app/">
                    <img
                        className="sm:w-96 w-64 mx-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                        src={img2}
                        alt="Currency Converter Project"
                        width={100}
                    />
                </Link>

            </div>


            <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">
                Codding with Shayan Khan
            </h1>

            {/* Added nice text section */}
            <div className="max-w-3xl mx-auto text-center px-4 pb-16">
                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                    Welcome to the world of modern web development!
                    Here you can explore tutorials, projects, and practical examples that help you
                    learn React, JavaScript, TailwindCSS and much more — in a clean and simple way.
                    Follow along and level up your coding journey with Shayan Khan. 🚀
                </p>

                <button className="mt-8 px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-900">
                    Explore Tutorials
                </button>
            </div>
        </div>
    );
}
