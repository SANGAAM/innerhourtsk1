import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Card, CardText, CardTitle, CardBody } from "reactstrap";
import "./App.css";

function DifferenceFinder() {
  const [listA, setListA] = useState("");
  const [listB, setListB] = useState("");
  const [result, setResult] = useState(null);

  const computeDifferences = () => {
    const arrayA = listA.split("\n").map((item) => item.trim());
    const arrayB = listB.split("\n").map((item) => item.trim());
    const uniqueA = arrayA.filter((item) => !arrayB.includes(item)).filter(item => item !== '');
    const uniqueB = arrayB.filter((item) => !arrayA.includes(item)).filter(item => item !== '');
    const common = arrayA.filter((item) => arrayB.includes(item));
    const combined = [...uniqueA, ...uniqueB];

    const differences = {
      uniqueA,
      uniqueB,
      common,
      combined,
    };

    setResult(differences);
  };

  return (
    <div>
      <header>TASK 1</header>
      <div className="main">
        <Row>
          <Col sm={6}>
            <div className="cntnt1">
              <h2>List A</h2>
              <textarea
                className="txt"
                value={listA}
                onChange={(e) => setListA(e.target.value)}
                rows={5}
              />


            </div>
          </Col>
          <Col sm={6}>
            <div className="cntnt1">
              <h2>List B</h2>
              <textarea
                className="txt"
                value={listB}
                onChange={(e) => setListB(e.target.value)}
                rows={5}
              />
            </div>
          </Col>

        </Row>
      </div>

      <div className="btn">
        <button className='btn-color' onClick={computeDifferences}>Compute</button>
      </div>

      {result && (
        <div className="output">
          <Row>
            <Col sm={3} >
              <Card
                className="my-2 data"
                color="primary"
                outline
                style={{
                  width: '18rem'
                }}
              >
                <CardBody>
                  <CardTitle tag="h5">
                    Items present only in A:
                  </CardTitle>
                  <CardText>
                    <ul>
                      {result.uniqueA.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </CardText>
                </CardBody>
              </Card>

            </Col>
            <Col sm={3}>
              <Card
                className="my-2 data"
                color="primary"
                outline
                style={{
                  width: '18rem'
                }}
              >
                <CardBody>
                  <CardTitle tag="h5">
                    Items present only in B:
                  </CardTitle>
                  <CardText>
                    <ul>
                      {result.uniqueB.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col sm={3}>
              <Card
                className="my-2 data"
                color="primary"
                outline
                style={{
                  width: '18rem'
                }}
              >
                <CardBody>
                  <CardTitle tag="h5">
                    Items present in both A and B:
                  </CardTitle>
                  <CardText>
                    <ul>
                      {result.common.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col sm={3} style={{ textAlign: 'center' }}>
              <Card
                className="my-2 data"
                color="primary"
                outline
                style={{
                  width: '18rem'
                }}
              >
                <CardBody>
                  <CardTitle tag="h5">
                    Items combining both A and B (unique):
                  </CardTitle>
                  <CardText>
                    <ul>
                      {result.combined.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </CardText>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      )}
      <footer>
        © 2023 Copyright: INNERHOUR
      </footer>
    </div>

  );
}

export default DifferenceFinder;
