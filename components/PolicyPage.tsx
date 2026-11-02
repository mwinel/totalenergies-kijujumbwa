import PageIntro from "./PageIntro";
import { policies } from "@/content/policies";
import { isPublic } from "@/lib/site";

export default function PolicyPage({ kind }: { kind: keyof typeof policies }) {
  const policy = policies[kind];
  
  return (
    <main id="main" className="container inner-page policy-page">
      <PageIntro label={policy.title} title={policy.title}>
        <p>{policy.intro}</p>
      </PageIntro>
      {!isPublic && (
        <aside className="policy-draft">
          Draft for operator review · Complete operator and hosting details
          before publication.
        </aside>
      )}
      <div className="policy-body">
        {policy.sections.map((section) => (
          <section key={section.heading}>
            <h2>{section.heading}</h2>
            <p>{section.text}</p>
          </section>
        ))}
      </div>
    </main>
  );
}
