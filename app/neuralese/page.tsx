import Link from "next/link";
import { unstable_ViewTransition as ViewTransition } from "react";

export default function BitterLessonPage() {
  return (
    <ViewTransition>
      <div className="flex justify-center p-4 pt-16">
        <div className="w-full max-w-lg space-y-6">
          <div className="space-y-8">
            <Link
              href="/"
              className="inline-block no-underline text-black/65 hover:text-black/80"
            >
              Home
            </Link>

            <div className="space-y-0">
              <div className="flex items-center gap-2">
                <h1 className="font-medium text-black/85">Neuralese</h1>
                <span className="text-xs text-black/30 bg-black/5 px-2 py-0.5 rounded">
                  DRAFT
                </span>
              </div>
              <p className="font-normal text-black/30">00/00</p>
            </div>
          </div>

          <ViewTransition update="none">
            <article className="space-y-4 font-normal">
              <p>
                Language models have taught us something profound about
                intelligence and learning. The bitter lesson, as Rich Sutton
                called it in reinforcement learning, applies equally well to
                language: general methods that leverage computation scale better
                than methods that leverage human knowledge.
              </p>

              <p>
                We&apos;ve seen this pattern repeatedly in AI. In chess, simple
                search algorithms eventually outperformed systems built with
                chess expertise. In Go, Monte Carlo tree search combined with
                neural networks defeated the world&apos;s best players, not
                through sophisticated understanding of Go strategy, but through
                computational brute force.
              </p>

              <p>
                Language models follow the same trajectory. GPT-3&apos;s success
                didn&apos;t come from encoding linguistic rules or semantic
                frameworks. It came from scaling up a relatively simple
                transformer architecture and feeding it more data and compute
                than anyone had tried before.
              </p>

              <p>
                This creates a fascinating paradox. These models appear to
                understand language, context, and even reasoning, yet they
                operate through statistical patterns rather than symbolic
                manipulation or rule-based processing that linguists and
                cognitive scientists spent decades developing.
              </p>

              <p>
                The bitter lesson for language is that our human intuitions
                about how language should be processed—through grammar trees,
                semantic networks, and logical inference—may be less important
                than we thought. Scale and computation can approximate these
                sophisticated mechanisms through pattern matching.
              </p>

              <p>
                This doesn&apos;t diminish the value of linguistic research or
                cognitive science. Understanding how humans process language
                remains crucial for building better interfaces between humans
                and machines. But it does suggest that the path to artificial
                language intelligence might be more about engineering scale than
                encoding wisdom.
              </p>

              <p>
                The bitter lesson persists: methods that can effectively use
                increasing computation are ultimately the most effective, even
                if they seem crude or inelegant compared to methods that
                incorporate our best theories about how language should work.
              </p>
            </article>
          </ViewTransition>
        </div>
      </div>
    </ViewTransition>
  );
}
