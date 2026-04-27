export default function sitemap() {
  const base = "https://www.techsol.ge";
  const now = new Date();

  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/package-request`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/services/network`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/systems`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/cloud`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/security`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/support`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/monitoring`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/ai`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];
}
