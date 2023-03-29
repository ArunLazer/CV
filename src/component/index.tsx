import { ContactInfo } from "./partials/ContactInfo";
import { ProfileInfo } from "./partials/ProfileInfo";
import { Container, Button, Link } from "react-floating-action-button";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export const Resume = () => {
  const generatePDF = () => {
    const input: any = document.getElementById("resume");
    html2canvas(input).then((canvas) => {
      const pdf = new jsPDF();
      pdf.addImage(canvas.toDataURL("image/png"), "PNG", 0, 0, 210, 297);
      pdf.save("download.pdf");
    });
  };
  return (
    <>
      <div className="container" id="resume">
        <ContactInfo />
        <ProfileInfo />
      </div>

      <Container>
        <Button icon="fa fa-download" onClick={generatePDF} />
        <Button icon="fa fa-plus" rotate={true} />
      </Container>
    </>
  );
};
