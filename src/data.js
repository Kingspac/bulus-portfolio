export const profile = {
  name: "Bulus Kingsley",
  title: "Full Stack Developer",
  tagline: "Powered by MERN Stack Technology",
  photo: "/profile.jpg",
  cv: "/cv.pdf",
  whatsapp: "2340000000000", // country code + number, no + or spaces
  email: "hello@example.com",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

// Edit these paragraphs to your own words
export const about = [
  "I'm a fresh graduate and solo full stack developer who builds complete web apps with the MERN stack, from database design to polished, responsive interfaces.",
  "I'm currently building Enchwra, a cultural social platform for the Adara people, and I do all my development on an Android phone using Termux. I love animation, clean UI, and shipping real products.",
];

export const socials = [
  { name: "GitHub", url: "https://github.com/your-username" },
  { name: "LinkedIn", url: "https://linkedin.com/in/your-username" },
  { name: "X", url: "https://x.com/your-username" },
];

export const skills = [
  "MongoDB",
  "Express.js",
  "React",
  "Node.js",
  "JavaScript",
  "TypeScript",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "REST APIs",
  "JWT Auth",
  "Git & GitHub",
  "Vite",
  "Termux",
];

export const projects = [
  {
    id: 1,
    title: "Enchwra",
    desc: "Cultural social platform for the Adara people.",
    tech: ["MongoDB", "Express", "React", "Node"],
    image: "/projects/enchwra.jpg",
    link: "https://example.com/enchwra",
  },
  {
    id: 2,
    title: "Weather App",
    desc: "Live weather search with loading and error states.",
    tech: ["React", "API"],
    image: "/projects/weather.jpg",
    link: "https://example.com/weather",
  },
  {
    id: 3,
    title: "Task Manager",
    desc: "Add, edit, filter tasks with dark mode.",
    tech: ["React", "localStorage"],
    image: "/projects/tasks.jpg",
    link: "https://example.com/tasks",
  },
  {
    id: 4,
    title: "Expense Tracker",
    desc: "Per-user expenses with charts.",
    tech: ["MERN", "Charts"],
    image: "/projects/expense.jpg",
    link: "https://example.com/expense",
  },
  {
    id: 5,
    title: "Movie Browser",
    desc: "Search, pagination and detail modal.",
    tech: ["React", "API"],
    image: "/projects/movies.jpg",
    link: "https://example.com/movies",
  },
  {
    id: 6,
    title: "Notes App",
    desc: "JWT auth and full CRUD dashboard.",
    tech: ["MERN", "JWT"],
    image: "/projects/notes.jpg",
    link: "https://example.com/notes",
  },
];

export const templates = [
  {
    id: 1,
    name: "Nova Portfolio",
    desc: "Animated dark developer portfolio built with React and Vite.",
    price: "₦15,000",
    image: "/templates/nova.jpg",
    preview: "https://example.com/nova",
    buy: "https://selar.com/your-product-1",
  },
  {
    id: 2,
    name: "Shopify-Lite Store",
    desc: "Responsive e-commerce front end with cart.",
    price: "₦25,000",
    image: "/templates/store.jpg",
    preview: "https://example.com/store",
    buy: "https://selar.com/your-product-2",
  },
  {
    id: 3,
    name: "Admin Dashboard",
    desc: "Clean dashboard UI with charts and tables.",
    price: "₦20,000",
    image: "/templates/admin.jpg",
    preview: "https://example.com/admin",
    buy: "https://selar.com/your-product-3",
  },
];

export const whatsappLink = (msg) =>
  `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(msg)}`;
