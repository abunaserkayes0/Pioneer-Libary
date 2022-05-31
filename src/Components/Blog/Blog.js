import React from "react";
import { Container, Row } from "react-bootstrap";

const About = () => {
  return (
    <div className="my-5 py-5">
      <Container>
        <Row>
          <div className="col-md-8 col-lg-8">
            <h2>What is Context API?</h2>
            <h6>
              context API is a global variable for a react app. Which protects
              the props from being drilled. This is basically an alternative
              method of removing child props from a grandchild. This is a
              special and relatively simple method for props management. By
              creating a context in one place, different components can be used
              with the help of a context provider. There is an option called
              value in which state, function, and variable can be sent
              dynamically. Where to use just useContext and use it with the
              help.
            </h6>
          </div>
          <div className="col-md-4 col-lg-4">
            <img
              className="w-100"
              src="https://i.ibb.co/KbDKFMR/context.png"
              alt=""
            />
          </div>
          <div className="col-md-4 col-lg-4">
            <img
              className="w-100"
              src="https://i.ibb.co/Y80Dmfp/semantic.jpg"
              alt=""
            />
          </div>
          <div className="col-md-8 col-lg-8">
            <h2>What is Semantic Tag?</h2>
            <h6>
              A semantic tag is a type of tag that, according to the name of the
              tag, their work is useful to read humans and machines. It is newly
              integrated into HTML5. For example: header,
              main,nav,section,article,footer etc. It makes a lot of code
              meaningful. Many people have to work with a code to work on a big
              project, so using a semantic tag to understand the code is
              convenient. Also using semantics to make SEO friendly increases
              SEO performance.
            </h6>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default About;
