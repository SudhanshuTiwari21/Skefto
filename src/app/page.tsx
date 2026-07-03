import { redirect } from "next/navigation";
import { COMPLIANCE_CANONICAL_PATH } from "@/lib/industries-content";

export default function HomePage() {
  redirect(COMPLIANCE_CANONICAL_PATH);
}
