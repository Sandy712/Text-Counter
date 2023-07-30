// for adding the dark mode in textutils 
import React from 'react'

export default function About(props) {
    
    return (
        <>
            <header className={`text-${props.mode==="dark" ? "white" : "black"}`}>
                <h1>About Us</h1>
            </header>
            <main className={`text-${props.mode==="dark" ? "white" : "black"}`}>
                <p>Welcome to Our Website! We are a team of passionate individuals dedicated to providing you with the best services and information in our field.</p>

                <h2>Our Mission</h2>
                <p>Our mission is to [insert your mission statement here]. We aim to [describe your goals and objectives].</p>

                <h2>Our Team</h2>
                <p>We have a skilled and diverse team of experts, each contributing their unique talents to our projects and services. Together, we strive to deliver excellence.</p>

                <h2>What We Offer</h2>
                <p>[Explain the products, services, or information you provide to your visitors or customers].</p>

                <h2>Why Choose Us</h2>
                <p>[Highlight the unique selling points of your business or organization].</p>

                <h2>Contact Us</h2>
                <p>If you have any questions, feedback, or inquiries, don't hesitate to contact us. You can reach us through the contact form on our website or email us directly at [your email address].</p>
            </main>
        </>
    )
}


