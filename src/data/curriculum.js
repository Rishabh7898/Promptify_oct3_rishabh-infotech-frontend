export const ROADMAP_STAGES = [
  {
    id: 1,
    title: "1. Programming Fundamentals",
    category: "Foundations",
    tier: "Beginner",
    duration: "15 Hours",
    description: "Variables, data types, control structures, operators, loops, and algorithmic problem-solving logic.",
    skills: ["Flowcharts", "Memory Model", "Data Types", "Conditionals", "Loops"],
    status: "completed",
    progress: 100,
    modules: 4,
    lessons: 18
  },
  {
    id: 2,
    title: "2. Core Java",
    category: "Java Core",
    tier: "Beginner",
    duration: "25 Hours",
    description: "JVM internal architecture (ClassLoader, Heap, Stack, JIT), bytecode execution, methods, arrays, and memory management.",
    skills: ["JVM Internals", "JDK vs JRE", "Garbage Collection", "String Pool", "Arrays"],
    status: "completed",
    progress: 100,
    modules: 6,
    lessons: 24
  },
  {
    id: 3,
    title: "3. Object-Oriented Programming (OOP)",
    category: "Java Core",
    tier: "Beginner",
    duration: "30 Hours",
    description: "Encapsulation, Inheritance, Polymorphism, Abstraction, Interfaces, Abstract Classes, and SOLID principles.",
    skills: ["Encapsulation", "Inheritance", "Polymorphism", "SOLID", "Composition"],
    status: "in-progress",
    progress: 75,
    modules: 7,
    lessons: 28
  },
  {
    id: 4,
    title: "4. Java Collections & Generics",
    category: "Java Core",
    tier: "Intermediate",
    duration: "25 Hours",
    description: "List, Set, Map hierarchies, ArrayList vs LinkedList, HashMap internal hashing mechanism, Comparable & Comparator.",
    skills: ["List & Set", "HashMap Internals", "Generics", "TreeSet", "Iterators"],
    status: "upcoming",
    progress: 0,
    modules: 5,
    lessons: 22
  },
  {
    id: 5,
    title: "5. Exception Handling",
    category: "Java Core",
    tier: "Intermediate",
    duration: "12 Hours",
    description: "Checked vs unchecked exceptions, try-catch-finally, try-with-resources, custom exceptions, and production error handling.",
    skills: ["Try-Catch-Finally", "Custom Exceptions", "AutoCloseable", "Stack Traces"],
    status: "upcoming",
    progress: 0,
    modules: 3,
    lessons: 14
  },
  {
    id: 6,
    title: "6. File Handling & I/O Streams",
    category: "Java Core",
    tier: "Intermediate",
    duration: "10 Hours",
    description: "Byte streams, character streams, BufferedReader/Writer, Java NIO.2, serialization, and JSON file parsing.",
    skills: ["Byte Streams", "NIO.2", "Serialization", "Jackson Parser"],
    status: "upcoming",
    progress: 0,
    modules: 3,
    lessons: 12
  },
  {
    id: 7,
    title: "7. Multithreading & Concurrency",
    category: "Advanced Java",
    tier: "Intermediate",
    duration: "22 Hours",
    description: "Thread lifecycle, synchronization, volatile keyword, locks, ExecutorService, thread pools, and concurrent collections.",
    skills: ["Threads & Runnable", "Locks & Sync", "ExecutorService", "Deadlocks"],
    status: "upcoming",
    progress: 0,
    modules: 5,
    lessons: 20
  },
  {
    id: 8,
    title: "8. JDBC (Java Database Connectivity)",
    category: "Data Layer",
    tier: "Intermediate",
    duration: "16 Hours",
    description: "Connecting Java apps to relational databases, Statements, PreparedStatements, CallableStatements, transaction management, and connection pooling (HikariCP).",
    skills: ["JDBC Drivers", "PreparedStatement", "ACID Transactions", "HikariCP"],
    status: "upcoming",
    progress: 0,
    modules: 4,
    lessons: 16
  },
  {
    id: 9,
    title: "9. SQL & Database Fundamentals",
    category: "Data Layer",
    tier: "Intermediate",
    duration: "24 Hours",
    description: "PostgreSQL & MySQL, DDL/DML, complex joins, subqueries, indexing, execution plans, constraints, and normalization (1NF-3NF).",
    skills: ["Relational Design", "Complex Joins", "B-Tree Indexing", "Transactions"],
    status: "upcoming",
    progress: 0,
    modules: 6,
    lessons: 26
  },
  {
    id: 10,
    title: "10. HTML5 & CSS3 Modern Web",
    category: "Frontend",
    tier: "Beginner",
    duration: "18 Hours",
    description: "Semantic elements, Flexbox, CSS Grid, media queries, accessibility (a11y), animations, and modern responsive layouts.",
    skills: ["Semantic HTML", "Flexbox & Grid", "Responsive Design", "CSS Variables"],
    status: "upcoming",
    progress: 0,
    modules: 4,
    lessons: 18
  },
  {
    id: 11,
    title: "11. Modern JavaScript (ES6+)",
    category: "Frontend",
    tier: "Intermediate",
    duration: "26 Hours",
    description: "DOM manipulation, event loop, arrow functions, destructuring, promises, async/await, fetch API, and closures.",
    skills: ["ES6 Modules", "Promises & Async", "Event Loop", "Fetch API"],
    status: "upcoming",
    progress: 0,
    modules: 6,
    lessons: 24
  },
  {
    id: 12,
    title: "12. Git, GitHub & Team Workflows",
    category: "Dev Tools",
    tier: "Beginner",
    duration: "10 Hours",
    description: "Version control, branching models, pull requests, merge conflict resolution, interactive rebase, and GitHub Actions CI basics.",
    skills: ["Git Branching", "PR Reviews", "Merge Conflicts", "Git Rebase"],
    status: "upcoming",
    progress: 0,
    modules: 3,
    lessons: 12
  },
  {
    id: 13,
    title: "13. Spring Framework Core",
    category: "Enterprise Backend",
    tier: "Intermediate",
    duration: "20 Hours",
    description: "Inversion of Control (IoC), Dependency Injection (DI), Spring Bean lifecycle, ApplicationContext, and Spring AOP.",
    skills: ["IoC Container", "Dependency Injection", "Bean Scopes", "Spring AOP"],
    status: "upcoming",
    progress: 0,
    modules: 5,
    lessons: 20
  },
  {
    id: 14,
    title: "14. Spring Boot 3",
    category: "Enterprise Backend",
    tier: "Intermediate",
    duration: "28 Hours",
    description: "Auto-configuration, Spring Initializr, Starters, application.yml profiles, actuators, logging, and production packaging.",
    skills: ["Auto-Configuration", "Starters", "Actuator", "Profiles & Config"],
    status: "upcoming",
    progress: 0,
    modules: 6,
    lessons: 26
  },
  {
    id: 15,
    title: "15. Building Production REST APIs",
    category: "Enterprise Backend",
    tier: "Intermediate",
    duration: "22 Hours",
    description: "@RestController, HTTP verbs, request/response DTOs, path variables, query params, pagination, and OpenAPI/Swagger documentation.",
    skills: ["REST Architecture", "DTO Pattern", "Validation (JSR-380)", "Swagger/OpenAPI"],
    status: "upcoming",
    progress: 0,
    modules: 5,
    lessons: 22
  },
  {
    id: 16,
    title: "16. Hibernate & Spring Data JPA",
    category: "Data Layer",
    tier: "Intermediate",
    duration: "25 Hours",
    description: "Object-Relational Mapping (ORM), entity lifecycle, relationships (@OneToMany, @ManyToMany), JPQL, criteria queries, caching, and N+1 problem optimization.",
    skills: ["ORM Mapping", "N+1 Problem Fix", "JPQL & Native Queries", "Auditing"],
    status: "upcoming",
    progress: 0,
    modules: 6,
    lessons: 25
  },
  {
    id: 17,
    title: "17. Modern Frontend Frameworks (React)",
    category: "Frontend",
    tier: "Intermediate",
    duration: "30 Hours",
    description: "Component hierarchy, hooks (useState, useEffect, useMemo, useCallback), routing, state management, and API consumption with Axios.",
    skills: ["React 18 Hooks", "Tailwind CSS", "React Router", "State Management"],
    status: "upcoming",
    progress: 0,
    modules: 7,
    lessons: 30
  },
  {
    id: 18,
    title: "18. Full-Stack Integration",
    category: "Full Stack",
    tier: "Advanced",
    duration: "20 Hours",
    description: "CORS configuration, connecting React SPA with Spring Boot backend, error envelope schemas, global exception handling, and toast notifications.",
    skills: ["CORS Policy", "Axios Interceptors", "API Error Envelopes", "Full-Stack Wiring"],
    status: "upcoming",
    progress: 0,
    modules: 4,
    lessons: 18
  },
  {
    id: 19,
    title: "19. Authentication & Authorization (Spring Security 6)",
    category: "Security",
    tier: "Advanced",
    duration: "24 Hours",
    description: "Security filter chains, Stateless JWT generation & validation, refresh tokens, role-based access control (RBAC), and password hashing (BCrypt).",
    skills: ["Spring Security 6", "JWT Auth", "RBAC", "BCrypt Hashing"],
    status: "upcoming",
    progress: 0,
    modules: 5,
    lessons: 22
  },
  {
    id: 20,
    title: "20. Testing & Debugging (JUnit 5 & Mockito)",
    category: "Engineering Quality",
    tier: "Advanced",
    duration: "18 Hours",
    description: "Unit testing with JUnit 5, mocking dependencies with Mockito, integration testing with @SpringBootTest and Testcontainers, and test-driven development.",
    skills: ["JUnit 5", "Mockito Mocking", "Testcontainers", "Integration Tests"],
    status: "upcoming",
    progress: 0,
    modules: 4,
    lessons: 18
  },
  {
    id: 21,
    title: "21. Deployment & Basic DevOps",
    category: "DevOps",
    tier: "Advanced",
    duration: "20 Hours",
    description: "Multi-stage Docker builds, docker-compose for local services, CI/CD pipeline setup with GitHub Actions, AWS EC2 deployment, and cloud databases.",
    skills: ["Docker Containers", "Docker Compose", "GitHub Actions CI", "AWS EC2 & RDS"],
    status: "upcoming",
    progress: 0,
    modules: 5,
    lessons: 20
  },
  {
    id: 22,
    title: "22. Real-World Full-Stack Capstone Projects",
    category: "Capstone",
    tier: "Advanced",
    duration: "45 Hours",
    description: "Building production-grade multi-tier enterprise systems: E-Commerce, Course Management LMS, and Microservices Payment Gateway with live deployment.",
    skills: ["System Architecture", "Payment Gateway", "Clean Code", "Live Deployment"],
    status: "upcoming",
    progress: 0,
    modules: 6,
    lessons: 35
  },
  {
    id: 23,
    title: "23. Interview & Placement Preparation",
    category: "Career",
    tier: "Job Ready",
    duration: "30 Hours",
    description: "DSA in Java, top 100 Java/Spring interview questions, system design fundamentals, resume building, mock technical interviews, and HR prep.",
    skills: ["Java DSA", "System Design Basics", "Mock Interviews", "Resume Reviews"],
    status: "upcoming",
    progress: 0,
    modules: 6,
    lessons: 28
  }
];

