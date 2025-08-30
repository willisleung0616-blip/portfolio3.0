import React from "react";
import { Link } from "react-router-dom";
import { useWindowWidth } from "../../breakpoints";
import "./style.css";

export const AboutMe = () => {
  const screenWidth = useWindowWidth();

  return (
    <div className="about-me">
      <div
        className="phone-about-me"
        style={{
          height:
            screenWidth < 1440
              ? "1150px"
              : screenWidth >= 1440
                ? "1000px"
                : undefined,
          width:
            screenWidth < 1440
              ? "393px"
              : screenWidth >= 1440
                ? "1440px"
                : undefined,
        }}
      >
        <div
          className="education"
          style={{
            height:
              screenWidth >= 1440
                ? "329px"
                : screenWidth < 1440
                  ? "150px"
                  : undefined,
            left:
              screenWidth >= 1440
                ? "443px"
                : screenWidth < 1440
                  ? "26px"
                  : undefined,
            top:
              screenWidth >= 1440
                ? "544px"
                : screenWidth < 1440
                  ? "941px"
                  : undefined,
            width:
              screenWidth >= 1440
                ? "538px"
                : screenWidth < 1440
                  ? "333px"
                  : undefined,
          }}
        >
          <div
            className="overlap-group"
            style={{
              backgroundImage:
                screenWidth >= 1440
                  ? "url(/img/image-5.png)"
                  : screenWidth < 1440
                    ? "url(/img/malcolm-todd-1.png)"
                    : undefined,
              height:
                screenWidth >= 1440
                  ? "329px"
                  : screenWidth < 1440
                    ? "150px"
                    : undefined,
              width:
                screenWidth >= 1440
                  ? "534px"
                  : screenWidth < 1440
                    ? "329px"
                    : undefined,
            }}
          >
            <div
              className="experience-box"
              style={{
                background:
                  screenWidth >= 1440
                    ? "linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(241, 244, 248, 0.9) 100%)"
                    : screenWidth < 1440
                      ? "linear-gradient(180deg, rgba(255, 255, 255, 0.15) 19%, rgba(241, 244, 248, 0.52) 47%, rgba(234, 239, 245, 0.85) 69%, rgba(227, 233, 241, 1) 100%)"
                      : undefined,
                height:
                  screenWidth >= 1440
                    ? "329px"
                    : screenWidth < 1440
                      ? "150px"
                      : undefined,
                width:
                  screenWidth >= 1440
                    ? "534px"
                    : screenWidth < 1440
                      ? "329px"
                      : undefined,
              }}
            />

            <div
              className="text"
              style={{
                fontSize:
                  screenWidth >= 1440
                    ? "20px"
                    : screenWidth < 1440
                      ? "12px"
                      : undefined,
                left:
                  screenWidth >= 1440
                    ? "21px"
                    : screenWidth < 1440
                      ? "18px"
                      : undefined,
                top:
                  screenWidth >= 1440
                    ? "255px"
                    : screenWidth < 1440
                      ? "121px"
                      : undefined,
                width:
                  screenWidth >= 1440
                    ? "484px"
                    : screenWidth < 1440
                      ? "294px"
                      : undefined,
              }}
            >
              {screenWidth >= 1440 && (
                <p className="text-wrapper-93">
                  Senior year student studying Management Information Systems at
                  Simon Fraser University
                </p>
              )}

              {screenWidth < 1440 && (
                <p className="text-wrapper-93">4ME 4ME - Malcolm Todd</p>
              )}
            </div>

            <div
              className="div"
              style={{
                fontSize:
                  screenWidth >= 1440
                    ? "20px"
                    : screenWidth < 1440
                      ? "12px"
                      : undefined,
                left:
                  screenWidth >= 1440
                    ? "21px"
                    : screenWidth < 1440
                      ? "18px"
                      : undefined,
                top:
                  screenWidth >= 1440
                    ? "225px"
                    : screenWidth < 1440
                      ? "102px"
                      : undefined,
                whiteSpace: screenWidth >= 1440 ? "nowrap" : undefined,
              }}
            >
              {screenWidth >= 1440 && <>🎓 Education</>}

              {screenWidth < 1440 && <>💽 Currently listening to</>}
            </div>
          </div>
        </div>

        <div
          className="overlap-wrapper"
          style={{
            height:
              screenWidth < 1440
                ? "150px"
                : screenWidth >= 1440
                  ? "329px"
                  : undefined,
            left:
              screenWidth < 1440
                ? "26px"
                : screenWidth >= 1440
                  ? "1003px"
                  : undefined,
            top:
              screenWidth < 1440
                ? "761px"
                : screenWidth >= 1440
                  ? "544px"
                  : undefined,
            width:
              screenWidth < 1440
                ? "333px"
                : screenWidth >= 1440
                  ? "377px"
                  : undefined,
          }}
        >
          <div
            className="overlap"
            style={{
              backgroundImage:
                screenWidth < 1440
                  ? "url(/img/image-5-1.png)"
                  : screenWidth >= 1440
                    ? "url(/img/malcolm-todd.png)"
                    : undefined,
              height:
                screenWidth < 1440
                  ? "150px"
                  : screenWidth >= 1440
                    ? "329px"
                    : undefined,
              width:
                screenWidth < 1440
                  ? "329px"
                  : screenWidth >= 1440
                    ? "373px"
                    : undefined,
            }}
          >
            <div
              className="experience-box-2"
              style={{
                background:
                  screenWidth < 1440
                    ? "linear-gradient(180deg, rgba(255, 255, 255, 0.15) 19%, rgba(241, 244, 248, 0.52) 47%, rgba(234, 239, 245, 0.85) 69%, rgba(227, 233, 241, 1) 100%)"
                    : screenWidth >= 1440
                      ? "linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(241, 244, 248, 0.55) 50%, rgba(241, 244, 248, 1) 100%)"
                      : undefined,
                height:
                  screenWidth < 1440
                    ? "150px"
                    : screenWidth >= 1440
                      ? "329px"
                      : undefined,
                width:
                  screenWidth < 1440
                    ? "329px"
                    : screenWidth >= 1440
                      ? "373px"
                      : undefined,
              }}
            />

            <div
              className="text-2"
              style={{
                fontSize:
                  screenWidth < 1440
                    ? "12px"
                    : screenWidth >= 1440
                      ? "20px"
                      : undefined,
                left:
                  screenWidth < 1440
                    ? "17px"
                    : screenWidth >= 1440
                      ? "21px"
                      : undefined,
                top:
                  screenWidth < 1440
                    ? "108px"
                    : screenWidth >= 1440
                      ? "279px"
                      : undefined,
                width:
                  screenWidth < 1440
                    ? "305px"
                    : screenWidth >= 1440
                      ? "294px"
                      : undefined,
              }}
            >
              {screenWidth < 1440 && (
                <p className="text-wrapper-93">
                  Senior year student studying Management Information Systems at
                  Simon Fraser Univesity
                </p>
              )}

              {screenWidth >= 1440 && (
                <p className="text-wrapper-93">4ME 4ME - Malcolm Todd</p>
              )}
            </div>

            <div
              className="education-2"
              style={{
                fontSize:
                  screenWidth < 1440
                    ? "12px"
                    : screenWidth >= 1440
                      ? "20px"
                      : undefined,
                left:
                  screenWidth < 1440
                    ? "17px"
                    : screenWidth >= 1440
                      ? "21px"
                      : undefined,
                top:
                  screenWidth < 1440
                    ? "89px"
                    : screenWidth >= 1440
                      ? "249px"
                      : undefined,
                whiteSpace: screenWidth >= 1440 ? "nowrap" : undefined,
              }}
            >
              {screenWidth < 1440 && <>🎓 Education</>}

              {screenWidth >= 1440 && <>💽 Currently listening to</>}
            </div>
          </div>
        </div>

        <div
          className="work"
          style={{
            height:
              screenWidth < 1440
                ? "150px"
                : screenWidth >= 1440
                  ? "336px"
                  : undefined,
            left:
              screenWidth < 1440
                ? "26px"
                : screenWidth >= 1440
                  ? "948px"
                  : undefined,
            top:
              screenWidth < 1440
                ? "581px"
                : screenWidth >= 1440
                  ? "177px"
                  : undefined,
            width:
              screenWidth < 1440
                ? "333px"
                : screenWidth >= 1440
                  ? "432px"
                  : undefined,
          }}
        >
          <div
            className="overlap-2"
            style={{
              backgroundImage:
                screenWidth < 1440
                  ? "url(/img/screenshot-2025-07-29-at-10-53-49-pm-1-1.png)"
                  : screenWidth >= 1440
                    ? "url(/img/screenshot-2025-07-29-at-10-53-49-pm-1.png)"
                    : undefined,
              height:
                screenWidth < 1440
                  ? "150px"
                  : screenWidth >= 1440
                    ? "336px"
                    : undefined,
              width:
                screenWidth < 1440
                  ? "329px"
                  : screenWidth >= 1440
                    ? "428px"
                    : undefined,
            }}
          >
            <div
              className="experience-box-3"
              style={{
                background:
                  screenWidth < 1440
                    ? "linear-gradient(180deg, rgba(255, 255, 255, 0.15) 19%, rgba(241, 244, 248, 0.52) 47%, rgba(234, 239, 245, 0.85) 69%, rgba(227, 233, 241, 1) 100%)"
                    : screenWidth >= 1440
                      ? "linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(248, 249, 251, 0.52) 55%, rgba(245, 247, 250, 0.76) 75%, rgba(241, 244, 248, 0.9) 100%)"
                      : undefined,
                height:
                  screenWidth < 1440
                    ? "150px"
                    : screenWidth >= 1440
                      ? "336px"
                      : undefined,
                width:
                  screenWidth < 1440
                    ? "329px"
                    : screenWidth >= 1440
                      ? "428px"
                      : undefined,
              }}
            />

            <div
              className="text-wrapper"
              style={{
                fontSize:
                  screenWidth < 1440
                    ? "12px"
                    : screenWidth >= 1440
                      ? "20px"
                      : undefined,
                left:
                  screenWidth < 1440
                    ? "11px"
                    : screenWidth >= 1440
                      ? "29px"
                      : undefined,
                top:
                  screenWidth < 1440
                    ? "88px"
                    : screenWidth >= 1440
                      ? "242px"
                      : undefined,
                whiteSpace: screenWidth >= 1440 ? "nowrap" : undefined,
                width: screenWidth < 1440 ? "52px" : undefined,
              }}
            >
              👜 Work
            </div>

            <p
              className="p"
              style={{
                fontSize:
                  screenWidth < 1440
                    ? "12px"
                    : screenWidth >= 1440
                      ? "20px"
                      : undefined,
                left:
                  screenWidth < 1440
                    ? "11px"
                    : screenWidth >= 1440
                      ? "29px"
                      : undefined,
                top:
                  screenWidth < 1440
                    ? "107px"
                    : screenWidth >= 1440
                      ? "271px"
                      : undefined,
                width:
                  screenWidth < 1440
                    ? "307px"
                    : screenWidth >= 1440
                      ? "373px"
                      : undefined,
              }}
            >
              <span
                className="span"
                style={{
                  fontSize:
                    screenWidth < 1440
                      ? "12px"
                      : screenWidth >= 1440
                        ? "20px"
                        : undefined,
                }}
              >
                Product Marketing Intern at Okta, working on{" "}
              </span>

              <span className="text-wrapper-2">OSIC</span>

              <span
                className="text-wrapper-3"
                style={{
                  fontSize:
                    screenWidth < 1440
                      ? "12px"
                      : screenWidth >= 1440
                        ? "20px"
                        : undefined,
                }}
              >
                {" "}
                and{" "}
              </span>

              <span className="text-wrapper-2">NHIs</span>
            </p>
          </div>
        </div>

        <div
          className="location"
          style={{
            height:
              screenWidth < 1440
                ? "150px"
                : screenWidth >= 1440
                  ? "336px"
                  : undefined,
            left:
              screenWidth < 1440
                ? "26px"
                : screenWidth >= 1440
                  ? "443px"
                  : undefined,
            top:
              screenWidth < 1440
                ? "401px"
                : screenWidth >= 1440
                  ? "177px"
                  : undefined,
            width:
              screenWidth < 1440
                ? "333px"
                : screenWidth >= 1440
                  ? "484px"
                  : undefined,
          }}
        >
          <div
            className="overlap-3"
            style={{
              backgroundImage:
                screenWidth < 1440 ? "url(/img/image-6-1.png)" : undefined,
              backgroundSize: screenWidth < 1440 ? "100% 100%" : undefined,
              borderRadius: screenWidth >= 1440 ? "25px" : undefined,
              height:
                screenWidth < 1440
                  ? "150px"
                  : screenWidth >= 1440
                    ? "336px"
                    : undefined,
              width:
                screenWidth < 1440
                  ? "329px"
                  : screenWidth >= 1440
                    ? "480px"
                    : undefined,
            }}
          >
            {screenWidth >= 1440 && (
              <img className="image" alt="Image" src="/img/image-6.png" />
            )}

            <div
              className="experience-box-4"
              style={{
                background:
                  screenWidth >= 1440
                    ? "linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(241, 244, 248, 0.9) 100%)"
                    : screenWidth < 1440
                      ? "linear-gradient(180deg, rgba(255, 255, 255, 0.15) 19%, rgba(241, 244, 248, 0.52) 47%, rgba(234, 239, 245, 0.85) 69%, rgba(227, 233, 241, 1) 100%)"
                      : undefined,
                height:
                  screenWidth >= 1440
                    ? "336px"
                    : screenWidth < 1440
                      ? "150px"
                      : undefined,
                width:
                  screenWidth >= 1440
                    ? "480px"
                    : screenWidth < 1440
                      ? "329px"
                      : undefined,
              }}
            />

            <p
              className="text-3"
              style={{
                fontSize:
                  screenWidth < 1440
                    ? "12px"
                    : screenWidth >= 1440
                      ? "20px"
                      : undefined,
                left:
                  screenWidth < 1440
                    ? "10px"
                    : screenWidth >= 1440
                      ? "21px"
                      : undefined,
                top:
                  screenWidth < 1440
                    ? "103px"
                    : screenWidth >= 1440
                      ? "271px"
                      : undefined,
              }}
            >
              Currently based in Vancouver, BC 🇨 -<br />
              originally from Taipei, Taiwan 🇹
            </p>

            {screenWidth >= 1440 && <div className="text-4">📍Location</div>}

            {screenWidth < 1440 && <div className="text-5">📍Location</div>}
          </div>
        </div>

        {screenWidth < 1440 && (
          <Link to="/phone-home-page">
            <header className="header">
              <div className="text-wrapper-4">Home</div>
            </header>
          </Link>
        )}

        {screenWidth >= 1440 && (
          <>
            <img
              className="make-it-punchy-image"
              alt="Make it punchy image"
              src="/img/make-it-punchy-image-removebg-preview-1.png"
            />

            <div className="text-wrapper-5">Currently reading:</div>

            <p className="i-m-an-early-career">
              I’m an early career product marketer with a passion for the
              intersection between people and product! <br />
              <br />
              My industry focus is in the <br />
              fast-paced tech space along with a curiosity to explore what
              product marketing looks like in different environments. Prior to
              my current role in Cybersecurity, I’ve taken on and explored PMM
              functions in Oil &amp; Gas, Fintech!
            </p>

            <p className="make-it-punchy-by">
              make it punchy <br />
              by emma stratton
            </p>

            <div className="text-wrapper-6">A TLDR about me:</div>

            <Link className="text-wrapper-7" to="/phone-home-page">
              Home
            </Link>
          </>
        )}

        <div
          className="contact"
          style={{
            height:
              screenWidth >= 1440
                ? "97px"
                : screenWidth < 1440
                  ? "124px"
                  : undefined,
            left:
              screenWidth >= 1440
                ? "58px"
                : screenWidth < 1440
                  ? "222px"
                  : undefined,
            top:
              screenWidth >= 1440
                ? "776px"
                : screenWidth < 1440
                  ? "240px"
                  : undefined,
            width:
              screenWidth >= 1440
                ? "317px"
                : screenWidth < 1440
                  ? "141px"
                  : undefined,
          }}
        >
          <div
            className="overlap-4"
            style={{
              height:
                screenWidth >= 1440
                  ? "97px"
                  : screenWidth < 1440
                    ? "124px"
                    : undefined,
              width:
                screenWidth >= 1440
                  ? "315px"
                  : screenWidth < 1440
                    ? "139px"
                    : undefined,
            }}
          >
            {screenWidth >= 1440 && (
              <>
                <div className="text-wrapper-8">Let’s connect!</div>

                <img className="img" alt="Image" src="/img/image-10.png" />
              </>
            )}

            {screenWidth < 1440 && (
              <a
                href="&lt;a href=&#34;mailto:wyl21@sfu.ca&#34;&gt;Email me&lt;/a&gt;"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img className="image-2" alt="Image" src="/img/image-10.png" />
              </a>
            )}

            <a
              href="https://www.linkedin.com/in/willis-leung/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                className="image-3"
                style={{
                  left:
                    screenWidth < 1440
                      ? "29px"
                      : screenWidth >= 1440
                        ? "197px"
                        : undefined,
                  top:
                    screenWidth < 1440
                      ? "48px"
                      : screenWidth >= 1440
                        ? "24px"
                        : undefined,
                }}
                alt="Image"
                src="/img/image-8.png"
              />
            </a>

            {screenWidth < 1440 && (
              <div className="text-wrapper-9">Let’s connect!</div>
            )}
          </div>
        </div>

        {screenWidth >= 1440 && (
          <>
            <img className="vector" alt="Vector" src="/img/vector-1.svg" />

            <img className="image-4" alt="Image" src="/img/image-13.png" />

            <div className="text-wrapper-10">© 2025 Willis Leung</div>
          </>
        )}

        {screenWidth < 1440 && (
          <>
            <div className="reading">
              <img
                className="make-it-punchy-image-2"
                alt="Make it punchy image"
                src="/img/make-it-punchy-image-removebg-preview-1.png"
              />

              <div className="text-wrapper-11">Currently reading:</div>

              <p className="make-it-punchy-by-2">
                make it punchy <br />
                by emma stratton
              </p>

              <img
                className="vector-2"
                alt="Vector"
                src="/img/vector-1-1.svg"
              />
            </div>

            <p className="i-m-an-early-career-2">
              I’m an early career product marketer with a passion for the
              intersection between people and product! <br />
              <br />
              My industry focus is in the <br />
              fast-paced tech space along with a curiosity to explore what
              product marketing looks like in different environments. So far,
              I’ve taken on and explored PMM functions in Oil &amp; Gas, Fintech
              and now in Cybersecurity!
            </p>

            <div className="text-wrapper-12">A TLDR about me:</div>

            <img className="image-5" alt="Image" src="/img/image-12.png" />

            <footer className="footer">
              <div className="text-wrapper-13">© 2025 Willis Leung</div>

              <a
                className="text-wrapper-14"
                href="https://www.linkedin.com/in/willis-leung/"
                rel="noopener noreferrer"
                target="_blank"
              >
                LinkedIn
              </a>

              <a
                className="text-wrapper-15"
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
