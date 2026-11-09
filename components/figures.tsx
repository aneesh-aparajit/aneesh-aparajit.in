import type { ReactNode } from "react";

// Project figures: schematics drawn on the pad in its own inks.
// Coordinates are in grid units (u = 24px). The drawing is 28u wide, which is
// exactly the 42rem column, so its verticals land on the paper's minor grid.
// Each figure draws only what the project's summary states.

const U = 24;
const W = 28;

type Pt = [number, number];

function Box({
  x,
  y,
  w,
  h,
  t,
  s,
  dash,
  mono,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  t?: string;
  s?: string;
  // Dashed: designed but not built yet, as everywhere else on the site.
  dash?: boolean;
  mono?: boolean;
}) {
  const cx = (x + w / 2) * U;
  const cy = (y + h / 2) * U;
  return (
    <g>
      <rect x={x * U} y={y * U} width={w * U} height={h * U} className={dash ? "fig-box fig-dash" : "fig-box"} />
      {t && (
        <text x={cx} y={s ? cy - 3 : cy + 5} textAnchor="middle" className={mono ? "fig-m fig-m-strong" : "fig-t"}>
          {t}
        </text>
      )}
      {s && (
        <text x={cx} y={cy + 14} textAnchor="middle" className="fig-l">
          {s}
        </text>
      )}
    </g>
  );
}

// A wire, ending in an open arrowhead unless told otherwise.
function Wire({ p, head = true, faint }: { p: Pt[]; head?: boolean; faint?: boolean }) {
  return (
    <polyline
      points={p.map(([x, y]) => `${x * U},${y * U}`).join(" ")}
      className={faint ? "fig-wire fig-faint" : "fig-wire"}
      markerEnd={head ? "url(#fig-head)" : undefined}
    />
  );
}

function T({
  x,
  y,
  c = "l",
  a = "start",
  children,
}: {
  x: number;
  y: number;
  c?: "l" | "m" | "t" | "b";
  a?: "start" | "middle" | "end";
  children: ReactNode;
}) {
  return (
    <text x={x * U} y={y * U} textAnchor={a} className={`fig-${c}`}>
      {children}
    </text>
  );
}

// A plain square, for tokens, fires and patches.
function Sq({ x, y, w, h = w, dash, fill }: { x: number; y: number; w: number; h?: number; dash?: boolean; fill?: boolean }) {
  return (
    <rect
      x={x * U}
      y={y * U}
      width={w * U}
      height={h * U}
      className={`fig-box${dash ? " fig-dash" : ""}${fill ? " fig-fill" : ""}`}
    />
  );
}

// A struck-out mark: something the design refuses.
function Cross({ x, y, r = 0.3 }: { x: number; y: number; r?: number }) {
  return (
    <path
      d={`M${(x - r) * U} ${(y - r) * U}L${(x + r) * U} ${(y + r) * U}M${(x + r) * U} ${(y - r) * U}L${(x - r) * U} ${(y + r) * U}`}
      className="fig-wire"
    />
  );
}

const range = (n: number) => Array.from({ length: n }, (_, i) => i);

type Drawing = { h: number; caption: string; alt: string; draw: () => ReactNode };

