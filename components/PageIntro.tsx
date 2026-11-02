import Link from "next/link";

export default function PageIntro({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="page-intro">
      <Link className="breadcrumb" href="/">
        Home <span>/ {label}</span>
      </Link>
      <h1>{title}</h1>
      {children && <div className="page-description">{children}</div>}
    </div>
  );
}
