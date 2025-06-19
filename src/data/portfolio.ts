import type { PersonalInfo, Education, Skills, Experience, Project } from '../types';

export const personalInfo: PersonalInfo = {
  name: "Krish Sanghvi",
  email: "krishksanghvi@gmail.com",
  phone: "216-598-6415",
  linkedin: "https://linkedin.com/in/krishsanghvi",
  github: "https://github.com/krishsanghvi",
  location: "Columbus, OH",
  title: "Computer Science & Engineering Graduate & AI Researcher",
  summary: "Computer Science and Engineering graduate from The Ohio State University specializing in AI/ML and full-stack development. Currently conducting cutting-edge research at Ohio Supercompute Center on GraphRAG systems for HPC environments. Proven track record of winning prestigious hackathons including Best Use of AI at Carnegie Mellon TartanHacks and delivering impactful solutions at top consulting firms."
};

export const education: Education = {
  institution: "The Ohio State University",
  degree: "B.S. in Honors Computer Science and Engineering, Minor in Mathematics",
  gpa: "3.7/4.0",
  graduationDate: "May 2025",
  coursework: [
    "Machine Learning",
    "Data Mining", 
    "Computer Vision",
    "Computer Networking",
    "Database Systems",
    "Project Web Apps"
  ],
  extracurriculars: [
    "AI Club",
    "Competitive Coding Club",
    "OHI/O Hackathon",
    "Dancer and Treasurer of Raas Dance Team"
  ]
};

export const skills: Skills = {
  languages: [
    "Python",
    "Java",
    "JavaScript",
    "HTML",
    "C",
    "C++",
    "C#",
    "SQL",
    "MATLAB",
    "Kotlin",
    "Ruby",
    "Core Language"
  ],
  frameworks: [
    "Spring Boot",
    "React",
    "Ruby on Rails",
    "Expo",
    "React Native",
    "GraphRAG",
    "LLM Frameworks",
    "D3.js",
    "TensorFlow",
    "Keras",
    "scikit-learn"
  ],
  tools: [
    "AWS Cloud Practitioner",
    "Linux",
    "Ansible",
    "Tomcat",
    "Apache",
    "Git/GitHub",
    "MySQL",
    "Opsview",
    "Grafana",
    "Splunk",
    "KACE",
    "HPC Systems",
    "Knowledge Graphs",
    "Web Scraping",
    "Code Review",
    "Automated Testing",
    "Financial APIs",
    "Data Visualization",
    "Compiler Design",
    "Natural Language Processing",
    "Deep Learning",
    "Computer Vision",
    "Image Processing"
  ]
};

export const experiences: Experience[] = [
  {
    id: "osc-researcher",
    company: "Ohio Supercompute Center (OSC)",
    position: "AI Chatbot Researcher",
    location: "Virtual",
    duration: "August 2024 - Present",
    description: [
      "Built a GraphRAG-based chatbot that streamlines onboarding for 10,000+ OSC users by integrating structured graph data with a local LLM-powered knowledge base derived from custom web scraping",
      "Authored and presented research on securing LLM-RAG interfaces in HPC systems at PEARC 2025, selected from 200+ submissions and delivered to an audience of 1,000+ professionals"
    ],
    technologies: ["GraphRAG", "LLM", "Python", "Web Scraping", "HPC Systems", "Knowledge Graphs"],
    type: "research"
  },
  {
    id: "osu-ta",
    company: "The Ohio State University",
    position: "Teaching Assistant - Python Programming",
    location: "Columbus, OH",
    duration: "Aug 2023 – May 2024",
    description: [
      "Facilitated student learning by providing one-on-one assistance to 50+ students weekly with Python programming assignments, debugging code, and explaining complex concepts",
      "Streamlined grading process by developing automated scripts for code evaluation, reducing grading time by 40% while maintaining consistent assessment standards",
      "Enhanced course efficiency by conducting regular office hours, checking off completed assignments, and providing detailed feedback on coding practices and algorithm implementation"
    ],
    technologies: ["Python", "Code Review", "Automated Testing", "Educational Tools"],
    type: "work"
  },
  {
    id: "captech-consultant",
    company: "CapTech Consulting",
    position: "Full Stack Consultant Intern",
    location: "Richmond, VA",
    duration: "May 2024 – Aug 2024",
    description: [
      "Created a fully functional airline website allowing customers to book and search for flights using React, Spring Boot, and AWS RDS with MySQL",
      "Enhanced user experience and reduced customer support workload by developing a chatbot, using AWS Bedrock to answer FAQs about flights, itineraries, and membership details",
      "Improved communication efficiency and customer satisfaction by implementing AWS Simple Email Service and designing email templates to deliver confirmation, check-in, and flight cancellation emails",
      "Optimized project delivery by improving personal and consulting skills, ensuring effective communication with clients and team members throughout the project"
    ],
    technologies: ["React", "Spring Boot", "AWS RDS", "MySQL", "AWS Bedrock", "AWS SES"],
    type: "work"
  },
  {
    id: "snapon-intern",
    company: "Snap-on Business Solutions",
    position: "Web Systems and IT Support Intern",
    location: "Richfield, OH",
    duration: "Dec 2022 – May 2024",
    description: [
      "Increased deployment speed and reliability by contributing to daily automated code and data deployment across multiple servers using Ansible",
      "Ensured optimal system performance and reliability by proactively monitoring systems with Opsview, Grafana, and Splunk, enabling timely troubleshooting and resolution",
      "Enhanced data integrity by conducting data cleaning of a 20,000+ dealership database, leading to improved data quality",
      "Optimized workflow and minimized downtime by efficiently imaging 100+ PCs within a week using KACE"
    ],
    technologies: ["Ansible", "Opsview", "Grafana", "Splunk", "KACE", "Database Management"],
    type: "work"
  },
  {
    id: "raas-director",
    company: "Raas in the 614 Dance Competition",
    position: "Director",
    location: "Columbus, OH",
    duration: "May 2022 – Jun 2023",
    description: [
      "Expanded event reach and participation by developing and maintaining a competition website and Square ticketing platform, promoting the event to 1000+ individuals",
      "Raised $5,000+ for charity and united 200+ participants by orchestrating the seamless execution of a multifaceted weekend event series in Columbus, Ohio",
      "Streamlined event management by leading weekly meetings and coordinating responsibilities across eight subcommittees, encompassing finance, philanthropy, and registration",
      "Leveraged MS Excel to meticulously organize extensive attendee datasets, oversee budget and expenses, and efficiently manage the competition's financial aspects"
    ],
    technologies: ["Web Development", "Square API", "MS Excel", "Event Management"],
    type: "volunteer"
  }
];