export const CURRENT_STUDENT = {
  name: "Rishabh Sharma",
  email: "rishabh@example.com",
  role: "Aspiring Java Full Stack Engineer",
  avatar: "RS",
  targetRole: "Junior Full Stack Developer",
  college: "Institute of Technology & Engineering",
  currentStreakDays: 14,
  totalHoursLearned: 48.5,
  problemsSolved: 36,
  overallProgress: 38,
  quizzesTaken: 12,
  averageQuizScore: 92,
  earnedCertificates: 2,
  activeCourseId: "course-java-core"
};

export const COURSES = [
  {
    id: "course-java-core",
    title: "Java Full Stack Developer Masterclass: Zero to Job Ready",
    tagline: "The definitive career roadmap from Java fundamentals to Spring Boot microservices and React.",
    level: "Beginner to Advanced",
    duration: "120 Hours",
    rating: 4.9,
    enrolledCount: "14,820",
    instructor: {
      name: "Er. Rishabh Verma",
      role: "Lead Systems Architect & Ex-FAANG Mentor",
      experience: "12+ Years Enterprise Experience",
      avatar: "RV"
    },
    prerequisites: ["Zero prior coding experience required", "A laptop with Windows, macOS, or Linux"],
    outcomes: [
      "Master modern Java (Java 17/21) and Object-Oriented System Design",
      "Build robust RESTful Microservices with Spring Boot 3 & Spring Cloud",
      "Design relational databases with PostgreSQL, Hibernate, and Spring Data JPA",
      "Craft reactive, modern responsive frontends with React 18 & Tailwind CSS",
      "Secure applications using Spring Security 6 & JWT Token Authentication",
      "Deploy scalable applications to Docker containers & AWS Cloud"
    ],
    modules: [
      {
        id: "mod-1",
        title: "Module 1: Programming Fundamentals & JVM Internals",
        lessonsCount: 18,
        duration: "15 Hours",
        completedCount: 18,
        lessons: [
          { id: "les-101", title: "Introduction to Java Architecture & JVM Ecosystem", duration: "18m", completed: true },
          { id: "les-102", title: "Variables, Primitive Types & Memory Stack Allocation", duration: "24m", completed: true },
          { id: "les-103", title: "Control Flow: Conditionals, Loops & Pattern Programs", duration: "32m", completed: true },
          { id: "les-104", title: "Arrays, Memory References & Heap Allocation", duration: "28m", completed: true }
        ]
      },
      {
        id: "mod-2",
        title: "Module 2: Object-Oriented Programming (OOP) Deep Dive",
        lessonsCount: 28,
        duration: "30 Hours",
        completedCount: 21,
        lessons: [
          { id: "les-201", title: "Classes, Objects & Constructors in Depth", duration: "26m", completed: true },
          { id: "les-202", title: "Encapsulation & Access Modifiers (public, private, protected)", duration: "30m", completed: true },
          { id: "les-203", title: "Inheritance, super keyword & Method Overriding", duration: "35m", completed: true },
          { id: "les-204", title: "Polymorphism: Compile-Time vs Runtime Dispatch", duration: "42m", completed: false, isCurrent: true },
          { id: "les-205", title: "Abstract Classes vs Interfaces & Java 8 Default Methods", duration: "38m", completed: false },
          { id: "les-206", title: "Applying SOLID Design Principles in Real Code", duration: "45m", completed: false }
        ]
      },
      {
        id: "mod-3",
        title: "Module 3: Java Collections Framework & Generics",
        lessonsCount: 22,
        duration: "25 Hours",
        completedCount: 0,
        lessons: [
          { id: "les-301", title: "Collection Hierarchy & Generics Type Safety", duration: "25m", completed: false },
          { id: "les-302", title: "List Interface: ArrayList vs LinkedList Performance", duration: "32m", completed: false },
          { id: "les-303", title: "HashMap Internals: Hash Codes, Buckets & Collision Resolution", duration: "45m", completed: false },
          { id: "les-304", title: "Set Implementations: HashSet, LinkedHashSet & TreeSet", duration: "28m", completed: false }
        ]
      },
      {
        id: "mod-4",
        title: "Module 4: Spring Boot 3 & Enterprise REST APIs",
        lessonsCount: 26,
        duration: "28 Hours",
        completedCount: 0,
        lessons: [
          { id: "les-401", title: "Spring Initializr & Anatomy of a Spring Boot Application", duration: "22m", completed: false },
          { id: "les-402", title: "Dependency Injection & Bean Lifecycle in Spring", duration: "36m", completed: false },
          { id: "les-403", title: "Building RESTful Endpoints with @RestController & DTOs", duration: "40m", completed: false }
        ]
      }
    ]
  }
];

