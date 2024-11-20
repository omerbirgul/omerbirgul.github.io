const resumeDownloader = () =>{
    const link = document.createElement('a');
    link.href = "./CV/OmerBirgulEnglishCV.pdf";
    link.download = "omerBirgulEnglishCv.pdf";
    link.click();
}

const HeroSection = () => {
    return (
        <section id="heroSection" className="hero-section">
            <div className="hero-section-content-box">
                <div className="hero-section-content">
                    <p className="section-title">Hello! I'm Omer</p>
                    <h1 className="hero-section-title">
                        <span className="hero-section-title-color">Backend</span>{""}
                        <br />
                        Developer
                    </h1>
                    <p className="hero-section-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, incidunt.
                        <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>
                <button className="btn btn-primary" onClick={resumeDownloader}>Download My CV</button>
            </div>
            <div className="hero-section-img">
                <img src="./img/IMG-20241120-WA0016.jpg" alt="" />
            </div>
        </section>
    )
}

export default HeroSection;