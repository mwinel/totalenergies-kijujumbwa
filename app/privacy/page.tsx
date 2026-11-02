import PolicyPage from "@/components/PolicyPage";
import { policies } from "@/content/policies";
import { pageMetadata } from "@/lib/site";
export const metadata = pageMetadata(
  policies.privacy.title,
  policies.privacy.intro,
  "/privacy",
);
export default function Page() {
  return <PolicyPage kind="privacy" />;
}
