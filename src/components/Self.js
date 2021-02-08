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
              <div className="subtitle has-text-weight-bold">
                Diagnostic Assestment
              </div>
              of your musculoskeletal condition to ensure the proper diagnosis
              of your musculoskeletal condition.
            </div>
          </div>
          <div className="column is-one-third">
            <div>
              <div className="subtitle has-text-weight-bold">
                Personalized Treatment Plan
              </div>
              tailored to the results of your diagnostic assessment and
              user-provided demographic data, level of pain and current mobility
            </div>
          </div>
        </div>
        <div className="columns is-horizontal-center">
          <div className="column is-one-third">
            <div>
              <div className="subtitle has-text-weight-bold">
                On-Call Wellness Coaches
              </div>
              available at your convenience to assist with questions, concerns
              you in maintaining your musculoskeletal wellness
            </div>
          </div>
          <div className="column is-one-third">
            <div>
              <div className="subtitle has-text-weight-bold">
                Customized Self-Care Education
              </div>
              for your condition and prevention to assist you in maintaining
              your musculoskeletal wellness
            </div>
          </div>
        </div>
        <div className="m-6 columns is-horizontal-center">
          <button className="button is-primary">TRY IT NOW!</button>
        </div>
        <div className="m-2">
          <div className="px-4 py-4 is-half">
            <div className="title">How to get Started</div>
            <div>
              <div className="is-size-4 has-text-weight-bold">Visit</div>
              app.jointstrong.com to create an account and choose your desired
              care pathway: self-assessment, prevention or clinical con
            </div>
            <div>
              <div className="is-size-4 has-text-weight-bold">Personalize</div>
              your care pathway to receive a treatment program tailored to your
              specific needs. Begin working towards better health and recovery
              by completing daily assessments, reaching milestones, and
              receiving education to prevent future injury.
            </div>
            <div>
              <div className="is-size-4 has-text-weight-bold">Call</div>
              (855) 293-0340 with any questions, concerns or to schedule a
              clinical consultation with a JointStrong® Clinician.
            </div>
            <div className="subtitle has-text-weight-bold my-4">
              Experience the JointStrong® difference and begin your path to
              musculoskeletal health and wellness by downloading the 100% free
              JointStrong® Application today!
            </div>
          </div>
        </div>

        <div className="px-4 py-6 my-4 has-background-success has-text-light">
          <div className="columns">
            <div className="column is-half is-flex-direction-column">
              <div className="title has-text-light">
                HEALTH &nbsp;
                <span className="has-text-weight-bold">COACHING</span>
              </div>
              Need assistance with the JointStrong® Application, understanding
              your movement plan, or have general questions? Our health coaches
              can assist you in optimizing your in-app health program while
              providing real-time support and assistance. Contact one of our
              highly-trained health coaches today!
            </div>
            <div className="column is-half is-flex-direction-column">
              <div className="title has-text-light">
                HEALTH &nbsp;
                <span className="has-text-weight-bold">COACHING</span>
              </div>
              Need assistance with the JointStrong® Application, understanding
              your movement plan, or have general questions? Our health coaches
              can assist you in optimizing your in-app health program while
              providing real-time support and assistance. Contact one of our
              highly-trained health coaches today!
            </div>
          </div>
          <div className="m-4 subtitle has-text-weight-bold has-text-light has-text-centered">
            CALL TODAY
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Self;
