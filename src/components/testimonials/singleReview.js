import styles from "./singleReview.module.css";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBRow,
} from "mdb-react-ui-kit";

const SingleReview = (props) => {
  return (
    <MDBContainer
      fluid
      className="p-4 p-md-5 text-center text-lg-start shadow-1-strong rounded"
      style={{
        background: `radial-gradient(50% 123.47% at 50% 50%, #00ff94 0%, #720059 100%),
          linear-gradient(121.28deg, #669600 0%, #ff0000 100%),
          linear-gradient(360deg, #0029ff 0%, #8fff00 100%),
          radial-gradient(100% 164.72% at 100% 100%, #6100ff 0%, #00ff57 100%),
          radial-gradient(100% 148.07% at 0% 0%, #fff500 0%, #51d500 100%)`,
        backgroundBlendMode: "screen, color-dodge, overlay, difference, normal",
        height: "fit-content", 
       padding:"0"
      }}
    >
      <p className={`display-3 ${styles.header}`}>Our loved Partners</p>
      <MDBRow
        className="d-flex justify-content-center"
        style={{ alignItems: "center",  paddingBottom:"10vh" }}
      >
        <MDBCol md="10">
          <MDBCard>
            <MDBCardBody className="m-3">
              <MDBRow style={{ alignItems: "center" }}>
                <MDBCol
                  lg="4"
                  className="d-flex justify-content-center align-items-center mb-4 mb-lg-0"
                >
                  <img
                    src={props.imageUrl}
                    className="rounded-circle img-fluid shadow-1"
                    alt="avatar"
                    width="200"
                    height="200"
                    
                  />
                </MDBCol>
                <MDBCol lg="8">
                  {" "}
                  <p className="text-muted fw-light mb-4">
                      {props.review}
                  </p>
                  <p className="fw-bold lead mb-2">
                    <strong>{props.name}</strong>
                  </p>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default SingleReview;
