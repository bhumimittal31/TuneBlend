// frontend/src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/img.png'

export default function Navbar({accessToken , handleLogIn}) {
    return (
        <div>
            <nav className= 'navbar navbar-expand-lg  bg-light navbar-light' >
                <div className="container-fluid">
                    <a className="navbar-brand" htmlFor="#"><img src ={img} style={{ height: '50px'}}></img></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" htmlFor="/features">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" htmlFor="/editing">Editing</a>
                            </li>
                        </ul>
                        <div className="d-flex">
                            {!accessToken ? (
                                <button onClick={handleLogIn} className="btn btn-outline-dark me-2" style={{backgroundColor : "#343148FF", borderRadius : "50px" , color : 'white'}}>Login with Spotify</button>
                            ) : (
                                <Link to="/upload" className="btn btn-outline-dark  me-2" style={{backgroundColor : "#343148FF", borderRadius : "50px" , color : 'white'}}>Upload</Link>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}
