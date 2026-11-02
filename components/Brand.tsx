import Image from "next/image";
import Link from "next/link";
import { station } from "@/content/station";
import logo from "@/public/totalenergies.svg";

export default function Brand() {
  return (
    <Link
      href="/"
      className="brand"
      aria-label={`${station.name} ${station.country} home`}
    >
      <Image
        src={logo}
        alt="TotalEnergies"
        width={96}
        sizes="96px"
        className="brand-logo"
      />
      <span className="brand-place">
        {station.locality}
        <span>{station.country}</span>
      </span>
    </Link>
  );
}
