import { services } from "@/content/offerings";
import { isPublic } from "@/lib/site";
import Icon, { type IconName } from "./Icon";
import OfferingDialog from "./OfferingDialog";
import OfferingDetails from "./OfferingDetails";
import ServicesSection from "./ServicesSection";

const icons: Record<string, IconName> = {
  "forecourt-assistance": "fuel",
  "vehicle-care": "car",
  "everyday-essentials": "bag",
};

export default function ServiceList() {
  return (
    <ServicesSection>
      <div className="container services-layout">
        <div>
          <span className="eyebrow">A little extra, along the way</span>
          <h2 className="section-title">
            More than a fuel stop, here for your everyday.
          </h2>
          <p>
            Every journey has its little needs. <br />
            Let’s talk about yours.
          </p>
        </div>
        <div className="service-list">
          {services
            .filter((item) => !isPublic || item.confirmed)
            .map((item) => (
              <OfferingDialog
                key={item.id}
                id={item.id}
                title={item.title}
                className="service-row"
                trigger={
                  <>
                    <span className="service-icon">
                      <Icon name={icons[item.id] ?? "bag"} />
                    </span>
                    <span>
                      <span className="service-title">{item.title}</span>
                      <span className="service-summary">{item.summary}</span>
                    </span>
                    <Icon name="arrow" />
                  </>
                }
              >
                <OfferingDetails item={item} />
              </OfferingDialog>
            ))}
        </div>
      </div>
    </ServicesSection>
  );
}
