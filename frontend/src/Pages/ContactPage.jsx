import React from 'react'
import logoDrivezzy1 from "../assets/logoDrivezzy-nobg1.png"
import 'bootstrap/dist/css/bootstrap.min.css'
import { useNavigate } from 'react-router-dom'
import InstagramIcon from '../components/Icons/InstagramIcon/Instagram'
import FacebookIcon from '../components/Icons/FacebookIcon/Facebook'
import TwitterIcon from '../components/Icons/TwitterIcon/Twitter'


const ContactPage = () => {

    const navigate = useNavigate()
    const goHomePage = () => {
        navigate("/home")
    }
    const goVehicleList = () => {
        navigate("/vehicleList")
    }


    return (
        <div className="container mt-4">
            <img src={logoDrivezzy1} alt="Drivezzy Logo" className="img-fluid mb-4" />

            <div className="mb-4 text-center">
                <h1>Contact Us</h1>
                <p>Thank you for visiting <strong>Drivezzy Rent A Car</strong>, your premier choice for car rentals! We're dedicated to providing you with reliable vehicles and exceptional service for all your travel needs.</p>
                <p>If you have any questions, suggestions, or simply want to reach out, feel free to contact us. We look forward to assisting you!</p>
            </div>

            <div className="mb-4">
                <h2>Address:</h2>
                <p>
                    123 Drive Easy Lane<br />
                    Car City, Auto State<br />
                    ZIP Code: 12345
                </p>
            </div>

            <div className="mb-4">
                <h2>Phone:</h2>
                <p>+1 555-987-6543</p>
            </div>

            <div className="mb-4">
                <h2>Business Hours:</h2>
                <ul className="list-unstyled">
                    <li>Monday to Friday: 8:00 AM - 7:00 PM</li>
                    <li>Saturday: 9:00 AM - 5:00 PM</li>
                    <li>Sunday: Closed</li>
                </ul>
            </div>

            <div className="mb-4">
                <h2>Social Media:</h2>
                <p>Follow us on social media to stay updated on the latest offers and promotions!</p>
                <div>
                    <ul className="list-unstyled">
                        <li>
                            <a href="https://instagram.com/Drivezzy" className="text-primary" target="_blank" rel="noopener noreferrer">
                                <InstagramIcon /> @Drivezzy
                            </a>
                        </li>
                        <li>
                            <a href="https://facebook.com/Drivezzy" className="text-primary" target="_blank" rel="noopener noreferrer">
                                <FacebookIcon /> Drivezzy Rent A Car
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/DrivezzyCarRentals" className="text-primary" target="_blank" rel="noopener noreferrer">
                                <TwitterIcon /> @DrivezzyCarRentals
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="d-flex justify-content-center mb-4">
                <button className="btn btn-secondary me-2" onClick={goVehicleList}>Vehicle List</button>
                <button className="btn btn-secondary" onClick={goHomePage}>Home</button>
            </div>
        </div>


    )
}

export default ContactPage