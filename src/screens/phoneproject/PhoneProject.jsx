import React from "react";
import { Link } from "react-router-dom";
import { useWindowWidth } from "../../breakpoints";
import "./style.css";

export const PhoneProject = () => {
  const screenWidth = useWindowWidth();

  return (
    <div className="phone-project">
      <div
        className="div-2"
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
            <a
              href="mailto:willisleung0616@gmail.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img className="email" alt="Email" src="/img/email.png" />
            </a>

            <a
              href="https://www.linkedin.com/in/willis-leung/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                className="linked-in"
                alt="Linked in"
                src="/img/linkedin.png"
              />
            </a>

            <div className="experience-box-wrapper">
              <div className="experience-box-5" />
            </div>

            <div className="text-wrapper-16">Overview</div>

            <div className="text-wrapper-17">The Challenge</div>

            <div className="text-wrapper-18">Solution</div>
          </>
        )}

        <div
          className="i-led-a-team-of-five"
          style={{
            fontSize:
              screenWidth >= 1440
                ? "20px"
                : screenWidth < 1440
                  ? "12px"
                  : undefined,
            fontWeight:
              screenWidth >= 1440
                ? "400"
                : screenWidth < 1440
                  ? "700"
                  : undefined,
            left:
              screenWidth >= 1440
                ? "558px"
                : screenWidth < 1440
                  ? "30px"
                  : undefined,
            top:
              screenWidth >= 1440
                ? "454px"
                : screenWidth < 1440
                  ? "462px"
                  : undefined,
            width:
              screenWidth >= 1440
                ? "796px"
                : screenWidth < 1440
                  ? "58px"
                  : undefined,
          }}
        >
          {screenWidth >= 1440 && (
            <>
              <p className="span-wrapper">
                <span className="text-wrapper-19">
                  I led a team of five student consultants on a{" "}
                </span>
              </p>

              <p className="span-wrapper">
                <span className="text-wrapper-20">12-week</span>
              </p>

              <p className="span-wrapper">
                <span className="text-wrapper-19"> client engagement for </span>
              </p>

              <p className="span-wrapper">
                <span className="text-wrapper-20">
                  Civic Innovation Lab (the Lab)
                </span>
              </p>

              <p className="span-wrapper">
                <span className="text-wrapper-19">
                  , a long-term research accelerator aimed at providing a
                  permanent base to drive solutions that advance community
                  engagement and well-being for the City of Burnaby.
                </span>
              </p>
            </>
          )}

          {screenWidth < 1440 && <>Overview</>}
        </div>

        {screenWidth >= 1440 && (
          <>
            <div className="group">
              <div className="text-wrapper-21">Role</div>

              <p className="text-wrapper-22">
                Consulting Team Lead - Stakeholder Interviews, Secondary
                Research, Project Management
              </p>
            </div>

            <div className="group-2">
              <p className="consultants-sandra">
                Consultants: Sandra Chen, Ryan Lee, Ryan Thaulad and Tan Vu{" "}
                <br />
                Designers: Caleb Wu
              </p>

              <div className="text-wrapper-21">Team</div>
            </div>

            <div className="group-3">
              <div className="text-wrapper-23">April to June 2025</div>

              <div className="text-wrapper-21">Date</div>
            </div>
          </>
        )}

        <div
          className="the-challenge"
          style={{
            fontSize:
              screenWidth < 1440
                ? "12px"
                : screenWidth >= 1440
                  ? "20px"
                  : undefined,
            fontWeight:
              screenWidth < 1440
                ? "700"
                : screenWidth >= 1440
                  ? "400"
                  : undefined,
            left:
              screenWidth < 1440
                ? "30px"
                : screenWidth >= 1440
                  ? "556px"
                  : undefined,
            top:
              screenWidth < 1440
                ? "617px"
                : screenWidth >= 1440
                  ? "675px"
                  : undefined,
            width:
              screenWidth < 1440
                ? "88px"
                : screenWidth >= 1440
                  ? "798px"
                  : undefined,
          }}
        >
          {screenWidth < 1440 && <>The Challenge</>}

          {screenWidth >= 1440 && (
            <>
              <p className="span-wrapper">
                <span className="text-wrapper-19">
                  Since its inception in 2022, the Lab found early success by
                  scaling from{" "}
                </span>
              </p>

              <p className="span-wrapper">
                <span className="text-wrapper-20">
                  0 to 15 projects in six months
                </span>
              </p>

              <p className="span-wrapper">
                <span className="text-wrapper-19"> and </span>
              </p>

              <p className="span-wrapper">
                <span className="text-wrapper-20">
                  completing over 20 total projects to date
                </span>
              </p>

              <p className="span-wrapper">
                <span className="text-wrapper-19">
                  . However, as it’s major funders face potential financial
                  setbacks, our team identified a priority to pursue a new
                  funding path. <br />
                  <br />
                  Community events and website promotion were initiatives the
                  Lab experimented with to promote its work. Our team
                  hypothesized that accelerating marketing efforts can sustain
                  brand reach and unlock future project opportunities.
                </span>
              </p>
            </>
          )}
        </div>

        <div
          className="through-secondary"
          style={{
            fontSize:
              screenWidth >= 1440
                ? "20px"
                : screenWidth < 1440
                  ? "12px"
                  : undefined,
            fontWeight:
              screenWidth >= 1440
                ? "400"
                : screenWidth < 1440
                  ? "700"
                  : undefined,
            left:
              screenWidth >= 1440
                ? "556px"
                : screenWidth < 1440
                  ? "30px"
                  : undefined,
            top:
              screenWidth >= 1440
                ? "992px"
                : screenWidth < 1440
                  ? "848px"
                  : undefined,
            width:
              screenWidth >= 1440
                ? "798px"
                : screenWidth < 1440
                  ? "52px"
                  : undefined,
          }}
        >
          {screenWidth >= 1440 && (
            <>
              <p className="span-wrapper">
                <span className="text-wrapper-19">
                  Through secondary research, our team evaluated{" "}
                </span>
              </p>

              <p className="span-wrapper">
                <span className="text-wrapper-20">
                  10+ funding alternatives
                </span>
              </p>

              <p className="span-wrapper">
                <span className="text-wrapper-19"> and </span>
              </p>

              <p className="span-wrapper">
                <span className="text-wrapper-20">three peer case studies</span>
              </p>

              <p className="span-wrapper">
                <span className="text-wrapper-19">
                  {" "}
                  to outline a funding strategy tailored to the Lab’s unique
                  position.{" "}
                </span>
              </p>

              <p className="span-wrapper">
                <span className="text-wrapper-24">The McConnell Fund</span>
              </p>

              <p className="span-wrapper">
                <span className="text-wrapper-19">
                  {" "}
                  was identified to be a high-potential funder. We created a
                  tailored plan including suggested responses and tailored
                  content. Historical peer data was used to estimate the
                  expected funding outcome, projecting a six figure revenue
                  return, sufficient to cover a full year of project operations.{" "}
                  <br />
                  <br />
                  To accelerate the Lab’s marketing efforts, our team validated
                  the initial hypothesis via targeting matrix, interviews with
                  key stakeholders, peer case studies, and supporting secondary
                  research. Our solution is a blended marketing campaign
                  focusing on promotional media, increased industry event
                  attendance and long-term partnerships. By centring the focus
                  on lab work and collaboration, the Lab can enhance it’s
                  community presence and realize a{" "}
                </span>
              </p>

              <p className="span-wrapper">
                <span className="text-wrapper-20">~25% growth</span>
              </p>

              <p className="span-wrapper">
                <span className="text-wrapper-19">
                  {" "}
                  in project opportunities.
                  <br />
                  <br />
                </span>
              </p>
            </>
          )}

          {screenWidth < 1440 && <>Solution</>}
        </div>

        <div
          className="case-study-SFU-axis"
          style={{
            color:
              screenWidth >= 1440
                ? "#3a59ca"
                : screenWidth < 1440
                  ? "#000000bf"
                  : undefined,
            fontSize:
              screenWidth >= 1440
                ? "24px"
                : screenWidth < 1440
                  ? "12px"
                  : undefined,
            fontWeight:
              screenWidth >= 1440
                ? "700"
                : screenWidth < 1440
                  ? "400"
                  : undefined,
            left:
              screenWidth >= 1440
                ? "556px"
                : screenWidth < 1440
                  ? "30px"
                  : undefined,
            top:
              screenWidth >= 1440
                ? "149px"
                : screenWidth < 1440
                  ? "497px"
                  : undefined,
            width:
              screenWidth >= 1440
                ? "798px"
                : screenWidth < 1440
                  ? "329px"
                  : undefined,
          }}
        >
          {screenWidth >= 1440 && (
            <p className="text-wrapper-93">
              📁 Case Study:
              <br />
              SFU Axis Consulting x Civic Innovation Lab
            </p>
          )}

          {screenWidth < 1440 && (
            <>
              <p className="span-wrapper">
                <span className="text-wrapper-25">
                  I led a team of five student consultants on a{" "}
                </span>
              </p>

              <p className="span-wrapper">
                <span className="text-wrapper-20">12-week</span>
              </p>

              <p className="span-wrapper">
                <span className="text-wrapper-25"> client engagement for </span>
              </p>

              <p className="span-wrapper">
                <span className="text-wrapper-20">
                  Civic Innovation Lab (the Lab)
                </span>
              </p>

              <p className="span-wrapper">
                <span className="text-wrapper-25">
                  , a long-term research accelerator aimed at providing a
                  permanent base to drive solutions that advance community
                  engagement and well-being for the City of Burnaby.
                </span>
              </p>
            </>
          )}
        </div>

        {screenWidth >= 1440 && (
          <>
            <Link className="text-wrapper-26" to="/about-me">
              About me
            </Link>

            <Link className="text-wrapper-27" to="/phone-home-page">
              Home
            </Link>
          </>
        )}

        <div
          className="since-its-inception"
          style={{
            fontSize:
              screenWidth < 1440
                ? "12px"
                : screenWidth >= 1440
                  ? "20px"
                  : undefined,
            left:
              screenWidth < 1440
                ? "30px"
                : screenWidth >= 1440
                  ? "1164px"
                  : undefined,
            top:
              screenWidth < 1440
                ? "653px"
                : screenWidth >= 1440
                  ? "1378px"
                  : undefined,
            width:
              screenWidth < 1440
                ? "329px"
                : screenWidth >= 1440
                  ? "201px"
                  : undefined,
          }}
        >
          {screenWidth < 1440 && (
            <>
              <p className="span-wrapper">
                <span className="text-wrapper-25">
                  Since its inception in 2022, the Lab found early success by
                  scaling from{" "}
                </span>
              </p>

              <p className="span-wrapper">
                <span className="text-wrapper-20">
                  0 to 15 projects in six months
                </span>
              </p>

              <p className="span-wrapper">
                <span className="text-wrapper-25"> and </span>
              </p>

              <p className="span-wrapper">
                <span className="text-wrapper-20">
                  completing over 20 total projects to date
                </span>
              </p>

              <p className="span-wrapper">
                <span className="text-wrapper-25">
                  . However, as it’s major funders face potential financial
                  setbacks, our team identified a priority to pursue a new
                  funding path. <br />
                  <br />
                  Community events and website promotion were initiatives the
                  Lab experimented with to promote its work. Our team
                  hypothesized that accelerating marketing efforts can sustain
                  brand reach and unlock future project opportunities.
                </span>
              </p>
            </>
          )}

          {screenWidth >= 1440 && <>© 2025 Willis Leung</>}
        </div>

        {screenWidth < 1440 && (
          <>
            <p className="through-secondary-2">
              <span className="text-wrapper-25">
                Through secondary research, our team evaluated{" "}
              </span>

              <span className="text-wrapper-20">10+ funding alternatives</span>

              <span className="text-wrapper-25"> and </span>

              <span className="text-wrapper-20">three peer case studies</span>

              <span className="text-wrapper-25">
                {" "}
                to outline a funding strategy tailored to the Lab’s unique
                position.{" "}
              </span>

              <span className="text-wrapper-24">The McConnell Fund</span>

              <span className="text-wrapper-25">
                {" "}
                was identified to be a high-potential funder. We created a
                tailored plan including suggested responses and tailored
                content. Historical peer data was used to estimate the expected
                funding outcome, projecting a six figure revenue return,
                sufficient to cover a full year of project operations. <br />
                <br />
                To accelerate the Lab’s marketing efforts, our team validated
                the initial hypothesis via targeting matrix, interviews with key
                stakeholders, peer case studies, and supporting secondary
                research. Our solution is a blended marketing campaign focusing
                on promotional media, increased industry event attendance and
                long-term partnerships. By centring the focus on lab work and
                collaboration, the Lab can enhance it’s community presence and
                realize a{" "}
              </span>

              <span className="text-wrapper-20">~25% growth</span>

              <span className="text-wrapper-25">
                {" "}
                in project opportunities.
              </span>
            </p>

            <p className="case-study-SFU-axis-2">
              📁 Case Study:
              <br />
              SFU Axis Consulting x Civic Innovation Lab
            </p>

            <div className="crew">
              <p className="consulting-team-lead">
                Consulting Team Lead: <br />
                Secondary Research, Stakeholder Interviews, Project Management
              </p>

              <div className="text-wrapper-28">Role</div>
            </div>

            <div className="period">
              <div className="text-wrapper-29">April to June 2025</div>

              <div className="text-wrapper-30">Date</div>
            </div>

            <div className="composition">
              <p className="consultants-sandra-2">
                Consultants: Sandra Chen, Ryan Lee, Ryan Thaulad and Tan Vu{" "}
                <br />
                Designers: Caleb Wu
              </p>

              <div className="text-wrapper-28">Team</div>
            </div>

            <div className="visual-axis">
              <div className="overlap-group-2">
                <img
                  className="screenshot"
                  alt="Screenshot"
                  src="/img/screenshot-2025-08-10-at-3-55-28-pm-1.png"
                />

                <div className="experience-box-6" />
              </div>
            </div>

            <Link to="/about-me">
              <header className="header-2">
                <div className="text-wrapper-31">About me</div>

                <Link className="text-wrapper-32" to="/phone-home-page">
                  Home
                </Link>
              </header>
            </Link>

            <footer className="footer-2">
              <div className="text-wrapper-33">© 2025 Willis Leung</div>

              <a
                className="text-wrapper-34"
                href="https://www.linkedin.com/in/willis-leung/"
                rel="noopener noreferrer"
                target="_blank"
              >
                LinkedIn
              </a>

              <a
                className="text-wrapper-35"
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
