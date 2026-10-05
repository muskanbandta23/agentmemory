import { AGENT_INSTALL_PROMPT, INSTALL_CMD, LONGMEMEVAL, REPO_URL, src } from "@/lib/site";
import { compact, getProjectMeta } from "@/lib/meta";
import { CopyButton } from "./client";
import { MemoryField } from "./MemoryField";
import { HeroTitle } from "./HeroTitle";
import s from "./Hero.module.css";

export function Hero() {
  const meta = getProjectMeta();
  return (
    <section className={s.hero}>
      <div className={`wrap ${s.grid}`}>
        <div className={s.copy}>
          <a className={s.chip} href={src.releases} target="_blank" rel="noreferrer">
            <span className="mono">v{meta.version}</span>
            <span className={s.sep} />
            <span>Open source, Apache-2.0</span>
          </a>
          <HeroTitle rankHref="https://trendshift.io/repositories/25123" />
          <p className={s.lede}>
            Your coding agent starts every session from zero. agentmemory captures what it did, keeps it on your machine,
            and hands the right context back next time. No account, no API key, no cloud.
          </p>

          <div className={s.install}>
            <CopyButton text={INSTALL_CMD} label="Copy install command" className={s.cmd}>
              <span className={s.prompt} aria-hidden="true">
                $
              </span>
              <code>{INSTALL_CMD}</code>
            </CopyButton>
            <div className={s.row}>
              <CopyButton text={AGENT_INSTALL_PROMPT} label="Copy a setup prompt for your coding agent" className="btn btn-solid">
                <span>Copy setup prompt for your agent</span>
              </CopyButton>
              <a className={`btn btn-ghost ${s.star}`} href={REPO_URL} target="_blank" rel="noreferrer">
                <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z"
                  />
                </svg>
                <span>Star on GitHub</span>
                <span className={`mono ${s.starCount}`}>{compact(meta.stars)}</span>
              </a>
              <a className="btn btn-ghost" href="/docs">
                Read the docs
              </a>
            </div>
          </div>

          <dl className={s.facts}>
            <div>
              <dt className="mono">LongMemEval-S recall@5</dt>
              <dd>
                {LONGMEMEVAL.hybrid.r5}%{" "}
                <a className="src" href={src.longmemeval} target="_blank" rel="noreferrer">
                  source
                </a>
              </dd>
            </div>
            <div>
              <dt className="mono">Leaves your machine</dt>
              <dd>
                Nothing, by default{" "}
                <a className="src" href="/security">
                  how
                </a>
              </dd>
            </div>
          </dl>
        </div>
        <div className={s.visual}>
          <MemoryField />
        </div>
      </div>
    </section>
  );
}
