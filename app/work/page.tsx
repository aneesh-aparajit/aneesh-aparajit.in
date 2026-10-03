import type { Metadata } from "next";
import { Sheet, Row } from "@/components/sheet";
import { Arrow } from "@/components/arrow";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work",
  description: "Projects, with the engineering decisions behind them.",
};

export default function Work() {
  return (
    <Sheet>
      <Row mark="02" label="Work">
        <h1 className="page-title">Work</h1>
        <p className="lede">
          Things I have built. Each one carries a margin note on the decision that shaped it and what that decision
          cost.
        </p>

        <ol className="entries">
          {projects.map((p, i) => (
            <li key={p.slug} className={`entry${p.placeholder ? " placeholder" : ""}`}>
              <span className="entry-n mono" aria-hidden="true">
                02.{i + 1}
              </span>
              <div>
                <div className="entry-head">
                  <h2 className="entry-name">{p.name}</h2>
                  {p.placeholder ? <span className="label stamp">Placeholder</span> : <span className="mono">{p.year}</span>}
                </div>
                <p className="entry-summary">{p.summary}</p>
                <div className="entry-meta">
                  <span className="entry-stack label">
                    {p.stack.map((s) => (
                      <span key={s}>{s}</span>
                    ))}
                  </span>
                  {(p.repo || p.live) && (
                    <span className="entry-links">
                      {p.repo && (
                        <a href={p.repo} target="_blank" rel="noreferrer">
                          Repository <Arrow />
                        </a>
                      )}
                      {p.live && (
                        <a href={p.live} target="_blank" rel="noreferrer">
                          Live <Arrow />
                        </a>
                      )}
                    </span>
                  )}
                </div>
              </div>
              {p.decision && (
                <dl className="note">
                  <dt className="label">Decision</dt>
                  <dd>{p.decision.choice}</dd>
                  <dt className="label">Trade-off</dt>
                  <dd>{p.decision.tradeoff}</dd>
                </dl>
              )}
            </li>
          ))}
        </ol>
      </Row>
    </Sheet>
  );
}
