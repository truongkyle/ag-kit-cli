# Antigravity Kit Architecture

> Comprehensive AI Agent Capability Expansion Toolkit

---

### 📋 Overview

Antigravity Kit is a modular system consisting of:

- **20 Specialist Agents** - Role-based AI personas
- **45 Skills** - Domain-specific knowledge modules
- **12 Workflows** - Slash command procedures

---

## 🏗️ Directory Structure

```plaintext
.agent/
├── ARCHITECTURE.md          # This file
├── agents/                  # 20 Specialist Agents
├── skills/                  # 45 Skills
├── workflows/               # 12 Slash Commands
├── rules/                   # Global Rules
└── scripts/                 # Master Validation Scripts
```

---

## 🤖 Agents (20)

Specialist AI personas for different domains.

| Agent                    | Focus                      | Skills Used                                              |
| ------------------------ | -------------------------- | -------------------------------------------------------- |
| `orchestrator`           | Multi-agent coordination   | parallel-agents, behavioral-modes                        |
| `project-planner`        | Discovery, task planning   | brainstorming, plan-writing, architecture                |
| `frontend-specialist`    | Web UI/UX                  | frontend-design, nextjs-react-expert, tailwind-patterns  |
| `backend-specialist`     | API, business logic        | api-patterns, nodejs-best-practices, database-design     |
| `database-architect`     | Schema, SQL                | database-design                                          |
| `mobile-developer`       | iOS, Android, RN           | mobile-design, zalo-mini-app                             |
| `game-developer`         | Game logic, mechanics      | game-development                                         |
| `devops-engineer`        | CI/CD, Docker              | deployment-procedures, server-management                 |
| `security-auditor`       | Security compliance        | vulnerability-scanner, red-team-tactics                  |
| `penetration-tester`     | Offensive security         | red-team-tactics                                         |
| `test-engineer`          | Testing strategies         | testing-patterns, tdd-workflow, webapp-testing           |
| `debugger`               | Root cause analysis        | systematic-debugging                                     |
| `performance-optimizer`  | Speed, Web Vitals          | performance-profiling                                    |
| `seo-specialist`         | Ranking, visibility        | seo-fundamentals, geo-fundamentals                       |
| `documentation-writer`   | Manuals, docs              | documentation-templates, document                        |
| `product-manager`        | Requirements, user stories | pm-skills-create-prd, alirezarezvani-code-to-prd         |
| `product-owner`          | Strategy, backlog, MVP     | plan-writing, brainstorming                              |
| `qa-automation-engineer` | E2E testing, CI pipelines  | webapp-testing, testing-patterns                         |
| `code-archaeologist`     | Legacy code, refactoring   | clean-code, code-review-checklist                        |
| `explorer-agent`         | Codebase analysis          | intelligent-routing                                      |

---

## 🧩 Skills (45)

Modular knowledge domains that agents can load on-demand based on task context.

### Frontend & UI
| Skill                   | Description                                                           |
| ----------------------- | --------------------------------------------------------------------- |
| `nextjs-react-expert`   | React & Next.js performance optimization (Vercel)                     |
| `web-design-guidelines` | Web UI audit for accessibility, UX, and performance                   |
| `tailwind-patterns`     | Tailwind CSS v4 principles and container queries                      |
| `frontend-design`       | Design thinking and UI/UX patterns                                    |

### Backend & API
| Skill                   | Description                                  |
| ----------------------- | -------------------------------------------- |
| `api-patterns`          | REST, GraphQL, tRPC, versioning, pagination  |
| `nodejs-best-practices` | Node.js framework, async patterns, security  |
| `python-patterns`       | Python standards, async, type hints          |
| `rust-pro`              | Modern Rust async, Tokio, axum, production   |

### Database
| Skill                   | Description                             |
| ----------------------- | --------------------------------------- |
| `database-design`       | Schema design, indexing strategy, ORMs  |

### AI & Prompting
| Skill                     | Description                                   |
| ------------------------- | --------------------------------------------- |
| `claudekit-ai-multimodal` | Process audio, image, video, documents via LLM|
| `geo-fundamentals`        | Generative Engine Optimization                |
| `mcp-builder`             | Model Context Protocol servers principles     |
| `mindrally-meta-prompt`   | Evaluating AI content and solution paths      |
| `prompt-engineering`      | Effective prompting and STAR framework        |

### Cloud & Infrastructure
| Skill                   | Description                           |
| ----------------------- | ------------------------------------- |
| `deployment-procedures` | CI/CD, deploy workflows, rollback     |
| `server-management`     | Process monitoring, scaling decisions |

### Testing & Quality
| Skill                   | Description                    |
| ----------------------- | ------------------------------ |
| `testing-patterns`      | Unit, integration, mocking     |
| `webapp-testing`        | E2E, Playwright strategies     |
| `tdd-workflow`          | RED-GREEN-REFACTOR cycle       |
| `code-review-checklist` | Code review standards & security|
| `lint-and-validate`     | Linting, code formatting       |

### Security
| Skill                   | Description                    |
| ----------------------- | ------------------------------ |
| `vulnerability-scanner` | Security auditing, OWASP 2025  |
| `red-team-tactics`      | MITRE ATT&CK, Detection evasion|

