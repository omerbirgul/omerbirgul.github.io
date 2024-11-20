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
                      specializing in <b>ASP.NET Core</b>, <b>C#</b> and <b>JavaScript</b>. I’m passionate about building scalable and efficient applications, combining clean code with practical solutions.
                        <br />
                        Let’s turn ideas into reality!                    </p>
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