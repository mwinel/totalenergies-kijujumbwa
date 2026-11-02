import Link from "next/link";
import type { ComponentProps } from "react";

type ButtonProps = {
  size?: "sm" | "lg";
} & (
  | ComponentProps<typeof Link>
  | (ComponentProps<"button"> & { href?: never })
);

export default function Button({
  size = "sm",
  className = "",
  ...props
}: ButtonProps) {
  const classes = `button button-rounded button-${size} ${className}`.trim();

  if (props.href !== undefined) {
    return <Link {...props} className={classes} />;
  }

  return <button type="button" {...props} className={classes} />;
}
