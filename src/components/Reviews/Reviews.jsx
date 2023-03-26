import LineOfTitle from "./Line27.svg";
import LeftIcon from "./leftIcon.jpg";
import RightIcon from "./rightIcon.jpg";
import * as React from "react";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";

import "./Reviews.css";

const steps = [
  {
    description: `Не следует, однако, забывать, что дальнейшее развитие различных форм деятельности позволяет оценить значение направлений прогрессивного развития. Не следует, однако, забывать, что дальнейшее развитие различных форм деятельности.`,
    nameOfCard: "Иван Иванович,",
  },
  {
    description:
      "Partout importe sonnent prelude reciter fer les ouvrent. Comprendre oh remplirent decharnees la la singuliers he tristement. Tot legerement ici paraissait admiration. Notre divin ici leurs somme ans voici tours. Chaclosah cravaches ah sa bourreaux seulement citadelle ii il somptueux. Mats bois vent vlan nos faux pied pic. Sang tous ames or vlan et pris. Senti subit hisse ville qu ne je decor.",
    nameOfCard: "Иван Иванович,",
  },
  {
    description:
      "Graven af poging groene nu schuld waarde. Hout het zee wel niet stad. Dient groot gayah zeker de en. In agentschap te initiatief ingenieurs werkwijzen bijzondere nu mogendheid. Een rijkdommen wedijveren des onvermoeid. Onder echte er matig op onzer eerst lahat. Enkelen was dus waarbij bevrijd dit vreezen. In zeer er is acre ziet zien hier.",
    nameOfCard: "Иван Иванович",
  },
];

const steps2 = [
  {
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur rem quia possimus eaque ratione asperiores similique voluptas beatae eveniet inventore.",
    nameOfCard: "John Cenna,",
  },
  {
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis recusandae vel minima aspernatur aperiam sit, suscipit nemo unde repellat amet delectus porro reiciendis aliquid iure excepturi vero nobis blanditiis repellendus.",
    nameOfCard: "Peter Parker",
  },
  {
    description:
      "Jaja rozsądkiem Kniaziewiez gorącość czarniutkie towarzystwa dnie Herb Jaki. Król nieprzyjaciele najstraszniéj radzi jaką organ progi rostrzygnienie zaraz każe zdala. Ranną Rzeczypospolitéj Najpiękniejszego każdy Prócz kłów najpiękniejszéj. Rostrzygnijcie francuszczyzny nieuszanowanie szarak barbarzyństwa kątku wesele bierze wyciągniętą Prócz Wysoko żadna przyciągnąć. Rosciągnionemi nowy Bezładnością moki tylu najwymowniejsza pęk przejrzystość bezprzykładną. Łona Białopiotrowiczem Zwano swoje pęki ujrzy czyli kwita.",
    nameOfCard: "Korvo Atano",
  },
  {
    description:
      "Не следует, однако, забывать, что дальнейшее развитие различных форм деятельности позволяет оценить значение направлений прогрессивного развития. Не следует, однако, забывать, что дальнейшее развитие различных форм деятельности",
    nameOfCard: "Иван Иванович",
  },
];
const steps3 = [
  {
    description: `Зна Hipparion рке још moschatus Dwellings amphibius лан. Bison Munro ватра“ Ursus alces „Усред Jolly Eleph. Учинила На да па крупног чеоњача Loir Но ил са дознала Ну. Bison „Усред Eleph Ursus Munro Jolly alces ватра“. Lake замишљала не огранцима гладовали но удружених искуством Loir пределима Ни. Њу одгајиваше На приморцима Cher по Он То Магденбург По.
    `,
    nameOfCard: "Kadzukha,",
  },
  {
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis recusandae vel minima aspernatur aperiam sit, suscipit nemo unde repellat amet delectus porro reiciendis aliquid iure excepturi vero nobis blanditiis repellendus.",
    nameOfCard: "Zhong ",
  },
  {
    description:
      "Ratione probant sciatur id ex docetur replere is. Olim et foco sane igni toga mo. Machinam putandum potestis aut qua imperiti cognitum. Ha in agnoscam potentem ad addantur. Vi nexum certo velut errem an istis ha falli. Ab ad noctu ac ut veras terra ausit nudam. Hic sap alia scio tur spem.",
    nameOfCard: "Korvo ",
  },
  {
    description:
      "復讐者」.復讐者」 伯母さん .伯母さん 復讐者」. 第十九章 第十一章 第十七章 第十八章 第十二章 第十六章. .復讐者」 伯母さん . 第七章 第六章 第九章 第二章 第三章 第五章. 第九章 第七章 第六章 第四章 第八章. 第十六章 第十五章 第十七章 手配書 第十二章 第十八章. 第六章 第三章 第五章 第二章 第十章. 復讐者」. 伯母さん 復讐者」.",
    nameOfCard: "Shogun Raiden",
  },
];

const HomePage = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className="reviews">
      <img className="LineOfTitle" src={LineOfTitle} alt="Error" />
      <div className="reviews-up_block">
        <h3 className="reviews__title">Отзывы</h3>
        <div className="btns__navigation">
          <Button onClick={handleBack} disabled={activeStep === 0}>
            <img src={LeftIcon} alt="" className="btn__navigation" />
          </Button>
          <Button onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            <img src={RightIcon} alt="" className="btn__navigation" />
          </Button>
        </div>
      </div>
      <Box>
        <Box
          className="mainReviwsBlock"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            margin: "2rem",
          }}
        >
          <Box
            className="reviewsText"
            sx={{
              height: 405,
              maxWidth: 450,
              width: "100%",
              p: 2,

              fontSize: "20px",
              color: "rgba(0, 0, 0, 0.7)",
            }}
          >
            {steps[activeStep].description}
            <Box
              className="reviewsTextTitle"
              sx={{ fontSize: "24px", color: "black", marginTop: "7rem" }}
            >
              {steps[activeStep].nameOfCard}
            </Box>
          </Box>
          <Box
            className="reviewsText"
            sx={{
              height: 405,
              maxWidth: 450,
              width: "100%",
              p: 2,
              fontSize: "20px",
              color: "rgba(0, 0, 0, 0.7)",
            }}
          >
            {steps2[activeStep].description}
            <Box
              className="reviewsTextTitle"
              sx={{ fontSize: "24px", color: "black", marginTop: "7rem" }}
            >
              {steps2[activeStep].nameOfCard}
            </Box>
          </Box>
          <Box
            className="reviewsText"
            sx={{
              height: 405,
              maxWidth: 450,
              width: "100%",
              p: 2,
              fontSize: "20px",
              color: "rgba(0, 0, 0, 0.7)",
            }}
          >
            {steps3[activeStep].description}
            <Box
              className="reviewsTextTitle"
              sx={{ fontSize: "24px", color: "black", marginTop: "7rem" }}
            >
              {steps3[activeStep].nameOfCard}
            </Box>
          </Box>
        </Box>
        <MobileStepper
          className="stepperClass"
          sx={{ marginLeft: "50%" }}
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
        />
      </Box>
    </div>
  );
};

export default HomePage;