export const CURRENT_LESSON = {
  id: "les-204",
  courseId: "course-java-core",
  title: "Polymorphism: Compile-Time vs Runtime Dynamic Method Dispatch",
  moduleTitle: "Module 2: Object-Oriented Programming (OOP) Deep Dive",
  duration: "42m",
  videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // mock embed placeholder
  description: "Learn how Java decides which method implementation to execute at runtime. We analyze the Method Table (vtable) inside the JVM, difference between method overloading and overriding, dynamic method dispatch with parent reference pointing to child objects, and real-world enterprise design patterns.",
  keyTakeaways: [
    "Compile-time polymorphism is resolved using method overloading based on argument signatures.",
    "Runtime polymorphism is achieved via method overriding where the JVM inspects the actual object type on the heap.",
    "Parent reference variable can hold child objects: `PaymentService service = new UpiPaymentService();`",
    "Constructors and static methods cannot be overridden in Java."
  ],
  codeSnippet: `// Polymorphic Payment Gateway Example in Modern Java
public interface PaymentMethod {
    boolean processPayment(double amount);
    String getTransactionId();
}

public class UpiPayment implements PaymentMethod {
    private final String vpaId;

    public UpiPayment(String vpaId) {
        this.vpaId = vpaId;
    }

    @Override
    public boolean processPayment(double amount) {
        System.out.println("Processing UPI payment of ₹" + amount + " to VPA: " + vpaId);
        // Simulating instant settlement
        return true;
    }

    @Override
    public String getTransactionId() {
        return "UPI-" + System.currentTimeMillis();
    }
}

public class CheckoutService {
    // Loose coupling via interface abstraction
    public void checkout(PaymentMethod paymentMethod, double totalAmount) {
        boolean success = paymentMethod.processPayment(totalAmount);
        if (success) {
            System.out.println("Order Confirmed! Txn Ref: " + paymentMethod.getTransactionId());
        }
    }
}`,
  notes: "Crucial for tech interviews: Expect questions asking about the JVM method table (vtable) and why static methods do not undergo dynamic dispatch (they are bound at compile time based on class reference).",
  resources: [
    { title: "JVM Specification: Dynamic Method Invocation (invokevirtual)", type: "PDF Guide", size: "1.4 MB" },
    { title: "Source Code GitHub Repo: Lesson-204-Polymorphism.zip", type: "Code", size: "350 KB" },
    { title: "Cheatsheet: Method Overloading vs Overriding Comparison Matrix", type: "Doc", size: "520 KB" }
  ]
};

