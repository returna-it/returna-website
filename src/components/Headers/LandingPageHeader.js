import React from "react";

// reactstrap components
import {Button, Col, Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row} from "reactstrap";
import "../../assets/lang/i18n"
import { useTranslation } from "react-i18next";
import {
 EmailFormCreateForm
} from '../../ui-components';

import { DataStore } from '@aws-amplify/datastore';
import { EmailForm } from '../../models';


// core components

function LandingPageHeader() {
  let pageHeader = React.createRef();
  const { t, i18n } = useTranslation();
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);

  React.useEffect(() => {
  let pageHeaderRef = pageHeader.current; // Create a reference variable

  if (window.innerWidth > 991 && pageHeaderRef) {
    const updateScroll = () => {
      let windowScrollTop = window.pageYOffset / 3;
      pageHeaderRef.style.transform =
        "translate3d(0," + windowScrollTop + "px,0)";
    };

    window.addEventListener("scroll", updateScroll);

    return function cleanup() {
      window.removeEventListener("scroll", updateScroll);
    };
  }
  });
  return (
    <>
      <div className="page-header page-header-big">
        <div
      className="page-header"
      style={{
        position: "relative",
      }}>
      <div
        className="white-background"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(255, 255, 255, 0.9)", // Adjust the RGBA values and opacity to your preference
        }}
      />
      <img
        className="transparent-image"
        src={require("assets/img/Frame 1.png")}
        alt="Transparent Image"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          // Additional styles for the transparent image
        }}
      />
    </div>
        <div className="content-center">
          <Container>
            <h1 className="title" style={{ color: "darkblue" }}>{t('splash_title')}</h1>
              <div className="section text-center">
                <Container>
                    <h3 className="title" style={{ color: "darkblue" }}>{t('more_info')}</h3>
                    <Row>
                      <Col className="text-center ml-auto mr-auto" lg="6" md="8">
                        <EmailFormCreateForm
                            onSubmit={handleFormSubmission}
                        />
                      </Col>
                    </Row>
                </Container>
              </div>
          </Container>
        </div>
      </div>
    </>
  );
}

async function handleFormSubmission(fields) {
  try {
    const emailForm = new EmailForm(fields);
    await DataStore.save(emailForm);
    console.log('Email form saved successfully');
    // Perform any additional actions after saving the form
  } catch (error) {
    console.error('Error saving email form:', error);
    // Handle any error that occurred during the save operation
  }
}


export default LandingPageHeader;
