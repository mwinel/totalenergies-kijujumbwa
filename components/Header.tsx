import Brand from "./Brand";
import Navigation from "./Navigation";
import StickyHeader from "./StickyHeader";

export default function Header() {
  return (
    <StickyHeader>
      <div className="container header-inner">
        <Brand />
        <Navigation />
      </div>
    </StickyHeader>
  );
}