export const CODING_PRACTICE = {
  id: "prob-101",
  title: "Filter High-Value Orders Using Java Streams",
  difficulty: "Easy / Medium",
  category: "Java 8+ Streams API",
  timeLimit: "2.0s",
  memoryLimit: "256 MB",
  tags: ["Java 8", "Streams", "Functional Programming", "Collections"],
  description: `You are given a list of \`Order\` objects. Each order contains an \`orderId\` (int), \`customerName\` (String), and \`amount\` (double).

Write a method \`public List<String> getPremiumCustomerNames(List<Order> orders, double minAmount)\` that:
1. Filters orders whose \`amount\` is strictly greater than or equal to \`minAmount\`.
2. Extracts the \`customerName\`.
3. Sorts the names alphabetically.
4. Returns the result as a distinct \`List<String>\`.

If the list is empty or null, return an empty list.`,
  starterCode: `import java.util.*;
import java.util.stream.Collectors;

public class Solution {
    public static class Order {
        int orderId;
        String customerName;
        double amount;

        public Order(int id, String name, double amt) {
            this.orderId = id;
            this.customerName = name;
            this.amount = amt;
        }
    }

    public static List<String> getPremiumCustomerNames(List<Order> orders, double minAmount) {
        if (orders == null || orders.isEmpty()) {
            return Collections.emptyList();
        }

        // TODO: Implement using Java 8 Stream API
        return orders.stream()
            .filter(o -> o.amount >= minAmount)
            .map(o -> o.customerName)
            .distinct()
            .sorted()
            .collect(Collectors.toList());
    }

    public static void main(String[] args) {
        List<Order> sampleOrders = Arrays.asList(
            new Order(101, "Aarav", 4500.0),
            new Order(102, "Priya", 12000.0),
            new Order(103, "Rohan", 8900.0),
            new Order(104, "Aarav", 15000.0),
            new Order(105, "Sneha", 2500.0)
        );

        List<String> result = getPremiumCustomerNames(sampleOrders, 5000.0);
        System.out.println("Premium Customers: " + result);
    }
}`,
  testCases: [
    { id: 1, input: "orders: 5 entries, minAmount = 5000.0", expected: "['Aarav', 'Priya', 'Rohan']", output: "['Aarav', 'Priya', 'Rohan']", status: "passed" },
    { id: 2, input: "orders: null or empty list, minAmount = 1000.0", expected: "[]", output: "[]", status: "passed" },
    { id: 3, input: "orders: all under threshold, minAmount = 20000.0", expected: "[]", output: "[]", status: "passed" }
  ],
  hints: [
    "Use `.filter(order -> order.amount >= minAmount)` to eliminate lower-value orders.",
    "Chain `.map(order -> order.customerName)` to extract the string values.",
    "Don't forget `.distinct()` before `.sorted()` to keep customer names unique."
  ]
};

