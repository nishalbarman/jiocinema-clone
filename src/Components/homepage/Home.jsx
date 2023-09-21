import React from "react";
import Banner from "./Banner/Banner";
import styles from "./Home.module.css";
import HPoster from "./HPoster/HPoster";
import PostersWrapper from "../../Wrapper/PosterWrapper/PostersWrapper";
import VPoster from "./VPoster/VPoster";
import Carousel from "../../Components/Carousel/Carousel";

function Home() {
  const data = [
    {
      title: "Peacock Hub",
      language: null,
      movieType: null,
      contentRating: null,
      image:
        "https://v3img.voot.com/resizeHigh,w_1920,h_1080/v3Storage/assets/peacock_16x9_01-1694090925189.jpg",
      isLive: true,
      isPremium: false,
    },
    {
      title: "Khatron Ke Khiladi",
      language: "Hindi",
      movieType: "Reality",
      contentRating: "U/A 13+",
      image:
        "https://v3img.voot.com/resizeHigh,w_1920,h_1080/v3Storage/assets/kkk-16x9-1694969910488.jpg",
      isLive: true,
      isPremium: false,
    },
    // {
    //   title: "Kaisi Yeh Yaariaan",
    //   language: "Hindi",
    //   movieType: "Romance",
    //   contentRating: "U/A 13+",
    //   image:
    //     "https://v3img.voot.com/resizeHigh,w_1920,h_1080/v3Storage/assets/16x9.-1694849424518.jpg",
    //   isLive: false,
    //   isPremium: false,
    // },
  ];

  const sportsData = [
    {
      title: "Akashvani - Sep 20",
      image:
        "https://v3img.voot.com/resizeMedium,w_960,h_540/jioimage/newcpp/6509c2afcf712b6a3b41d402/6509c2afcf712b6a3b41d402_1695138510025_aa.jpg",
    },
    {
      title: "India Squad Revealed",
      image:
        "https://v3img.voot.com/resizeMedium,w_960,h_540/jioimage/newcpp/65087e562bb1a1963e028256/65087e562bb1a1963e028256_1695055468927_aa.jpg",
    },
    {
      title: "Insiders Reacts To Ashwin's Return",
      image:
        "https://v3img.voot.com/resizeMedium,w_960,h_540/v3Storage/assets/gettyimages-1323882597-1695058922166.jpg",
    },
    {
      title: "Real Madrid 2-1 Real Sociedad",
      image:
        "https://v3img.voot.com/resizeMedium,w_960,h_540/jioimage/newcpp/65075d1b2d8ed8ae9e3c9d97/65075d1b2d8ed8ae9e3c9d97_1694981412650_aa.jpg",
    },
    // {
    //   title: "Siraj Guided India To 8th Title",
    //   image:
    //     "https://v3img.voot.com/resizeMedium,w_960,h_540/jioimage/newcpp/6506f9cb756b8f26736d4aa1/6506f9cb756b8f26736d4aa1_1694955991001_aa.jpg",
    // },
  ];

  const freshEpisodes = [
    "https://v3img.voot.com/resizeMedium,w_810,h_1080/v3Storage/assets/shivshakti-3x4-1693566026814.jpg?imformat=chrome",
    "https://v3img.voot.com/resizeMedium,w_810,h_1080/v3Storage/assets/parineeti-3x4-1-1692360895653.jpg?imformat=chrome",
    "https://v3img.voot.com/resizeMedium,w_810,h_1080/v3Storage/assets/neerja-3x4-1-1692360826126.jpg?imformat=chrome",
    "https://v3img.voot.com/resizeMedium,w_810,h_1080/v3Storage/assets/junooniyat-3x4-1-1692361681131.jpg?imformat=chrome",
    "https://v3img.voot.com/resizeMedium,w_810,h_1080/v3Storage/assets/fsf-3x4-1694687756202.jpg?imformat=chrome",
    "https://v3img.voot.com/resizeMedium,w_810,h_1080/v3Storage/assets/abhirup-live-chat-3x4-1695140819257.jpg?imformat=chrome",
  ];

  return (
    <div className={styles.homepage_wrapper}>
      <Carousel data={data} />
      {/* <Banner
        img={
          "https://v3img.voot.com/resizeMedium,w_1920,h_411/v3Storage/assets/14x3-1694849539803.jpg?imformat=chrome"
        }
      /> */}
      <PostersWrapper title="Top Sports">
        {sportsData.map((element) => {
          return <HPoster {...element} />;
        })}
      </PostersWrapper>
      <PostersWrapper title="Fresh Episodes 📺" data={sportsData}>
        {freshEpisodes.map((image, i) => {
          return <VPoster image={image} />;
        })}
      </PostersWrapper>
      {/* // */}
      <PostersWrapper title="Top Sports">
        {sportsData.map((element) => {
          return <HPoster {...element} />;
        })}
      </PostersWrapper>
      <PostersWrapper title="Fresh Episodes 📺" data={sportsData}>
        {freshEpisodes.map((image, i) => {
          return <VPoster image={image} />;
        })}
      </PostersWrapper>
      {/* // */}
      <PostersWrapper title="Top Sports">
        {sportsData.map((element) => {
          return <HPoster {...element} />;
        })}
      </PostersWrapper>
      <PostersWrapper title="Fresh Episodes 📺" data={sportsData}>
        {freshEpisodes.map((image, i) => {
          return <VPoster image={image} />;
        })}
      </PostersWrapper>
      {/* // */}
      <PostersWrapper title="Top Sports">
        {sportsData.map((element) => {
          return <HPoster image={element.image} />;
        })}
      </PostersWrapper>
      <PostersWrapper title="Fresh Episodes 📺" data={sportsData}>
        {freshEpisodes.map((image, i) => {
          return <VPoster image={image} />;
        })}
      </PostersWrapper>
      {/* // */}
      <PostersWrapper title="Top Sports">
        {sportsData.map((element) => {
          return <HPoster image={element.image} />;
        })}
      </PostersWrapper>
      <PostersWrapper title="Fresh Episodes 📺" data={sportsData}>
        {freshEpisodes.map((image, i) => {
          return <VPoster image={image} />;
        })}
      </PostersWrapper>
    </div>
  );
}

export default Home;
