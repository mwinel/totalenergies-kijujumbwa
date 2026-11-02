import Button from "./Button";
import Icon from "./Icon";
export default function VisitCta() {
  return (
    <section className="container visit-wrap">
      <div className="visit-cta">
        <div>
          <span className="eyebrow">See you along the way</span>
          <h2>Make us part of your everyday.</h2>
          <p>A new day. A familiar stop. A journey worth making.</p>
        </div>
        <Button size="lg" href="/contact">
          Visit & contact us <Icon name="arrow" />
        </Button>
      </div>
    </section>
  );
}
