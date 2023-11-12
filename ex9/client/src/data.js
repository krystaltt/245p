import myPic from "./images/me.png";

const MAIN_DATA = [
  {
    content: (
      <>
        <hgroup>
          <h1>Hello World!!</h1>
          <h3> It's me</h3>
        </hgroup>

        <img src={myPic} alt="my pic"></img>
      </>
    ),
  },
  {
    content: (
      <>
        <p>
          My name is <em>NaiChuan Teng</em>,
          <p>
            I am currently embarking on my exciting first year at UCI. As a
            passionate learner and aspiring software engineer, I am beyond
            thrilled to be a part of the MSWE (Master of Software Engineering)
            program.
          </p>
          <p>
            Being a UCI first-year graduate student has filled me with a sense
            of enthusiasm and curiosity. I am incredibly excited about the
            endless possibilities that await in the world of software
            engineering. The prospect of diving deep into the realm of
            technology, solving complex problems, and creating innovative
            solutions truly captivates me.
          </p>
        </p>
      </>
    ),
  },
];

export { MAIN_DATA };
