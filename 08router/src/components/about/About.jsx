import img from "../../assets/image.png"
import img2 from "../../assets/currency.png"
import img3 from "../../assets/img3.png"
import img4 from "../../assets/img-4.png"

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12 justify-center mb-8">

                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            React development is carried out by passionate developers
                        </h2>
                        <p className="mt-6 text-gray-600">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem
                            accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde
                            aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!
                        </p>
                        <p className="mt-4 text-gray-600">
                            Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
                            Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
                        </p>
                    </div>
                </div>
            </div>
                    <h4 className=" text-center my-8 text-5xl font-semibold">Our projects</h4>

            <div className=" flex items-center justify-center gap-5">
                <div className="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">

                    {/* Project Screenshot */}
                    <a href="https://currency-convertor-g5t2.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <img
                            className="w-full h-64 object-cover"
                            src={img2} // yahan apna project screenshot daalo
                            alt="Currency Converter Project"
                        />
                    </a>

                    {/* Project Info */}
                    <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-800">Currency Converter</h3>
                        <p className="text-gray-600 mt-2">
                            A simple and responsive currency converter built with React and TailwindCSS. Convert between multiple currencies instantly.
                        </p>
                        <a
                            href="https://currency-convertor-g5t2.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-4 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-all duration-200 font-medium"
                        >
                            View Project
                        </a>
                    </div>

                </div>

                <div className="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">

                    {/* Project Screenshot */}
                    <a href="https://pass-gen-umber-two.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <img
                            className="w-full h-64 object-cover"
                            src={img3} // yahan apna project screenshot daalo
                            alt="Currency Converter Project"
                        />
                    </a>

                    {/* Project Info */}
                    <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-800">Currency Converter</h3>
                        <p className="text-gray-600 mt-2">
                            A simple and responsive currency converter built with React and TailwindCSS. Convert between multiple currencies instantly.
                        </p>
                        <a
                            href="https://pass-gen-umber-two.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-4 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-all duration-200 font-medium"
                        >
                            View Project
                        </a>
                    </div>

                </div>

                <div className="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">

                    {/* Project Screenshot */}
                    <a href="https://complete-react-course-with-project-ten.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <img
                            className="w-full h-64 object-cover"
                            src={img4} 
                            alt="Currency Converter Project"
                        />
                    </a>

                    {/* Project Info */}
                    <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-800">Currency Converter</h3>
                        <p className="text-gray-600 mt-2">
                            A simple and responsive currency converter built with React and TailwindCSS. Convert between multiple currencies instantly.
                        </p>
                        <a
                            href="https://complete-react-course-with-project-ten.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-4 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-all duration-200 font-medium"
                        >
                            View Project
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
}