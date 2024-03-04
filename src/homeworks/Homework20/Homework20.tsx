import "./styles.css";
import { v4 } from "uuid";
import { JohnImage } from "assets";

function Homework20() {
  let firstName: string = "John";
  let lastName: string = "Doe";
  let job: string = "Software Engineer";
  let isManager: boolean = false;
  let experience: number = 5;
  let email: string = "john.doe@google.com";
  let programLangs: [string, string, string] = [
    "JavaScript",
    "Python",
    "Machine Learning",
  ];

  // Мэпим массив и возвращаем массив JSX элементов в константу langsElements
  const langsElements = programLangs.map((lang: string) => {
    return (
      <li key={v4()} className="program-lang">
        {lang}
      </li>
    );
  });

  return (
    <div>
      <div className="page-wrapper">
        <div className="card-wrapper">
          <img className="image" src={JohnImage} alt="John Doe Image" />
          <div className="card-title">
            <h3>
              {firstName} {lastName}
            </h3>
          </div>
          <div className="card-content">
            <h5>Job: {job}.</h5>
            <h5>Position: {isManager ? "Manager" : "Employee"}.</h5>
            <h5>Work Experience: {experience} years.</h5>
            <h5>Email: {email}</h5>
            <h5>Program Langs:</h5>
          </div>
          <ul className="langs-list">
            {langsElements}
            {/* <li>{programLangs[0]}</li>
            <li>{programLangs[1]}</li>
            <li>{programLangs[2]}</li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Homework20;
