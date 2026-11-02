import PolicyPage from "@/components/PolicyPage";
import { policies } from "@/content/policies";
import { pageMetadata } from "@/lib/site";
export const metadata = pageMetadata(
  policies.terms.title,
  policies.terms.intro,
  "/terms",
);
export default function Page() {
  return <PolicyPage kind="terms" />;
}
