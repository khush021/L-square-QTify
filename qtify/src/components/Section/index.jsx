import { useState } from "react";
import { Typography } from "../Typography/Typography";
import { AlbumCard } from "../AlbumCard";
import { Carousel } from "../Carousel";
import s from "./Section.module.css";

export const Section = ({ title, data, showViewAllBtn = true }) => {
  const [opened, setOpened] = useState(false);

  return (
    <div className={s.root}>
      <div className={s.header}>
        <Typography label={title} className={s.title} />
        {showViewAllBtn && (
          <div onClick={() => setOpened((prev) => !prev)}>
            <Typography
              label={opened ? "Collapse" : "Show all"}
              className={s.button}
            />
          </div>
        )}
      </div>

      <div className={s.container}>
        {opened ? (
          <div className={s.body}>
            {data?.map((item) => (
              <AlbumCard album={item} key={`${item.id}`}/>
            ))}
          </div>
        ) : (
          <Carousel type={title === 'Top Albums' ? 'top' : 'new' } >
            {data?.map((item) => (
              <AlbumCard album={item} key={`${item.id}`}/>
            ))}
          </Carousel>
        )}
      </div>
    </div>
  );
};
