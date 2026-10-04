// Dates come from each repository's commit history.
export type Project = {
  slug: string;
  name: string;
  // One line for the home page; the full summary shows on Work.
  tagline: string;
  summary: string;
  stack: string[];
  year?: string;
  repo?: string;
  live?: string;
  // One engineering decision and what it cost. Shown on the Work page.
  decision?: { choice: string; tradeoff: string };
};

export const projects: Project[] = [
  {
    slug: "vit-burn",
    name: "vit-burn",
    tagline: "A Vision Transformer written from scratch in Rust, mostly to learn Rust.",
    summary:
      "A Vision Transformer written from scratch in Rust on the Burn framework, built to learn Rust. Convolutional patch embedding, learned position embeddings, multi-head attention encoder blocks and a pooler, assembled from a config and run on Burn's WGPU backend.",
    stack: ["Rust", "Burn", "WGPU"],
    year: "Apr 2024",
    repo: "https://github.com/aneesh-aparajit/vit-burn",
  },
  {
    slug: "malayallama",
    name: "MalayaLLaMA",
    tagline: "Llama 2, taught Malayalam with a new tokenizer and LoRA.",
    summary:
      "Teaching Llama 2 Malayalam. A SentencePiece BPE tokenizer trained on Malayalam text from CulturaX is merged into Llama's vocabulary, the 7B model gets continued pretraining with LoRA under DeepSpeed ZeRO-2, and a 4-bit LoRA pass with TRL fine-tunes it for chat.",
    stack: ["PyTorch", "Transformers", "PEFT", "DeepSpeed", "SentencePiece"],
    year: "Jan 2024",
    repo: "https://github.com/aneesh-aparajit/llama",
  },
  {
    slug: "federatedgpt",
    name: "FederatedGPT",
    tagline: "A GPT trained across clients that never share their data.",
    summary:
      "nanoGPT trained with federated learning on Flower. A server runs a custom FedAvg strategy that checkpoints the global model each round, and Dockerised clients train a character-level GPT on their own shards of Indian court judgments, so the raw text never leaves a client.",
    stack: ["PyTorch", "Flower", "Docker"],
    year: "Nov 2023",
    repo: "https://github.com/aneesh-aparajit/fedgpt-py",
  },
  {
    slug: "legalease",
    name: "LegalEase",
    tagline: "Legal entity extraction and case-law retrieval behind a FastAPI service.",
    summary:
      "A legal-assistance platform built as a team. I built the ML service: a FastAPI app with a legal named-entity recognition endpoint on a spaCy transformer pipeline, and a retrieval chat endpoint that embeds the question with MiniLM, finds relevant case law in Pinecone and answers with an LLM. It ships as a Docker image through GitHub Actions.",
    stack: ["Python", "FastAPI", "spaCy", "Pinecone", "Docker"],
    year: "Sep 2023",
    repo: "https://github.com/orgs/LegalEase-SIH/repositories",
  },
  {
    slug: "torchtemplates",
    name: "torchtemplates",
    tagline: "A CLI that scaffolds PyTorch projects so you never write train.py twice.",
    summary:
      "A command-line tool, published on PyPI, that scaffolds PyTorch projects. Its init command creates a pip-installable package, and new-pipeline generates the config, dataset, model, training loop, k-fold splits and utilities for image, text or tabular data from Jinja2 templates.",
    stack: ["Python", "Click", "Jinja2"],
    year: "Mar 2023",
    repo: "https://github.com/aneesh-aparajit/torchtemplates",
  },
  {
    slug: "heatsense",
    name: "HeatSense.ai",
    tagline: "Heat-wave and air-quality forecasting for Telangana.",
    summary:
      "Heat-wave and air-quality prediction for tier-2 cities in Telangana from monthly weather, AQI, energy and vehicle-sales data. Regression models estimate AQI and temperature, and a classifier with an adjustable tolerance flags heat-wave conditions on a map dashboard. First Runner-Up, NASSCOM Telangana AI Mission 2023.",
    stack: ["PyTorch", "pandas", "React"],
    year: "Feb 2023",
    repo: "https://github.com/PratikGarai/NASSCOM-TAIM",
  },
  {
    slug: "reddit-multimodal-crawler",
    name: "reddit-multimodal-crawler",
    tagline: "Turns subreddits into datasets, media and sentiment included.",
    summary:
      "A PRAW wrapper, published on PyPI, that turns subreddits into datasets. It collects posts and comments with their image and video URLs, scores titles and bodies with VADER sentiment, hashes author names with bcrypt, and exports to CSV or TSV.",
    stack: ["Python", "PRAW", "pandas", "NLTK"],
    year: "Dec 2022",
    repo: "https://github.com/aneesh-aparajit/reddit-crawler",
  },
];
