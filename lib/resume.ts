// Keep summaries about the engineering: no metrics, partner or product names.
export type CvItem = {
  org: string;
  when: string;
  title: string;
  place?: string;
  // One line for the home page; the fuller summary shows on Experience.
  tagline?: string;
  summary?: string;
};

export const experience: CvItem[] = [
  {
    org: "Zeta",
    when: "Jul 2026 – Present",
    title: "Software Engineer II",
    tagline: "Payment authorization between our ledger and a partner bank's, wallet issuance, and streaming reconciliation on Flink.",
    place: "Bengaluru",
    summary:
      "Co-designed the authorization gateway for savings-account bill payments, bridging our ledger and a partner bank's, and built idempotent reconciliation and regulatory reporting pipelines on Apache Flink with Camunda workflows.",
  },
  {
    org: "Zeta",
    when: "Nov 2024 – Jul 2026",
    title: "Software Engineer I",
    tagline: "Identity verification and merchant services, plus fraud controls across onboarding and payments.",
    place: "Bengaluru",
    summary:
      "Owned the KYC and merchant modules, redesigning KYC around PAN, bank-account and video verification, and shipped fraud controls such as inbound OTP checks and card cool-off limits.",
  },
  {
    org: "Trademarkia",
    when: "Jan 2024 – Nov 2024",
    title: "Software Engineer",
    tagline: "A document-signing platform in Go and Java, and trademark and court-case search on Elasticsearch.",
    place: "Chennai",
    summary:
      "Built a document-signing platform in Go and Java with role-based access, and logo and court-case search on Elasticsearch and Qdrant fed by automated ingestion jobs.",
  },
  {
    org: "Samsung Research Institute Bangalore",
    when: "Jan 2024 – Nov 2024",
    title: "Software Engineer, PRISM (part-time)",
    tagline: "Faster model training with LoRA, and internal tools for the research team.",
    place: "Remote",
    summary:
      "Sped up model training with LoRA fine-tuning to make video processing practical, and built internal web and desktop tools for the research team.",
  },
];

export const education: CvItem[] = [
  {
    org: "Vellore Institute of Technology",
    when: "Sep 2020 – Jun 2024",
    title: "B.Tech in Computer Science",
    place: "Chennai",
  },
];

export const skills: { group: string; items: string }[] = [
  { group: "Languages", items: "Go, Java, Python, C++, SQL" },
  { group: "Backend", items: "Spring Boot, Fiber, FastAPI, gRPC, REST APIs, Apache Kafka, Apache Flink, Camunda" },
  { group: "Databases", items: "PostgreSQL, Redis, MongoDB, Elasticsearch, Qdrant, Pinecone" },
  { group: "Cloud and DevOps", items: "AWS (S3, Lambda), Docker, Jenkins, Prometheus, Grafana" },
  { group: "Machine learning", items: "PyTorch, Transformers, LoRA/PEFT fine-tuning" },
];

export const achievements: string[] = [
  "Zeta Stellar Award for 2026, along with 4 Spot Awards and 5 Ultimate Team Awards.",
  "First Runner-Up, NASSCOM Telangana AI Mission (TAIM) 2023, out of 7,500+ teams; Finalist, Bajaj HackRx 4.0 (top 36).",
  "Excellence Award for dichotomous image segmentation, Samsung PRISM.",
  "Open-source Python packages reddit-multimodal-crawler (9,100+ downloads) and torchtemplates (3,700+ downloads).",
  "2x Kaggle Expert: top 0.6% in Datasets and top 0.7% in Notebooks.",
];
