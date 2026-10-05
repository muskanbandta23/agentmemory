import { AGENT_INSTALL_PROMPT, INSTALL_CMD, LONGMEMEVAL, src } from "@/lib/site";
import { getProjectMeta } from "@/lib/meta";
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
