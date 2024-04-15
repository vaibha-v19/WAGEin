import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import Navbar from "./Navbar";
export default function PersonalProfile() {
  return (
    <>
     <Navbar />
     <section className="vh-100" style={{ backgroundColor: '#f4f5f7' }}>
  <MDBContainer className="py-5 h-100 w-100">
    <MDBRow className="justify-content-center align-items-center h-100 w-100">
      <MDBCol lg="6" className="mb-9 mb-lg-5">
        <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
          <MDBRow className="g-1">
            <MDBCol md="3" className="gradient-custom text-center text-white"
              style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
              <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                alt="Avatar" className="my-5" style={{ width: '80px' }} fluid />
             
              <MDBIcon far icon="edit mb-5" />
            </MDBCol>
            <MDBCol md="9">
              <MDBCardBody className="p-4">
                <MDBTypography tag="h6">Profile Information</MDBTypography>
                <hr className="mt-0 mb-4" />
                <MDBRow className="pt-1">
                  <MDBCol size="6" className="mb-3">
                    <MDBTypography tag="h6">Full Name</MDBTypography>
                    <MDBCardText className="text-muted">vaibhav</MDBCardText>
                  </MDBCol>
                  <MDBCol size="6" className="mb-3">
                    <MDBTypography tag="h6">Email</MDBTypography>
                    <MDBCardText className="text-muted">vaibhav123@gmail.com</MDBCardText>
                  </MDBCol>
                  <MDBCol size="6" className="mb-3">
                    <MDBTypography tag="h6">Phone Number</MDBTypography>
                    <MDBCardText className="text-muted">0000000000</MDBCardText>
                  </MDBCol>
                  <MDBCol size="6" className="mb-3">
                    <MDBTypography tag="h6">Country</MDBTypography>
                    <MDBCardText className="text-muted">India</MDBCardText>
                  </MDBCol>
                  <MDBCol size="6" className="mb-3">
                    <MDBTypography tag="h6">Skill Status</MDBTypography>
                    <MDBCardText className="text-muted">Cook</MDBCardText>
                  </MDBCol>
                  <MDBCol size="6" className="mb-3">
                    <MDBTypography tag="h6">City</MDBTypography>
                    <MDBCardText className="text-muted">Delhi</MDBCardText>
                  </MDBCol>
                  <MDBCol size="6" className="mb-3">
                    <MDBTypography tag="h6">Pincode</MDBTypography>
                    <MDBCardText className="text-muted">110032</MDBCardText>
                  </MDBCol>
                  <MDBCol size="6" className="mb-3">
                    <MDBTypography tag="h6">Verified</MDBTypography>
                    <MDBCardText className="text-muted">N/A</MDBCardText>
                  </MDBCol>
                </MDBRow>

                <div className="d-flex justify-content-start">
                  <a href="#!"><MDBIcon fab icon="facebook me-3" size="lg" /></a>
                  <a href="#!"><MDBIcon fab icon="twitter me-3" size="lg" /></a>
                  <a href="#!"><MDBIcon fab icon="instagram me-3" size="lg" /></a>
                </div>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
</section>

    
    </>
    
  );
}