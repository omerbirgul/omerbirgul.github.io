const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div>
                <p className="sub-title">Get In Touch!</p>
                <h2>Contact Me</h2>
                <p className="text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, repellat!</p>
            </div>

            <form action="https://formspree.io/f/mzzbvjeb" method="post" className="contact-form-container">
                <div className="container">
                    <label htmlFor="first-name" className="contact-label">
                        <span className="text-md">First Name:</span>
                        <input type="text" className="contact-input text-md" name="first-name" id="first-name" placeholder="John" required />
                    </label>

                    <label htmlFor="last-name" className="contact-label">
                        <span className="text-md">Last Name:</span>
                        <input type="text" className="contact-input text-md" name="last-name" id="last-name" placeholder="Doe" required />
                    </label>

                    <label htmlFor="email" className="contact-label">
                        <span className="text-md">Email:</span>
                        <input type="email" className="contact-input text-md" name="email" id="email" placeholder="example@gmail.com" required />
                    </label>

                    <label htmlFor="phone-number" className="contact-label">
                        <span className="text-md">Phone Number:</span>
                        <input type="tel" className="contact-input text-md" name="phone-number" id="phone-number" maxLength={11} required />
                    </label>

                </div>
                <label htmlFor="message" className="contact-label">
                    <span className="text-md">Message:</span>
                    <textarea className="contact-input text-md" id="message" rows="8" placeholder="Type your message..." required />
                </label>

                <div>
                    <button className="btn btn-primary">Submit</button>
                </div>
            </form>
        </section>
    )
}

export default Contact