import Link from "next/link";
export default function NotFound() {
  return <section className="px-5 py-32 md:px-10"><h1 className="display">404</h1><p className="mt-6 text-body">That page doesn&apos;t exist.</p><Link href="/" className="btn btn-primary mt-8">BACK HOME</Link></section>;
}
