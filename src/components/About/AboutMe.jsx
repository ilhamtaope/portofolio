/* eslint-disable react/no-unescaped-entities */
import Button from "react-bootstrap/Button";
const AboutMe = () => {
  return (
    <>
      <section className="aboutMe">
        <h2>
          About Me
          <span className="cv">
            <Button variant="outline-dark">Download CV</Button>
          </span>
        </h2>
        <hr />
        <p>
          My name is Muhammad Ilham, and I hold a Bachelor's degree in
          Electrical Engineering and Informatics. I love coding, especially when
          it comes to creating cool websites. My passion is to craft innovative
          web solutions and stay updated with the latest tech trends.
        </p>
        <p>
          With a strong foundation in technology, I'm proficient in a range of
          web development skills. I'm skilled in <strong>HTML</strong>,{" "}
          <strong>CSS</strong>, and <strong>JavaScript</strong>, which are the
          building blocks of the web. I'm also well-versed in{" "}
          <strong>React</strong>, a powerful library for building user-friendly
          web applications. Additionally, I'm experienced in{" "}
          <strong>WordPress</strong>, enabling me to create dynamic and
          versatile websites. I utilize <strong>Bootstrap</strong> for creating
          responsive and visually appealing designs. Furthermore, I understand
          the importance of <strong>SEO</strong> (Search Engine Optimization)
          and use it to ensure that the web solutions I create are not only
          innovative but also highly visible and accessible on the internet.
        </p>
      </section>
    </>
  );
};

export default AboutMe;