export const QUIZ_DATA = {
  id: "quiz-oop-spring",
  title: "Sprint Assessment: Core Java & Spring Boot Fundamentals",
  timeMinutes: 10,
  questions: [
    {
      id: 1,
      question: "Which of the following is TRUE regarding Dynamic Method Dispatch in Java?",
      options: [
        "It determines method calls at compile time based on the reference type.",
        "It resolves overridden methods at runtime based on the actual object created in heap memory.",
        "It allows static methods to be dynamically bound during program execution.",
        "It requires all methods in the parent class to be marked abstract."
      ],
      correctIndex: 1,
      explanation: "Dynamic Method Dispatch is the mechanism by which a call to an overridden method is resolved at runtime rather than compile time. The JVM inspects the runtime object instance via its virtual method table (vtable)."
    },
    {
      id: 2,
      question: "In Spring Boot, what is the primary difference between @Controller and @RestController?",
      options: [
        "@RestController automatically annotates all methods with @ResponseBody, returning serialized JSON/XML rather than view templates.",
        "@Controller is asynchronous, whereas @RestController is synchronous.",
        "@RestController cannot handle HTTP POST requests.",
        "@Controller only works with PostgreSQL databases."
      ],
      correctIndex: 0,
      explanation: "@RestController is a convenience annotation that combines @Controller and @ResponseBody. It ensures methods directly serialize return objects into HTTP response bodies (JSON/XML) by default."
    },
    {
      id: 3,
      question: "What problem does the FetchType.LAZY configuration in Hibernate/JPA solve, and what is its primary caveat?",
      options: [
        "It prevents database deadlocks, but prevents any child records from ever being read.",
        "It delays child entity loading until explicitly accessed to prevent memory bloat, but may trigger the N+1 select problem if unoptimized.",
        "It speeds up INSERT operations by ignoring foreign key constraints completely.",
        "It forces all entity queries to run through Redis cache automatically."
      ],
      correctIndex: 1,
      explanation: "Lazy loading defers query execution until the related association is accessed, saving memory and query overhead. However, iterating through a list of entities with lazy associations without a JOIN FETCH causes the notorious N+1 query problem."
    },
    {
      id: 4,
      question: "Why should you use PreparedStatement instead of Statement in JDBC?",
      options: [
        "PreparedStatement is pre-compiled, improves performance on repeated queries, and defends against SQL Injection attacks.",
        "PreparedStatement avoids having to provide database credentials.",
        "Statement does not support SELECT queries.",
        "PreparedStatement converts all SQL queries to NoSQL documents."
      ],
      correctIndex: 0,
      explanation: "PreparedStatement automatically sanitizes parameters by treating input strictly as literals rather than executable SQL, protecting against SQL injection, and the database pre-compiles the execution plan."
    },
    {
      id: 5,
      question: "In Java Collections, what happens internally when two distinct keys yield the same hash code in a HashMap (Java 8+)?",
      options: [
        "The second key overwrites the first key immediately.",
        "An unchecked HashCollisionException is thrown by the JVM.",
        "The entries are stored in a linked list bucket, which converts into a Red-Black Tree once bucket size exceeds 8 (TREEIFY_THRESHOLD).",
        "The HashMap resets its capacity to double and discards existing entries."
      ],
      correctIndex: 2,
      explanation: "In Java 8+, hash collisions in HashMap are handled via separate chaining in linked list buckets. When a bucket reaches 8 elements and table capacity is at least 64, it treeifies into a self-balancing Red-Black Tree (O(log n) lookup instead of O(n))."
    }
  ]
};

