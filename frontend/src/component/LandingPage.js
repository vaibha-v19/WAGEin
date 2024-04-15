import React from "react";
import vectorimg from "../img/vector.png";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { FaRegRegistered } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";
import { IoMdPhonePortrait } from "react-icons/io";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBTypography,
  MDBIcon,
} from "mdb-react-ui-kit";
import Footer from "./Footer";
export default function LandingPage() {
  return (
    <>
      <Navbar />
      <div className="landingpage">
        <div className="heading">
          <h1>
            Wage<span style={{ color: "gold", fontSize: "90px" }}>In</span>
          </h1>
          <div>
            <span style={{ fontSize: "30px" }}>
              {" "}
              “Empower Every Hour - WageIn, Where Work Meets Worth”{" "}
            </span>{" "}
            <br></br>
            At WageIn, we're committed to fair pay for all. Join us in our
            mission for equitable wages and empowered workers.{" "}
          </div>
          <br />

          <button class="button1">Explore Now</button>
        </div>
        <div className="divimg">
          <img src={vectorimg} alt="Image" />
        </div>
      </div>
      <div
        className="box"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#061522",
          height: "100vh",
        }}
      >
        <div className="con ">
          <h1
            style={{
              fontWeight: "500",
              textAlign: "center",
              marginBottom: "30px",
            }}
          >
            How To Get Job
          </h1>
          <section className="d-flex align-items-center justify-content-center">
            <MDBContainer fluid>
              <MDBRow className="justify-content-center">
                <MDBCol
                  md="4"
                  className="mb-1 d-flex align-items-center justify-content-center"
                >
                  <MDBCard className="h-60 d-flex align-items-center justify-content-center ">
                    <FaRegRegistered size={90}></FaRegRegistered>
                    <MDBCardBody>
                      <MDBTypography
                        className="d-flex align-items-center justify-content-center "
                        tag="h4"
                      >
                        Register
                      </MDBTypography>
                      <MDBCardText>
                        Based on your knowledge and skills, choose a job
                        category that you can easily do.​
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol
                  md="4"
                  className="mb-1 d-flex align-items-center justify-content-center"
                >
                  <MDBCard className="h-60 d-flex align-items-center justify-content-center ">
                    <RiSendPlaneFill size={90}></RiSendPlaneFill>
                    <MDBCardBody>
                      <MDBTypography
                        className="d-flex align-items-center justify-content-center "
                        tag="h4"
                      >
                        Apply For Job
                      </MDBTypography>
                      <MDBCardText>
                        Based on your knowledge and skills, choose a job
                        category that you can easily do.​
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>

                <MDBCol
                  md="4"
                  className="mb-1 d-flex align-items-center justify-content-center"
                >
                  <MDBCard className="h-60 d-flex align-items-center justify-content-center ">
                    <IoMdPhonePortrait size={90}></IoMdPhonePortrait>
                    <MDBCardBody>
                      <MDBTypography
                        className="d-flex align-items-center justify-content-center "
                        tag="h4"
                      >
                        Perform Job
                      </MDBTypography>
                      <MDBCardText>
                        Perform job according to your time framework. You are
                        free to perform job anytime.
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </section>
        </div>
        
      </div>
      <div className='explore'>
                <div className="butt">
                    <h3 style={{ textAlign: "center", color: "", fontWeight: "bolder", fontSize: "3rem", margin: "0 0 50px 0" }}>IN WHICH FILED YOU WANT TO EXPLORE</h3>

                    <button className='btn btn-primary'>Verified and Trained Helpers</button>
                    <button className='btn btn-primary'>Replacement</button>
                    <button className='btn btn-primary'>Permanent Hiring</button>
                    <button className='btn btn-primary'>Post Job </button>
                    <button className='btn btn-primary'>Empowering Lives</button>
                </div>
      </div>
      <Footer/>
    </>
  );
}
