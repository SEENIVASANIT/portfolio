import React, { useState } from "react";
import "./index.css";
import { Card, Container, Carousel, Modal } from "react-bootstrap";
const Projects = () => {
  const [ProjectInfo, setProjectInfo] = useState({});
  const [ModelOpen, setModelOpen] = useState(false);
  const projectObject = [
    {
      ProjectName: "Guest Room Booking",
      ProjectDisplayImg:
        "https://github.com/SEENIVASANIT/Guest_room_booking/blob/main/demo/Screenshot%202024-03-04%20175817.png?raw=true",

      img1: "https://raw.githubusercontent.com/SEENIVASANIT/wd301/main/demo/Screenshot%202023-10-30%20151611.png",
      img2: "https://raw.githubusercontent.com/SEENIVASANIT/wd301/main/demo/Screenshot%202023-10-30%20135144.png",
      img3: "https://raw.githubusercontent.com/SEENIVASANIT/wd301/main/demo/Screenshot%202023-10-30%20135239.png",
      img4: "https://raw.githubusercontent.com/SEENIVASANIT/wd301/main/demo/Screenshot%202023-10-30%20133724.png",
      ProjectDesc:
        " Book with Ease, Rest in Peace: Your Comfortable Guest Room Awaits!",
      Technologies: " Html,Css,React Js,Node Js,Firebase,EmailJs,Animation.css",
      LiveDemo: "https://guest-rooms-booking.netlify.app/",
      Code: "https://github.com/SEENIVASANIT/Guest_Rooms_booking",
    },
    {
      ProjectName: "TN Blood Donors",
      ProjectDisplayImg:
        "https://github.com/SEENIVASANIT/TN_Blood-Donors/blob/main/DemoImage/tnblood.png?raw=true",
      img1: "https://github.com/SEENIVASANIT/TN_Blood-Donors/blob/main/DemoImage/Screenshot%202024-03-05%20184114.png?raw=true",
      img2: "https://github.com/SEENIVASANIT/TN_Blood-Donors/blob/main/DemoImage/Screenshot%202024-03-05%20184156.png?raw=true",
      img3: "https://github.com/SEENIVASANIT/TN_Blood-Donors/blob/main/DemoImage/Screenshot%202024-03-05%20184231.png?raw=true",
      img4: "https://github.com/SEENIVASANIT/TN_Blood-Donors/blob/main/DemoImage/Screenshot%202024-03-05%20184322.png?raw=true",
      ProjectDesc:
        "Saving Lives, Connecting Hearts, Giving Hope,One Donation at a Time",
      Technologies: " Html,Css,React Js,Node Js,Firebase,EmailJs,Animation.css",
      LiveDemo: "https://tn-blood-donors.netlify.app/",
      Code: "https://github.com/SEENIVASANIT/TN_Blood-Donors",
    },
    {
      ProjectName: "NearMe service",
      ProjectDisplayImg:
        "https://github.com/SEENIVASANIT/Near-Me-Services/blob/main/NearMeSerives_Screenshorts/Screenshot%202023-08-15%20211357.png?raw=true",
      img1: "https://github.com/SEENIVASANIT/Near-Me-Services/blob/main/NearMeSerives_Screenshorts/Screenshot%202023-08-15%20211601.png?raw=true",
      img2: "https://github.com/SEENIVASANIT/Near-Me-Services/blob/main/NearMeSerives_Screenshorts/Screenshot%202023-08-15%20211601.png?raw=true",
      img3: "https://github.com/SEENIVASANIT/Near-Me-Services/blob/main/NearMeSerives_Screenshorts/Screenshot%202023-08-15%20211928.png?raw=true",
      img4: "https://github.com/SEENIVASANIT/Near-Me-Services/blob/main/NearMeSerives_Screenshorts/Screenshot%202023-08-15%20212138.png?raw=true",
      ProjectDesc: " By connecting service providers from across Tamil Nadu",
      Technologies: " Html,Css,React Js,Node Js,Firebase,EmailJs,Animation.css",
      LiveDemo: "https://near-me-services.netlify.app/",
      Code: "https://github.com/SEENIVASANIT/Near-Me-Services",
    },
    {
      ProjectName: "Sports Scheduler",
      ProjectDisplayImg:
        "https://raw.githubusercontent.com/SEENIVASANIT/Sports_scheduler_nodejs/main/Screenshots/Screenshot%20(105).png",
      img1: "https://raw.githubusercontent.com/SEENIVASANIT/Sports_scheduler_nodejs/main/Screenshots/Screenshot%20(113).png",
      img2: "https://raw.githubusercontent.com/SEENIVASANIT/Sports_scheduler_nodejs/main/Screenshots/Screenshot%20(107).png",
      img3: "https://raw.githubusercontent.com/SEENIVASANIT/Sports_scheduler_nodejs/main/Screenshots/Screenshot%20(108).png",
      img4: "https://raw.githubusercontent.com/SEENIVASANIT/Sports_scheduler_nodejs/main/Screenshots/Screenshot%20(110).png",
      ProjectDesc:
        " Game On, Anytime, Anywhere: Sports Scheduler for Every Play!",
      Technologies:
        " Html,Css,Node Js,Express Js,Postgresql,Sequelize,bcrypt,Passport",
      LiveDemo: "https://sports-scheduler-nodejs.onrender.com/)",
      Code: "https://github.com/SEENIVASANIT/Sports_scheduler_nodejs",
    },
    {
      ProjectName: "My Todo-List",
      ProjectDisplayImg:
        "https://raw.githubusercontent.com/SEENIVASANIT/wd201/main/todo-app/doto_Screenshot/Screenshot%20(27).png",
      img1: "https://raw.githubusercontent.com/SEENIVASANIT/wd201/main/todo-app/doto_Screenshot/Screenshot%20(26).png",
      img2: "https://raw.githubusercontent.com/SEENIVASANIT/wd201/main/todo-app/doto_Screenshot/Screenshot%20(29).png",
      img3: "https://raw.githubusercontent.com/SEENIVASANIT/wd201/main/todo-app/doto_Screenshot/Screenshot%20(28).png",
      img4: "https://raw.githubusercontent.com/SEENIVASANIT/wd201/main/todo-app/doto_Screenshot/Screenshot%20(43).png",
      ProjectDesc: " Todo-List: Your Blueprint for Productivity and Success!",
      Technologies: " Html,Css,Node Js,Express Js,LocalStorage,bcrypt,Passport",
      LiveDemo: "https://wd2001.onrender.com/",
      Code: "https://github.com/SEENIVASANIT/wd2001",
    },
    {
      ProjectName: "My Sports",
      ProjectDisplayImg:
        "https://github.com/SEENIVASANIT/MySports/blob/main/Demoimages/306005384_446612574152575_3853196352444025635_n.jpg?raw=true",
      img1: "https://github.com/SEENIVASANIT/MySports/blob/main/Demoimages/Screenshot_2024-03-04-18-35-42-90.jpg?raw=true",
      img2: "https://github.com/SEENIVASANIT/MySports/blob/main/Demoimages/Screenshot_2024-03-04-18-36-48-05.jpg?raw=true",
      img3: "https://github.com/SEENIVASANIT/MySports/blob/main/Demoimages/Screenshot_2024-03-04-18-37-06-00.jpg?raw=true",
      img4: "https://github.com/SEENIVASANIT/MySports/blob/main/Demoimages/Screenshot_2024-03-04-18-40-54-39.jpg?raw=true",
      ProjectDesc:
        "Empower Your Sporting Journey with Our Club Management App!",
      Technologies:
        "Frontend : XML, Backend : Java, Database : Firebase, Tool : Android Studio",
      LiveDemo:
        "https://github.com/SEENIVASANIT/MySports/tree/main/download_apk",
      Code: "https://github.com/SEENIVASANIT/MySports/",
    },
    {
      ProjectName: "My Marks",
      ProjectDisplayImg:
        "https://github.com/SEENIVASANIT/My_marks/blob/main/appScreenshort/graduate.png?raw=true",
      img1: "https://raw.githubusercontent.com/SEENIVASANIT/My_marks/main/appScreenshort/Screenshot_2023-06-18-19-46-24-13.jpg",
      img2: "https://raw.githubusercontent.com/SEENIVASANIT/My_marks/main/appScreenshort/Screenshot_2023-06-18-19-47-46-12.jpg",
      img3: "https://raw.githubusercontent.com/SEENIVASANIT/My_marks/main/appScreenshort/Screenshot_2023-06-18-19-47-57-75.jpg",
      img4: "https://raw.githubusercontent.com/SEENIVASANIT/My_marks/main/appScreenshort/Screenshot_2023-06-18-19-48-15-17.jpg",

      ProjectDesc:
        " My Marks: Simplifying Grade Management, One Mark at a Time!",
      Technologies: " Pyrhon3, kivy ,kivymd,database: sqlite3,Tool : pycharm",
      LiveDemo:
        "https://github.com/SEENIVASANIT/My_marks/tree/main/Android%20Apps",
      Code: "https://github.com/SEENIVASANIT/My_marks",
    },
    {
      ProjectName: "Kivy Youtube-Downloader",
      ProjectDisplayImg:
        "https://github.com/SEENIVASANIT/kivy-Youtube-downloader-app/blob/main/loadimage.jpeg?raw=true",
      img1: "https://raw.githubusercontent.com/SEENIVASANIT/My_marks/main/appScreenshort/Screenshot_2023-06-18-19-48-56-22.jpg",
      img2: "https://github.com/SEENIVASANIT/kivy-Youtube-downloader-app/blob/main/loadimage.jpeg?raw=true",
      img3: "https://github.com/SEENIVASANIT/kivy-Youtube-downloader-app/blob/main/loadimage.jpeg?raw=true",
      img4: "https://github.com/SEENIVASANIT/kivy-Youtube-downloader-app/blob/main/loadimage.jpeg?raw=true",
      ProjectDesc:
        "Unlock Unlimited Entertainment with Our YouTube Downloader App!",
      Technologies: " Pyrhon3, kivy ,kivymd,Module:PyTube,Tool : pycharm",
      LiveDemo:
        "https://github.com/SEENIVASANIT/kivy-Youtube-downloader-app/tree/main/Android%20app",
      Code: "https://github.com/SEENIVASANIT/kivy-Youtube-downloader-app/",
    },
  ];
  const StoreProjectData = (data) => {
    setModelOpen(true);
    setProjectInfo(data);
  };
  return (
    <>
      <h1
        style={{
          letterSpacing: "2px",
          marginTop: "10vh",
          fontFamily: '"Arvo", serif',
        }}
      >
        Projects
      </h1>
      <div
        id="projects-desc"
        style={{
          fontFamily: '"Merriweather", serif',
          fontSize: "95%",
          letterSpacing: "1px",
          color: "gray",
        }}
      >
        Mini projects are a fantastic way to practice your skills and gain
        experience!
      </div>
      <Container
        className="d-flex align-items-center justify-content-center"
        fluid
      >
        <div className="project-continer">
          {projectObject.map((value, index) => {
            return (
              <Card className="project-card" key={index}>
                <img
                  alt={value.ProjectName}
                  src={value.ProjectDisplayImg}
                  height={"200"}
                  className="project-model-view"
                  onClick={() => StoreProjectData(value)}
                ></img>
                <Card.Body style={{ textAlign: "start" }}>
                  <Card.Title
                    style={{
                      fontFamily: '"Anta", sans-serif',
                      fontWeight: "900",
                      letterSpacing: "1px",
                    }}
                  >
                    {value.ProjectName}
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {value.ProjectDesc}
                  </Card.Subtitle>
                  <Card.Text
                    className="text-muted"
                    style={{
                      fontFamily: '"Merriweather", serif',
                      fontSize: "2.3vh",
                      textDecoration: "underline",
                      color: "black",
                      fontWeight: "700",
                    }}
                  >
                    {" "}
                    Technologies used :
                  </Card.Text>
                  <Card.Text>
                    {/* <div
                      
                    >
                     
                    </div> */}
                    {value.Technologies}
                  </Card.Text>

                  <Card.Link href={value.LiveDemo} target="_blank">
                    <i
                      className="fa fa-eye"
                      style={{ textDecoration: "underline" }}
                    >
                      Live Demo
                    </i>
                  </Card.Link>
                  <Card.Link
                    href={value.Code}
                    target="_blank"
                  >{`<Source code>`}</Card.Link>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </Container>
      <Modal
        show={ModelOpen}
        onHide={() => setModelOpen(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {ProjectInfo.ProjectName}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
            <Carousel.Item>
              <img
                alt={ProjectInfo.ProjectName}
                width={"100%"}
                height={"100%"}
                loading="lazy"
                src={ProjectInfo.ProjectDisplayImg}
              ></img>
            </Carousel.Item>

            <Carousel.Item>
              <img
                alt={ProjectInfo.ProjectName}
                width={"100%"}
                height={"100%"}
                src={ProjectInfo.img1}
              ></img>
            </Carousel.Item>
            <Carousel.Item>
              <img
                alt={ProjectInfo.ProjectName}
                width={"100%"}
                height={"100%"}
                src={ProjectInfo.img2}
              ></img>
            </Carousel.Item>
            <Carousel.Item>
              <img
                alt={projectObject.ProjectName}
                width={"100%"}
                height={"100%"}
                src={ProjectInfo.img3}
              ></img>
            </Carousel.Item>
            <Carousel.Item>
              <img
                alt={projectObject.ProjectName}
                width={"100%"}
                height={"100%"}
                src={ProjectInfo.img4}
              ></img>
            </Carousel.Item>
            <Carousel.Item>
              <div
                style={{
                  height: "50vh",
                  backgroundColor: "wheat",
                  fontFamily: '"Merriweather", serif',
                }}
                className="d-flex flex-column justify-content-center align-items-center"
              >
                <h1>for more information</h1>
                <div className="d-flex gap-4">
                  <Card.Link href={ProjectInfo.LiveDemo} target="_blank">
                    <i
                      className="fa fa-eye"
                      style={{ textDecoration: "underline" }}
                    >
                      Live Demo
                    </i>
                  </Card.Link>
                  <Card.Link
                    href={ProjectInfo.Code}
                    target="_blank"
                  >{`<Source code>`}</Card.Link>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </Modal.Body>
        <Modal.Footer className="d-flex align-items-center justify-content-center">
          <strong>Technologies </strong>: {ProjectInfo.Technologies}
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default Projects;
