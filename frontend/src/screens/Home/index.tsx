import React from "react";
import Icon from "@mdi/react";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  ZoomIn,
} from "react-scroll-motion";

import ChoiceCard from "../../components/ChoiceCard";

import "aos/dist/aos.css";
import "./styles.css";

import { mdiMouseMoveDown } from "@mdi/js";

const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Move(), Sticky());

const logo = require("../../assets/icons/RasgadosLogo.svg");

type HomeProps = {};

export default function Home({}: HomeProps) {
  return (
    <div className="home-background">
      <ScrollContainer>
        <ScrollPage page={0}>
          <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -300))}>
            <div className="flex-center flex-col">
              <div className="title-box container flex-center flex-col">
                <img src={logo.default} width={700} />
                <p>
                  um tour pela fauna em <br /> risco do brasil
                </p>
              </div>
              <div className="begin-tour flex-center flex-col">
                <p>iniciar tour</p>
                <Icon
                  path={mdiMouseMoveDown}
                  title="MouseDown"
                  size={2}
                  color="white"
                />
              </div>
            </div>
          </Animator>
        </ScrollPage>
        <ScrollPage page={1}>
          <Animator animation={FadeUp}>
            <div style={{ display: "flex"}}>
              <ChoiceCard route="goodside" />
              <ChoiceCard route="badside" />
            </div>
          </Animator>
        </ScrollPage>
      </ScrollContainer>
    </div>
  );
}
