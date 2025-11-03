import React from "react";
export default function CARD(props) {
    return (
        <>
            <div className="max-w-xs rounded-md shadow-md bg-black text-gray-100">
                <img
                    src="https://picsum.photos/301"
                    alt=""
                    className="object-cover object-center w-full rounded-t-md h-22 bg-gray-500"
                />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">{props.text}</h2>
                        <p className="text-gray-400">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
                            tempora ipsum soluta amet corporis accusantium aliquid consectetur
                            eaque!
                        </p>
                    </div>
                    <button
                        type="button"
                        className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gray-800 text-gray-200"
                    >
                        Read more
                    </button>
                    <p>{props.obg2.name}</p>
                    <p>{props.obg2.age}</p>
                </div>

            </div>
            <table className="table-auto border-collapse border border-gray-800 mt-5">
                <thead>
                    <tr>
                        <th className="border border-gray-800 px-4 py-2">Name</th>
                        <th className="border border-gray-800 px-4 py-2">Age</th>
                        <th className="border border-gray-800 px-4 py-2">Class</th>
                        <th className="border border-gray-800 px-4 py-2">Cgpa</th>
                    </tr>
                </thead>

                <tbody>
                    {props.data.map(item => (
                        <tr>
                            <td className="border border-gray-800 px-4 py-2">{item.name}</td>
                            <td className="border border-gray-800 px-4 py-2">{item.age}</td>
                            <td className="border border-gray-800 px-4 py-2">{item.class}</td>
                            <td className="border border-gray-800 px-4 py-2">{item.cgpa}</td>
                        </tr>
                    ))}
                    <p>{props.nm || "no name"}</p>
                </tbody>
            </table>
        </>
    )
}