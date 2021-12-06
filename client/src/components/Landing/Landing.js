import React from "react"
import "./Landing.css"
import Logo1 from "../../static/images/logo1.png"
import Landing1 from "../../static/images/landing1.png"
import Mentor from "../../static/images/mentor.png"
import Financial from "../../static/images/financial.png"
import Reviews from "../../static/images/reviews.png"
import Skills from "../../static/images/skills.png"

function Landing() {
  return (
    <div className="landing">
      {/* Landing Page 1 */}
      <div className="hero">
        <div>
          <img className="logo1" alt="logo1" src={Logo1} />
          <p>
            Connecting medical <br /> professionals across the world
          </p>
          <button>Get Started</button>
        </div>
        <img className="landing1" alt="landing1" src={Landing1} />
      </div>

      {/* Wave effects */}
      <div>
        <svg
          class="waves"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shape-rendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g class="parallax">
            <use xlinkHref="#gentle-wave" x="48" y="0" fill="#3C5487" />
            <use xlinkHref="#gentle-wave" x="48" y="3" fill="#76C9BF" />
            <use xlinkHref="#gentle-wave" x="48" y="5" fill="#EAD2FF" />
            <use xlinkHref="#gentle-wave" x="48" y="8" fill="#fff" />
          </g>
        </svg>
      </div>

      {/* Landing Page 2 */}
      <div className="hero2">
        <h1>MISSION</h1>
        <p>
          OmniConnx is established to form a global healthcare community <br /> through which
          crowdsourced knowledge will support each other in three main areas:{" "}
        </p>
        <div className="blurbs">
          <div className="blurb">
            <img className="mentor" src={Mentor} />
            <h2>
              Guided <br /> Mentorship
            </h2>
          </div>
          <div className="blurb">
            <img className="financial" src={Financial} />
            <h2>
              Financial <br />
              Independence
            </h2>
          </div>
          <div className="blurb">
            <img className="reviews" src={Reviews} />
            <h2>
              Reliability of <br />
              Reviews
            </h2>
          </div>
        </div>
        <button>Learn More</button>
      </div>

      {/* Landing Page 3 */}
      <div className="hero">
        <img className="skills" src={Skills} />
        <div>
          <h1>SKILLS</h1>
          <h2> COMING SOON! </h2>
          <p>
            Through the use of Skills Update, you will be able to <br /> find and connect with
            professionals who share your skills
          </p>
          <button>Other Features</button>
        </div>
      </div>
    </div>
  )
}

export default Landing
