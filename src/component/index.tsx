import { ContactInfo } from "./partials/ContactInfo";
import { ProfileInfo } from "./partials/ProfileInfo";
import { Container, Button, Link } from "react-floating-action-button";
import ResumePdf from '../assets/resume.pdf'
import { useRef } from "react";



export const Resume = () => {
  const downloadBtn = useRef<any>(null)
  return (
    <>
      <div className="container" id="resume">
        <ContactInfo />
        <ProfileInfo />
      </div>
      <a href={ResumePdf} download className="d-none" ref={downloadBtn}></a>
      <Container>
        <Button icon="fa fa-download" onClick={() => downloadBtn?.current?.click()} />
        <Button icon="fa fa-plus" rotate={true} />
      </Container>
    </>
  );
};
