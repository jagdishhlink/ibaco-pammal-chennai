"use client";
import { useParams } from "next/navigation";
import siteData from "@/data/site-data.json";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionRenderer } from "@/components/SectionRenderer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function SlugPage() {
  const params = useParams();
  const page = siteData.pages.find((p: any) => p.slug === params.slug);
  if (!page) return <div className="min-h-screen flex items-center justify-center">Page not found</div>;

  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <SectionRenderer sections={page.sections} content={siteData.content} business={siteData.business} images={siteData.business.images} />
      </div>
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
