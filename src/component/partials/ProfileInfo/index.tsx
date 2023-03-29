export const ProfileInfo = () => {
  return (
    <div className="right_side">
        <div className="about">
          <h2 className="profileTitle">Profile</h2>
          <p>
            A passionate Web Developer skilled at developing efficient and
            scalable solutions for complex problems with a demonstrated work
            history in web development.
          </p>
        </div>
        <div className="about">
          <h2 className="profileTitle">Experience (5 Years 6 Months)</h2>
          <div className="box">
            <div className="year_company">
              <h5>Oct 2021 - Present</h5>
              <h5>LearningMate Pvt. Ltd.</h5>
            </div>
            <div className="text">
              <h4>Senior Software Engineer (FrontEnd)</h4>
              <p>
                Working in a existing project of Cosmos which is developed in
                React js with Typescript. Doing unit test cases for the same
                project using JEST.
              </p>
            </div>
          </div>
          <div className="box">
            <div className="year_company">
              <h5>OCt 2020 - OCt 2021</h5>
              <h5>Trizent Technologies</h5>
            </div>
            <div className="text">
              <h4>Senior Software Engineer (FrontEnd)</h4>
              <p>
                Working in a existing project of Smartfren Admin Panel which is
                developed in Reactjs with Typescript. Developed an application
                frontend for the new product of the organization using React Js
                and React TypeScript.
              </p>
            </div>
          </div>
          <div className="box">
            <div className="year_company">
              <h5>Mar 2020 - OCT 2020</h5>
              <h5>GBS Pvt. Ltd.</h5>
            </div>
            <div className="text">
              <h4>Software Engineer (FrontEnd)</h4>
              <p>
                Working in a existing project of Smartfren Admin Panel which is
                developed in Reactjs with Typescript
              </p>
            </div>
          </div>
          <div className="box">
            <div className="year_company">
              <h5>June 2018 - Mar 2020</h5>
              <h5>Wdi Technologies</h5>
            </div>
            <div className="text">
              <h4>Software Engineer (BackEnd)</h4>
              <p>
                Developed applications API and Frontend for the new product of
                the organization using Laravel (PHP).
              </p>
            </div>
          </div>
          <div className="box">
            <div className="year_company">
              <h5>Sep 2017 - June 2018</h5>
              <h5>Refulgence Inc Pvt. Ltd.</h5>
            </div>
            <div className="text">
              <h4>Software Engineer (BackEnd)</h4>
              <p>
                Developed applications API and Frontend for the new product of
                the organization using CodeIgniter (PHP).
              </p>
            </div>
          </div>
        </div>
        <div className="about skills">
          <h2 className="profileTitle">Professional Skills</h2>
          <div className="box">
            <h4>React , NExt js</h4>
            <span className="percent">
              <div className="w-100"></div>
            </span>
          </div>
          <div className="box">
            <h4>Laravel, codeigniter (PHP)</h4>
            <span className="percent">
              <div className="w-100"></div>
            </span>
          </div>
          <div className="box">
            <h4>Node & Express</h4>
            <span className="percent">
              <div className="w-50"></div>
            </span>
          </div>
        </div>
        <div className="about interest">
          <h2 className="profileTitle">interest</h2>
          <ul>
            <li>
              <i className="fa fa-gamepad" aria-hidden="true"></i> Gaming
            </li>
            <li>
              <i className="fa fa-book" aria-hidden="true"></i> Reading
            </li>
            <li>
              <i className="fa fa-trophy" aria-hidden="true"></i> Cricket
            </li>
            <li>
              <i className="fa fa-film" aria-hidden="true"></i> Movies
            </li>
          </ul>
        </div>
      </div>
  )
}
