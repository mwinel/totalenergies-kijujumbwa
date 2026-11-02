import Image from "next/image";
import { products } from "@/content/offerings";
import { isPublic } from "@/lib/site";
import OfferingDialog from "./OfferingDialog";
import OfferingDetails from "./OfferingDetails";
import Icon from "./Icon";

export default function ProductGrid() {
  return (
    <section id="products" className="products-section section-space">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Our products</span>
            <h2 className="section-title">
              Good energy.
              <br />
              For every part of life.
            </h2>
          </div>
        </div>
        <div className="product-grid">
          {products
            .filter((item) => !isPublic || item.confirmed)
            .map((item, index) => (
              <article key={item.id} className={`product-card ${item.tone}`}>
                <OfferingDialog
                  id={item.id}
                  title={item.title}
                  className="product-trigger"
                  trigger={
                    <>
                      <div className="product-image">
                        <Image
                          src={item.image!}
                          alt={item.alt!}
                          fill
                          sizes="(max-width: 640px) 90vw, (max-width: 1000px) 45vw, 380px"
                        />
                      </div>
                      <div className="product-copy">
                        <h3>{item.title}</h3>
                        <p className="product-summary">{item.summary}</p>
                        <span className="product-link">
                          Explore product{" "}
                          <span className="arrow-circle">
                            <Icon name="arrow" />
                          </span>
                        </span>
                      </div>
                    </>
                  }
                >
                  <OfferingDetails item={item} />
                </OfferingDialog>
              </article>
            ))}
        </div>
      </div>
    </section>
  );
}
