// Projects are the single source of truth for both the landing index
// and the per-project detail pages (app/work/[slug]).

export type Project = {
  slug: string;
  title: string;
  year: string;
  role: string;
  // One line for the landing index.
  summary: string;
  stack: string[];
  links: { github?: string; site?: string };
  // Detail-page content.
  problem: string;
  // ASCII data-flow rendered in a <pre> — reads as real engineering, not an image.
  architecture: string;
  decisions: string[];
};

export const projects: Project[] = [
  {
    slug: "gaming-event-streaming-platform",
    title: "Real-Time Gaming Event Streaming Platform",
    year: "2025",
    role: "Backend / Architecture",
    summary:
      "Async ingestion pipeline for player events, with real-time leaderboards backed by Redis sorted sets.",
    stack: ["Java", "Spring Boot", "Apache Kafka", "Redis", "MongoDB", "Docker"],
    links: {
      // TODO(om): real repo URL.
      github: "https://github.com/ompraveer/gaming-event-streaming",
    },
    problem:
      "Games emit a firehose of events — kills, achievements, level-ups — and clients can't wait on a database write to acknowledge each one. The platform had to accept events fast, never lose or reorder a player's events, and still answer 'top players right now' in real time.",
    architecture: `client ──POST /events──▶  REST API
                         │  returns 202 Accepted (no DB wait)
                         ▼
                 Kafka topic
            partition key = playerId   ← guarantees per-player ordering
                         │
                         ▼
                 Kafka consumer
              ┌──────────┴──────────┐
              ▼                     ▼
        MongoDB                Redis  ZSET
   (raw event log)      (sliding-window aggregates)
                          O(log n) stat queries`,
    decisions: [
      "Return 202 Accepted as soon as the event hits Kafka, so the API never blocks on a database write under load.",
      "Use playerId as the Kafka partition key — all events for one player land on the same partition, which guarantees they're processed in order.",
      "Maintain sliding-window aggregates in Redis sorted sets so leaderboard and stat queries stay O(log n) instead of scanning the raw event log.",
      "Run Kafka (KRaft mode, no ZooKeeper), MongoDB, and Redis under one Docker Compose file for single-command local spin-up.",
    ],
  },
  {
    slug: "wanderly",
    title: "Wanderly",
    year: "2025",
    role: "Backend / Architecture",
    summary:
      "AI trip planner — a modular Spring Boot monolith that turns constraints into a typed, cached itinerary.",
    stack: ["Java", "Spring Boot", "PostgreSQL", "Redis", "Groq API", "Docker"],
    links: {
      // TODO(om): real repo + live URLs.
      github: "https://github.com/ompraveer/wanderly",
      site: "https://wanderly.example.com",
    },
    problem:
      "Trip planning means calling an LLM, which is slow and expensive and returns free-form text. The goal was a clean monolith that could grow into services later, with LLM responses that map straight onto typed Java objects — and a cache so the same request doesn't pay the AI tax twice.",
    architecture: `request (destination, days, budget, interests)
            │
            ▼
   cache key = hash(dest, duration, budget, interests)
            │
     ┌──────┴───────┐
   HIT             MISS
     │               │
 Redis (TTL)     Groq LLM API
     │          strict JSON system prompt
     │               │
     │        Itinerary / DayPlan / Activity  (typed DTOs)
     └──────┬────────┘
            ▼
     response  ·  ~95% latency cut on cache hits`,
    decisions: [
      "Structure the app as a modular monolith with feature packages (user, trip, destination, ai) — high cohesion, loose coupling, ready for later microservice extraction.",
      "Enforce a strict JSON response format in the LLM system prompt so output maps directly onto typed DTOs (Itinerary → DayPlan → Activity) with no brittle parsing.",
      "Cache AI responses in Redis with a configurable TTL, keyed on the inputs that actually change the result — cutting latency ~95% on cache hits without serving stale plans.",
      "Ship a multi-stage Docker build on an Alpine JRE, pushed to Docker Hub and deployed on Render with env-based config so local and prod run identical code.",
    ],
  },
  {
    slug: "blog-application-backend",
    title: "Blog Application Backend",
    year: "2024",
    role: "Backend",
    summary:
      "RESTful blog platform with role-based auth and an admin API for content management.",
    stack: [
      "Spring Web",
      "Spring Security",
      "JPA / Hibernate",
      "PostgreSQL",
      "Swagger",
      "Maven",
    ],
    links: {
      // TODO(om): real repo URL.
      github: "https://github.com/ompraveer/blog-backend",
    },
    problem:
      "A blog platform needs two audiences with very different rights: readers and admins. The backend had to enforce that split cleanly, manage posts/categories/tags dynamically, and stay easy for another developer to pick up and test.",
    architecture: `client ──▶ Spring Security filter (role check)
                      │
        ┌─────────────┴──────────────┐
      USER role                  ADMIN role
        │                            │
   read posts            CRUD posts · categories · tags
        │                    publish / delete
        └─────────────┬──────────────┘
                      ▼
            JPA / Hibernate  ──▶  PostgreSQL
                      │
              Swagger UI (live API docs)`,
    decisions: [
      "Use Spring Security with role-based access so reader and admin capabilities are enforced at the request boundary, not scattered through controllers.",
      "Expose an admin API to manage categories, tags, and publish/delete posts dynamically rather than hard-coding content structure.",
      "Map the domain with JPA and Hibernate over PostgreSQL for clean ORM and efficient queries.",
      "Document every endpoint with Swagger so the API is self-describing and onboarding a new developer takes minutes.",
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
