import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import User from "./User";
import { Row,Col } from "react-bootstrap";
import axios from 'axios'

export default function Home() {
  const [userData, setUserData] = useState([{}]);
  useEffect(async () => {
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((response) => response.json())
    //   .then((json) => setUserData(json));
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    const {data} =res;
    setUserData(data);
  }, []);
  return (
    <Layout title={"Blog | Home"}>
      {userData?.map((item, i) => {
        return (
          <div className="container">
            <div className="row">
              <div className="col bg-dark"></div>
            </div>
          </div>
        );
      })}
      <Row xs={1} md={4} className="g-4 mt-4 mb-4">
        {userData?.map((item, i) => {
          return (
            <Col>
              <User username={item.username} id={item.id} name={item.name} phone={item.phone} email={item.email} website={item.website}></User>
            </Col>
          );
        })}
      </Row>
    </Layout>
  );
}