export const PROJECTS = [
  {
    id: "proj-1",
    title: "Enterprise Banking & Transaction Management System",
    tier: "Beginner",
    category: "Core Java & JDBC",
    duration: "15 Hours",
    skills: ["OOP Design", "JDBC", "PostgreSQL", "ACID Transactions", "HikariCP"],
    description: "A secure console and database-backed banking platform supporting account creation, ledger entries, money transfers with rollback on failure, and statement generation.",
    highlights: ["Thread-safe balance updates", "Custom business exceptions", "Database connection pool integration"],
    githubUrl: "https://github.com/rishabhinfotech/enterprise-banking-cli"
  },
  {
    id: "proj-2",
    title: "E-Commerce REST Microservices Platform",
    tier: "Intermediate",
    category: "Spring Boot & JPA",
    duration: "35 Hours",
    skills: ["Spring Boot 3", "Spring Data JPA", "PostgreSQL", "JWT Auth", "Swagger"],
    description: "Production-grade backend service with product catalog, cart management, checkout with discount coupons, order status state machine, and OpenAPI documentation.",
    highlights: ["Stateless JWT authorization", "N+1 query optimization with JOIN FETCH", "Pagination and multi-attribute filtering"],
    githubUrl: "https://github.com/rishabhinfotech/ecommerce-rest-api"
  },
  {
    id: "proj-3",
    title: "Rishabh LMS: Full-Stack Learning Management System",
    tier: "Advanced",
    category: "Full Stack (Spring + React)",
    duration: "50 Hours",
    skills: ["React 18", "Spring Boot", "Spring Security 6", "Docker", "Tailwind CSS"],
    description: "End-to-end commercial EdTech platform featuring video course streaming, interactive quizzes, automated code evaluation runner, and dynamic PDF certificate generation.",
    highlights: ["React Hooks state management", "Role-Based Access Control (Student vs Instructor)", "Docker multi-stage container deployment"],
    githubUrl: "https://github.com/rishabhinfotech/edtech-lms-platform"
  },
  {
    id: "proj-4",
    title: "Distributed Payment Gateway with Stripe Webhooks",
    tier: "Advanced",
    category: "Enterprise System",
    duration: "40 Hours",
    skills: ["Spring Boot", "Kafka / Event Queue", "Stripe API", "Redis", "Resilience4j"],
    description: "Resilient financial transaction engine implementing idempotent payment handling, webhook verification, circuit breakers, and distributed rate limiting with Redis.",
    highlights: ["Idempotency keys prevention of duplicate charges", "Circuit breaker fallback mechanism", "Event-driven asynchronous audit logging"],
    githubUrl: "https://github.com/rishabhinfotech/distributed-payment-service"
  }
];

