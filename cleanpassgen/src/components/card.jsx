export default function Card(props) {
    return (
        <>

            <div className='card-div flex justify-center mt-5'>
                <input
                    type="text"
                    className='bg-white border-3 w-200 text-3xl p-4  border-[1.5px] rounded-lg focus:outline-none'
                    placeholder='Your Password'
                    value={props.Password}
                />
                <button className='btn bg-[#d71340] cursor-pointer p-3 font-bold text-white rounded-lg my-5 -ml-41 '>Copy Password</button>

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
                    <div className=" flex items-center">

                        <input type="checkbox" id="upper" className='appearance-none w-5 h-5 border border-gray-500 rounded-sm checked:bg-blue-500 cursor-pointer'/>
                        <label htmlFor="upper" className='mr-5 ml-2 font-300 cursor-pointer'>Uppercase</label>

                        <input type="checkbox" id="lower" className='appearance-none w-5 h-5 border border-gray-500 rounded-sm checked:bg-blue-500 cursor-pointer'/>
                        <label htmlFor="lower" className='mr-5 ml-2 font-300 cursor-pointer'>Lowercase</label>

                        <input type="checkbox" id="num" className='appearance-none w-5 h-5 border border-gray-500 rounded-sm checked:bg-blue-500 cursor-pointer'/>
                        <label htmlFor="num" className='mr-5 ml-2 font-300 cursor-pointer'>Numbers</label>

                        <input type="checkbox" id="symbol" className='appearance-none w-5 h-5 border border-gray-500 rounded-sm checked:bg-blue-500 cursor-pointer'/>
                        <label htmlFor="symbol" className='mr-5 ml-2 font-300 cursor-pointer'>Symbols</label>
                    </div>


                </div>
            </div>


        </>
    )
}
