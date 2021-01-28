import React from "react";
import Test1 from "./img/testimony1.png";
import Test2 from "./img/testimony2.png";
import Test3 from "./img/testimony3.png";
import Selfcare from "./img/header_selfcare.jpg";

const Self = () => {
  return (
    <div className="md-4">
      <div className="hero is-info ">
        <div className="columns is-align-items-center md-4">
          <div className="column is-half is-justify-content-center">
            <img src={Selfcare} />
          </div>
          <div className="rows px-6 py-6">
            <h1 className="row title">SELFCARE</h1>
            <h2 className="row subtitle">
              JointStrong® is the premier mobile and web application for the
              self-care treatment and prevention of musculoskeletal conditions.
            </h2>
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
        <h1 className="subtitle">
          Embedded with the outcomes from over
          <strong> one million patient encounters </strong>, JointStrong® is the
          only resource available in the marketplace that is able to provide
          users:
        </h1>
        <div className="columns is-horizontal-center">
          <div className="column is-one-third">
            <div>
              <div className="subtitle">1Diagnostic Assestment</div>
              of your musculoskeletal condition to ensure the proper diagnosis
              of your musculoskeletal condition.
            </div>
          </div>
          <div className="column is-one-third">
            <div>
              <div className="subtitle">2Diagnostic Assestment</div>
              of your musculoskeletal condition to ensure the proper diagnosis
              of your musculoskeletal condition.
            </div>
          </div>
        </div>
        <div className="columns is-horizontal-center">
          <div className="column is-one-third">
            <div>
              <div className="subtitle">3Diagnostic Assestment</div>
              of your musculoskeletal condition to ensure the proper diagnosis
              of your musculoskeletal condition.
            </div>
          </div>
          <div className="column is-one-third">
            <div>
              <div className="subtitle">4Diagnostic Assestment</div>
              of your musculoskeletal condition to ensure the proper diagnosis
              of your musculoskeletal condition.
            </div>
          </div>
        </div>
        <div className="m-6 columns is-horizontal-center">
          <button>TRY IT NOW!</button>
        </div>
        <div>
          <div className="columns is-horizontal-center m-2">
            <div className="column is-full">

              <div className="px-4 py-4">
                <div className="title">How to get Started</div>
                <div className="subtitle">
                  Visit app.jointstrong.com to create an account and choose your
                  desired care pathway: self-assessment, prevention or clinical
                  consultation.
                </div>
              </div>
              <div className="px-4 py-4">
                <div className="title">How to get Started</div>
                <div className="subtitle">
                  Visit app.jointstrong.com to create an account and choose your
                  desired care pathway: self-assessment, prevention or clinical
                  consultation.
                </div>
              </div>
              <div className="px-4 py-4">
                <div className="title">How to get Started</div>
                <div className="subtitle">
                  Visit app.jointstrong.com to create an account and choose your
                  desired care pathway: self-assessment, prevention or clinical
                  consultation.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 py-4 has-background-success has-text-light">
          <h1 className="title has-text-light">
            The JointStrong® Care Pathways:
          </h1>

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

export default Self;
