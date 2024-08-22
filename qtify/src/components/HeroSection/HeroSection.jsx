import { Typography } from '../Typography/Typography';
import s from './HeroSection.module.css';
import heroImage from "../../assets/hero_headphones.png";

export const HeroSection = () => {
    return <div className={s.root}>
        <div className={s.texts}>
            <Typography label="100 Thousand Songs, ad-free" variant="heading" className={s.whiteText}/>
            <Typography label="Over thousands podcast episodes" variant="heading" className={s.whiteText}/>
        </div>
        <img src={heroImage} alt="not fount" className={s.image}/>
    </div>
}