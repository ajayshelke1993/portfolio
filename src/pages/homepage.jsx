import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTwitter,
	faGithub,
	faStackOverflow,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import BlobSvgComponent from './BlobSvgComponent';
import Logo from "../components/common/logo";
import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import Article from "../components/homepage/article";
import Works from "../components/homepage/works";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";
import myArticles from "../data/articles";
import SocialIcons from "../components/common/social";
import "./styles/homepage.css";
import Misc from "./misc";

const Homepage = () => {
	const [stayLogo, setStayLogo] = useState(false);
	const [logoSize, setLogoSize] = useState(80);
	const [oldLogoSize, setOldLogoSize] = useState(80);
	const [isLogoZoomed, setIsLogoZoomed] = useState(false);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			let scroll = Math.round(window.pageYOffset, 2);

			let newLogoSize = 80 - (scroll * 4) / 10;

			if (newLogoSize < oldLogoSize) {
				if (newLogoSize > 40) {
					setLogoSize(newLogoSize);
					setOldLogoSize(newLogoSize);
					setStayLogo(false);
				} else {
					setStayLogo(true);
				}
			} else {
				setLogoSize(newLogoSize);
				setStayLogo(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [logoSize, oldLogoSize]);

	const currentSEO = SEO.find((item) => item.page === "home");

	// const logoStyle = {
	// 	display: "flex",
	// 	position: stayLogo ? "fixed" : "relative",
	// 	top: stayLogo ? "3vh" : "auto",
	// 	zIndex: 999,
	// 	border: stayLogo ? "1px solid white" : "none",
	// 	borderRadius: stayLogo ? "50%" : "none",
	// 	boxShadow: stayLogo ? "0px 4px 10px rgba(0, 0, 0, 0.25)" : "none",
	// };

	const handleLogoClick = () => {
		setIsLogoZoomed(!isLogoZoomed);
	  };
	
	  const handleCloseClick = () => {
		setIsLogoZoomed(false);
	  };
	
	//   const logoSize = isLogoZoomed ? window.innerWidth : 80;
	let logoSize1 = isLogoZoomed ? window.innerWidth : 80;
	  const logoStyle = {
		display: "flex",
		position: isLogoZoomed ? "fixed" : "relative",
		top: isLogoZoomed ? "50%" : "auto",
		left: isLogoZoomed ? "50%" : "auto",
		transform: isLogoZoomed ? "translate(-50%, -50%)" : "none",
		zIndex: isLogoZoomed ? 1000 : "auto",
		width: isLogoZoomed ? "36%" : "auto",
		height: isLogoZoomed ? "36%" : "auto",
		cursor: "pointer",
		paddingTop: "20px",
		

	  };
	
	  const closeButtonStyle = {
		position: "absolute",
		top: "10px",
		right: "10px",
		cursor: "pointer",
		zIndex: 1001,
	  };
	

	return (
		<React.Fragment>
			<Helmet>
				<title>{INFO.main.title}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>
			<NavBar active="home" />
			<div className="page-content">
				
				<div className="content-wrapper">
					{/* <div className="-logo-container">
						
						<div style={logoStyle}>
							<Logo width={logoSize} link={false} />
						</div>
					</div> */}

<div className="-logo-container" onClick={handleLogoClick}>
        <div style={logoStyle}>
          <Logo width={logoSize1} link={false} />
          {isLogoZoomed && (
            <div style={closeButtonStyle} onClick={handleCloseClick}>
              Close
            </div>
          )}
        </div>
      </div>
					
					<div className="homepage-container">
					
						<div className="homepage-first-area">
							<div className="homepage-first-area-left-side">
								<div className="title homepage-title">
									{INFO.homepage.title}
								</div>

								<div className="subtitle homepage-subtitle">
									{INFO.homepage.description}
								</div>
							</div>
							
							<div className="homepage-first-area-right-side">
								<div className="homepage-image-container">
								<div class="blob"> 
								<div className="text text1">Web Development Skills <br></br>
								Javascript, HTML, CSS, ASP, ASP.NET, C#</div>

								
								
								</div>
								
									<div className="homepage-image-wrapper">
									
									{/* <BlobSvgComponent /> */}
									
								
									</div>
								</div>
							</div>
						</div>
						
						<div className="homepage-socials">
						<SocialIcons />
						
							
						</div>
					
						<div className="homepage-projects">
							<AllProjects />
						</div>
						
						<div className="homepage-after-title">
							<div className="homepage-articles">
								{myArticles.map((article, index) => (
									<div
										className="homepage-article"
										key={(index + 1).toString()}
									>
										<Article
											key={(index + 1).toString()}
											date={article().date}
											title={article().title}
											description={article().description}
											link={"/article/" + (index + 1)}
										/>
									</div>
								))}
							</div>

							<div className="homepage-works">
								<Works />
							</div>
						</div>
					
						<div className="page-footer">
							<Footer />
							
						</div>
					</div>
				</div>
			</div>
		
		</React.Fragment>
	);
};

export default Homepage;
