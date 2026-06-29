import { useState } from "react";
import { Home, BookOpen, Target, User, CheckCircle2, Lock, ChevronRight, ArrowLeft, Circle, Trophy, TrendingUp, Clock, Star } from "lucide-react";

// ── Types ────────────────────────────────────────────────────────────────────

type Screen =
  | { id: "library" }
  | { id: "module"; moduleId: string }
  | { id: "lesson"; moduleId: string; lessonId: string }
  | { id: "quiz"; moduleId: string; lessonId: string }
  | { id: "progress" };

type LessonStatus = "completed" | "available" | "locked";

interface Lesson {
  id: string;
  title: string;
  type: "text" | "quiz";
  duration: string;
  content?: string[];
  questions?: Question[];
}

interface Module {
  id: string;
  title: string;
  topic: string;
  duration: string;
  status: "completed" | "available" | "locked";
  lessons: Lesson[];
  requires?: string[];
}

interface Question {
  id: string;
  text: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

// ── Data ─────────────────────────────────────────────────────────────────────

const MODULES: Module[] = [
  {
    id: "m1",
    title: "Understanding Your Paycheck",
    topic: "Budgeting",
    duration: "2 min",
    status: "completed",
    lessons: [
      {
        id: "l1",
        title: "What is Gross vs. Net Pay?",
        type: "text",
        duration: "1 min",
        content: [
          "**Gross Pay** is the total amount of money earned before any deductions are taken out. It's your base salary or hourly wage multiplied by hours worked.",
          "**Net Pay** — also known as take-home pay — is the amount you actually receive after taxes, insurance, and other deductions have been subtracted from your gross pay.",
          "Understanding this difference helps you budget accurately. Many people make the mistake of planning expenses around their gross pay rather than their net pay, which leads to overspending.",
        ],
      },
      {
        id: "l2",
        title: "Common Deductions Explained",
        type: "text",
        duration: "1 min",
        content: [
          "Your paycheck deductions typically fall into two categories: **mandatory** and **voluntary**.",
          "**Mandatory deductions** include federal income tax, state income tax, Social Security (6.2%), and Medicare (1.45%). These are required by law.",
          "**Voluntary deductions** include health insurance premiums, 401(k) contributions, HSA contributions, and life insurance. You elected these benefits during onboarding.",
        ],
      },
      {
        id: "l3",
        title: "Understanding Your Tax Withholding",
        type: "quiz",
        duration: "1 min",
        questions: [
          {
            id: "q1",
            text: "What is the primary purpose of tax withholding?",
            options: [
              "To increase your gross pay",
              "To estimate and pay your income tax throughout the year",
              "To pay for employee benefits",
              "To cover company operating costs",
            ],
            correctIndex: 1,
            explanation: "Withholding spreads your annual tax liability across each paycheck so you don't owe a large lump sum in April.",
          },
          {
            id: "q2",
            text: "Which form determines how much federal income tax is withheld from your paycheck?",
            options: ["W-2", "1099", "W-4", "Schedule C"],
            correctIndex: 2,
            explanation: "The W-4 (Employee's Withholding Certificate) tells your employer how much to withhold based on your filing status and allowances.",
          },
          {
            id: "q3",
            text: "If your net pay is $3,200 and your gross pay is $4,000, how much was deducted?",
            options: ["$400", "$600", "$800", "$1,200"],
            correctIndex: 2,
            explanation: "$4,000 − $3,200 = $800 in total deductions, which is 20% of your gross pay.",
          },
        ],
      },
    ],
  },
  {
    id: "m2",
    title: "Tracking Your Spending",
    topic: "Budgeting",
    duration: "3 min",
    status: "available",
    lessons: [
      {
        id: "l1",
        title: "The 50/30/20 Rule",
        type: "text",
        duration: "1 min",
        content: [
          "The **50/30/20 rule** is a simple framework for dividing your after-tax income: 50% to needs, 30% to wants, and 20% to savings and debt repayment.",
          "**Needs (50%):** Rent, groceries, utilities, transportation, minimum loan payments — expenses you cannot avoid.",
          "**Wants (30%):** Dining out, streaming services, hobbies, vacations — things that improve your quality of life but aren't essential.",
          "**Savings & Debt (20%):** Emergency fund, retirement contributions, extra debt payments, and other financial goals.",
        ],
      },
      {
        id: "l2",
        title: "Categorizing Your Expenses",
        type: "text",
        duration: "1 min",
        content: [
          "Start by reviewing 30 days of bank and credit card statements. Highlight every transaction and assign it a category: housing, food, transport, entertainment, health, or other.",
          "Look for **subscription creep** — small recurring charges that add up. The average American pays for 4+ streaming services they rarely use.",
          "Once categorized, calculate what percentage of your net income each category represents. Compare this to your target percentages from the 50/30/20 rule.",
        ],
      },
      {
        id: "l3",
        title: "Spending Categories Quiz",
        type: "quiz",
        duration: "1 min",
        questions: [
          {
            id: "q1",
            text: "Under the 50/30/20 rule, which category does a Netflix subscription fall into?",
            options: ["Needs (50%)", "Wants (30%)", "Savings (20%)", "Debt repayment"],
            correctIndex: 1,
            explanation: "Streaming services are discretionary — you can live without them — so they belong in the Wants (30%) bucket.",
          },
          {
            id: "q2",
            text: "You earn $3,500/month after tax. How much should go to savings and debt under the 50/30/20 rule?",
            options: ["$350", "$525", "$700", "$1,050"],
            correctIndex: 2,
            explanation: "20% of $3,500 = $700. This covers emergency savings, retirement contributions, and extra debt payments.",
          },
        ],
      },
    ],
  },
  {
    id: "m3",
    title: "Building a Mini Emergency Fund",
    topic: "Saving",
    duration: "4 min",
    status: "locked",
    requires: ["m1", "m2"],
    lessons: [
      {
        id: "l1",
        title: "Why $1,000 Changes Everything",
        type: "text",
        duration: "1 min",
        content: [
          "A $1,000 emergency fund is not a luxury — it's the difference between a minor setback and a financial spiral. It breaks the cycle of using credit cards for unexpected expenses.",
          "Studies show that people with even a small emergency buffer report significantly lower financial stress and are less likely to miss bill payments.",
        ],
      },
    ],
  },
  {
    id: "m4",
    title: "Credit Score Fundamentals",
    topic: "Credit",
    duration: "5 min",
    status: "locked",
    requires: ["m1"],
    lessons: [],
  },
];

const TOPICS = ["All", "Budgeting", "Saving", "Credit", "Debt", "Taxes", "Investing"];

// ── Progress state (simulated) ────────────────────────────────────────────────

const INITIAL_COMPLETED_LESSONS: Record<string, Set<string>> = {
  m1: new Set(["l1", "l2"]),
};

// ── Helpers ───────────────────────────────────────────────────────────────────

function getLessonStatus(
  moduleId: string,
  lessonIndex: number,
  lessons: Lesson[],
  completedLessons: Record<string, Set<string>>
): LessonStatus {
  const moduleCompleted = completedLessons[moduleId] || new Set();
  const lesson = lessons[lessonIndex];
  if (moduleCompleted.has(lesson.id)) return "completed";
  if (lessonIndex === 0) return "available";
  const prevLesson = lessons[lessonIndex - 1];
  return moduleCompleted.has(prevLesson.id) ? "available" : "locked";
}

function getModuleCompletion(moduleId: string, module: Module, completedLessons: Record<string, Set<string>>) {
  const done = completedLessons[moduleId]?.size || 0;
  return { done, total: module.lessons.length, pct: module.lessons.length ? Math.round((done / module.lessons.length) * 100) : 0 };
}

// ── Sub-components ────────────────────────────────────────────────────────────

function BottomNav({ active, onNavigate }: { active: string; onNavigate: (s: Screen) => void }) {
  const items = [
    { id: "library", icon: Home, label: "Home" },
    { id: "learn", icon: BookOpen, label: "Learn" },
    { id: "progress", icon: TrendingUp, label: "Progress" },
    { id: "profile", icon: User, label: "Profile" },
  ];
  return (
    <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto border-t border-border bg-card/95 backdrop-blur-sm z-50">
      <div className="flex">
        {items.map((item) => {
          const isActive = active === item.id;
          return (
            <button
              key={item.id}
              onClick={() => {
                if (item.id === "library" || item.id === "learn") onNavigate({ id: "library" });
                if (item.id === "progress") onNavigate({ id: "progress" });
              }}
              className={`flex-1 flex flex-col items-center gap-1 py-3 transition-colors ${
                isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <item.icon size={20} strokeWidth={isActive ? 2.5 : 1.5} />
              <span className="text-xs font-medium" style={{ fontFamily: "'DM Mono', monospace" }}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}

function TopicPill({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all whitespace-nowrap ${
        active
          ? "bg-primary text-primary-foreground"
          : "bg-secondary text-muted-foreground hover:text-foreground border border-border"
      }`}
      style={{ fontFamily: "'DM Mono', monospace" }}
    >
      {label}
    </button>
  );
}

function StatusBadge({ status }: { status: "completed" | "available" | "locked" }) {
  const map = {
    completed: { label: "Completed", cls: "text-chart-2" },
    available: { label: "Not Started", cls: "text-muted-foreground" },
    locked: { label: "Locked", cls: "text-muted-foreground/50" },
  };
  const { label, cls } = map[status];
  return (
    <span className={`text-xs ${cls}`} style={{ fontFamily: "'DM Mono', monospace" }}>
      {label}
    </span>
  );
}

// ── Screen: Library ───────────────────────────────────────────────────────────

function LibraryScreen({
  completedLessons,
  onNavigate,
}: {
  completedLessons: Record<string, Set<string>>;
  onNavigate: (s: Screen) => void;
}) {
  const [activeTopic, setActiveTopic] = useState("All");

  const filtered = activeTopic === "All" ? MODULES : MODULES.filter((m) => m.topic === activeTopic);

  const totalLessons = MODULES.flatMap((m) => m.lessons).length;
  const doneCount = Object.values(completedLessons).reduce((acc, s) => acc + s.size, 0);
  const overallPct = totalLessons ? Math.round((doneCount / totalLessons) * 100) : 0;

  return (
    <div className="pb-24">
      {/* Header */}
      <div className="px-5 pt-10 pb-6">
        <div className="flex items-start justify-between mb-6">
          <div>
            <p className="text-muted-foreground text-sm mb-1" style={{ fontFamily: "'DM Mono', monospace" }}>
              Welcome back
            </p>
            <h1 className="text-2xl font-semibold text-foreground" style={{ fontFamily: "'Fraunces', serif" }}>
              Alex Rivera
            </h1>
          </div>
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-semibold text-sm">AR</span>
          </div>
        </div>

        {/* Overall progress card */}
        <div className="bg-card rounded-xl p-4 border border-border">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs text-muted-foreground" style={{ fontFamily: "'DM Mono', monospace" }}>
              OVERALL PROGRESS
            </span>
            <span className="text-primary font-semibold text-sm" style={{ fontFamily: "'DM Mono', monospace" }}>
              {overallPct}%
            </span>
          </div>
          <div className="h-1.5 rounded-full bg-muted overflow-hidden">
            <div
              className="h-full rounded-full bg-primary transition-all"
              style={{ width: `${overallPct}%` }}
            />
          </div>
          <div className="flex items-center gap-1 mt-2">
            <Star size={12} className="text-accent" />
            <span className="text-xs text-muted-foreground" style={{ fontFamily: "'DM Mono', monospace" }}>
              {doneCount} of {totalLessons} lessons complete
            </span>
          </div>
        </div>
      </div>

      {/* Learning path */}
      <div className="px-5 mb-6">
        <h2 className="text-lg font-semibold mb-4" style={{ fontFamily: "'Fraunces', serif" }}>
          Your Learning Path
        </h2>
        <div className="space-y-3">
          {filtered.map((mod) => {
            const { done, total, pct } = getModuleCompletion(mod.id, mod, completedLessons);
            const isLocked = mod.status === "locked";
            const isCompleted = mod.status === "completed" || (total > 0 && done === total);

            return (
              <div
                key={mod.id}
                className={`bg-card rounded-xl border border-border p-4 transition-all ${
                  isLocked ? "opacity-50" : "hover:border-primary/40 cursor-pointer"
                }`}
                onClick={() => !isLocked && onNavigate({ id: "module", moduleId: mod.id })}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      isCompleted
                        ? "bg-chart-2/20 text-chart-2"
                        : isLocked
                        ? "bg-muted text-muted-foreground/40"
                        : "bg-primary/20 text-primary"
                    }`}
                  >
                    {isCompleted ? (
                      <CheckCircle2 size={16} />
                    ) : isLocked ? (
                      <Lock size={14} />
                    ) : (
                      <Circle size={16} strokeWidth={1.5} />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-sm font-medium text-foreground leading-snug">{mod.title}</h3>
                      {!isLocked && <ChevronRight size={16} className="text-muted-foreground flex-shrink-0 mt-0.5" />}
                    </div>
                    <div className="flex items-center gap-3 mt-1">
                      <span
                        className="text-xs px-1.5 py-0.5 rounded bg-secondary text-muted-foreground"
                        style={{ fontFamily: "'DM Mono', monospace" }}
                      >
                        {mod.topic}
                      </span>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Clock size={11} />
                        <span className="text-xs" style={{ fontFamily: "'DM Mono', monospace" }}>
                          {mod.duration}
                        </span>
                      </div>
                    </div>
                    {isLocked && mod.requires && (
                      <p className="text-xs text-muted-foreground/60 mt-1.5">
                        Requires: {mod.requires.map((r) => MODULES.find((m) => m.id === r)?.title).join(" & ")}
                      </p>
                    )}
                    {!isLocked && total > 0 && (
                      <div className="mt-2.5">
                        <div className="flex items-center justify-between mb-1">
                          <StatusBadge status={isCompleted ? "completed" : done > 0 ? "available" : "available"} />
                          <span className="text-xs text-muted-foreground" style={{ fontFamily: "'DM Mono', monospace" }}>
                            {done}/{total}
                          </span>
                        </div>
                        <div className="h-1 rounded-full bg-muted overflow-hidden">
                          <div
                            className={`h-full rounded-full transition-all ${isCompleted ? "bg-chart-2" : "bg-primary"}`}
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Browse topics */}
      <div className="px-5">
        <h2 className="text-lg font-semibold mb-3" style={{ fontFamily: "'Fraunces', serif" }}>
          Browse Topics
        </h2>
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {TOPICS.map((t) => (
            <TopicPill key={t} label={t} active={activeTopic === t} onClick={() => setActiveTopic(t)} />
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Screen: Module ────────────────────────────────────────────────────────────

function ModuleScreen({
  moduleId,
  completedLessons,
  onNavigate,
  onBack,
}: {
  moduleId: string;
  completedLessons: Record<string, Set<string>>;
  onNavigate: (s: Screen) => void;
  onBack: () => void;
}) {
  const mod = MODULES.find((m) => m.id === moduleId)!;
  const { done, total, pct } = getModuleCompletion(moduleId, mod, completedLessons);

  return (
    <div className="pb-24">
      {/* Header */}
      <div className="px-5 pt-10 pb-6">
        <button onClick={onBack} className="flex items-center gap-1 text-muted-foreground text-sm mb-5 hover:text-foreground transition-colors">
          <ArrowLeft size={16} />
          <span style={{ fontFamily: "'DM Mono', monospace" }}>Learning Path</span>
        </button>
        <span
          className="text-xs px-2 py-1 rounded bg-secondary text-muted-foreground mb-3 inline-block"
          style={{ fontFamily: "'DM Mono', monospace" }}
        >
          {mod.topic}
        </span>
        <h1 className="text-2xl font-semibold text-foreground mb-3" style={{ fontFamily: "'Fraunces', serif" }}>
          {mod.title}
        </h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-1.5">
            <Clock size={14} />
            <span style={{ fontFamily: "'DM Mono', monospace" }}>{mod.duration}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <BookOpen size={14} />
            <span style={{ fontFamily: "'DM Mono', monospace" }}>{total} lessons</span>
          </div>
        </div>
        <div className="bg-card rounded-xl p-3 border border-border">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-muted-foreground" style={{ fontFamily: "'DM Mono', monospace" }}>
              MODULE PROGRESS
            </span>
            <span className="text-xs text-primary font-medium" style={{ fontFamily: "'DM Mono', monospace" }}>
              {done}/{total} lessons
            </span>
          </div>
          <div className="h-1.5 rounded-full bg-muted overflow-hidden">
            <div className="h-full rounded-full bg-primary transition-all" style={{ width: `${pct}%` }} />
          </div>
        </div>
      </div>

      {/* Lessons */}
      <div className="px-5">
        <h2 className="text-base font-semibold mb-3 text-muted-foreground uppercase tracking-wider" style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px" }}>
          Lessons
        </h2>
        <div className="space-y-2">
          {mod.lessons.map((lesson, i) => {
            const status = getLessonStatus(moduleId, i, mod.lessons, completedLessons);
            const isLocked = status === "locked";
            const isCompleted = status === "completed";

            return (
              <div
                key={lesson.id}
                className={`flex items-center gap-3 p-4 rounded-xl border border-border bg-card transition-all ${
                  isLocked ? "opacity-40" : "hover:border-primary/40 cursor-pointer"
                }`}
                onClick={() =>
                  !isLocked &&
                  onNavigate(
                    lesson.type === "quiz"
                      ? { id: "quiz", moduleId, lessonId: lesson.id }
                      : { id: "lesson", moduleId, lessonId: lesson.id }
                  )
                }
              >
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${
                    isCompleted
                      ? "bg-chart-2/20 text-chart-2"
                      : isLocked
                      ? "bg-muted text-muted-foreground/40"
                      : "bg-secondary text-muted-foreground"
                  }`}
                >
                  {isCompleted ? (
                    <CheckCircle2 size={14} />
                  ) : isLocked ? (
                    <Lock size={12} />
                  ) : (
                    <span className="text-xs" style={{ fontFamily: "'DM Mono', monospace" }}>
                      {i + 1}
                    </span>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground">{lesson.title}</p>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span
                      className={`text-xs px-1.5 py-0.5 rounded ${
                        lesson.type === "quiz" ? "bg-accent/10 text-accent" : "bg-secondary text-muted-foreground"
                      }`}
                      style={{ fontFamily: "'DM Mono', monospace" }}
                    >
                      {lesson.type === "quiz" ? "Quiz" : "Read"}
                    </span>
                    <span className="text-xs text-muted-foreground" style={{ fontFamily: "'DM Mono', monospace" }}>
                      {lesson.duration}
                    </span>
                  </div>
                </div>
                {!isLocked && <ChevronRight size={16} className="text-muted-foreground flex-shrink-0" />}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ── Screen: Lesson ────────────────────────────────────────────────────────────

function LessonScreen({
  moduleId,
  lessonId,
  onComplete,
  onBack,
}: {
  moduleId: string;
  lessonId: string;
  onComplete: () => void;
  onBack: () => void;
}) {
  const mod = MODULES.find((m) => m.id === moduleId)!;
  const lesson = mod.lessons.find((l) => l.id === lessonId)!;
  const lessonIndex = mod.lessons.indexOf(lesson);

  function renderContent(text: string, i: number) {
    const parts = text.split(/\*\*(.+?)\*\*/g);
    return (
      <p key={i} className="text-foreground/90 leading-relaxed text-base">
        {parts.map((part, j) =>
          j % 2 === 1 ? (
            <strong key={j} className="text-foreground font-semibold">
              {part}
            </strong>
          ) : (
            part
          )
        )}
      </p>
    );
  }

  return (
    <div className="pb-28">
      <div className="px-5 pt-10 pb-6">
        <button onClick={onBack} className="flex items-center gap-1 text-muted-foreground text-sm mb-5 hover:text-foreground transition-colors">
          <ArrowLeft size={16} />
          <span style={{ fontFamily: "'DM Mono', monospace" }}>{mod.title}</span>
        </button>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs text-muted-foreground" style={{ fontFamily: "'DM Mono', monospace" }}>
            {lessonIndex + 1} / {mod.lessons.length}
          </span>
          <span className="text-xs px-1.5 py-0.5 rounded bg-secondary text-muted-foreground" style={{ fontFamily: "'DM Mono', monospace" }}>
            Read
          </span>
        </div>
        <h1 className="text-2xl font-semibold text-foreground" style={{ fontFamily: "'Fraunces', serif" }}>
          {lesson.title}
        </h1>
      </div>

      <div className="px-5 space-y-5 mb-8">{lesson.content?.map((c, i) => renderContent(c, i))}</div>

      <div className="px-5 flex gap-3">
        {lessonIndex > 0 && (
          <button
            onClick={onBack}
            className="flex-1 py-3 rounded-xl border border-border text-foreground text-sm font-medium hover:bg-secondary transition-colors"
          >
            Previous
          </button>
        )}
        <button
          onClick={onComplete}
          className="flex-1 py-3 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors"
        >
          {lessonIndex < mod.lessons.length - 1 ? "Next Lesson →" : "Complete Module"}
        </button>
      </div>
    </div>
  );
}

// ── Screen: Quiz ──────────────────────────────────────────────────────────────

function QuizScreen({
  moduleId,
  lessonId,
  onComplete,
  onBack,
}: {
  moduleId: string;
  lessonId: string;
  onComplete: (score: number) => void;
  onBack: () => void;
}) {
  const mod = MODULES.find((m) => m.id === moduleId)!;
  const lesson = mod.lessons.find((l) => l.id === lessonId)!;
  const questions = lesson.questions || [];

  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const q = questions[currentQ];

  function handleSubmit() {
    if (selected === null) return;
    setSubmitted(true);
    if (selected === q.correctIndex) setScore((s) => s + 1);
  }

  function handleNext() {
    if (currentQ < questions.length - 1) {
      setCurrentQ((c) => c + 1);
      setSelected(null);
      setSubmitted(false);
    } else {
      setFinished(true);
    }
  }

  if (finished) {
    const pct = Math.round((score / questions.length) * 100);
    return (
      <div className="pb-24">
        <div className="px-5 pt-10">
          <button onClick={onBack} className="flex items-center gap-1 text-muted-foreground text-sm mb-8 hover:text-foreground transition-colors">
            <ArrowLeft size={16} />
            <span style={{ fontFamily: "'DM Mono', monospace" }}>{mod.title}</span>
          </button>
          <div className="flex flex-col items-center text-center py-8">
            <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 ${pct >= 70 ? "bg-chart-2/20" : "bg-destructive/20"}`}>
              <Trophy size={36} className={pct >= 70 ? "text-chart-2" : "text-destructive"} />
            </div>
            <h1 className="text-3xl font-semibold mb-2" style={{ fontFamily: "'Fraunces', serif" }}>
              {pct >= 70 ? "Great work!" : "Keep practicing"}
            </h1>
            <p className="text-muted-foreground mb-6">
              You scored {score} out of {questions.length} questions
            </p>
            <div className="bg-card rounded-2xl border border-border p-6 w-full max-w-xs mb-8">
              <div
                className={`text-5xl font-bold mb-1 ${pct >= 70 ? "text-chart-2" : "text-destructive"}`}
                style={{ fontFamily: "'Fraunces', serif" }}
              >
                {pct}%
              </div>
              <div className="text-muted-foreground text-sm" style={{ fontFamily: "'DM Mono', monospace" }}>
                Quiz score
              </div>
            </div>
            <button
              onClick={() => onComplete(score)}
              className="w-full max-w-xs py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
            >
              Continue Learning →
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pb-24">
      <div className="px-5 pt-10 pb-6">
        <button onClick={onBack} className="flex items-center gap-1 text-muted-foreground text-sm mb-5 hover:text-foreground transition-colors">
          <ArrowLeft size={16} />
          <span style={{ fontFamily: "'DM Mono', monospace" }}>{mod.title}</span>
        </button>
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs text-muted-foreground" style={{ fontFamily: "'DM Mono', monospace" }}>
            Question {currentQ + 1} of {questions.length}
          </span>
          <span className="text-xs px-2 py-1 rounded bg-accent/10 text-accent" style={{ fontFamily: "'DM Mono', monospace" }}>
            Quiz
          </span>
        </div>
        <div className="flex gap-1 mb-5">
          {questions.map((_, i) => (
            <div
              key={i}
              className={`flex-1 h-1 rounded-full transition-all ${
                i < currentQ ? "bg-chart-2" : i === currentQ ? "bg-primary" : "bg-muted"
              }`}
            />
          ))}
        </div>
        <h1 className="text-xl font-semibold text-foreground" style={{ fontFamily: "'Fraunces', serif" }}>
          {q.text}
        </h1>
      </div>

      <div className="px-5 space-y-3 mb-6">
        {q.options.map((opt, i) => {
          const isSelected = selected === i;
          const isCorrect = submitted && i === q.correctIndex;
          const isWrong = submitted && isSelected && i !== q.correctIndex;

          return (
            <button
              key={i}
              disabled={submitted}
              onClick={() => setSelected(i)}
              className={`w-full text-left p-4 rounded-xl border transition-all ${
                isCorrect
                  ? "border-chart-2 bg-chart-2/10 text-foreground"
                  : isWrong
                  ? "border-destructive bg-destructive/10 text-foreground"
                  : isSelected
                  ? "border-primary bg-primary/10 text-foreground"
                  : "border-border bg-card text-foreground hover:border-primary/40"
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-6 h-6 rounded-full border flex items-center justify-center flex-shrink-0 text-xs ${
                    isCorrect
                      ? "border-chart-2 bg-chart-2 text-card"
                      : isWrong
                      ? "border-destructive bg-destructive text-foreground"
                      : isSelected
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border text-muted-foreground"
                  }`}
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  {String.fromCharCode(65 + i)}
                </div>
                <span className="text-sm">{opt}</span>
              </div>
            </button>
          );
        })}
      </div>

      {submitted && (
        <div className={`mx-5 mb-6 p-4 rounded-xl border ${selected === q.correctIndex ? "border-chart-2/30 bg-chart-2/5" : "border-destructive/30 bg-destructive/5"}`}>
          <p className={`text-sm font-semibold mb-1 ${selected === q.correctIndex ? "text-chart-2" : "text-destructive"}`}>
            {selected === q.correctIndex ? "Correct!" : "Not quite"}
          </p>
          <p className="text-sm text-foreground/80">{q.explanation}</p>
        </div>
      )}

      <div className="px-5">
        {!submitted ? (
          <button
            onClick={handleSubmit}
            disabled={selected === null}
            className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-semibold disabled:opacity-40 disabled:cursor-not-allowed hover:bg-primary/90 transition-colors"
          >
            Submit Answer
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
          >
            {currentQ < questions.length - 1 ? "Next Question →" : "See Results"}
          </button>
        )}
      </div>
    </div>
  );
}

// ── Screen: Progress ──────────────────────────────────────────────────────────

function ProgressScreen({
  completedLessons,
  onBack,
}: {
  completedLessons: Record<string, Set<string>>;
  onBack: () => void;
}) {
  const totalLessons = MODULES.flatMap((m) => m.lessons).length;
  const doneCount = Object.values(completedLessons).reduce((acc, s) => acc + s.size, 0);
  const overallPct = totalLessons ? Math.round((doneCount / totalLessons) * 100) : 0;

  const topicStats = TOPICS.filter((t) => t !== "All").map((topic) => {
    const mods = MODULES.filter((m) => m.topic === topic);
    const total = mods.length;
    const done = mods.filter((m) => {
      const { done: d, total: t } = getModuleCompletion(m.id, m, completedLessons);
      return t > 0 && d === t;
    }).length;
    return { topic, done, total };
  });

  const recentActivity = [
    { action: 'Completed "Common Deductions Explained"', topic: "Budgeting", time: "2h ago" },
    { action: 'Scored 100% on "Tax Withholding" Quiz', topic: "Budgeting", time: "2h ago" },
    { action: 'Started "What is Gross vs. Net Pay?"', topic: "Budgeting", time: "Yesterday" },
  ];

  return (
    <div className="pb-24">
      <div className="px-5 pt-10 pb-6">
        <h1 className="text-2xl font-semibold mb-6" style={{ fontFamily: "'Fraunces', serif" }}>
          Your Progress
        </h1>

        {/* Big stat */}
        <div className="bg-card rounded-2xl border border-border p-6 mb-6">
          <div className="flex items-end gap-3 mb-4">
            <span
              className="text-6xl font-bold text-primary leading-none"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              {overallPct}
            </span>
            <span className="text-2xl text-muted-foreground mb-1" style={{ fontFamily: "'Fraunces', serif" }}>
              %
            </span>
          </div>
          <p className="text-muted-foreground text-sm mb-4" style={{ fontFamily: "'DM Mono', monospace" }}>
            Overall completion
          </p>
          <div className="h-2 rounded-full bg-muted overflow-hidden">
            <div className="h-full rounded-full bg-primary transition-all" style={{ width: `${overallPct}%` }} />
          </div>
          <p className="text-xs text-muted-foreground mt-2" style={{ fontFamily: "'DM Mono', monospace" }}>
            {doneCount} of {totalLessons} lessons complete
          </p>
        </div>

        {/* Topics */}
        <h2 className="text-base font-semibold mb-3" style={{ fontFamily: "'Fraunces', serif" }}>
          Topics
        </h2>
        <div className="space-y-2 mb-6">
          {topicStats.map(({ topic, done, total }) => (
            <div key={topic} className="bg-card rounded-xl border border-border p-3 flex items-center gap-3">
              <div className={`w-2 h-2 rounded-full flex-shrink-0 ${done === total && total > 0 ? "bg-chart-2" : done > 0 ? "bg-primary" : "bg-muted"}`} />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{topic}</span>
                  <span className="text-xs text-muted-foreground" style={{ fontFamily: "'DM Mono', monospace" }}>
                    {done}/{total} modules
                  </span>
                </div>
                {total > 0 && (
                  <div className="h-1 rounded-full bg-muted overflow-hidden mt-1.5">
                    <div
                      className={`h-full rounded-full ${done === total ? "bg-chart-2" : "bg-primary"}`}
                      style={{ width: `${(done / total) * 100}%` }}
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Recent activity */}
        <h2 className="text-base font-semibold mb-3" style={{ fontFamily: "'Fraunces', serif" }}>
          Recent Activity
        </h2>
        <div className="space-y-2">
          {recentActivity.map((item, i) => (
            <div key={i} className="bg-card rounded-xl border border-border p-3 flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-sm text-foreground">{item.action}</p>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-xs text-muted-foreground" style={{ fontFamily: "'DM Mono', monospace" }}>
                    {item.topic}
                  </span>
                  <span className="text-muted-foreground/40">·</span>
                  <span className="text-xs text-muted-foreground" style={{ fontFamily: "'DM Mono', monospace" }}>
                    {item.time}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── App ───────────────────────────────────────────────────────────────────────

export default function App() {
  const [screen, setScreen] = useState<Screen>({ id: "library" });
  const [completedLessons, setCompletedLessons] = useState<Record<string, Set<string>>>(INITIAL_COMPLETED_LESSONS);

  function markLessonComplete(moduleId: string, lessonId: string) {
    setCompletedLessons((prev) => {
      const current = new Set(prev[moduleId] || []);
      current.add(lessonId);
      return { ...prev, [moduleId]: current };
    });
  }

  function getNavActive(): string {
    if (screen.id === "progress") return "progress";
    return "library";
  }

  function handleLessonComplete(moduleId: string, lessonId: string) {
    markLessonComplete(moduleId, lessonId);
    const mod = MODULES.find((m) => m.id === moduleId)!;
    const lessonIndex = mod.lessons.findIndex((l) => l.id === lessonId);
    if (lessonIndex < mod.lessons.length - 1) {
      const next = mod.lessons[lessonIndex + 1];
      if (next.type === "quiz") {
        setScreen({ id: "quiz", moduleId, lessonId: next.id });
      } else {
        setScreen({ id: "lesson", moduleId, lessonId: next.id });
      }
    } else {
      setScreen({ id: "module", moduleId });
    }
  }

  return (
    <div className="min-h-screen bg-background" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <div className="max-w-md mx-auto relative min-h-screen">
        {screen.id === "library" && (
          <LibraryScreen completedLessons={completedLessons} onNavigate={setScreen} />
        )}
        {screen.id === "module" && (
          <ModuleScreen
            moduleId={screen.moduleId}
            completedLessons={completedLessons}
            onNavigate={setScreen}
            onBack={() => setScreen({ id: "library" })}
          />
        )}
        {screen.id === "lesson" && (
          <LessonScreen
            moduleId={screen.moduleId}
            lessonId={screen.lessonId}
            onComplete={() => handleLessonComplete(screen.moduleId, screen.lessonId)}
            onBack={() => setScreen({ id: "module", moduleId: screen.moduleId })}
          />
        )}
        {screen.id === "quiz" && (
          <QuizScreen
            moduleId={screen.moduleId}
            lessonId={screen.lessonId}
            onComplete={(s) => {
              markLessonComplete(screen.moduleId, screen.lessonId);
              setScreen({ id: "module", moduleId: screen.moduleId });
            }}
            onBack={() => setScreen({ id: "module", moduleId: screen.moduleId })}
          />
        )}
        {screen.id === "progress" && (
          <ProgressScreen
            completedLessons={completedLessons}
            onBack={() => setScreen({ id: "library" })}
          />
        )}

        <BottomNav active={getNavActive()} onNavigate={setScreen} />
      </div>
    </div>
  );
}
