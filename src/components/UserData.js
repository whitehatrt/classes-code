import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import { Row, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useFriendStatus } from "./hooks/customHookes";
export default function UserData() {
  let { id } = useParams();
  console.log(id);
  const [userData, setUserData] = useState();
  const isOnline = useFriendStatus();
  useEffect(async () => {
    // fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    //   .then((response) => response.json())
    //   .then((json) => setUserData(json));
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    ).catch((errors)=>{
      return errors.response.status
    });
    // const res = await axios.post(
    //   `https://jsonplaceholder.typicode.com/users`
    // ).catch((errors)=>{
    //   return errors.response.status
    // });
    // const { data } = res;
    // console.log(data)
    const { data } = res;
    
    setUserData(data);
  }, []);
  
  return (
    <Layout title={"Blog | User Data"}>
      <Row xs={1} md={4} className="g-4 mt-4 mb-4">
        {/* {userData!=undefined? ( */}
        <Card>
          <Card.Body>{userData?.username}</Card.Body>
          <Card.Body>{userData?.name}</Card.Body>
          <Card.Body>{userData?.email}</Card.Body>
          <Card.Body>{userData?.phone}</Card.Body>
          <Card.Body>{userData?.website}</Card.Body>
          <Card.Body>{isOnline }</Card.Body>

        </Card>
      {/*  )
         : (
          <Card>
            <Card.Body>No Data Regarding provided id</Card.Body>
          </Card>
         )
        } */}
      </Row>
    </Layout>
    
    
  );
}
