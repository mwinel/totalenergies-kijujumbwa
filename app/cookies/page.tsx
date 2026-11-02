import PolicyPage from "@/components/PolicyPage";
import { policies } from "@/content/policies";
import { pageMetadata } from "@/lib/site";
export const metadata = pageMetadata(
  policies.cookies.title,
  policies.cookies.intro,
  "/cookies",
);
export default function Page() {
  return <PolicyPage kind="cookies" />;
}
