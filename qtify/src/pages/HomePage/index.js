import { HeroSection } from "../../components/HeroSection/HeroSection";
import { Section } from "../../components/Section";
import { useState, useEffect } from "react";
import {
  fetchTopAlbumData,
  fetchNewAlbumData,
  fetchSongs,
  fetchGenreTabs,
} from "../../api/api";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import s from "./HomePage.module.css";

export const HomePage = () => {
  const [topAlbumData, setTopAlbumData] = useState();
  const [newAlbumData, setNewAlbumData] = useState();
  const [allSongs, setAllSongs] = useState();
  const [currentSongs, setCurrentSongs] = useState();

  const [currentTabValue, setCurrentTabValue] = useState("all");
  const [tabItems, setTabItems] = useState([]);

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

  const getSongs = async () => {
    const { response, error } = await fetchSongs();

    if (response) {
      setAllSongs(response);
      setCurrentSongs(response);
    }
  };

  const getGenreTabs = async () => {
    const { response, error } = await fetchGenreTabs();

    if (response) {
      setTabItems(response);
    }
  };

  const handleGenreChange = (e, value) => {
    setCurrentTabValue(value);
    if (value === "all") {
      setCurrentSongs(allSongs);
    } else {
      const filteredSongs = allSongs?.filter(
        (song) => song?.genre?.key === value
      );
      setCurrentSongs(filteredSongs);
    }
  };

  useEffect(() => {
    getTopAlbumData();
    getNewAlbumData();
    getSongs();
    getGenreTabs();
  }, []);

  return (
    <div className={s.root}>
      <HeroSection />
      <Section title="Top Albums" data={topAlbumData} />
      <Section title="New Albums" data={newAlbumData} />
      <Section title="Songs" data={currentSongs} showViewAllBtn={false}>
        <div className={s.tab}>
          <Tabs value={currentTabValue} onChange={handleGenreChange}>
            <Tab value="all" label="All" />
            {tabItems?.map((item) => (
              <Tab value={item?.key} label={item?.label} key={item?.key} />
            ))}
          </Tabs>
        </div>
      </Section>
    </div>
  );
};
