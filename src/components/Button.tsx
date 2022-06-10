import { ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  title: string;
}

function Button(props : ButtonProps){
  return(
    <h1>{props.title}</h1>
    
  );
}

export default Button








// import  Icon  from "./Icon"

// import { ButtonHTMLAttributes } from "react"

// 

// function Button({ iconName, title, selected, ...reset} : ButtonProps) {
//   return (
//     <button type="button" {...(selected && { className: "selected"})} {...reset}>
//       <Icon name={iconName} color={selected ? "#FAE800" : "#FBFBFB"}/>
//       {title}
//     </button>
//   );
// }

// export default Button