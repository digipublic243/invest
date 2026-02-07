type SeoJsonLdProps = {
  siteUrl: string;
};

export default function SeoJsonLd({ siteUrl }: SeoJsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Invest In DRC",
          url: siteUrl,
          description:
            "Plateforme de reference pour investir en RDC. Opportunites, projets et contacts strategiques pour investir en Democratic Republic of Congo.",
          publisher: {
            "@type": "Organization",
            name: "Sycamore Group",
            url: siteUrl,
          },
        }),
      }}
    />
  );
}
