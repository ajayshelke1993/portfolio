import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="contact-container">
						<div className="title contact-title">
							Let's Get in Touch: Ways to Connect with Me
						</div>

						<div className="subtitle contact-subtitle">
						Thank you for reaching out to me. I appreciate your interest and am open to receiving your feedback, questions, and suggestions. 
						Should you have a particular inquiry or comment, please don't hesitate to reach me directly via email at 
							&nbsp;{" "}
							<a href={`mailto:${INFO.main.email}`}>
								{INFO.main.email}
							</a>
							. I strive to respond to all messages within 24 hours, though it may take a bit longer during busier periods.
							 {/* Finally, if you prefer to connect on
							social media, you can find me on{" "}
							<a
								href={INFO.socials.instagram}
								target="_blank"
								rel="noreferrer"
							>
								{INFO.socials.instagram}
							</a>
							. I post regular updates and engage with my
							followers there, so don't hesitate to reach out.
							Thanks again for your interest, and I look forward */}
							to hearing from you!
						</div>
					</div>

					<div className="socials-container">
						<div className="contact-socials">
							<Socials />
						</div>
					</div>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Contact;
