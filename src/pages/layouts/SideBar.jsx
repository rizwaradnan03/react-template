import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
// import 'bootstrap/js/dist/dropdown'

const SideBar = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="bg-dark col-auto col-md-3 min-vh-100 d-flex justify-content-between flex-column">
                        <div>
                        <a className='text-decoration-none text-white d-flex align-itemcenter ms-3 mt-2' href="">
                            {/* <i className='fs-4 bi bi-speedometer'></i> */}
                            <span className='ms-1 fs-4'>Brand</span>
                        </a>
                        <hr className='text-secondary' />
                        <ul className='nav nav-pills flex-column'>
                            <li className='nav-item text-white fs-4'>
                                <a href="" className='nav-link text-white fs-5' aria-current="page">
                                    <i className='bi bi-speedometer2'></i>
                                    <span className='ms-2'>Dashboard</span>
                                </a>
                            </li>
                            <li className='nav-item'>
                                <a href="" className='nav-link text-white fs-5' aria-current="page">
                                    <i className='bi bi-house'></i>
                                    <span className='ms-2'>Home</span>
                                </a>
                            </li>
                            <li className='nav-item'>
                                <a href="" className='nav-link text-white fs-5' aria-current="page">
                                    <i className='bi bi-grid'></i>
                                    <span className='ms-2'>Products</span>
                                </a>
                            </li>
                        </ul>
                        </div>
                        <div className="dropdown open">
                            <a className='text-decoration-none text-white dropdown-toggle p-3' type='button' id='triggerId' data-bs-toggle href="" aria-expanded="false">
                                <i className='bi bi-person-circle'></i><span className='ms-2'>Rizwar</span>
                            </a>
                            <div className="dropdown-menu" aria-labelledby='triggerId'>
                                <a className='dropdown-item' href="">Action</a>
                                <a className='dropdown-item disabled' href="">Disabled Action</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SideBar