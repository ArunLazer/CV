import profileImg from "../../../assets/img.jpeg";
import { Education } from "./partials/education";
import { Contact } from "./partials/contact";
import { Percent } from "./partials/percent";
export const ContactInfo = () => {
  return (
    <div className="left_side">
      <div className="profileText">
        <div className="imgBx">
          <img src={profileImg} />
        </div>
        <h2>
          Arun
          <br />
          <span>Web Developer</span>
        </h2>
      </div>
      <div className="contactInfo">
        <h3 className="title">Contact Info</h3>
        <ul>
          {[
            { icon: "phone", data: "+91 8122495266" },
            { icon: "envelope-o", data: "arunlazer4@gmail.com" },
            { icon: "linkedin", data: "https://www.linkedin.com/in/arun-lazar-289b9ba5" },
            { icon: "map-marker", data: "Nagercoil, TamilNadu, India" },
          ].map(({ icon, data }:{[key:string]:string},index:number) => {
            return (
              <Contact key={index.toString()} {...{ icon, data }}/>
            );
          })}
        </ul>
      </div>
      <div className="contactInfo education">
        <h3 className="title">Education</h3>
        <ul>
          {[
            {
              year: "2011 - 2015",
              qualification: "Bachelor of engineering in ECE",
              University: "Sun College of Engg. & tech. , Anna University",
            },
            {
              year: "2010 - 2011",
              qualification: "+2",
              University: "Carmel HSS , StateBoard",
            },
            {
              year: "2009 - 2010",
              qualification: "SSLC",
              University: "Carmel HSS , StateBoard",
            },
          ].map(
            ({
              year,
              qualification,
              University,
            }: {
              [key: string]: string;
            }, index:number) => {
              return <Education  key={index.toString()} {...{ year, qualification, University }} />;
            }
          )}
        </ul>
      </div>
      <div className="contactInfo language">
        <h3 className="title">languages</h3>
        <ul>
          {[
            { title: "English", percent: "w-90" },
            { title: "Tamil", percent: "w-100" },
          ].map(({ title, percent }: { [key: string]: string }, index:number) => {
            return (
              <li key={index.toString()}>
                <span className="text">{title}</span>
                <Percent percent={percent} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
