import styled from 'styled-components';

import BgD from '../../images/bg_desctop1x.png';
import BgD2x from '../../images/bg_desctop2x.png';
import Img1D from '../../images/main_img/desctop/1desctop1x.png';
import Img1D2x from '../../images/main_img/desctop/1desctop2x.png';
import Img2D from '../../images/main_img/desctop/2desctop1x.png';
import Img2D2x from '../../images/main_img/desctop/2desctop2x.png';
import ImgCatD from '../../images/main_img/desctop/3desctop1x.png';
import ImgCatD2x from '../../images/main_img/desctop/3desctop2x.png';

import BgT from '../../images/bg_tablet1x.png';
import BgT2x from '../../images/bg_tablet2x.png';
import Img1T from '../../images/main_img/tablet/1tablet1x.png';
import Img1T2x from '../../images/main_img/tablet/1tablet2x.png';
import Img2T from '../../images/main_img/tablet/2tablet1x.png';
import Img2T2x from '../../images/main_img/tablet/2tablet2x.png';
import ImgCatT from '../../images/main_img/tablet/3tablet1x.png';
import ImgCatT2x from '../../images/main_img/tablet/3tablet2x.png';

import BgM from '../../images/bg_mobile1x.png';
import BgM2x from '../../images/bg_mobile2x.png';
import Img1M from '../../images/main_img/mobile/1mobile1x.png';
import Img1M2x from '../../images/main_img/mobile/1mobile2x.png';
import Img2M from '../../images/main_img/mobile/2mobile1x.png';
import Img2M2x from '../../images/main_img/mobile/2mobile2x.png';
import ImgCatM from '../../images/main_img/mobile/3mobile1x.png';
import ImgCatM2x from '../../images/main_img/mobile/3mobile2x.png';

import ImgGif from '../../images/background/dog.gif';

export const Backgraund = styled.section`
  /* display: flex; */
  height: 100%;
  width: 320px;
  margin-left: auto;
  margin-right: auto;
  background-repeat: no-repeat;
  background-position: center top;
  background-size: 100%;
  background-image: url(${BgM});

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${BgM2x});
  }
  @media screen and (min-width: 768px) {
    display: inherit;
    background-image: url(${BgT});
    width: 768px;
  }
  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${BgT2x});
  }

  @media screen and (min-width: 1280px) {
    background-image: url(${BgD});
    display: inherit;
    width: 1280px;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${BgD2x});
    }
  }
`;

export const Page = styled.section`
  height: 100vh;
  width: 320px;

  background-image: url(${Img1M}), url(${Img2M}), url(${ImgCatM});
  background-repeat: no-repeat;
  background-position: top 150px right 185px, top 20px right -75px,
    top 263px right 0px;
  background-size: 205px auto, 256px auto, 175px auto;
  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${Img1M2x}), url(${Img2M2x}), url(${ImgCatM2x});
  }
  @media screen and (min-width: 768px) {
    height: 100vh;
    width: 768px;
    background-image: url(${Img1T}), url(${Img2T}), url(${ImgCatT});
    background-repeat: no-repeat;
    background-position: top 315px right 416px, top 20px right -128px,
      top 510px right 0px;
    background-size: 426px auto, 532px auto, 362px auto;
  }
  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${Img1T2x}), url(${Img2T2x}), url(${ImgCatT2x});
  }

  @media screen and (min-width: 1280px) {
    height: 100vh;
    width: 1280px;
    background-image: url(${Img1D}), url(${Img2D}), url(${ImgCatD});
    background-repeat: no-repeat;
    background-position: top 333px right 545px, top 30px right 0px,
      top 505px right 100px;
    background-size: 426px auto, 532px auto, 362px auto;
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${Img1D2x}), url(${Img2D2x}), url(${ImgCatD2x});
    }
  }
`;
export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 280px;
  @media screen and (min-width: 768px) {
    display: inherit;
  }
`;
export const Title = styled.h1`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  line-height: 44px;
  font-size: 32px;
  color: #000000;
  padding-top: 60px;
  padding-bottom: 20px;

  @media screen and (min-width: 768px) {
    font-size: 68px;
    line-height: 100px;
    padding-top: 80px;
    width: 588px;
    margin-left: 32px;
  }
  @media screen and (min-width: 1280px) {
    position: absolute;
    width: 501px;
    height: 264px;
    font-weight: 800;
    margin-left: 32px;
    padding-top: 188px;
    line-height: 88.4px;
  }
`;
export const Gif = styled.iframe`
  background-image: url(${ImgGif});
  background-repeat: no-repeat;
  background-size: 200px auto;
  width: 250px;
  position: absolute;
  height: 150px;
  @media screen and (min-width: 768px) {
    background-size: 350px auto;
    width: 450px;
    height: 400px;
  }
  @media screen and (min-width: 1280px) {
    position: absolute;
    bottom: 0px;
    background-size: 450px auto;
    height: 300px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
`;
