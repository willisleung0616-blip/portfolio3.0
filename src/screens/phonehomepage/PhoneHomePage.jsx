import React from "react";
import { Link } from "react-router-dom";
import { useWindowWidth } from "../../breakpoints";
import "./style.css";

export const PhoneHomePage = () => {
  const screenWidth = useWindowWidth();

  return (
    <div className="phone-home-page">
      <div
        className="div-3"
        style={{
          height:
            screenWidth < 1440
              ? "2100px"
              : screenWidth >= 1440
                ? "2200px"
                : undefined,
          width:
            screenWidth < 1440
              ? "393px"
              : screenWidth >= 1440
                ? "1440px"
                : undefined,
        }}
      >
        {screenWidth < 1440 && (
          <>
            <footer className="footer-3">
              <div className="text-wrapper-36">© 2025 Willis Leung</div>

              <a
                className="text-wrapper-37"
                href="https://www.linkedin.com/in/willis-leung/"
                rel="noopener noreferrer"
                target="_blank"
              >
                LinkedIn
              </a>

              <a
                className="text-wrapper-38"
                href="mailto:wyl21@sfu.ca"
                rel="noopener noreferrer"
                target="_blank"
              >
                Email
              </a>
            </footer>

            <div className="jobs">
              <div className="pondr">
                <div className="overlap-group-3">
                  <img className="demo" alt="Demo" src="/img/demo.png" />

                  <div className="experience-box-7" />

                  <p className="founding-PMM-intern">
                    Founding PMM intern leading social media, blog <br />
                    and SEO efforts to scale into a featured chrome web store
                    product
                  </p>

                  <p className="text-wrapper-39">
                    Product Marketing Intern @ Pondr (May - Sep 2022)
                  </p>
                </div>
              </div>

              <div className="computrol">
                <div className="overlap-group-3">
                  <img
                    className="product"
                    alt="Product"
                    src="/img/product.png"
                  />

                  <img className="logo" alt="Logo" src="/img/logo.png" />

                  <div className="experience-box-8" />

                  <p className="read-more-about-the">
                    Read more about the launch here --&gt;
                  </p>

                  <p className="text-wrapper-40">
                    Leading win/loss analysis of top performing accounts and
                    product launch efforts into water management industry
                  </p>

                  <p className="text-wrapper-41">
                    GTM Intern @ Computrol Systems (May - Sep 2023)
                  </p>
                </div>
              </div>

              <div className="FISPAN">
                <div className="overlap-group-3">
                  <div className="mockup-wrapper">
                    <img
                      className="mockup"
                      alt="Mockup"
                      src="/img/mockup-2.png"
                    />
                  </div>

                  <img className="demo-2" alt="Demo" src="/img/demo-1.png" />

                  <div className="experience-box-9" />

                  <p className="improved-product">
                    Improved product adoption via email campaigns and <br />
                    led product development ideation (e.g. Future Dated
                    Payments) contributing to an additional &gt;450,000 ARR
                  </p>

                  <p className="product-marketing">
                    Product Marketing Intern @ FISPAN <br />
                    (Sep - Dec 2024)
                  </p>
                </div>
              </div>

              <div className="okta">
                <div className="overlap-group-3">
                  <img className="image-6" alt="Image" src="/img/image-3.png" />

                  <div className="experience-box-10" />

                  <p className="supporting-product">
                    <span className="text-wrapper-42">
                      Supporting product launch, threat insight initiatives, and
                      more to accelerate{" "}
                    </span>

                    <span className="text-wrapper-43">
                      Okta’s Secure Identity Commitment (OSIC
                    </span>

                    <span className="text-wrapper-42">)&nbsp;&nbsp;</span>
                  </p>

                  <p className="product-marketing-2">
                    Product Marketing Intern @ Okta <br />
                    (May 2025 - Present)
                  </p>

                  <p className="learn-more-about">
                    Learn more about OSIC --&gt;
                  </p>
                </div>
              </div>
            </div>

            <div className="overlap-5">
              <div className="tech-stack">
                <div className="productboard">
                  <div className="productboard-icon">
                    <div className="overlap-group-wrapper">
                      <div className="overlap-group-4">
                        <img
                          className="vector-3"
                          alt="Vector"
                          src="/img/vector.svg"
                        />

                        <img
                          className="vector-4"
                          alt="Vector"
                          src="/img/vector-2.svg"
                        />

                        <img
                          className="vector-5"
                          alt="Vector"
                          src="/img/vector-3.svg"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="text-6">Productboard</div>

                  <div className="text-7">Product Insights</div>
                </div>

                <div className="notebooklm">
                  <div className="notebooklm-logo-wrapper">
                    <div className="notebooklm-logo">
                      <img
                        className="vector-6"
                        alt="Vector"
                        src="/img/vector-4.svg"
                      />
                    </div>
                  </div>

                  <div className="text-8">NotebookLM</div>

                  <div className="text-9">Research</div>
                </div>

                <div className="figma">
                  <div className="frame">
                    <div className="overlap-group-5">
                      <img
                        className="clip-path-group"
                        alt="Clip path group"
                        src="/img/clip-path-group.png"
                      />

                      <a
                        className="link"
                        href="https://www.figma.com"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Link
                      </a>
                    </div>
                  </div>

                  <div className="text-8">Figma</div>

                  <div className="text-9">Design</div>
                </div>

                <div className="asana">
                  <img
                    className="vector-7"
                    alt="Vector"
                    src="/img/vector-6.svg"
                  />

                  <div className="text-10">Asana</div>

                  <div className="text-11">Project Management</div>
                </div>

                <div className="hubspot">
                  <img
                    className="vector-8"
                    alt="Vector"
                    src="/img/vector-7.svg"
                  />

                  <div className="text-12">Hubspot</div>

                  <div className="text-13">Data</div>
                </div>
              </div>

              <a
                className="text-wrapper-44"
                href="https://www.productboard.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                link
              </a>
            </div>

            <div className="projects">
              <div className="can-tire">
                <div className="overlap-group-6">
                  <div className="experience-box-11" />

                  <Link className="learn-more" to="/phone-project-2">
                    Learn more --&gt;
                  </Link>

                  <div className="text-wrapper-45">
                    Canadian Tire Marketing Campaign
                  </div>
                </div>
              </div>

              <div className="axis">
                <div className="overlap-6">
                  <img
                    className="screenshot-2"
                    alt="Screenshot"
                    src="/img/screenshot-2025-07-27-at-6-20-16-pm-1.png"
                  />

                  <div className="experience-box-11" />

                  <p className="axis-consulting-x">
                    Axis Consulting
                    <br />x SFU Civic Innovation Lab
                  </p>

                  <Link className="learn-more-2" to="/phone-project-1">
                    Learn more --&gt;
                  </Link>
                </div>
              </div>
            </div>

            <div className="text-wrapper-46">↓ Tech Stack</div>

            <div className="text-wrapper-47">↓ Projects</div>

            <div className="text-wrapper-48">↓ Experience</div>

            <header className="header-3">
              <Link className="text-wrapper-49" to="/about-me">
                About me
              </Link>

              <div className="text-wrapper-50">Projects</div>

              <div className="text-wrapper-51">Home</div>
            </header>

            <p className="i-m-a-product">
              I’m a product marketer with a passion <br />
              for the intersection between people and product! <br />
              Here’s a couple things i’m proud of:
            </p>
          </>
        )}

        {screenWidth >= 1440 && (
          <>
            <p className="hi-there-i-m-willis">
              <span className="text-wrapper-52">Hi there, I’m Willis</span>

              <span className="text-wrapper-53"> 👋</span>
            </p>

            <p className="i-m-a-product-2">
              I’m a product marketer with a passion <br />
              for the intersection between people and product! <br />
              Here’s a couple things i’m proud of:
            </p>

            <Link className="text-wrapper-54" to="/about-me">
              About me
            </Link>

            <div className="text-wrapper-55">Projects</div>

            <div className="text-wrapper-56">© 2025 Willis Leung</div>

            <a
              className="text-wrapper-57"
              href="https://www.linkedin.com/in/willis-leung/"
              rel="noopener noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>

            <a
              className="text-wrapper-58"
              href="mailto:willisleung0616@gmail.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              Email
            </a>

            <div className="text-wrapper-59">↓ Experience</div>
          </>
        )}

        <div
          className="personal-projects"
          style={{
            color:
              screenWidth >= 1440
                ? "#3a59ca"
                : screenWidth < 1440
                  ? "transparent"
                  : undefined,
            fontSize:
              screenWidth >= 1440
                ? "20px"
                : screenWidth < 1440
                  ? "16px"
                  : undefined,
            left:
              screenWidth >= 1440
                ? "68px"
                : screenWidth < 1440
                  ? "121px"
                  : undefined,
            top:
              screenWidth >= 1440
                ? "1603px"
                : screenWidth < 1440
                  ? "161px"
                  : undefined,
          }}
        >
          {screenWidth >= 1440 && <>↓ Personal Projects</>}

          {screenWidth < 1440 && (
            <>
              <p className="span-wrapper">
                <span className="text-wrapper-52">Hi there, I’m Willis</span>
              </p>

              <p className="span-wrapper">
                <span className="text-wrapper-53"> 👋</span>
              </p>
            </>
          )}
        </div>

        {screenWidth >= 1440 && (
          <>
            <div className="div-wrapper">
              <div className="overlap-group-7">
                <div className="experience-box-12" />

                <p className="axis-consulting-x-2">
                  Axis Consulting
                  <br />x SFU Civic Innovation Lab
                </p>

                <Link className="learn-more-3" to="/phone-project-1">
                  Learn more --&gt;
                </Link>
              </div>
            </div>

            <div className="can-tire-2">
              <div className="overlap-7">
                <img className="image-7" alt="Image" src="/img/image-4-1.png" />

                <div className="experience-box-13" />

                <div className="text-wrapper-60">
                  Canadian Tire Marketing Campaign
                </div>

                <Link className="learn-more-4" to="/phone-project-2">
                  Learn more --&gt;
                </Link>
              </div>
            </div>

            <div className="tech-stack-2">
              <div className="productboard-2">
                <div className="group-wrapper">
                  <div className="group-4">
                    <div className="overlap-group-8">
                      <img
                        className="vector-9"
                        alt="Vector"
                        src="/img/vector-8.svg"
                      />

                      <img
                        className="vector-10"
                        alt="Vector"
                        src="/img/vector-9.svg"
                      />

                      <img
                        className="vector-11"
                        alt="Vector"
                        src="/img/vector-10.svg"
                      />
                    </div>
                  </div>
                </div>

                <div className="text-14">Productboard</div>

                <div className="text-15">Product Insights</div>
              </div>

              <div className="notebooklm-2">
                <div className="group-5">
                  <div className="vector-wrapper">
                    <img
                      className="vector-12"
                      alt="Vector"
                      src="/img/vector-11.svg"
                    />
                  </div>
                </div>

                <div className="text-16">NotebookLM</div>

                <div className="text-17">Research</div>
              </div>

              <div className="figma-2">
                <img className="frame-2" alt="Frame" src="/img/frame.svg" />

                <div className="text-18">Figma</div>

                <div className="text-19">Design</div>
              </div>

              <div className="hubspot-2">
                <div className="hubspot-logo">
                  <img
                    className="vector-13"
                    alt="Vector"
                    src="/img/vector-12.svg"
                  />
                </div>

                <div className="text-20">Hubspot</div>

                <div className="text-21">Data</div>
              </div>

              <div className="asana-2">
                <div className="asana-icon-logo" />

                <div className="text-22">Asana</div>

                <div className="text-23">Project Management</div>
              </div>
            </div>

            <div className="pondr-2">
              <div className="overlap-8">
                <img className="demo-3" alt="Demo" src="/img/demo-2.png" />

                <div className="experience-box-14" />

                <p className="founding-PMM-intern-2">
                  Founding PMM intern leading social media, blog <br />
                  and SEO efforts to scale into a featured chrome web store
                  product
                </p>

                <p className="text-wrapper-61">
                  Product Marketing Intern @ Pondr (May - Sep 2022)
                </p>
              </div>
            </div>

            <div className="computrol-systems">
              <div className="overlap-9">
                <img
                  className="product-2"
                  alt="Product"
                  src="/img/product.png"
                />

                <img className="logo-2" alt="Logo" src="/img/logo.png" />

                <div className="experience-box-15" />

                <p className="text-wrapper-62">
                  Leading win/loss analysis of top performing accounts and
                  product launch efforts into water management industry
                </p>

                <a
                  href="https://h2oglobalnews.com/computrol-systems-waterblue-changes-everything-about-how-you-manage-water/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <p className="read-more-about-the-2">
                    Read more about the launch here --&gt;
                  </p>
                </a>

                <p className="text-wrapper-63">
                  GTM Intern @ Computrol Systems (May - Sep 2023)
                </p>
              </div>
            </div>

            <div className="FISPAN-2">
              <div className="overlap-10">
                <div className="group-6">
                  <div className="overlap-group-9">
                    <img
                      className="mockup-2"
                      alt="Mockup"
                      src="/img/mockup.png"
                    />

                    <img
                      className="mockup-3"
                      alt="Mockup"
                      src="/img/mockup-2-1.png"
                    />

                    <img className="demo-4" alt="Demo" src="/img/demo-1.png" />
                  </div>
                </div>

                <div className="color-box" />

                <p className="improved-product-2">
                  Improved product adoption via email campaigns and <br />
                  led product development ideation (e.g. Future Dated Payments)
                  contributing to an additional &gt;450,000 ARR
                </p>

                <p className="text-wrapper-64">
                  Product Marketing Intern @ FISPAN (Sep - Dec 2024)
                </p>
              </div>
            </div>

            <div className="okta-2">
              <div className="overlap-11">
                <div className="group-7">
                  <p className="text-wrapper-65">
                    Product Marketing Intern @ Okta (May 2025 - Present)
                  </p>

                  <p className="text-wrapper-66">
                    Supporting product launch, threat insight initiatives, and
                    more to accelerate Okta’s Secure Identity Commitment (OSIC)
                  </p>

                  <a
                    className="learn-about-OSIC"
                    href="https://www.okta.com/secure-identity-commitment/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Learn about OSIC --&gt;
                  </a>
                </div>
              </div>
            </div>

            <div className="text-wrapper-67">↓ Tech Stack</div>
          </>
        )}

        <div
          className="image-wrapper"
          style={{
            borderRadius:
              screenWidth >= 1440
                ? "60px"
                : screenWidth < 1440
                  ? "35px"
                  : undefined,
            height:
              screenWidth >= 1440
                ? "120px"
                : screenWidth < 1440
                  ? "70px"
                  : undefined,
            left:
              screenWidth >= 1440
                ? "674px"
                : screenWidth < 1440
                  ? "166px"
                  : undefined,
            top:
              screenWidth >= 1440
                ? "151px"
                : screenWidth < 1440
                  ? "85px"
                  : undefined,
            width:
              screenWidth >= 1440
                ? "120px"
                : screenWidth < 1440
                  ? "70px"
                  : undefined,
          }}
        >
          <img
            className="image-8"
            style={{
              height:
                screenWidth >= 1440
                  ? "83px"
                  : screenWidth < 1440
                    ? "48px"
                    : undefined,
              left:
                screenWidth >= 1440
                  ? "24px"
                  : screenWidth < 1440
                    ? "13px"
                    : undefined,
              top:
                screenWidth >= 1440
                  ? "17px"
                  : screenWidth < 1440
                    ? "9px"
                    : undefined,
              width:
                screenWidth >= 1440
                  ? "68px"
                  : screenWidth < 1440
                    ? "40px"
                    : undefined,
            }}
            alt="Image"
            src="/img/image-11-1.png"
          />
        </div>
      </div>
    </div>
  );
};