### Architecture, Product & Planning
| Skill                        | Description                                  |
| ---------------------------- | -------------------------------------------- |
| `adr`                        | Arch. Decision Records (Michael Nygard)      |
| `alirezarezvani-code-to-prd` | Reverse-engineer code to complete PRDs       |
| `app-builder`                | Full-stack app scaffolding orchestrator      |
| `architecture`               | System design patterns, requirement analysis |
| `brainstorming`              | Socratic questioning protocol                |
| `document`                   | Audit docs health (README, API, Runbooks)    |
| `documentation-templates`    | Doc formats, AI-friendly guides              |
| `plan-writing`               | Structured task breakdown, verification      |
| `pm-skills-create-prd`       | Create standard PRDs (8-section template)    |

### Mobile & Super Apps
| Skill              | Description                    |
| ------------------ | ------------------------------ |
| `mobile-design`    | Mobile UI/UX for iOS/Android   |
| `zalo-mini-app`    | Zalo Mini Apps, ZaUI, Payment  |

### Game Development
| Skill              | Description           |
| ------------------ | --------------------- |
| `game-development` | Game logic, mechanics |

### SEO & Growth
| Skill              | Description                   |
| ------------------ | ----------------------------- |
| `seo-fundamentals` | SEO, E-E-A-T, Core Web Vitals |

### Shell/CLI
| Skill                | Description               |
| -------------------- | ------------------------- |
| `bash-linux`         | Linux commands, scripting |
| `powershell-windows` | Windows PowerShell        |

### Core & Operations
| Skill                   | Description                               |
| ----------------------- | ----------------------------------------- |
| `behavioral-modes`      | AI operational modes (brainstorm, execute)|
| `clean-code`            | Pragmatic coding standards (Global)       |
| `i18n-localization`     | Internationalization, translation files   |
| `intelligent-routing`   | Automatic agent selection and routing     |
| `parallel-agents`       | Multi-agent orchestration                 |
| `performance-profiling` | Web Vitals, profiling, optimization       |
| `systematic-debugging`  | 4-phase root cause analysis               |

---

## 🔄 Workflows (12)

Slash command procedures. Invoke with `/command`.

| Command          | Description                             |
| ---------------- | --------------------------------------- |
| `/brainstorm`    | Socratic discovery & planning           |
| `/create`        | Create new features / App scaffold      |
| `/debug`         | Systematic system debugging             |
| `/deploy`        | Production deployment pipeline          |
| `/enhance`       | Add or update existing features         |
| `/orchestrate`   | Multi-agent coordination workflow       |
| `/plan`          | Task breakdown & implementation plan    |
| `/preview`       | Local dev server management             |
| `/status`        | Check project & agent status            |
| `/test`          | Generate and run test suites            |
| `/ui-ux-pro-max` | Plan and implement Advanced UI          |
| `/veo-marketing` | Generate cinematic video scripts        |

---

## 🎯 Skill Loading Protocol

```plaintext
User Request → Intelligent Routing → Match Agent → Load SKILL.md
                                                      ↓
                                              Read references/
                                                      ↓
                                              Read scripts/
```

### Skill Structure

```plaintext
skill-name/
├── SKILL.md           # (Required) Metadata & instructions
├── scripts/           # (Optional) Python/Bash scripts
├── references/        # (Optional) Templates, docs
└── assets/            # (Optional) Images, logos
```

### Enhanced Skills (with scripts/references)

| Skill                         | Coverage                              |
| ----------------------------- | ------------------------------------- |
| `app-builder`                 | Full-stack project structural logic   |
| `alirezarezvani-code-to-prd`  | PRD Reverse Engineering               |

---

## 🚀 Master Validation Scripts

Master validation scripts that orchestrate skill-level scripts to ensure stability.

### Master Scripts

| Script          | Purpose                                 | When to Use              |
| --------------- | --------------------------------------- | ------------------------ |
| `checklist.py`  | Priority-based validation (Core checks) | Development, pre-commit  |
| `verify_all.py` | Comprehensive verification (All checks) | Pre-deployment, releases |

### Usage

```bash
# Quick validation during development
python .agent/scripts/checklist.py .

# Full verification before deployment
python .agent/scripts/verify_all.py . --url http://localhost:3000
```

### What They Check

**checklist.py** (Core checks):
- Security (vulnerabilities, secrets)
- Code Quality (lint, types)
- Schema Validation
- Test Suite
- UX Audit
- SEO Check

**verify_all.py** (Full suite):
- Everything in checklist.py PLUS:
- Lighthouse (Core Web Vitals)
- Playwright E2E
- Bundle Analysis
- Mobile Audit
- i18n Check

For details, see `scripts/README.md`

---

## 📊 Statistics

| Metric              | Value                         |
| ------------------- | ----------------------------- |
| **Total Agents**    | 20                            |
| **Total Skills**    | 45                            |
| **Total Workflows** | 12                            |
| **Total Scripts**   | 2 (master) + 18 (skill-level) |
| **Coverage**        | ~95% software development     |

---

## 🔗 Quick Reference

| Need     | Agent                 | Skills                                |
| -------- | --------------------- | ------------------------------------- |
| Web App  | `frontend-specialist` | nextjs-react-expert, frontend-design  |
| API      | `backend-specialist`  | api-patterns, nodejs-best-practices   |
| Mobile   | `mobile-developer`    | mobile-design, zalo-mini-app          |
| Database | `database-architect`  | database-design                       |
| Product  | `product-manager`     | pm-skills-create-prd, app-builder     |
| LLM/AI   | `orchestrator`        | claudekit-ai-multimodal, prompt-eng   |
| Security | `security-auditor`    | vulnerability-scanner                 |
| Testing  | `test-engineer`       | testing-patterns, webapp-testing      |
| Debug    | `debugger`            | systematic-debugging                  |
| Plan     | `project-planner`     | brainstorming, plan-writing           |
