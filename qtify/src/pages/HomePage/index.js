import { HeroSection } from "../../components/HeroSection/HeroSection";
import { Section } from "../../components/Section";
import { useState, useEffect } from "react";
import { fetchTopAlbumData, fetchNewAlbumData } from "../../api/api";
import s from "./HomePage.module.css";

export const HomePage = () => {
  const [topAlbumData, setTopAlbumData] = useState();
  const [newAlbumData, setNewAlbumData] = useState();

  const getTopAlbumData = async () => {
    const { response, error } = await fetchTopAlbumData();

    if (response) {
      setTopAlbumData(response);
    }
  };

  const getNewAlbumData = async () => {
    const { response, error } = await fetchNewAlbumData();

    if (response) {
      setNewAlbumData(response);
    }
  };

  useEffect(() => {
    getTopAlbumData();
    getNewAlbumData();
  }, []);

  return (
    <div className={s.root}>
      <HeroSection />
      <Section title="Top Albums" data={topAlbumData} showViewAllBtn />
      <Section title="New Albums" data={newAlbumData} showViewAllBtn />
    </div>
  );
};
