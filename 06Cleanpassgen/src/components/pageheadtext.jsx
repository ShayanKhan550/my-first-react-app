import React from 'react'

export default function PageHead(props) {
    return (
        <div className='max-w-240 mx-auto headerdiv'>
            <h1 className={`font-${props.tect} headertext`}>{props.h1}</h1>
            <h3 className="text-5xl mb-6 font-normal headertext">
                Instantly generate a secure, random password with the LastPass online tool
            </h3>
            <p className='text-3xl headerp'>Use our online password generator tool to instantly create a secure, random password.</p>
        </div>
    )
}
