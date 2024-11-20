import data from "../../data/index.json"

const MyPortfolio = () => {
    return (
        <section className="portfolio-section" id="myPortfolio">
            <div className="portfolio-container-box">
                <div className="portfolio-container">
                    <p className="sub-title">Recent Projects</p>
                    <h2 className="section-heading">My Portfolio</h2>
                </div>
                <div>
                    <button className="btn btn-github"
                        onClick={() => window.open('https://github.com/omerbirgul', '_blank')}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.26.793-.577v-2.234c-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.775.418-1.305.761-1.604-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.469-2.382 1.236-3.221-.124-.303-.536-1.526.117-3.176 0 0 1.01-.323 3.31 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.297-1.553 3.307-1.23 3.307-1.23.656 1.65.244 2.873.12 3.176.77.839 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.92.43.37.823 1.102.823 2.222v3.293c0 .32.192.694.8.576C20.565 21.798 24 17.302 24 12c0-6.627-5.373-12-12-12z" />
                        </svg>
                        Visit My GitHub
                    </button>
                </div>
            </div>

            <div className="portfolio-section-container">
                {data?.portfolio?.map((item, index) => (
                    <div className="portfolio-section-card"
                        key={index}
                    >
                        <div className="portfolio-section-img">
                            <img src={item.src} alt="" />
                        </div>

                        <div className="portfolio-section-card-content">
                            <div>
                                <h3 className="portfolio-section-title">{item.title}</h3>
                                <p className="text-md">
                                    {item.description}
                                </p>
                            </div>
                            <p className="text-sm portfolio-link">{item.link}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 20 19"
                                    fill="none"
                                >
                                    <path
                                        d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                                        stroke="currentColor"
                                        stroke-width="2.66667"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default MyPortfolio