export const projects: Project[] = [
  {
    id: "tartanhacks-donna",
    title: "Donna - AI Email Secretary",
    description: "Developed Donna, an AI email secretary that increased user productivity by automating and enhancing professional email communication using agentic workflows. Pitched the product to Reach Capital, earning recognition for demonstrating real-world VC viability and technical innovation.",
    technologies: ["AI/ML", "Agentic Workflows", "Natural Language Processing", "Email Automation", "Python", "LLM"],
    achievements: [
      "Won Best Use of AI by Reach Capital at Carnegie Mellon TartanHacks",
      "Increased user productivity through intelligent email automation",
      "Demonstrated real-world VC viability to venture capital professionals",
      "Competed among 500+ teams with innovative AI solution"
    ],
    award: "Best Use of AI - Carnegie Mellon TartanHacks (Reach Capital)",
    date: "2025-02",
    links: {
      github: "https://github.com/krishsanghvi/donna"
    },
    featured: true
  },
  {
    id: "hackohio-flowware",
    title: "FlowWare Money Map - Visual Financial Planning Tool",
    description: "Built FlowWare Money Map, a visual financial planning tool that helps users map income, expenses, and savings through intuitive node-based diagrams—enabling real-time feedback and optimization suggestions. Implemented goal tracking, customizable templates, and community sharing features, empowering users to save an average of $3,600 annually.",
    technologies: ["React", "Node.js", "D3.js", "Financial APIs", "Data Visualization", "Real-time Analytics"],
    achievements: [
      "Won Best Adaptability Award at HackOH/O",
      "Enabled users to save an average of $3,600 annually through spending optimization",
      "Developed intuitive node-based financial visualization system",
      "Implemented real-time feedback and optimization suggestions for financial planning",
      "Created goal tracking and customizable templates for personalized financial management",
      "Delivered live demo showcasing dynamic analysis and financial goal visualization"
    ],
    award: "Best Adaptability Award - HackOH/O",
    date: "2024-11",
    featured: true
  },
  {
    id: "jpmorgan-hackathon",
    title: "Columbus Goodwill Foundation Platform",
    description: "Enhanced Columbus Goodwill Foundation's operations by developing a MERN stack webapp, incorporating secure login, mentorship database, Chatbot, admin dashboard, Twilio notifications, and event analytics to improve overall efficiency.",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "Twilio", "Chatbot API"],
    achievements: [
      "Won 1st Place at J.P. Morgan Chase Code For Good Hackathon",
      "Improved organizational efficiency with comprehensive admin dashboard",
      "Integrated real-time notifications and event analytics",
      "Developed secure authentication and mentorship matching system"
    ],
    award: "1st Place - J.P. Morgan Chase Code For Good Hackathon",
    date: "2023-11",
    links: {
      presentation: "https://krishsanghvi.github.io/static/media/Code%20for%20Good%202023%20-%20Goodwill%20Columbus_%20Team%203.6a4936e27dd01dda3e13.pdf"
    },
    featured: true
  },
  {
    id: "makeohio-hackathon",
    title: "NotifI - AI-Powered Home Security System",
    description: "Enhanced home security systems by developing NotifI, an AI-powered webapp with facial recognition, real-time alerts, and an emergency ChatBot, offering advanced security features beyond traditional systems.",
    technologies: ["Python", "Computer Vision", "AI/ML", "React", "Real-time Processing", "Facial Recognition"],
    achievements: [
      "Won 2nd Place at MakeOHI/O Hackathon",
      "Implemented advanced facial recognition technology",
      "Developed real-time alert system for enhanced security",
      "Created emergency response ChatBot for crisis situations"
    ],
    award: "2nd Place - MakeOHI/O Hackathon",
    date: "2024-03",
    links: {
      github: "https://github.com/krishsanghvi/MakeOhio2024"
    },
    featured: true
  },
  {
    id: "sentiment-analysis-naivebayes",
    title: "Twitter Sentiment Analysis with Naive Bayes",
    description: "Implemented a comprehensive Naive Bayes classifier for Twitter sentiment analysis, processing 3,800+ tweets with binary bag-of-words representation. Enhanced the model with pseudo-count smoothing to resolve zero-probability issues and achieved improved accuracy through advanced preprocessing techniques.",
    technologies: ["Python", "Naive Bayes", "Natural Language Processing", "NumPy", "Machine Learning", "Data Mining"],
    achievements: [
      "Achieved 74%+ accuracy on Twitter sentiment classification",
      "Implemented custom Naive Bayes algorithm from scratch with probability smoothing",
      "Processed 3,800+ training tweets across Positive, Negative, and Neutral sentiments",
      "Developed binary bag-of-words feature representation for text classification",
      "Applied pseudo-count smoothing to handle zero-probability edge cases"
    ],
    date: "2024-03",
    featured: true
  },
  {
    id: "core-interpreter",
    title: "Core Programming Language Interpreter",
    description: "Developed a complete interpreter for the Core programming language including tokenizer, parser, and execution engine. Built comprehensive parsing capabilities with proper error handling and program execution for a custom language specification.",
    technologies: ["Python", "Compiler Design", "Language Processing", "Parsing Algorithms", "Tokenization"],
    achievements: [
      "Implemented complete tokenizer recognizing 32 unique language tokens",
      "Built recursive descent parser for Core language grammar",
      "Developed execution engine capable of running Core programs with data input",
      "Handled complex language constructs including conditionals, loops, and procedures",
      "Achieved robust error handling and edge case management"
    ],
    date: "2023-11",
    featured: true
  },
  {
    id: "neural-network-mnist",
    title: "Deep Neural Network for MNIST Classification",
    description: "Implemented and optimized deep neural networks for handwritten digit recognition using MNIST dataset. Experimented with various architectures including baseline models, pooling layers, and dropout regularization to achieve optimal performance.",
    technologies: ["Python", "TensorFlow", "Keras", "Deep Learning", "Neural Networks", "Computer Vision"],
    achievements: [
      "Achieved high accuracy on MNIST handwritten digit classification",
      "Implemented multiple neural network architectures including CNN variants",
      "Applied advanced techniques: dropout regularization, pooling layers, and optimization",
      "Conducted comprehensive hyperparameter tuning and model comparison",
      "Developed data preprocessing pipelines for optimal model performance"
    ],
    date: "2024-04",
    featured: true
  },
  {
    id: "computer-vision-wildlife",
    title: "Wildlife Species Classification System",
    description: "Developed advanced computer vision models for automated wildlife species identification and classification. Implemented state-of-the-art deep learning techniques for processing large-scale wildlife datasets with high accuracy image recognition capabilities.",
    technologies: ["Python", "Computer Vision", "Deep Learning", "CNNs", "Image Processing", "TensorFlow"],
    achievements: [
      "Built robust wildlife species classification system with deep CNN architectures",
      "Processed and analyzed large-scale wildlife image datasets",
      "Achieved high accuracy in automated species identification",
      "Implemented advanced image preprocessing and augmentation techniques",
      "Optimized models for real-world wildlife monitoring applications"
    ],
    date: "2024-05",
    links: {
      github: "https://github.com/krishsanghvi/cv-final-project-2025"
    },
    featured: true
  },
  {
    id: "cluster-analysis-toolkit",
    title: "Advanced K-Means Clustering Implementation",
    description: "Developed a sophisticated clustering analysis toolkit with custom K-means algorithm implementation. Created comprehensive visualization tools and automated optimal cluster detection for multi-dimensional datasets with elbow method analysis.",
    technologies: ["Python", "K-means Algorithm", "Data Visualization", "NumPy", "Matplotlib", "Pandas"],
    achievements: [
      "Implemented custom K-means clustering algorithm from scratch",
      "Developed automated optimal K-value detection using elbow method",
      "Created comprehensive visualization dashboard with within-cluster distance graphs",
      "Processed multi-dimensional datasets (2D, 3D, 4D) with high efficiency",
      "Generated detailed cluster analysis reports with center coordinates and assignments"
    ],
    date: "2024-04",
    featured: false
  }
];

export const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/krishsanghvi",
    icon: "linkedin"
  },
  {
    name: "GitHub", 
    url: "https://github.com/krishsanghvi",
    icon: "github"
  },
  {
    name: "Email",
    url: "mailto:krishksanghvi@gmail.com",
    icon: "mail"
  }
];

export const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" }
]; 