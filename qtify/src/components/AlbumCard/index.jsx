import { Typography } from "../Typography/Typography";
import Tooltip from "@mui/material/Tooltip";
import s from "./AlbumCard.module.css";

export const AlbumCard = ({ album, type }) => {
  return (
    <Tooltip
      placement="top"
      title={album?.songs?.length > 0 ? `${album.songs.length} songs` : ""}
      arrow
    >
      <div className={s.root}>
        <div className={s.album}>
          <img src={album?.image} alt="" />
          <div className={s.albumBottom}>
            <div className={s.chip}>
              {type === "songs" ? (
                <Typography
                  label={`${album?.likes} Likes`}
                  className={s.followCount}
                />
              ) : (
                <Typography
                  label={`${album?.follows} Follows`}
                  className={s.followCount}
                />
              )}
            </div>
          </div>
        </div>

        <Typography label={album?.title} className={s.bottomText} />
      </div>
    </Tooltip>
  );
};