const drawings: Record<string, Drawing> = {
  grimoire: {
    h: 11,
    caption:
      "A vault and the study view. Everything is plain files in one folder; open an item and its content sits beside a Markdown notebook and a sandbox on your own toolchains.",
    alt: "On the left, a vault folder of plain files: INDEX.md as the reading list, a .grimoire folder of preferences, and a folder per item with its NOTES.md, sandbox code and any PDF. The app opens an item into the study view and saves back to the folder. The study view shows the blog, video or PDF on the left, a Markdown notebook top right and a code sandbox bottom right. Below, git carries the vault between machines.",
    draw: () => (
      <>
        <Sq x={0} y={0} w={9} h={8} />
        <T x={0.3} y={0.6}>
          Vault · plain files
        </T>
        {(
          [
            [0.5, "INDEX.md"],
            [0.5, ".grimoire/"],
            [0.5, "attention/"],
            [1.3, "NOTES.md"],
            [1.3, "sandbox/main.py"],
            [1.3, "paper.pdf"],
          ] as const
        ).map(([x, f], i) => (
          <T key={f} x={x} y={1.75 + i} c="m">
            {f}
          </T>
        ))}
        <Wire p={[[9, 2.5], [11, 2.5]]} />
        <T x={10} y={2.1} a="middle">
          open
        </T>
        <Wire p={[[11, 5.5], [9, 5.5]]} />
        <T x={10} y={5.1} a="middle">
          save
        </T>
        <Sq x={11} y={0} w={17} h={8} />
        <T x={11.3} y={0.6}>
          Study view · Tauri
        </T>
        <Box x={11.5} y={1} w={8} h={6.5} t="Content" s="blog · video · PDF" />
        <Box x={20} y={1} w={7.5} h={3} t="Notes" s="Markdown · autosave" />
        <Box x={20} y={4.5} w={7.5} h={3} t="Sandbox" s="your own toolchains" />
        <Wire p={[[4.5, 8], [4.5, 9]]} />
        <Box x={0} y={9} w={9} h={1.75} t="git" mono />
        <T x={10} y={10.05}>
          push, clone, open the same vault on any machine
        </T>
      </>
    ),
  },

  libra: {
    h: 10,
    caption:
      "An evaluation. Policies for the scope and the entity are loaded, each runs on GraalJS in parallel, and any deny or error denies.",
    alt: "A request with an entity and input goes to an evaluate endpoint, which loads versioned policies from Postgres and Redis and runs three policies in parallel on GraalJS, each checking whether it applies and then deciding. Their results meet in a rule where any deny or error denies.",
    draw: () => (
      <>
        <Box x={0} y={3.5} w={5} h={3} t="Request" s="entity + input" />
        <Wire p={[[5, 5], [7, 5]]} />
        <Box x={7} y={0} w={5} h={2} t="Postgres" s="Redis · versioned" />
        <Wire p={[[9.5, 2], [9.5, 3.5]]} />
        <Box x={7} y={3.5} w={5} h={3} t="Evaluate" s="endpoint" />
        <Wire p={[[12, 5], [14, 5]]} />
        <Wire p={[[13, 5], [13, 2], [14, 2]]} />
        <Wire p={[[13, 5], [13, 8], [14, 8]]} />
        <T x={17} y={0.55} a="middle">
          GraalJS · in parallel
        </T>
        <Box x={14} y={1} w={6} h={2} t="Scope policy" s="applies → decide" />
        <Box x={14} y={4} w={6} h={2} t="Scope policy" s="applies → decide" />
        <Box x={14} y={7} w={6} h={2} t="Entity policy" s="applies → decide" />
        <Wire p={[[20, 2], [21, 2], [21, 5]]} head={false} />
        <Wire p={[[20, 8], [21, 8], [21, 5]]} head={false} />
        <Wire p={[[20, 5], [22, 5]]} />
        <Box x={22} y={3.5} w={6} h={3} t="Deny wins" s="any deny or error" />
        <T x={25} y={7.6} a="middle" c="m">
          allow | deny
        </T>
        <Wire p={[[25, 6.5], [25, 7.1]]} head={false} faint />
      </>
    ),
  },

  ostinato: {
    h: 10,
    caption:
      "What the schema guarantees. A cron schedule fires once per slot, a missed slot follows its misfire policy, and a task never runs twice at once or past its timeout.",
    alt: "A timeline with two lanes. On the schedule lane, a fire every fifteen minutes; a duplicate fire is struck out by a partial unique index, and one missed slot follows its misfire policy. On the task lane, runs as bars; a second concurrent run is struck out, and one run stops at its timeout.",
    draw: () => (
      <>
        <T x={0} y={2.65}>
          Schedule
        </T>
        <T x={0} y={5.65}>
          Tasks
        </T>
        <Wire p={[[3, 8], [27.5, 8]]} />
        {[4, 7, 10, 13, 16, 19, 22, 25].map((x, i) => (
          <g key={x}>
            <Wire p={[[x, 8], [x, 8.3]]} head={false} />
            <T x={x} y={9.1} a="middle" c="m">
              {`0${Math.floor((i * 15) / 60)}:${String((i * 15) % 60).padStart(2, "0")}`}
            </T>
            <Wire p={[[x, 0.5], [x, 7.8]]} head={false} faint />
          </g>
        ))}
        <T x={27.5} y={7.6} a="end" c="m">
          */15
        </T>
        {[4, 7, 10, 13, 16, 22, 25].map((x) => (
          <Sq key={x} x={x - 0.25} y={2.25} w={0.5} fill />
        ))}
        {/* A second fire for the same slot, refused. */}
        <Sq x={13.25} y={3.1} w={0.5} dash />
        <Cross x={13.5} y={3.35} r={0.2} />
        <T x={14.1} y={3.55}>
          duplicate fire · partial unique index
        </T>
        {/* A missed slot. */}
        <Sq x={18.75} y={2.25} w={0.5} dash />
        <T x={19.5} y={1.55} a="middle">
          misfire policy
        </T>

        <Sq x={4} y={5} w={4.5} h={1} />
        <Sq x={7.5} y={6.4} w={3.5} h={0.8} dash />
        <Cross x={9.25} y={6.8} r={0.2} />
        <T x={11.3} y={7.0}>
          second concurrent run
        </T>
        <Sq x={13} y={5} w={4} h={1} />
        <Sq x={19} y={5} w={3.5} h={1} />
        <Wire p={[[22.5, 4.6], [22.5, 6.4]]} head={false} />
        <T x={22.8} y={4.75}>
          timeout
        </T>
      </>
    ),
  },

  "vit-burn": {
    h: 8,
    caption:
      "The model, assembled from a config. A convolution cuts the image into patch embeddings, learned positions are added, and encoder blocks of attention feed a pooler.",
    alt: "An image split into a four by four grid of patches feeds a convolutional patch embedding. The resulting row of tokens has a row of learned position embeddings added to it, then passes through an encoder block of multi-head attention and an MLP, repeated N times, and ends in a pooler.",
    draw: () => (
      <>
        {range(16).map((i) => (
          <Sq key={i} x={(i % 4) * 1} y={2 + Math.floor(i / 4)} w={1} />
        ))}
        <T x={2} y={6.9} a="middle">
          Image · patches
        </T>
        <Wire p={[[4, 4], [5, 4]]} />
        <Box x={5} y={2.5} w={4} h={3} t="Patch embed" s="conv" />
        <Wire p={[[9, 4], [10, 4]]} />
        {range(8).map((i) => (
          <Sq key={`p${i}`} x={10 + i * 0.5} y={2.75} w={0.5} />
        ))}
        <T x={12} y={4.15} a="middle" c="m">
          +
        </T>
        {range(8).map((i) => (
          <Sq key={`t${i}`} x={10 + i * 0.5} y={4.75} w={0.5} fill />
        ))}
        <T x={12} y={2.35} a="middle">
          position
        </T>
        <T x={12} y={6.1} a="middle">
          tokens
        </T>
        <Wire p={[[14, 4], [15, 4]]} />
        <Sq x={15} y={0.5} w={7} h={7} />
        <Box x={15.5} y={1.25} w={6} h={2.25} t="Attention" s="multi-head" />
        <Wire p={[[18.5, 3.5], [18.5, 4.5]]} />
        <Box x={15.5} y={4.5} w={6} h={2.25} t="MLP" />
        <T x={21.8} y={7.25} a="end" c="m">
          × N
        </T>
        <Wire p={[[22, 4], [23, 4]]} />
        <Box x={23} y={3} w={5} h={2} t="Pooler" />
      </>
    ),
  },

  malayallama: {
    h: 8,
    caption:
      "Two passes. A Malayalam tokenizer is trained and merged into Llama's vocabulary; then the 7B model learns the language with LoRA and is tuned for chat in 4-bit.",
    alt: "Malayalam text from CulturaX trains a SentencePiece BPE tokenizer, whose tokens are appended to the Llama 2 vocabulary. The merged vocabulary goes to Llama 2 7B, which gets continued pretraining with LoRA under DeepSpeed ZeRO-2 and then a chat fine-tune with 4-bit LoRA through TRL.",
    draw: () => (
      <>
        <Box x={0} y={0.5} w={6} h={2} t="CulturaX" s="Malayalam text" />
        <Wire p={[[6, 1.5], [8, 1.5]]} />
        <Box x={8} y={0.5} w={6} h={2} t="SentencePiece" s="BPE tokenizer" />
        <Wire p={[[14, 1.5], [16, 1.5]]} />
        <Sq x={16} y={1} w={8} h={1} />
        <Sq x={24} y={1} w={4} h={1} fill />
        <T x={20} y={1.65} a="middle">
          Llama 2 vocab
        </T>
        <T x={26} y={1.65} a="middle">
          + Malayalam
        </T>
        <T x={22} y={0.7} a="middle">
          merged vocabulary
        </T>
        <Wire p={[[22, 2], [22, 3.5], [3, 3.5], [3, 5]]} />
        <Box x={0} y={5} w={6} h={2.5} t="Llama 2 7B" />
        <Wire p={[[6, 6.25], [7, 6.25]]} />
        <Box x={7} y={5} w={10} h={2.5} t="Continued pretraining" s="LoRA · DeepSpeed ZeRO-2" />
        <Wire p={[[17, 6.25], [18, 6.25]]} />
        <Box x={18} y={5} w={10} h={2.5} t="Chat fine-tune" s="4-bit LoRA · TRL" />
      </>
    ),
  },

  federatedgpt: {
    h: 11,
    caption:
      "Federated rounds on Flower. The server sends global weights and averages what comes back; each client trains on its own shard, so the raw text never leaves it.",
    alt: "A Flower server running FedAvg, checkpointing each round, connects to three Dockerised clients. Weights flow down to each client and updates flow back up. Each client trains a character-level nanoGPT on its own shard of court judgments, which stays on the client.",
    draw: () => (
      <>
        <Box x={9} y={0.5} w={10} h={2.5} t="Flower server" s="FedAvg · checkpoint each round" />
        {/* Left client */}
        <Wire p={[[10.5, 3], [10.5, 4.25], [3.5, 4.25], [3.5, 6]]} />
        <Wire p={[[4.5, 6], [4.5, 5], [11.5, 5], [11.5, 3]]} />
        {/* Middle client */}
        <Wire p={[[13.5, 3], [13.5, 6]]} />
        <Wire p={[[14.5, 6], [14.5, 3]]} />
        {/* Right client */}
        <Wire p={[[17.5, 3], [17.5, 4.25], [24.5, 4.25], [24.5, 6]]} />
        <Wire p={[[23.5, 6], [23.5, 5], [16.5, 5], [16.5, 3]]} />
        <T x={7} y={4.05} a="middle">
          weights
        </T>
        <T x={8} y={5.65} a="middle">
          updates
        </T>
        {[0, 10, 20].map((x) => (
          <g key={x}>
            <Sq x={x} y={6} w={8} h={3.5} />
            <T x={x + 4} y={6.95} a="middle" c="b">
              Client · Docker
            </T>
            <T x={x + 4} y={7.55} a="middle">
              char-level nanoGPT
            </T>
            <Sq x={x + 0.5} y={8} w={7} h={1} />
            <T x={x + 4} y={8.65} a="middle">
              court-judgment shard
            </T>
          </g>
        ))}
        <T x={14} y={10.55} a="middle">
          raw text stays on its client
        </T>
      </>
    ),
  },

  legalease: {
    h: 10,
    caption:
      "The ML service I built. One endpoint tags legal entities with a spaCy transformer; the other embeds a question, finds case law in Pinecone and answers with an LLM.",
    alt: "A FastAPI service with two lanes. Text goes to the NER endpoint, a spaCy transformer pipeline, and comes out as legal entities. A question goes to the chat endpoint, is embedded with MiniLM, matched against case law in Pinecone, and answered by an LLM. Below, GitHub Actions builds the Docker image the service ships as.",
    draw: () => (
      <>
        <Sq x={5} y={0} w={23} h={7} />
        <T x={5.3} y={0.6}>
          FastAPI service
        </T>
        <Box x={0} y={1} w={4} h={2} t="Text" />
        <Wire p={[[4, 2], [6, 2]]} />
        <Box x={6} y={1} w={5} h={2} t="NER" s="endpoint" />
        <Wire p={[[11, 2], [12, 2]]} />
        <Box x={12} y={1} w={6} h={2} t="spaCy" s="transformer" />
        <Wire p={[[18, 2], [19, 2]]} />
        <Box x={19} y={1} w={8} h={2} t="Legal entities" />

        <Box x={0} y={4} w={4} h={2} t="Question" />
        <Wire p={[[4, 5], [6, 5]]} />
        <Box x={6} y={4} w={5} h={2} t="Chat" s="endpoint" />
        <Wire p={[[11, 5], [12, 5]]} />
        <Box x={12} y={4} w={4} h={2} t="MiniLM" s="embed" />
        <Wire p={[[16, 5], [17, 5]]} />
        <Box x={17} y={4} w={4} h={2} t="Pinecone" s="case law" />
        <Wire p={[[21, 5], [22, 5]]} />
        <Box x={22} y={4} w={5} h={2} t="LLM" s="answer" />

        <Box x={5} y={8} w={7} h={1.5} t="GitHub Actions" />
        <Wire p={[[12, 8.75], [14, 8.75]]} />
        <Box x={14} y={8} w={7} h={1.5} t="Docker image" />
        <Wire p={[[17.5, 8], [17.5, 7]]} />
        <T x={17.8} y={7.7}>
          ships as
        </T>
      </>
    ),
  },

  torchtemplates: {
    h: 11,
    caption:
      "Two commands. init makes a pip-installable package; new-pipeline renders Jinja2 templates into everything a training run needs, for image, text or tabular data.",
    alt: "The init command produces a pip-installable package. The new-pipeline command, for image, text or tabular data, renders Jinja2 templates into a generated pipeline: config, dataset, model, training loop, k-fold splits and utilities.",
    draw: () => (
      <>
        <Box x={0} y={0.5} w={10} h={2} t="init" s="torchtemplates" mono />
        <Wire p={[[10, 1.5], [12, 1.5]]} />
        <Box x={12} y={0.5} w={5} h={2} t="Package" s="pip-installable" />
        <Box x={0} y={4} w={10} h={2} t="new-pipeline" s="image · text · tabular" mono />
        <Wire p={[[10, 5], [12, 5]]} />
        <Box x={12} y={4} w={5} h={2} t="Jinja2" s="templates" />
        <Wire p={[[17, 5], [19, 5]]} />
        <T x={19.5} y={4.15}>
          generated pipeline
        </T>
        <Wire p={[[19.5, 5], [19.5, 10]]} head={false} />
        {["config", "dataset", "model", "training loop", "k-fold splits", "utilities"].map((f, i) => {
          const y = 5 + i;
          return (
            <g key={f}>
              <Wire p={[[19.5, y], [20.5, y]]} head={false} />
              <Sq x={20.6} y={y - 0.2} w={0.4} />
              <T x={21.4} y={y + 0.22} c="t">
                {f}
              </T>
            </g>
          );
        })}
      </>
    ),
  },

  heatsense: {
    h: 9,
    caption:
      "From monthly city data to a map. Regression models estimate AQI and temperature, and a classifier with an adjustable tolerance flags heat-wave conditions.",
    alt: "Four monthly inputs per city, weather, AQI, energy and vehicle sales, feed regression models that estimate AQI and temperature. Their estimates feed a classifier whose tolerance can be adjusted, which flags heat-wave conditions on a map dashboard.",
    draw: () => (
      <>
        {["Weather", "AQI", "Energy", "Vehicle sales"].map((t, i) => (
          <g key={t}>
            <Box x={0} y={0.5 + i * 2} w={6} h={1.5} t={t} />
            <Wire p={[[6, 1.25 + i * 2], [7, 1.25 + i * 2]]} head={false} />
          </g>
        ))}
        <Wire p={[[7, 1.25], [7, 7.25]]} head={false} />
        <T x={3} y={8.75} a="middle">
          monthly · per city
        </T>
        <Wire p={[[7, 4.25], [8, 4.25]]} />
        <Box x={8} y={3} w={6} h={2.5} t="Regression" s="AQI · temperature" />
        <Wire p={[[14, 4.25], [16, 4.25]]} />
        <Box x={16} y={3} w={6} h={2.5} t="Classifier" s="heat wave or not" />
        {/* The tolerance, drawn as a slider set on its scale. */}
        <T x={16.5} y={0.85}>
          tolerance
        </T>
        <Wire p={[[16.5, 1.5], [21.5, 1.5]]} head={false} />
        {[16.5, 17.75, 19, 20.25, 21.5].map((x) => (
          <Wire key={x} p={[[x, 1.3], [x, 1.7]]} head={false} />
        ))}
        <Sq x={18.75} y={1.25} w={0.5} fill />
        <Wire p={[[19, 1.75], [19, 3]]} />
        <Wire p={[[22, 4.25], [23, 4.25]]} />
        <Box x={23} y={3} w={5} h={2.5} t="Map" s="dashboard" />
      </>
    ),
  },

  "reddit-multimodal-crawler": {
    h: 10,
    caption:
      "A subreddit in, a table out. Every post and comment becomes a row with its media links, a VADER sentiment score and a bcrypt-hashed author.",
    alt: "A subreddit is read through PRAW into posts and comments. Each becomes a table row of text, image and video URLs, a VADER sentiment score and a bcrypt hash of the author's name, and the table exports to CSV or TSV.",
    draw: () => {
      const cols: { x: number; w: number; head: string; note: string; cells: string[] }[] = [
        { x: 0, w: 8, head: "Text", note: "", cells: ["post title + body", "comment body"] },
        { x: 8, w: 7, head: "Media", note: "image + video URLs", cells: ["image URL", "video URL"] },
        { x: 15, w: 5, head: "Sentiment", note: "VADER", cells: ["score", "score"] },
        { x: 20, w: 8, head: "Author", note: "bcrypt", cells: ["$2b$…", "$2b$…"] },
      ];
      return (
        <>
          <Box x={0} y={0.5} w={5} h={2} t="r/subreddit" mono />
          <Wire p={[[5, 1.5], [7, 1.5]]} />
          <Box x={7} y={0.5} w={5} h={2} t="PRAW" />
          <Wire p={[[12, 1.5], [14, 1.5]]} />
          <Box x={14} y={0.5} w={7} h={2} t="Posts + comments" />
          <Wire p={[[17.5, 2.5], [17.5, 4.5]]} />
          <Box x={23} y={0.5} w={5} h={2} t="CSV · TSV" />
          <Wire p={[[25.5, 4.5], [25.5, 2.5]]} />
          {cols.map((c) => (
            <g key={c.head}>
              <Sq x={c.x} y={4.5} w={c.w} h={1} fill />
              <T x={c.x + 0.4} y={5.15}>
                {c.head}
              </T>
              {c.cells.map((cell, r) => (
                <g key={r}>
                  <Sq x={c.x} y={5.5 + r * 1.25} w={c.w} h={1.25} />
                  <T x={c.x + 0.4} y={6.3 + r * 1.25} c="m">
                    {cell}
                  </T>
                </g>
              ))}
              {c.note && (
                <T x={c.x + 0.4} y={9.1}>
                  {c.note}
                </T>
              )}
            </g>
          ))}
        </>
      );
    },
  },
};

export function hasFigure(slug: string) {
  return slug in drawings;
}

export function ProjectFigure({ slug, n }: { slug: string; n: string }) {
  const d = drawings[slug];
  if (!d) return null;
  return (
    <figure className="figure">
      <div className="figure-draw">
        <svg viewBox={`0 0 ${W * U + 1} ${d.h * U + 1}`} role="img" aria-label={d.alt}>
          <defs>
            <marker
              id="fig-head"
              viewBox="0 0 8 8"
              refX="7.5"
              refY="4"
              markerWidth="8"
              markerHeight="8"
              markerUnits="userSpaceOnUse"
              orient="auto-start-reverse"
            >
              <path d="M1.5 1 7.5 4 1.5 7" className="fig-head" />
            </marker>
          </defs>
          {/* Half-pixel offset so 1px lines sit on whole pixels, like the grid. */}
          <g transform="translate(0.5 0.5)">{d.draw()}</g>
        </svg>
      </div>
      <figcaption>
        <span className="label">Fig. {n}</span>
        <span>{d.caption}</span>
      </figcaption>
    </figure>
  );
}
