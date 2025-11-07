import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotate } from '@fortawesome/free-solid-svg-icons';
import { useCallback } from 'react';


export default function Card(props) {

    return (
        <>

            <div className='card-div flex justify-between mt-5 w-220 maincard m-auto  rounded-lg'>
                <input
                    type="text"
                    className='passinput bg-white border-[1.5px] p-4 p-md-2 text-3xl flex-grow  rounded-lg focus:outline-none'
                    placeholder='Your Password'
                    Value={props.Password}
                    ref={props.reference}
                />
                <div className=" flex gap-x-4 ml-4 btn-div">
                    <button
                    >
                        <FontAwesomeIcon
                        onClick={() => { props.regenerate((prev) => !prev) }}

                            className='text-1xl cursor-pointer text-gray-600'
                            icon={faRotate}
                        />
                    </button>

                    <button
                        className='btn bg-[#d71340] cursor-pointer p-3 font-bold text-white rounded-lg'
                        onClick={props.copy}
                    >Copy Password</button>
                </div>

            </div>

            <div className='card bg-[#deeedd] w-230 mt-8 m-auto p-8 rounded-xl'>
                <div className=" text-start flex items-center justify-between">
                    <label htmlFor="range" className='font-bold text-1xl'>Password Length {props.Length} </label>
                    <input
                        type="range"
                        id="range"
                        value={props.Length}
                        min={8}
                        max={40}
                        onChange={(e) => props.setLength(e.target.value)}
                        className="w-160 cursor-pointer custom-range "
                    />
                </div>
                <div className=" text-start flex items-center jusify-between mt-7">
                    <label htmlFor="char" className='font-bold text-1xl w-54'>Characters Used</label>
                    <div className="inputs flex items-center">

                       <div>
                         <input
                            onChange={() => { props.setupperchar((prev) => !prev) }}
                            type="checkbox"
                            id="upper"
                            className='w-5 h-5 cursor-pointer'
                        />
                        <label htmlFor="upper" onChange={() => { props.setupperchar((prev) => !prev) }} className='mr-5 ml-2 font-300 cursor-pointer'>Uppercase</label>

                       </div>
                        {/* <input onClick={(e) => setupperchar((prev) => !prev)}
                            type="checkbox" id="lower"
                            className='appearance-none w-5 h-5 border border-gray-500 rounded-sm checked:bg-blue-500 cursor-pointer'
                        />
                        <label htmlFor="lower" className='mr-5 ml-2 font-300 cursor-pointer'>Lowercase</label> */}
                        <div>

                            <input onClick={() => { props.setnum((prev) => !prev) }}
                                type="checkbox" id="num"
                                className=' w-5 h-5 cursor-pointer'
                            />
                            <label htmlFor="num" className='mr-5 ml-2 font-300 cursor-pointer'>Numbers</label>

                        </div>

                        <div>
                            <input onClick={() => { props.setsymbols((prev) => !prev) }}
                                type="checkbox" id="symbol"
                                className=' w-5 h-5  cursor-pointer'
                            />
                            <label htmlFor="symbol" className='mr-5 ml-2 font-300 cursor-pointer'>Symbols</label>
                        </div>
                    </div>


                </div>
            </div>


        </>
    )
}
