import PackageRequestClient from "@/components/PackageRequestClient";

const VALID = new Set([
  "basic",
  "standard",
  "premium",
  "webdev",
  "webapps",
  "aiauto",
]);

export default function PackageRequestPage({ searchParams }) {
  const rawPlan =
    typeof searchParams?.plan === "string" ? searchParams.plan : "basic";
  const planKey = VALID.has(rawPlan) ? rawPlan : "basic";
  const sentOk = searchParams?.sent === "1";

  return <PackageRequestClient planKey={planKey} sentOk={sentOk} />;
}
