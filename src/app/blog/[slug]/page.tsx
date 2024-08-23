"use client";

import Link from "next/link";
import { useParams, usePathname, useSearchParams } from "next/navigation";

type Params = {
  slug: string;
};

export default function Blog({ params }: { params: Params }) {
  const clientParams = useParams();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  return <main>
    Props params: {JSON.stringify(params)}<br />
    useParams: {JSON.stringify(clientParams)}<br />
    usePathname: {pathname}<br />
    useSearchParams: {JSON.stringify(Object.fromEntries(searchParams.entries()))}

    <br /><br />

    <Link href="/about">Open intercepting route</Link>
  </main>;
}
