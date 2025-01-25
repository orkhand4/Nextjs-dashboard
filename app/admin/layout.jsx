import Link from 'next/link'
import React from 'react'

const Layout = ({children}) => {
  return (
    <div className='flex gap-12'>
      <nav className='flex flex-col'>
        <Link href="/admin">Home</Link>
        <Link href="/admin/products">Products</Link>
        <Link href="/admin/orders">Orders</Link>
      </nav>
      <main>{children}</main>
    </div>
  )
}

export default Layout
