import React from 'react'
import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <>
   <div className="container-fluid" style={{ textAlign: 'center', padding: '50px' }}>
    <h2 style={{ color: '#ff0000', fontSize: '48px', marginBottom: '20px',fontWeight:"bold"}}>404</h2>
    <h3 style={{ color: '#333', fontSize: '24px', marginBottom: '20px' ,fontWeight:"bold"}}>Page Not Found</h3>
    <p style={{ color: '#777', fontSize: '18px', marginBottom: '30px' }}>
        Sorry, the page you are looking for does not exist. It might have been moved or deleted.
    </p>
    <Link to="/" style={{ color: '#007bff', textDecoration: 'none', fontSize: '18px' }}>Go to Home</Link>
</div>

    </>
  )
}
