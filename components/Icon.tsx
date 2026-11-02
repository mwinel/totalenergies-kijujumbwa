import type { SVGProps } from "react";

const paths = {
  arrow: "M4 12h15m-6-6 6 6-6 6",
  pin: "M20 10c0 6-8 11-8 11S4 16 4 10a8 8 0 1 1 16 0ZM15 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
  phone:
    "M8 3H4a1 1 0 0 0-1 1c0 9.4 7.6 17 17 17a1 1 0 0 0 1-1v-4l-5-2-2 3a14 14 0 0 1-7-7l3-2-2-5Z",
  chat: "M21 11.5a9 9 0 0 1-13.5 7.8L3 21l1.7-4.5A9 9 0 1 1 21 11.5ZM8 9c1 4 3 6 7 7",
  clock: "M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM12 7v5l3 2",
  mail: "M3 5h18v14H3V5Zm0 1 9 7 9-7",
  fuel: "M4 21V3h10v18M2 21h14M4 10h10m3-6 4 4v10a2 2 0 0 1-4 0v-5h-3m4-8v4h3",
  car: "m3 11 2-7h14l2 7M3 11h18v8H3v-8Zm3 4h2m8 0h2M5 19v2m14-2v2",
  bag: "M4 7h16l1 14H3L4 7Zm4 1V6a4 4 0 0 1 8 0v2",
  close: "m6 6 12 12M6 18 18 6",
  menu: "M4 6h16M4 12h16M4 18h16",
} as const;
export type IconName = keyof typeof paths;
export default function Icon({
  name,
  ...props
}: SVGProps<SVGSVGElement> & { name: IconName }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d={paths[name]} />
    </svg>
  );
}
