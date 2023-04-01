import { ButtonProps, variants, sizes } from "./button.interface";
const Button = ({
  children,
  name,
  variant = "contained",
  size = "medium",
  className,
  ...attributes
}: ButtonProps) => {
  const variantStyle: {
    [key in variants]: string;
  } = {
    contained: "",
    outlined: "",
    text: "",
  };

  const sizesStyle: { [key in sizes]: "text-xs" | "text-sm" | "text-base" } = {
    small: "text-xs",
    medium: "text-sm",
    large: "text-base",
  };

  return (
    <button
      type="button"
      {...attributes}
      className={`px-4 py-2 disabled:text-red-500 bg-teal-700 hover:bg-teal-800 active:bg-teal-900 rounded text-white font-bold font-roboto uppercase ${
        variantStyle[variant]
      } ${sizesStyle[size]} ${className ?? ""}`}
    >
      {children}
    </button>
  );
};

export default Button;
