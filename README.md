# RishabhInfoTech — Frontend Architecture & Design System

A commercial, production-quality educational web application designed for teaching college students and beginner programmers **Java Full Stack Development** from zero to job-ready level.

![Brand Mark](https://img.shields.io/badge/Brand-RishabhInfoTech-00D4FF?style=for-the-badge&logoColor=white)
![Stack](https://img.shields.io/badge/Stack-Java%2021%20%7C%20Spring%20Boot%203%20%7C%20React%2018%20%7C%20PostgreSQL-0062FF?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Production%20Frontend%20Active-emerald?style=for-the-badge)

---

## 🚀 Quick Start (Instant Preview)

You can run this application with zero external npm dependencies:

### Method 1: Using Python Built-in Web Server
```bash
cd /Users/rishabh/.gemini/antigravity/scratch/rishabh-infotech-frontend
python3 -m http.server 3000
```
Open **[http://localhost:3000](http://localhost:3000)** in your browser.

### Method 2: Direct File Execution
Double click `index.html` or open it in Google Chrome, Safari, or Brave. All scripts and datasets are bundled for zero-CORS compatibility.

---

## 🏛️ Design System & Color Tokens

| Token | HEX | Description |
| :--- | :--- | :--- |
| **Obsidian Canvas** | `#0A1128` | Primary dark background delivering high visual focus and contrast |
| **Navy Surface** | `#131D38` | Card elevation, sidebar, and container background |
| **Electric Cyan** | `#00D4FF` | Primary interactive brand color, badges, and progress indicators |
| **Cobalt Tech Blue**| `#0062FF` | Structural hierarchy, primary action buttons, active tabs |
| **Slate Border** | `#1E2D52` | Hairline dividers and accessible card outlines |
| **Success Emerald** | `#10B981` | Completed lessons, passed test suites, verified badges |

---

## 🗺️ The 23-Stage Java Full Stack Roadmap

The curriculum is engineered in a logical progression from computational fundamentals to interview selection:

1. **Programming Fundamentals** (Variables, Memory Model, Control Flow, Algorithms)
2. **Core Java** (JVM Architecture, ClassLoader, JIT, Heap/Stack, Garbage Collection)
3. **Object-Oriented Programming (OOP)** (Encapsulation, Inheritance, Polymorphism, SOLID)
4. **Java Collections & Generics** (List, Set, Map, HashMap Internals & Red-Black Treeification)
5. **Exception Handling** (Checked vs Unchecked, Custom Exceptions, Try-With-Resources)
6. **File Handling & I/O Streams** (Byte/Char Streams, Java NIO.2, Jackson JSON Parsing)
7. **Multithreading & Concurrency** (Thread Lifecycle, Synchronization, ExecutorService)
8. **JDBC (Java Database Connectivity)** (PreparedStatement, Connection Pooling HikariCP)
9. **SQL & Database Fundamentals** (PostgreSQL/MySQL, Relational Schema, Indexes, Normalization)
10. **HTML5 & CSS3 Modern Web** (Flexbox, CSS Grid, Responsive Design, a11y)
11. **Modern JavaScript (ES6+)** (Async/Await, Promises, Event Loop, DOM Manipulation)
12. **Git, GitHub & Team Workflows** (Branching, PRs, Merge Conflicts, Rebase, GitHub Actions)
13. **Spring Framework Core** (Inversion of Control, Dependency Injection, Bean Lifecycle, AOP)
14. **Spring Boot 3** (Auto-Configuration, Starters, Actuator, application.yml Profiles)
15. **Building Production REST APIs** (@RestController, DTO Pattern, JSR-380 Validation, Swagger)
16. **Hibernate & Spring Data JPA** (Entity Lifecycle, Relationships, JPQL, N+1 Query Fixes)
17. **Modern Frontend Frameworks (React 18)** (Hooks, Component Trees, State Management, Axios)
18. **Full-Stack Integration** (CORS, Error Envelope Schemas, API Interceptors)
19. **Authentication & Authorization** (Spring Security 6, Stateless JWT, Refresh Tokens, RBAC)
20. **Testing & Debugging** (JUnit 5, Mockito Mocking, @SpringBootTest, Testcontainers)
21. **Deployment & Basic DevOps** (Docker Multi-Stage Builds, Docker Compose, AWS EC2 & RDS)
22. **Real-World Full-Stack Capstone Projects** (E-Commerce, Banking, EdTech LMS, Payment Gateway)
23. **Interview & Placement Preparation** (DSA in Java, Top 100 Spring Questions, System Design)

---

## 🖥️ Included Major Sections & Features

1. **Landing Page:** Hero with value proposition, roadmap teaser, statistics banner, project showcases, placement alumni testimonials, and FAQ accordion.
2. **Student Dashboard:** Visual progress ring (Stage 3/23, 38%), learning hours tracker (+6.5h this week), current in-progress lesson resume card, and streak protector.
3. **Course Page:** Comprehensive 120-hour syllabus, 4 structured modules, instructor profile, prerequisites, learning outcomes, and certificate guarantee.
4. **Learning Room (Video Player):** Distraction-free content player with chapter navigation, notes summary, copy-code button, resource download links, and "Mark as Completed" tracking.
5. **Interactive Practice IDE:** Real-time Java code editor (OpenJDK 21), simulation of JVM compilation and test suite execution against 3 test cases with pass/fail badges and terminal stdout output.
6. **Quiz & Assessment Runner:** Multiple-choice question engine with progress stepper, immediate green/red answer highlighting, detailed technical explanations, score summary, and retake functionality.
7. **Projects Library:** 4 production-scale capstone projects categorized by tier (Beginner, Intermediate, Advanced) with tech stacks, architecture highlights, and spec viewers.
8. **Progress & Analytics:** Clean CSS-powered bar chart visualizer for weekly study hours (Mon–Sun), skill proficiency gauges (Core Java, SQL, Spring Boot, React), and problem metrics.
9. **Certificates & Credentials:** Verifiable certificate modal with student name ("Rishabh Sharma"), unique credential ID, distinction score (96%), and simulated PDF download / LinkedIn sharing.
10. **Profile & Settings:** Student demographic info, target job role, package goal (12–18 LPA), notification preferences, and streak alert toggles.

---

## 📂 Project Structure

```
rishabh-infotech-frontend/
├── index.html                 # Complete standalone production frontend application
├── package.json               # Project manifest with dev scripts
├── README.md                  # Architectural documentation & setup guide
└── src/
    ├── components/            # Extensible component placeholders for Vite/React migration
    └── data/
        └── curriculum.js      # Structured JavaScript data model (Roadmap, Courses, Quizzes, Projects)
```

---

## 🔮 Backend Integration Blueprint

When wiring to a live Spring Boot 3 API:
- Replace `AppState` in `index.html` with React Context or TanStack Query (`useQuery`).
- Map `GET /api/v1/roadmap` to `ROADMAP_STAGES`.
- Map `POST /api/v1/code/execute` to a Dockerized Java sandbox container running `javac` and `java`.
- Map `GET /api/v1/certificates/{id}` to verify cryptographically signed certificates against a database.
