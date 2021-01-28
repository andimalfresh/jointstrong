import React from "react";
import Test1 from "./img/testimony1.png";
import Test2 from "./img/testimony2.png";
import Test3 from "./img/testimony3.png";
import Phone from "./img/phone.png";
import Self from "./img/selfcare2.png";
import Clinical2 from "./img/clinicalcare2.png";
import Virtual from "./img/virtualcareappt.png";

const Clinical = () => {
  return (
<div className="md-4">
        <div className="hero is-info py-4 px-6">
        <div className="columns is-align-items-center md-4">
          <div className="rows">
            <h1 className="row title">JointStrong®</h1>
            <h2 className="row subtitle">
              Your answer for musculoskeletal health and wellness.
            </h2>
          </div>
          <div className="column is-half is-justify-content-center">
            <img src={Phone} />
          </div>
        </div>
        </div>
      <div>
        <h2 className="subtitle px-4 py-4">
          Start rethinking your pain and care with JointStrong® today!
        </h2>
        <div className="px-4 py-4">
          <strong>JointStrong®</strong> is a comprehensive program designed to
          resolve the majority of back, neck, and other joint conditions with a
          conservative approach that minimizes the need for opioids, injections,
          MRIs, surgeries, and other advanced forms of care. Whether for injury
          prevention or pain reduction, JointStrong can help you move from
          healthcare to self-care. Begin taking charge of your health today!
        </div>
      </div>
      <div className="px-4 py-4">
        <h1 className="title">The JointStrong® user experience:</h1>
        <div className="columns">
          <div className="column">
            <div className="card equal-height">
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-96x96">
                      <img src={Test1} alt="Placeholder image" />
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-4">John Smith</p>
                    <p className="subtitle is-6">@johnsmith</p>
                  </div>
                </div>

                <div className="content">
                  "Working in an office I spend most of my day sitting at my
                  computer, JointStrong, gave me the tools I needed to deal with
                  the pain and prevent it from coming back!"
                  <br />​ - Matt
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card equal-height">
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-96x96">
                      <img src={Test2} alt="Placeholder image" />
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-4">John Smith</p>
                    <p className="subtitle is-6">@johnsmith</p>
                  </div>
                </div>

                <div className="content">
                  "Being a single dad, the last thing you have time for is going
                  to the Doctor when your back gives out. JointStrong guided me
                  to recovery on my schedule, and gave me the tools to make sure
                  it didn't happen again.... so I could keep chasing my 5 year
                  old!"
                  <br />​ - Branden
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card equal-height">
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-96x96">
                      <img src={Test3} alt="Placeholder image" />
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-4">John Smith</p>
                    <p className="subtitle is-6">@johnsmith</p>
                  </div>
                </div>

                <div className="content">
                  "This place is amazing! I’ve only had two visits so far and my
                  back is already feeling so much better! They explain
                  everything thoroughly, making sure I understand completely
                  what steps we’re taking towards my recovery and what exercises
                  I need to be doing."
                  <br />​ - Jessica
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 py-4 has-background-primary has-text-light">
          <h1 className="title has-text-light">The JointStrong® Care Pathways:</h1>
          <div className="columns is-centered has-text-light has-background-primary">
            <div className="column is-flex is-horizontal-center my-4">
              <figure className="image is-128x128">
                <img
                  src={Self}
                  alt="Placeholder image"
                />
                <div className="has-text-centered">Self Care </div>
              </figure>
            </div>
            <div className="column is-flex is-horizontal-center my-4">
              <figure className="image is-128x128">
                <img
                  src={Clinical2}
                  alt="Placeholder image"
                />
                <div className="has-text-centered">Clincal Care</div>
              </figure>
            </div>
            <div className="column is-flex is-horizontal-center my-4">
              <figure className="image is-128x128">
                <img
                  src={Virtual}
                  alt="Placeholder image"
                />
                <div className="has-text-centered">Virtual Care</div>
              </figure>
            </div>
          </div>
          <p className="m-2 px-4 py-4">
            The JointStrong® program consists of three levels of care to ensure
            that you are given the care that you need. The best place to start
            the JointStrong® program is through our JointStrong® App. The
            JointStrong® App will take you through an assessment process to
            diagnose your condition and assist you in deciding which level of
            JointStrong® care for the treatment of your condition.
          </p>
          <p className="m-2 px-4 py-4">
            For those with simple conditions, the JointStrong® app will provide
            you with specific movements designed to help you alleviate your
            back, neck, or joint pain. For those with more complex conditions or
            if you would like to talk to a licensed clinician, you will be
            directed to connect with a Jointstrong clinician through our
            national clinical network or virtual care platform.
          </p>
        </div>
        <div className="m-2 px-4 py-4">
          <h1 className="title">The JointStrong® Difference</h1>
          Video
        </div>
        <div className="m-2 px-4 py-4">
          <h1 className="title">JointStrong® is Nationwide</h1>
          <h2 className="subtitle">
            Interested in experiencing the improved patient experience from a
            JointStrong® Program?
          </h2>
          <p>
            We recommend beginning your journey toward recovery by contacting
            our highly training Health Coaching staff at{" "}
            <strong>855-293-0340</strong>, but you are also able to leave us a
            message on the site or search our database of current JointStrong®
            facilities below. ​ Don't forget, JointStrong® also offers
            telehealth solutions through our mobile application for the
            treatment of your musculoskeletal condition. This allows us to offer
            the superior treatment of your condition that you deserve from the
            comfort of your chosen environment, but also on your schedule and at
            your availability!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Clinical;
