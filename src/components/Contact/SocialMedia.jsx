import Button from "react-bootstrap/Button";
const SocialMedia = () => {
  return (
    <>
      <section className="socialMedia">
        <h3>Social Media</h3>
        <div className="socialMediaLink">
          <Button style={{ backgroundColor: "blue", color: "white" }}>
            Linkedin
          </Button>
          <Button style={{ backgroundColor: "black", color: "white" }}>
            Github
          </Button>
          <Button style={{ backgroundColor: "purple", color: "white" }}>
            Discord
          </Button>
          <Button style={{ backgroundColor: "#FF1493", color: "white" }}>
            Instagram
          </Button>
          <Button style={{ backgroundColor: "#333333", color: "white" }}>
            Email
          </Button>
        </div>
        <hr />
      </section>
    </>
  );
};

export default SocialMedia;
