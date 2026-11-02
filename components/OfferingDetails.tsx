import Link from "next/link";
import type { Offering } from "@/content/offerings";
import { contactLinks } from "@/content/station";
import Icon from "./Icon";
import Button from "./Button";
export default function OfferingDetails({ item }: { item: Offering }) {
  return (
    <>
      <p>{item.description}</p>
      <ul className="detail-list">
        {item.details.map((detail) => (
          <li key={detail}>{detail}</li>
        ))}
      </ul>
      <div className="dialog-actions">
        <Button size="lg" href={contactLinks.phone}>
          <Icon name="phone" />
          Call the station
        </Button>
        <Link className="text-link" href="/contact">
          Contact details <Icon name="arrow" />
        </Link>
      </div>
    </>
  );
}
