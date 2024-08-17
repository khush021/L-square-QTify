import logo from "../../assets/logo.png";
import s from './Logo.module.css';

export const Logo = () => {
  return <img src={logo} alt="" width={67} height={34} className={s.logo}/>;
};
