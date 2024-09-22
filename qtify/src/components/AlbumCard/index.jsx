import { Typography } from "../Typography/Typography";
import s from "./AlbumCard.module.css";

export const AlbumCard = ({ album }) => {

  return (
    <div className={s.root}>
      <div className={s.album}>
        <img src={album?.image} alt="" />
        <div className={s.albumBottom}>
          <div className={s.chip}>
            <Typography label={`${album?.follows} Follows`} className={s.followCount} />
          </div>
        </div>
      </div>

      <Typography label={album?.title} className={s.bottomText} />
    </div>
  );
};
