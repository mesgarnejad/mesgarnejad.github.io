export const resume = {
  name: "Ata Mesgarnejad",
  role: "Senior Software Engineer · C++ / HPC / Physics Simulation",
  availability: "US citizen · No sponsorship required",
  summary:
    "Computational scientist and software engineer with 16+ years of academic and industrial experience architecting and scaling high-performance C++ codebases for physics simulation, numerical methods, and computational geometry. Builds production FEM solvers, meshing libraries, and linear-algebra back ends alongside LLM tooling, MCP servers, and OpenTelemetry-based observability. Leads architecture, code health, and testability initiatives while mentoring engineers who turn research prototypes into customer-facing features.",
  contacts: [
    { label: "Email", value: "a.mesgarnejad@gmail.com", href: "mailto:a.mesgarnejad@gmail.com" },
    { label: "GitHub", value: "mesgarnejad", href: "https://github.com/mesgarnejad" },
    { label: "LinkedIn", value: "mesgarnejad", href: "https://www.linkedin.com/in/mesgarnejad" },
    { label: "Web", value: "mesgarnejad.com", href: "https://www.mesgarnejad.com" }
  ],
  highlights: [
    {
      value: "LLM",
      label: "Applied AI systems",
      details: [
        "LLM tooling and production RAG for engineering workflows",
        "MCP servers connecting models with technical systems",
        "OpenTelemetry instrumentation for service observability"
      ]
    },
    {
      value: "FEM",
      label: "Computational mechanics",
      details: [
        "Nonlinear finite-element and multiphysics simulation",
        "Linear-algebra back ends and Krylov solvers",
        "Computational geometry, meshing, MPI, and CUDA"
      ]
    },
    {
      value: "Systems",
      label: "Software engineering",
      details: [
        "Legacy components in Fortran and C",
        "Newer systems in Rust, C++, and C#",
        "APIs, automation, and developer tooling in Python",
        "CI/CD, unit testing, and cross-runtime integration"
      ]
    }
  ],
  experience: [
    {
      role: "Senior Research Engineer, Offshore",
      organization: "Bentley Systems",
      location: "Remote",
      dates: "Apr 2024 — Present",
      bullets: [
        "Develop LLM tooling and MCP servers for engineering workflows, with OpenTelemetry instrumentation for service observability.",
        "Architect and maintain core linear-algebra solvers and a simplicial-complex meshing library used across the production simulation stack, driving code-health and correctness standards.",
        "Work across a heterogeneous stack spanning legacy Fortran/C components, newer Rust/C++/C# systems, and Python APIs and tooling, diagnosing and hardening cross-runtime issues including Windows DLL loading and thread safety.",
        "Extended the production Python API with licensing and user-identity features, improved performance, and simplified dependencies for prototyping and ML integration.",
        "Built and maintain CI/CD for a C++/.NET/Python/Fortran/TypeScript stack, supported by unit-test suites in C++, Fortran, and Python.",
        "Collaborate on graph-based and time-series ML surrogates for nonlinear solid mechanics and structural deformation.",
        "Delivered a production RAG component and DNN training pipelines; mentor engineers and interns on modeling, simulation, and code quality."
      ]
    },
    {
      role: "Research Engineer II, Offshore",
      organization: "Bentley Systems",
      location: "Remote",
      dates: "Apr 2022 — Apr 2024",
      bullets: [
        "Designed and implemented the Plaxis–SACS interface for the PISA soil–structure interaction model, with validation against the underlying geotechnical physics.",
        "Developed mesh refinement, smoothing, curved-shell meshing, and stress-concentration-factor extraction and smoothing in the JointMesher computational-geometry component.",
        "Improved core SACS production algorithms and optimized time integration and sorting in the SACS Wave Response fluid–structure interaction module."
      ]
    },
    {
      role: "Software Engineer, Offshore",
      organization: "Bentley Systems",
      location: "Remote",
      dates: "Jun 2020 — Apr 2022",
      bullets: [
        "Implemented Krylov-subspace solvers with automatic null-space detection and removal in the main SACS FEM solution engine.",
        "Implemented and validated higher-order finite elements for the production FEM engine.",
        "Implemented automatic meshing and stress-concentration-factor extraction for ring-stiffened joints and explicit stiffeners."
      ]
    },
    {
      role: "Postdoctoral Mechanical Engineering Research Associate",
      organization: "Northeastern University",
      location: "Boston, MA",
      dates: "Jul 2015 — May 2020",
      bullets: [
        "Developed coupled multiphysics models for fracture and failure in energy-storage and composite systems.",
        "Led development of a massively parallel CUDA electro-mechanical simulation framework for cardiac dynamics.",
        "Combined ML with FEM-based failure simulation to accelerate composite-material design and mentored junior researchers."
      ]
    },
    {
      role: "Postdoctoral Mechanical Engineering Research Associate",
      organization: "Louisiana State University",
      location: "Baton Rouge, LA",
      dates: "Jan 2015 — Jun 2015",
      bullets: [
        "Implemented a distributed network-search algorithm for unstructured meshes in PETSc, enabling restart on different CPU counts."
      ]
    },
    {
      role: "Mechanical Engineering Research Assistant",
      organization: "Louisiana State University",
      location: "Baton Rouge, LA",
      dates: "Jan 2008 — Dec 2014",
      bullets: [
        "Developed a theoretical framework for deriving PDEs for reduced-dimension thin-film models.",
        "Developed a multiphysics HPC C++ code using PETSc and libMesh for numerical optimization of PDEs."
      ]
    }
  ],
  skillGroups: [
    { name: "Programming", skills: ["C", "C++", "C#", "Rust", "Modern Fortran", "Python", "CUDA"] },
    { name: "Numerical algorithms", skills: ["FEM", "Mesh generation & refinement", "Krylov solvers", "Numerical optimization"] },
    { name: "Computational geometry", skills: ["Meshing", "Graph algorithms", "Shell & surface meshing"] },
    { name: "Engineering systems", skills: ["API design", "Modular architecture", "CI/CD", "Unit testing", "OpenTelemetry", "Observability"] },
    { name: "AI engineering", skills: ["LLM tooling", "RAG", "MCP servers", "PyTorch", "JAX", "Jupyter"] },
    { name: "HPC", skills: ["MPI", "CUDA", "PETSc", "libMesh"] },
    { name: "Platforms & interop", skills: ["Linux", "Windows", "Slurm", "OpenMPI", "MSVC", "GNU", "Intel", "pythonnet / CLR"] }
  ],
  education: [
    { degree: "Ph.D. in Computational Mechanics", school: "Louisiana State University", dates: "2008 — 2014" },
    { degree: "M.Sc. in Applied Mathematics", school: "Louisiana State University", dates: "2008 — 2014" }
  ],
  award: {
    title: "Founder’s Award",
    organization: "Bentley Systems",
    date: "2024",
    detail: "Recognized for contributions supporting cloud computing."
  },
  publications: [
    {
      title: "Extended Winkler Model for design of offshore wind turbine large diameter monopiles",
      venue: "Ocean Engineering 313, 119619 · 2024",
      href: "https://doi.org/10.1016/j.oceaneng.2024.119619"
    },
    {
      title: "Topology-enhanced mechanical stability of swelling nanoporous electrodes",
      venue: "npj Computational Materials 9, 116 · 2023",
      href: "https://doi.org/10.1038/s41524-023-01047-y"
    },
    {
      title: "Spatiotemporal Organization of Electromechanical Phase Singularities During Focal and Re-entrant Cardiac Arrhythmias",
      venue: "Physical Review X 12, 021052 · 2022",
      href: "https://doi.org/10.1103/PhysRevX.12.021052"
    },
    {
      title: "Enhanced toughness in ceramic-reinforced polymer composites with herringbone architectures",
      venue: "Composites Science and Technology 204, 108513 · 2021 · Co-first author",
      href: "https://doi.org/10.1016/j.compscitech.2020.108513"
    },
    {
      title: "Crack Path Selection in Orientationally Ordered Composites",
      venue: "Physical Review E 102, 013004 · 2020",
      href: "https://doi.org/10.1103/PhysRevE.102.013004"
    },
    {
      title: "Vulnerable Window of Yield Strength for Swelling-Driven Fracture of Phase-Transforming Battery Materials",
      venue: "npj Computational Materials 6, 58 · 2020",
      href: "https://doi.org/10.1038/s41524-020-0315-8"
    }
  ],
  scholar: "https://scholar.google.com/citations?user=I3BeT2QAAAAJ&hl=en",
  patent: {
    title: "Ceramic-Reinforced Polymer Composites With Herringbone Architecture",
    number: "US20210276253A1",
    href: "https://patents.google.com/patent/US20210276253A1/en"
  }
};
