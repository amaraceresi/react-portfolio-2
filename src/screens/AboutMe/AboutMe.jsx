import "./AboutMe.css";

let imgUrl = "https://picsum.photos/800"

function AboutMe() {
  return (
    <div id="aboutme" className="aboutme-container">
      <img src={imgUrl} alt="aboutme"/>
      <div>
        <h1>About Me</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis laboriosam placeat officiis molestiae, dolores voluptate suscipit atque fuga, consequatur alias corrupti cupiditate fugit! Necessitatibus itaque similique totam, quasi natus exercitationem facere tenetur alias voluptatibus vero corporis aspernatur sapiente odit, ab obcaecati inventore magnam, a laboriosam quas eius. At, dicta fuga.
        </p>
      </div>
    </div>
  )
}

export default AboutMe