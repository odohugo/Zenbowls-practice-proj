import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className='h-12 p-4 text-gray-900 flex items-center justify-between'>
            <Link href="/">ZENBOWLS</Link>
            <p>© ALL RIGHTS RESERVED.</p>
        </div>
    )
}

export default Footer