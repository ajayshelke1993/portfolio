
import React, { useState } from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";



const Works = () => {
	const [popupVisible, setPopupVisible] = useState(false);

	const handlePopupToggle = () => {
		setPopupVisible(!popupVisible);
	  };
	
	const workHistory = [
	  {
		company: "Compsource Inc.",
		image:"data:image/png;base64,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",
		role: "Full Stack Web Developer",
		duration: "Sept 2020 – Present",
		responsibilities: [
		  "Built database and windows applications to retrieve data and automate API integrations",
		  "Payment Gateways API integration – Cardinal commerce, Affirm, Behalf, PayPal, and CreditKey",
		  "Migration of the older webpages from ASP to ASP.Net, Built HR, Manager, and Sales Portal",
		  "Designed SSIS packages for automation of complex tasks, scripting used in C# language",
		  "Worked in the Catalog Analytics team, writing complex SQL queries and developing client reports with Tableau",
		],
	  },
	  {
		company: "Bista Solutions Inc.",
		image: "data:image/jpeg;base64,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",
		role: "Systems Analyst/ BI developer",
		duration: "Feb 2020 – Aug 2020",
		responsibilities: [
		  "Building SSIS packages to import and store data from Excel and XML files",
		  "Development of Odoo apps using Python and XML",
		  "HTML, CSS, and JavaScript development to customize Odoo’s webpage Dashboard",
		  "Interaction of SQL server with third-party applications like Azure SQL services",
		  "Writing scripts for the automatic download of excel files, ETL operations, and deployment of SSIS packages",
		  "Collaborated setup of multiple client applications to one login through Odoo ERP",
		],
	  },
	  {
		company: "North Coast Auto Mall",
		image:"data:image/png;base64,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",
		role: "BI Developer",
		duration: "July 2019 – Jan 2020",
		responsibilities: [
		  "Collaborated with users, IT team, managers, and stakeholders to gather requirements",
		  "Implemented advanced data analytics or modeling projects using Python",
		  "Built SSIS packages for stored procedures and queries",
		  "Imported data from various sources to generate and automate reports using Power BI",
		  "Designed dashboards and data visualization using Excel, Power BI, R, Power Query, and Dax Queries",
		  "C# scripting for Automation using SSIS packages",
		],
	  },
	];
  
	return (
		<div className="works">
		  <Card
			icon={faBriefcase}
			title="Work"
			body={
			  <div className="works-body">
				{workHistory.map((work, index) => (
				  <div className="work" key={index}>
					<img
					  src={work.image}
					  alt={work.company}
					  className="work-image"
					  onMouseOver={handlePopupToggle}
					/>
					<div className="work-title">{work.company}</div>
					<div className="work-subtitle">{work.role}</div>
					<div className="work-duration">{work.duration}</div>
					{popupVisible && (
					  <div className="popuptext">A Simple Popup!</div>
					)}
				  </div>
				))}
			  </div>
			}
		  />
		</div>
	  );
	};


export default Works;
