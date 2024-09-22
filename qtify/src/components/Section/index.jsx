import { useState, useMemo } from "react";
import { Typography } from "../Typography/Typography";
import { AlbumCard } from "../AlbumCard";
import { Carousel } from "../Carousel";
import s from "./Section.module.css";

export const Section = ({ title, data, showViewAllBtn = true, children }) => {
  const [opened, setOpened] = useState(false);

  const type = useMemo(() => {
    switch (title) {
      case "Top Albums":
        return "top";
      case "New Albums":
        return "new";
      case "Songs":
        return "songs";
      default:
        return "top";
    }
  }, [title]);

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

      {children}

      <div className={s.container}>
        {opened ? (
          <div className={s.body}>
            {data?.map((item) => (
              <AlbumCard album={item} key={`${item?.id}`} type={type} />
            ))}
          </div>
        ) : (
          <Carousel id={type}>
            {data?.map((item) => (
              <AlbumCard album={item} key={`${item?.id}`} type={type} />
            ))}
          </Carousel>
        )}
      </div>
    </div>
  );
};
