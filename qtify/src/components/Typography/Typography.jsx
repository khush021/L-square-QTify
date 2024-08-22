import s from "./Typography.module.css";
import cn from "classnames";

//variants -> body_b, body_r

export const Typography = ({ label, variant = "body_b", className = "" }) => {
  const getVariant = () => {
    switch (variant) {
      case "body_r":
        return s.body_r;
      case "heading":
        return s.heading;
      default:
        return s.body_b;
    }
  };
  return <p className={cn(s.label, className, getVariant())}>{label}</p>;
};
