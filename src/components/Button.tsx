import  Icon  from "./Icon"

import { ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  title: string;
  iconName: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  selected: boolean;
}

function Button({ iconName, title, selected, ...reset} : ButtonProps) {
  return (
    <button type="button" {...(selected && { className: "selected"})} {...reset}>

      <Icon name={iconName} color={selected ? "#FAE800" : "#FBFBFB"}/>
      {title}
    </button>
  );
}

export default Button