export const CERTIFICATES = [
  {
    id: "CERT-RIT-2026-8841",
    courseTitle: "Java Programming Fundamentals & Object-Oriented Architecture",
    studentName: "Rishabh Sharma",
    issueDate: "September 15, 2026",
    credentialId: "RIT-JAVA-CORE-8841",
    score: "96% Distinction",
    status: "Verified",
    skills: ["Core Java", "OOP Principles", "Exception Handling", "Memory Model"],
    verificationUrl: "https://verify.rishabhinfotech.edu/cert/RIT-JAVA-CORE-8841"
  },
  {
    id: "CERT-RIT-2026-9214",
    courseTitle: "Relational Database Engineering & JDBC Connectivity",
    studentName: "Rishabh Sharma",
    issueDate: "September 28, 2026",
    credentialId: "RIT-DB-JDBC-9214",
    score: "94% Distinction",
    status: "Verified",
    skills: ["PostgreSQL", "SQL Optimization", "JDBC Architecture", "ACID Compliance"],
    verificationUrl: "https://verify.rishabhinfotech.edu/cert/RIT-DB-JDBC-9214"
  }
];

export const ANALYTICS_DATA = {
  weeklyHours: [
    { day: "Mon", hours: 4.5 },
    { day: "Tue", hours: 6.0 },
    { day: "Wed", hours: 5.5 },
    { day: "Thu", hours: 7.2 },
    { day: "Fri", hours: 6.8 },
    { day: "Sat", hours: 9.5 },
    { day: "Sun", hours: 9.0 }
  ],
  skillProficiency: [
    { skill: "Core Java & OOP", level: 90 },
    { skill: "Data Structures in Java", level: 75 },
    { skill: "SQL & Databases", level: 82 },
    { skill: "Spring Boot 3", level: 60 },
    { skill: "Frontend & React", level: 55 },
    { skill: "System Architecture", level: 48 }
  ]
};

