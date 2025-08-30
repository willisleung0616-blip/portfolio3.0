import React from "react";
import { Link } from "react-router-dom";
import { useWindowWidth } from "../../breakpoints";
import "./style.css";

export const PhoneProjectScreen = () => {
  const screenWidth = useWindowWidth();

  return (
    <div className="phone-project-screen">
      <div
        className="phone-project-2"
        style={{
          height:
            screenWidth < 1440
              ? "1250px"
              : screenWidth >= 1440
                ? "1440px"
                : undefined,
          width:
            screenWidth < 1440
              ? "393px"
              : screenWidth >= 1440
                ? "1440px"
                : undefined,
        }}
      >
        {screenWidth >= 1440 && (
          <>
            <div className="overlap-group-10">
              <img className="image-9" alt="Image" src="/img/image-7-1.png" />

              <div className="experience-box-16" />
            </div>

            <p className="case-study-canadian">
              📁 Case Study:
              <br />
              Canadian Tire Retail: Navigating Gift Registry Growth
            </p>

            <div className="text-wrapper-68">Overview</div>

            <p className="as-a-competitor-for">
              <span className="text-wrapper-69">
                As a competitor for Canadian Tire’s Ultimate Marketing Challenge
                2024, our team analyzed, conceptualized and built a campaign
                proposal for Canadian Tire to expand grow it’s{" "}
              </span>

              <span className="text-wrapper-70">gift registry</span>

              <span className="text-wrapper-69">
                {" "}
                and overall industry position.{" "}
              </span>
            </p>

            <div className="text-wrapper-71">The Challenge</div>

            <p className="canadian-tire-s-core">
              <span className="text-wrapper-69">
                Canadian Tire’s core vision is to provide Canadians with
                products and services they need to make life in Canada better.
                It’s latest introduction includes a{" "}
              </span>

              <span className="text-wrapper-72">gift registry</span>

              <span className="text-wrapper-69">
                , a perfect way for Canadian Tire members to build, share and
                gift-give from the diverse product catalogue.
                <br />
                <br />
                With this latest addition, Canadian Tire asked the question of
                what new additions and marketing efforts the gift registry
                should feature as industry leaders.
                <br />
              </span>
            </p>

            <div className="text-wrapper-73">Solution</div>

            <p className="our-team-conducted-a">
              <span className="text-wrapper-69">
                Our team conducted a combination of current state, competitor
                and customer persona analysis, identifying a personalized
                campaign focused on clothing and hobby item categories suited
                for the Canadian Gen Z and millennial customers. The campaign
                consists of an interactive web demo and local influencer
                marketing.
                <br />
                <br />
                The educational web demo engages visitors and minimizes the
                learning curve. Through a guided simulation hosted on the main
                website, customers can navigate each step of the registry
                process while exploring the product options available,
                increasing expected overall sales via gift registry by{" "}
              </span>

              <span className="text-wrapper-72">10%.</span>

              <span className="text-wrapper-69">
                {" "}
                <br />
                <br />
                To inform target customers on social media, we identified four
                local practical lifestyle influencers with a platform presence
                of{" "}
              </span>

              <span className="text-wrapper-72">&gt;100k followers</span>

              <span className="text-wrapper-69">
                {" "}
                to build content that resonates with Canadian Gen Z and
                millennial members. The content ranges from “gift giving season
                ideas” that create urgency for trend following Gen Z members to
                subject expert breakdown that bring accessibility for millennial
                members. The influencer content will boost Canadian Tire’s
                overall following base by{" "}
              </span>

              <span className="text-wrapper-72">~15,000</span>

              <span className="text-wrapper-69"> with a </span>

              <span className="text-wrapper-72">3.5% click-through rate</span>

              <span className="text-wrapper-69">
                .<br />
                <br />
              </span>
            </p>

            <a
              href="https://www.linkedin.com/in/willis-leung/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                className="linked-in-2"
                alt="Linked in"
                src="/img/linkedin.png"
              />
            </a>

            <Link className="text-wrapper-74" to="/about-me">
              About me
            </Link>

            <a
              href="mailto:willisleung0616@gmail.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img className="email-2" alt="Email" src="/img/email.png" />
            </a>

            <img
              className="element-leung"
              alt="Element leung"
              src="/img/2025-willis-leung.png"
            />

            <Link className="text-wrapper-75" to="/phone-home-page">
              Home
            </Link>
          </>
        )}

        <div
          className="group-8"
          style={{
            height:
              screenWidth >= 1440
                ? "102px"
                : screenWidth < 1440
                  ? "200px"
                  : undefined,
            left:
              screenWidth >= 1440
                ? "556px"
                : screenWidth < 1440
                  ? "32px"
                  : undefined,
            top:
              screenWidth >= 1440
                ? "258px"
                : screenWidth < 1440
                  ? "59px"
                  : undefined,
            width:
              screenWidth >= 1440
                ? "264px"
                : screenWidth < 1440
                  ? "329px"
                  : undefined,
          }}
        >
          {screenWidth >= 1440 && (
            <>
              <div className="text-wrapper-76">Role</div>

              <p className="marketing-consultant">
                Marketing Consultant - <br />
                Market Research, Competitor Research, Ideal Customer Profiles
              </p>
            </>
          )}

          {screenWidth < 1440 && (
            <div className="overlap-group-11">
              <img className="image-10" alt="Image" src="/img/image-7.png" />

              <div className="experience-box-17" />
            </div>
          )}
        </div>

        {screenWidth >= 1440 && (
          <>
            <div className="group-9">
              <p className="text-wrapper-77">
                Consultants: Linus Pui, David Lam
              </p>

              <div className="text-wrapper-76">Team</div>
            </div>

            <div className="group-10">
              <div className="text-wrapper-78">February 2024</div>

              <div className="text-wrapper-76">Published</div>
            </div>
          </>
        )}

        {screenWidth < 1440 && (
          <>
            <header className="header-4">
              <Link className="text-wrapper-79" to="/about-me">
                About me
              </Link>

              <Link className="text-wrapper-80" to="/phone-home-page">
                Home
              </Link>
            </header>

            <p className="case-study-canadian-2">
              📁 Case Study:
              <br />
              Canadian Tire Retail: Navigating Gift Registry Growth
            </p>

            <div className="crew-2">
              <p className="marketing-consultant-2">
                Marketing Consultant - <br />
                Market Research, Competitor Research, Ideal Customer Profiles
              </p>

              <div className="text-wrapper-81">Role</div>
            </div>

            <div className="period-2">
              <div className="text-wrapper-82">February 2024</div>

              <div className="text-wrapper-83">Date</div>
            </div>

            <div className="composition-2">
              <p className="text-wrapper-84">
                Consultants: Linus Pui, David Lam
              </p>

              <div className="text-wrapper-81">Team</div>
            </div>

            <div className="text-wrapper-85">Overview</div>

            <div className="text-wrapper-86">The Challenge</div>

            <div className="text-wrapper-87">Solution</div>

            <p className="text-wrapper-88">
              As a competitor for Canadian Tire’s Ultimate Marketing Challenge
              2024, our team analyzed, conceptualized and built a campaign
              proposal for Canadian Tire to expand grow it’s gift registry and
              overall industry position.
            </p>

            <p className="canadian-tire-s-core-2">
              <span className="text-wrapper-89">
                Canadian Tire’s core vision is to provide Canadians with
                products and services they need to make life in Canada better.
                It’s latest introduction includes a{" "}
              </span>

              <span className="text-wrapper-72">gift registry</span>

              <span className="text-wrapper-89">
                , a perfect way for Canadian Tire members to build, share and
                gift-give from the diverse product catalogue.
                <br />
                <br />
                With this latest addition, Canadian Tire asked the question of
                what new additions and marketing efforts the gift registry
                should feature as industry leaders.
                <br />
              </span>
            </p>

            <p className="our-team-conducted-a-2">
              <span className="text-wrapper-89">
                Our team conducted a combination of current state, competitor
                and customer persona analysis, identifying a personalized
                campaign focused on clothing and hobby item categories suited
                for the Canadian Gen Z and millennial customers. The campaign
                consists of an interactive web demo and local influencer
                marketing.
                <br />
                <br />
                The educational web demo engages visitors and minimizes the
                learning curve. Through a guided simulation hosted on the main
                website, customers can navigate each step of the registry
                process while exploring the suite of product options available,
                increasing expected overall sales via gift registry by{" "}
              </span>

              <span className="text-wrapper-72">10%</span>

              <span className="text-wrapper-89">
                . <br />
                <br />
                To engage and inform target customers on social media, we
                identified four local practical lifestyle influencers with a
                platform presence of{" "}
              </span>

              <span className="text-wrapper-72">&gt;100k followers</span>

              <span className="text-wrapper-89">
                {" "}
                to build content that resonates with Canadian Gen Z and
                millennial members. The content ranges from “gift giving season
                ideas” that create urgency for trend following Gen Z members to
                subject expert breakdown that bring accessibility for millennial
                members. The influencer content will boost Canadian Tire’s
                overall following base by
              </span>

              <span className="text-wrapper-72"> ~15,000</span>

              <span className="text-wrapper-89"> with a </span>

              <span className="text-wrapper-72">3.5% click-through rate</span>

              <span className="text-wrapper-89">
                .<br />
                <br />
              </span>
            </p>

            <footer className="footer-4">
              <div className="text-wrapper-90">© 2025 Willis Leung</div>

              <a
                className="text-wrapper-91"
                href="https://www.linkedin.com/in/willis-leung/"
                rel="noopener noreferrer"
                target="_blank"
              >
                LinkedIn
              </a>

              <a
                className="text-wrapper-92"
                href="mailto:wyl21@sfu.ca"
                rel="noopener noreferrer"
                target="_blank"
              >
                Email
              </a>
            </footer>
          </>
        )}
      </div>
    </div>
  );
};
