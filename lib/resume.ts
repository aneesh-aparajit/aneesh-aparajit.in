// Keep summaries high level and about the engineering: no metrics, partner or product names.
export type CvItem = {
  org: string;
  when: string;
  title: string;
  place?: string;
  summary?: string;
};

export const experience: CvItem[] = [
  {
    org: "Zeta",
    when: "Jul 2026 – Present",
    title: "Software Engineer II",
    place: "Bengaluru",
    summary:
      "Payment authorization and ledger orchestration, wallet issuance, and stream processing on Apache Flink with Camunda workflows for reconciliation and audit reporting.",
  },
  {
    org: "Zeta",
    when: "Nov 2024 – Jul 2026",
    title: "Software Engineer I",
    place: "Bengaluru",
    summary:
      "Identity verification and merchant services, batch-job performance and observability, and fraud-prevention controls across onboarding and payments.",
  },
  {
    org: "Trademarkia",
    when: "Jan 2024 – Nov 2024",
    title: "Software Engineer",
    place: "Chennai",
    summary:
      "Search infrastructure on Elasticsearch and vector databases, large-scale ingestion pipelines, and a document-signing platform in Go and Java.",
  },
  {
    org: "Samsung Research Institute Bangalore",
    when: "Jan 2024 – Nov 2024",
    title: "Software Engineer, PRISM (part-time)",
    place: "Remote",
    summary: "Model-training optimisation with LoRA fine-tuning, and internal tooling for the research team.",
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
  "Zeta Stellar Award (2025), along with Spot and Ultimate Team Awards.",
  "First Runner-Up, NASSCOM Telangana AI Mission (TAIM) 2023; Finalist, Bajaj HackRx 4.0.",
  "Excellence Award for dichotomous image segmentation, Samsung PRISM.",
  "Open-source Python packages reddit-multimodal-crawler and torchtemplates.",
  "Kaggle Expert in Datasets and Notebooks.",
];