export const TESTIMONIALS = [
  {
    name: "Aditya Nair",
    role: "Software Development Engineer at Oracle",
    college: "Batch of 2025",
    content: "The 23-step roadmap at RishabhInfoTech removed all confusion about what to learn next. From JVM memory model to deploying Spring Boot on AWS, this was the exact reason I cracked my 14 LPA on-campus offer.",
    avatar: "AN"
  },
  {
    name: "Sneha Reddy",
    role: "Associate Java Engineer at Cognizant",
    college: "Batch of 2025",
    content: "The hands-on coding practice and real-world microservices project gave me the confidence to answer every question in my technical round. The depth of explanation on Collections and Spring Security is unmatched.",
    avatar: "SR"
  },
  {
    name: "Karan Verma",
    role: "Full Stack Intern at Razorpay",
    college: "Batch of 2026",
    content: "No fluff, no outdated Swing or Applet tutorials. RishabhInfoTech focuses 100% on what modern tech companies actually test for: Java 17, Spring Boot 3, REST APIs, and clean code principles.",
    avatar: "KV"
  }
];

export const FAQS = [
  {
    q: "I have never written a line of code. Can I start with RishabhInfoTech?",
    a: "Yes! Stage 1 begins with Programming Fundamentals and computational thinking from scratch. You do not need any prior coding background or computer science degree."
  },
  {
    q: "How does the 23-stage Java Full Stack roadmap work?",
    a: "The roadmap is a structured, step-by-step path designed in sequence. Each stage has lessons, coding challenges, and milestone projects so you master both backend Java and frontend integration before moving forward."
  },
  {
    q: "Are the projects realistic enough for my resume?",
    a: "Absolutely. Rather than basic calculator apps, you will build distributed payment systems, real-time LMS platforms, and multi-tier Spring Boot microservices with authentication and live database deployment."
  },
  {
    q: "Do I receive a verified certificate upon completion?",
    a: "Yes. Every course and milestone project includes a cryptographically verifiable digital certificate with a unique credential ID that you can link directly to your LinkedIn profile and resume."
  }
];
