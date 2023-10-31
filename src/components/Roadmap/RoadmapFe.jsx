import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faJs,
  faBootstrap,
  faReact,
  faGithub,
  faSearchengin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
const RoadmapFe = () => {
  const mySkills = [
    {
      name: "HTML Dasar",
      icon: faHtml5,
      color: "red",
      size: "2x",
      url: "https://www.youtube.com/watch?v=NBZ9Ro6UKV8&list=PLFIM0718LjIVuONHysfOK0ZtiqUWvrx4F",
    },
    {
      name: "HTML 5",
      icon: faHtml5,
      color: "red",
      size: "2x",
      url: "https://www.youtube.com/watch?v=Q2VqCG13ejA&list=PLFIM0718LjIX-K5eeHRImnZhPUMhsw9A7",
    },
    {
      name: "CSS Dasar",
      icon: faCss3,
      color: "navy",
      size: "2x",
      url: "https://www.youtube.com/watch?v=CleFk3BZB3g&list=PLFIM0718LjIUBrbm6Gdh6k7ZUvPIAZm7p",
    },
    {
      name: "CSS Layouting",
      icon: faCss3,
      color: "navy",
      size: "2x",
      url: "https://www.youtube.com/watch?v=Phn2eN6j0pg&list=PLFIM0718LjIUu4Ju9GUL5zpLcuq08TKYr",
    },
    {
      name: "CSS 3",
      icon: faCss3,
      color: "navy",
      size: "2x",
      url: "https://www.youtube.com/watch?v=J0a6YUUAsd4&list=PLFIM0718LjIVCmrSWbZPKCccCkfFw-Naa",
    },
    {
      name: "JavaScript Dasar",
      icon: faJs,
      color: "orange",
      size: "2x",
      url: "https://www.youtube.com/watch?v=RUTV_5m4VeI&list=PLFIM0718LjIWXagluzROrA-iBY9eeUt4w",
    },
    {
      name: "JavaScript Lanjutan",
      icon: faJs,
      color: "orange",
      size: "2x",
      url: "https://www.youtube.com/watch?v=RwT41El778A&list=PLFIM0718LjIUGpY8wmE41W7rTJo_3Y46-",
    },
    {
      name: "JavaScript DOM",
      icon: faJs,
      color: "orange",
      size: "2x",
      url: "https://www.youtube.com/watch?v=aT60R1cySLM&list=PLFIM0718LjIWB3YRoQbQh82ZewAGtE2-3",
    },
    {
      name: "Bootstrap",
      icon: faBootstrap,
      color: "purple",
      size: "2x",
      url: "https://www.youtube.com/watch?v=NNW7Tg8CgAQ&list=PLFIM0718LjIVWpIhlNA_sU-4ZWvN4uSmb",
    },
    {
      name: "Git/Github",
      icon: faGithub,
      color: "black",
      size: "2x",
      url: "https://www.youtube.com/watch?v=lTMZxWMjXQU&list=PLFIM0718LjIVknj6sgsSceMqlq242-jNf",
    },
    {
      name: "Npm",
      icon: faSearchengin,
      color: "green",
      size: "2x",
      url: "https://www.youtube.com/watch?v=WVHkBuiCcIs",
    },
    {
      name: "ReactJs",
      icon: faReact,
      color: "blue",
      size: "2x",
      url: "https://www.youtube.com/watch?v=kcnwI_5nKyA",
    },
    {
      name: "Tailwind",
      icon: faBootstrap,
      color: "cyan",
      size: "2x",
      url: "https://www.youtube.com/watch?v=z3slaXqmkT0&list=PLFIM0718LjIUHFRMzPJ0wGjx9_NlC5d1h",
    },
    {
      name: "Typescript",
      icon: faReact,
      color: "teal",
      size: "2x",
      url: "https://www.youtube.com/watch?v=LblLwDCS4II",
    },
  ];

  return (
    <>
      <section className="roadmapFe">
        <h2>Front-End Developer</h2>
        <p>
          Front-End Development is the first step in understanding how to create
          engaging and interactive websites. To become a Front-End Developer,
          there are several key stages that you need to follow:
        </p>
        <hr />
        <ul>
          {mySkills.map((element, index) => (
            <li key={index}>
              {element.icon && (
                <FontAwesomeIcon
                  className="icon"
                  icon={element.icon}
                  color={element.color}
                  size={element.size}
                />
              )}
              {element.name}
              <span className="play">
                <a href={element.url} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default RoadmapFe;
