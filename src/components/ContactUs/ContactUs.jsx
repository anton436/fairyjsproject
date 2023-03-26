import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "../ContactUs/style.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

const ContactUs = () => {
  return (
    <Box className="wrapper">
      <Box className="InfoContact">
        <h2 className="title">Связаться с нами </h2>

        <p className="content">
          Не следует, однако, забывать, что дальнейшее развитие различных форм
          деятельности позволяет оценить значение направлений прогрессивного
          развития. Не следует, однако,
          <br /> забывать, что дальнейшее развитие различных форм деятельности.
        </p>
      </Box>
      <Box className="ourContacts">
        <Box className="ContactUs_left">
          <h4 className="ContactUs_right_h4">Наши контакты</h4>
          <Box className="contactInfo1">
            <img
              className="contactImages"
              src="https://i.ibb.co/7zwkHFQ/telephone-3.png"
              alt="telephone-3"
              border="0"
            />
            <p className="ContactUs_left_p">+38 (068) 710 11 95</p>
          </Box>
          <Box className="contactInfo1">
            <img
              className="contactImages"
              src="https://i.ibb.co/j3qpLbM/envelope-1-1.png"
              alt="envelope-1-1"
              border="0"
            />

            <p className="ContactUs_left_p">progress.sofas@gmail.com</p>
          </Box>
          <Box className="contactInfo1">
            <img
              className="contactImages"
              src="https://i.ibb.co/CmR4yh6/location-2-1.png"
              alt="location-2-1"
              border="0"
            />
            <p className="ContactUs_left_p">49035, г.Днепр, ул.Юдина, 11</p>
          </Box>
          <Box className="contactInfo1">
            <img
              className="contactImages"
              src="https://i.ibb.co/xjjkR3c/clock-1-1.png"
              alt="clock-1-1"
              border="0"
            />
            <p className="ContactUs_left_p">
              Офис работает: пн-пт (8:30 - 16:30)
            </p>
          </Box>
          <Box className="ContactUs_right_sot">
            <h4>Соц. сети</h4>
          </Box>
          <a href="#">
            <InstagramIcon id="InstagramIcon" />
          </a>
          <a href="#">
            <FacebookIcon id="FacebookIcon" />
          </a>
        </Box>
        <hr />
        <Box className="ContactUs_right">
          <h4 className="ContactUs_right_h4">Обратная связь</h4>

          <TextField
            className="ContactUs_right_inp"
            id="standard-basic"
            label="Ваше имя"
            variant="standard"
          />
          <TextField
            className="ContactUs_right_inp"
            id="standard-basic"
            label="E-mail"
            variant="standard"
          />
          <TextField
            className="ContactUs_right_inp"
            id="standard-basic"
            label="Сообщение"
            variant="standard"
          />
          <Button
            id="ContactUs_right_button"
            variant="contained"
            disableElevation
          >
            Связаться
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactUs;