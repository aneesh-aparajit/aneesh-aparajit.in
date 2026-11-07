// Dates and statuses come from each repository's commit history.
// Where a project stands, never whether it was dropped:
// in-progress: commits still landing. released: published for others to install.
// complete: built to its finish line. study: built to learn something, and it did.
export type ProjectStatus = "in-progress" | "released" | "complete" | "study";

export const statusLabel: Record<ProjectStatus, string> = {
  "in-progress": "In progress",
  released: "Released",
  complete: "Complete",
  study: "Study",
};

// What each status means, spelled out on a project's own page.
export const statusNote: Record<ProjectStatus, string> = {
  "in-progress": "commits still landing",
  released: "published for others to install",
  complete: "built to its finish line",
  study: "built to learn something, and it did",
};

export type Project = {
  slug: string;
  name: string;
  // One line for the home page; the full summary shows on Projects.
  tagline: string;
  summary: string;
  stack: string[];
  status: ProjectStatus;
  year?: string;
  repo?: string;
  live?: string;
  // One engineering decision and what it cost. Shown on the Projects page.
  decision?: { choice: string; tradeoff: string };
};

export const projects: Project[] = [
  {
    slug: "libra",
    name: "libra",
    tagline: "A multi-tenant policy engine in Java: send an entity and an input, get allow or deny from policies written as plain JavaScript. Being built in the open.",
    summary:
      "A multi-tenant policy evaluation engine on Spring Boot. Policies are pairs of JavaScript functions, one deciding whether a policy applies and one deciding allow or deny, targeted at a whole scope or a single entity and run in parallel on GraalJS; any deny or error denies. Laid down so far: the Postgres schema and DAOs, the JS engine, and an HTTP API for tenants, scopes and versioned policies with optimistic locking. The evaluation endpoint comes next.",
    stack: ["Java", "Spring Boot", "PostgreSQL", "Redis", "GraalJS"],
    status: "in-progress",
    year: "Nov 2026",
    repo: "https://github.com/aneesh-aparajit/libra",
  },
  {
    slug: "ostinato",
    name: "ostinato",
    tagline: "A lightweight job scheduler in Go and Postgres, with cron schedules, one-off tasks and guards against double fires. Being built in the open.",
    summary:
      "A lightweight job scheduler in Go, backed by Postgres. Laid down so far: config and structured logging, a schema for cron schedules and one-off tasks with timezones, timeouts and misfire policies, partial unique indexes that stop a schedule firing twice or running two tasks at once, and sqlc-generated queries on pgx.",
    stack: ["Go", "PostgreSQL", "pgx", "sqlc", "Docker"],
    status: "in-progress",
    year: "Oct 2026",
    repo: "https://github.com/aneesh-aparajit/ostinato",
  },
  {
    slug: "vit-burn",
    name: "vit-burn",
    tagline: "A Vision Transformer written from scratch in Rust on the Burn framework, from patch embeddings to attention, mostly to learn Rust.",
    summary:
      "A Vision Transformer written from scratch in Rust on the Burn framework, built to learn Rust. Convolutional patch embedding, learned position embeddings, multi-head attention encoder blocks and a pooler, assembled from a config.",
    stack: ["Rust", "Burn"],
    status: "study",
    year: "Apr 2024",
    repo: "https://github.com/aneesh-aparajit/vit-burn",
  },
  {
    slug: "malayallama",
    name: "MalayaLLaMA",
    tagline: "Llama 2, taught Malayalam: a new tokenizer merged into its vocabulary, then continued pretraining and chat fine-tuning with LoRA.",
    summary:
      "Teaching Llama 2 Malayalam. A SentencePiece BPE tokenizer trained on Malayalam text from CulturaX is merged into Llama's vocabulary, the 7B model gets continued pretraining with LoRA under DeepSpeed ZeRO-2, and a 4-bit LoRA pass with TRL fine-tunes it for chat.",
    stack: ["PyTorch", "Transformers", "PEFT", "DeepSpeed", "SentencePiece"],
    status: "study",
    year: "Jan 2024",
    repo: "https://github.com/aneesh-aparajit/llama",
  },
  {
    slug: "federatedgpt",
    name: "FederatedGPT",
    tagline: "A character-level GPT trained with federated learning on Flower, so each client's court-judgment text never leaves it.",
    summary:
      "nanoGPT trained with federated learning on Flower. A server runs a custom FedAvg strategy that checkpoints the global model each round, and Dockerised clients train a character-level GPT on their own shards of Indian court judgments, so the raw text never leaves a client.",
    stack: ["PyTorch", "Flower", "Docker"],
    status: "complete",
    year: "Nov 2023",
    repo: "https://github.com/aneesh-aparajit/fedgpt-py",
  },
  {
    slug: "legalease",
    name: "LegalEase",
    tagline: "The ML service of a legal-assistance platform: legal entity extraction and case-law retrieval behind FastAPI.",
    summary:
      "A legal-assistance platform built as a team. I built the ML service: a FastAPI app with a legal named-entity recognition endpoint on a spaCy transformer pipeline, and a retrieval chat endpoint that embeds the question with MiniLM, finds relevant case law in Pinecone and answers with an LLM. It ships as a Docker image through GitHub Actions.",
    stack: ["Python", "FastAPI", "spaCy", "Pinecone", "Docker"],
    status: "complete",
    year: "Sep 2023",
    repo: "https://github.com/orgs/LegalEase-SIH/repositories",
  },
  {
    slug: "torchtemplates",
    name: "torchtemplates",
    tagline: "A CLI on PyPI that scaffolds PyTorch projects, from config to training loop, so you never write train.py twice.",
    summary:
      "A command-line tool, published on PyPI, that scaffolds PyTorch projects. Its init command creates a pip-installable package, and new-pipeline generates the config, dataset, model, training loop, k-fold splits and utilities for image, text or tabular data from Jinja2 templates.",
    stack: ["Python", "Click", "Jinja2"],
    status: "released",
    year: "Mar 2023",
    repo: "https://github.com/aneesh-aparajit/torchtemplates",
  },
  {
    slug: "heatsense",
    name: "HeatSense.ai",
    tagline: "Heat-wave and air-quality forecasting for cities in Telangana, on a map dashboard. First Runner-Up, NASSCOM TAIM 2023.",
    summary:
      "Heat-wave and air-quality prediction for tier-2 cities in Telangana from monthly weather, AQI, energy and vehicle-sales data. Regression models estimate AQI and temperature, and a classifier with an adjustable tolerance flags heat-wave conditions on a map dashboard. First Runner-Up, NASSCOM Telangana AI Mission 2023.",
    stack: ["PyTorch", "pandas", "React"],
    status: "complete",
    year: "Feb 2023",
    repo: "https://github.com/PratikGarai/NASSCOM-TAIM",
  },
  {
    slug: "reddit-multimodal-crawler",
    name: "reddit-multimodal-crawler",
    tagline: "A PyPI package that turns subreddits into datasets, with media links, sentiment scores and hashed author names.",
    summary:
      "A PRAW wrapper, published on PyPI, that turns subreddits into datasets. It collects posts and comments with their image and video URLs, scores titles and bodies with VADER sentiment, hashes author names with bcrypt, and exports to CSV or TSV.",
    stack: ["Python", "PRAW", "pandas", "NLTK"],
    status: "released",
    year: "Dec 2022",
    repo: "https://github.com/aneesh-aparajit/reddit-crawler",
  },
];
