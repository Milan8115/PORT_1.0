export const projects = [
  {
    id: "career",
    n: "01",
    title: "CareerConnect",
    category: "Web",
    kind: "INTERNSHIP PROJECT",
    subtitle: "A clearer path to the next opportunity.",
    description:
      "A responsive career portal that brings job discovery, search, and role details into one connected experience.",
    tags: ["JavaScript", "HTML / CSS", "Node.js"],
    repo: "https://github.com/Milan8115/career-connect-portal",
    overview:
      "Built during my internship at Gameonix Esports & Gaming, CareerConnect connects five pages with a lightweight backend written using Node’s native modules.",
    details: [
      "Keyword, category, and location filtering for job discovery.",
      "Connected home, jobs, job details, login, and contact pages.",
      "Fetch API integration and local JSON storage for the learning backend.",
    ],
    note: "The login flow is a simulation for learning, rather than production authentication.",
  },
  {
    id: "energy",
    n: "02",
    title: "Energy Trading",
    category: "Blockchain",
    kind: "BLOCKCHAIN EXPLORATION",
    subtitle: "Small units. Shared possibilities.",
    description:
      "A basic marketplace contract for listing and purchasing energy units on Stellar’s Soroban platform.",
    tags: ["Rust", "Soroban", "Stellar"],
    repo: "https://github.com/Milan8115/energy-trading",
    overview:
      "A hands-on experiment from the Build on Stellar bootcamp: translating a peer-to-peer energy marketplace idea into a Soroban smart contract.",
    details: [
      "Create energy listings with a quantity and price.",
      "Purchase available units and update remaining supply.",
      "Inspect listing data through the smart contract.",
    ],
    note: "An experimental contract. Real XLM payments, wallet authentication, and a web frontend are future work.",
  },
  {
    id: "dictionary",
    n: "03",
    title: "Everyday Dictionary",
    category: "Web",
    kind: "REACT APPLICATION",
    subtitle: "Find the meaning. Keep the curiosity.",
    description:
      "A focused word-search app with definitions, examples, synonyms, and pronunciation from the Free Dictionary API.",
    tags: ["React", "JavaScript", "REST API"],
    repo: "https://github.com/Milan8115/Dictionary",
    overview:
      "A small React application built around one everyday interaction: look up a word and understand it quickly.",
    details: [
      "Search a word using an API-backed interface.",
      "Read meanings, examples, and related synonyms.",
      "Play pronunciation audio when it is available from the API.",
    ],
    note: "A personal learning project focused on React and working with an external API.",
  },
];
export type Project = (typeof projects)[number];
