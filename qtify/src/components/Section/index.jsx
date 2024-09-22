import { useState } from "react";
import { Typography } from "../Typography/Typography";
import { AlbumCard } from "../AlbumCard";
import s from "./Section.module.css";

export const Section = ({ title, data, showViewAllBtn = true }) => {
  const [opened, setOpened] = useState(true);

  return (
    <div className={s.root}>
      <div className={s.header}>
        <Typography label={title} className={s.title} />
        {showViewAllBtn && (
          <Typography
            label={opened ? "Collapse" : "Show all"}
            className={s.button}
          />
        )}
      </div>

      <div className={s.container}>
        <div className={s.body}>
          {data?.map((item) => (
            <AlbumCard album={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
