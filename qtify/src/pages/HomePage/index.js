import { HeroSection } from "../../components/HeroSection/HeroSection";
import { Section } from "../../components/Section";
import { useState, useEffect } from "react";
import { fetchTopAlbumData } from "../../api/api";
import s from "./HomePage.module.css";

export const HomePage = () => {
  const [topAlbumData, setTopAlbumData] = useState();

  const getTopAlbumData = async () => {
    const { response, error } = await fetchTopAlbumData();

    if (response) {
      setTopAlbumData(response);
    }
  };

  useEffect(() => {
    getTopAlbumData();
  }, []);

  return (
    <div className={s.root}>
      <HeroSection />
      <Section title="Top Albums" data={topAlbumData} showViewAllBtn />
    </div>
  );
};
