import React from "react";
import "./styles/social.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
// 	faTwitter,
// 	faGithub,
// 	faStackOverflow,
// 	faInstagram,
// } from "@fortawesome/free-brands-svg-icons";

const SocialIcons = () => {
  
    return (
        <div className='socialIcons'>
                      <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
              href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Dancing+Script:wght@700&display=swap"
              rel="stylesheet"
            />

            <link rel="stylesheet" href="style.css" />
            <section class="team">
         
              <div class="container">
              
					
								<div className="title homepage-title"></div>
                {/* <div class="profile">
  <a href="https://twitter.com" target="_blank">
    <img srcset="https://cdn.pixabay.com/photo/2017/06/22/14/23/twitter-2430933_960_720.png 1x, https://cdn.pixabay.com/photo/2017/06/22/14/23/twitter-2430933_1280.png 2x" src="https://cdn.pixabay.com/photo/2017/06/22/14/23/twitter-2430933_1280.png" alt="Free twitter social media icon vector" title="Download free HD stock image of Twitter Social Media" />
    <span class="name">Twitter</span>
  </a>
</div> */}

<div class="profile">
  <a href="https://github.com" target="_blank">
    <img srcset="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png 1x, https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png 2x" src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png" alt="Free github github logo github icon vector" title="Download free HD stock image of Github Github Logo" />
    <span class="name">Github</span>
  </a>
</div>

<div class="profile">
  <a href="https://www.linkedin.com/in/ajayshelke/" target="_blank">
    <img srcset="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png?20140125013055 1.5x"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png?20140125013055 1x" alt="LinkedIn" />
    <span class="name">LinkedIn</span>
  </a>
</div>

<div class="profile">
  <a href="mailto:ajayshelke93@gmail.com" target="_blank">
    <img srcset="https://cdn.pixabay.com/photo/2017/03/21/02/00/letter-2160916_960_720.png 1x, https://cdn.pixabay.com/photo/2017/03/21/02/00/letter-2160916_1280.png 2x" src="https://cdn.pixabay.com/photo/2017/03/21/02/00/letter-2160916_1280.png" alt="Free letter e-mail contact vector" title="Download free HD stock image of Letter E-Mail" />
    <span class="name">Email</span>
  </a>
</div>
             
              </div>
            </section>
        </div>
    );
};

export default SocialIcons;
