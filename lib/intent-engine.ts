import { portfolio } from '@/data/portfolio';

export type ChatIntent = 
  | 'greeting' | 'identity' | 'role' | 'location'
  | 'projects' | 'agritech' | 'box-detection' | 'e-grampanchayat' | 'qlix'
  | 'project-role' | 'project-stack' | 'project-description'
  | 'skills' | 'experience' | 'education' | 'certifications' 
  | 'achievements' | 'availability' | 'internship' | 'freelance' 
  | 'contact' | 'github' | 'resume' | 'help' | 'fallback' 
  | 'clarification' | 'no-clarification';

export interface ChatContext {
  lastProject?: string;
  pendingClarificationIntent?: ChatIntent;
}

export interface EngineResponse {
  text: string;
  intent: ChatIntent;
  newContext: ChatContext;
}

export function processIntent(input: string, context: ChatContext): EngineResponse {
  const normalized = input.toLowerCase().trim().replace(/[^\w\s]/g, '');
  
  let detectedIntent: ChatIntent = 'fallback';
  let isClarification = false;
  let clarificationMessage = '';
  let targetClarificationIntent: ChatIntent | undefined;

  const newContext = { ...context };

  // Helper functions for matching
  const has = (...words: string[]) => words.some(w => normalized.includes(w));
  const isGlobalRole = () => has('overall role', 'general role', 'what does he do', 'what does shaijad do', 'what is shaijad role', 'what is his job', 'profession') || (has('role') && !has('in this', 'this project', 'here', 'did he do', 'his role'));
  
  const exactMatch = (...words: string[]) => words.some(w => normalized === w);
  
  // A helper to ask for clarification
  const clarify = (targetIntent: ChatIntent, message: string) => {
    isClarification = true;
    clarificationMessage = message;
    targetClarificationIntent = targetIntent;
    detectedIntent = 'clarification';
  };

  // ==========================================
  // 0. Yes / No Clarification Resolution
  // ==========================================
  if (context.pendingClarificationIntent) {
    if (exactMatch('yes', 'yeah', 'yep', 'sure', 'ok', 'correct')) {
      detectedIntent = context.pendingClarificationIntent;
      newContext.pendingClarificationIntent = undefined;
    } else if (exactMatch('no', 'nope', 'nah', 'incorrect')) {
      detectedIntent = 'no-clarification';
      newContext.pendingClarificationIntent = undefined;
    }
    if (detectedIntent === context.pendingClarificationIntent || detectedIntent === 'no-clarification') {
      return generateResponse(detectedIntent, newContext);
    }
    newContext.pendingClarificationIntent = undefined;
  }

  // ==========================================
  // 1. Explicit project name mentioned
  // ==========================================
  if (has('qlix', 'qliz', 'quiz', 'polls', 'leaderboard', 'socket', 'realtime engagement', 'real time engagement', 'live poll')) {
    detectedIntent = 'qlix';
    newContext.lastProject = 'qlix';
  }
  else if (has('agritech', 'agriculture', 'farmers')) {
    detectedIntent = 'agritech';
    newContext.lastProject = 'agritech';
  }
  else if (has('box detection', 'computer vision', 'yolov8', 'yolo')) {
    detectedIntent = 'box-detection';
    newContext.lastProject = 'box-detection';
  }
  else if (has('grampanchayat', 'village', 'gram panchayat')) {
    detectedIntent = 'e-grampanchayat';
    newContext.lastProject = 'e-grampanchayat';
  }
  
  // ==========================================
  // 2. Contextual project follow-ups
  // ==========================================
  else if (newContext.lastProject && !isGlobalRole()) {
    if (has('stack', 'technologies', 'tech', 'built with', 'use', 'which technologies')) {
      detectedIntent = 'project-stack';
    } else if (has('role', 'did he do', 'contribution', 'responsible for', 'what was his role', 'what he did in this')) {
      detectedIntent = 'project-role';
    } else if (has('description', 'more about', 'tell me more', 'how does', 'problem', 'solve', 'work')) {
      detectedIntent = 'project-description';
    } else if (has('this project', 'about it')) {
      detectedIntent = 'project-description';
    }
  }

  // If no contextual intent was detected, continue with global matching
  if (detectedIntent === 'fallback' && !isClarification) {
    // ==========================================
    // 3. Contact/Hiring
    // ==========================================
    if (has('contact', 'email', 'reach', 'hire', 'how reach him')) {
      if (exactMatch('how reach him') || exactMatch('contact')) {
         clarify('contact', "Do you mean how to contact Shaijad?");
      } else {
        detectedIntent = 'contact';
      }
    }
    // ==========================================
    // 4. Availability/Internship/Freelance
    // ==========================================
    else if (has('internship', 'intern')) {
      detectedIntent = 'internship';
    }
    else if (has('freelance', 'freelancer')) {
      detectedIntent = 'freelance';
    }
    else if (has('available', 'availability', 'open to', 'is he free')) {
      if (exactMatch('is he free')) {
        clarify('availability', "Do you mean if Shaijad is available for work or internships?");
      } else {
        detectedIntent = 'availability';
      }
    }
    // ==========================================
    // 5. Android / Mobile specifically
    // ==========================================
    else if (has('android', 'kotlin', 'mobile app', 'jetpack', 'compose')) {
      detectedIntent = 'skills';
    }
    // ==========================================
    // 6. Global Skills
    // ==========================================
    else if (has('skills', 'technologies', 'tech stack', 'code in', 'programming')) {
      detectedIntent = 'skills';
    }
    // ==========================================
    // 7. Location
    // ==========================================
    else if (has('where', 'live', 'lives', 'based', 'from', 'stay', 'location')) {
      if (exactMatch('where he live', 'where does he live', 'where shaijad live', 'where he stays', 'his location', 'location', 'where from')) {
        clarify('location', "Do you mean where Shaijad is based?");
      } else if (has('where is shaijad based', 'where is he based', 'where is shaijad from')) {
        detectedIntent = 'location';
      } else {
        clarify('location', "Do you mean where Shaijad is based?");
      }
    }
    // ==========================================
    // 8. Global Experience
    // ==========================================
    else if ((has('experience', 'work history', 'job', 'where he worked', 'previous work', 'what work experience') && !isGlobalRole()) || exactMatch('his internship')) {
      if (exactMatch('where he worked', 'his experience', 'what work experience', 'previous work', 'his internship')) {
        clarify('experience', "Do you mean Shaijad's previous work experience?");
      } else {
        detectedIntent = 'experience';
      }
    }
    // ==========================================
    // 9. Global Education
    // ==========================================
    else if (has('education', 'study', 'college', 'degree', 'university', 'where he is studying', 'where shaijad studies')) {
      if (exactMatch('where he study', 'where does he study', 'where shaijad studies', 'his college', 'his university', 'where he is studying')) {
        clarify('education', "Do you mean where Shaijad is studying?");
      } else {
        detectedIntent = 'education';
      }
    }
    // ==========================================
    // 10. Global Achievements/Certifications
    // ==========================================
    else if (has('certifications', 'certificate')) {
      detectedIntent = 'certifications';
    }
    else if (has('achievements', 'awards', 'hackathon')) {
      detectedIntent = 'achievements';
    }
    // ==========================================
    // 11. Global Identity/Role/Projects
    // ==========================================
    else if (has('projects', 'built', 'work', 'portfolio', 'made', 'what he built', 'show his projects', 'what has he made')) {
      detectedIntent = 'projects';
    }
    else if (has('who is shaijad', 'who is this', 'about shaijad', 'tell me about')) {
      detectedIntent = 'identity';
    }
    else if (isGlobalRole() || has('role', 'what he do', 'his profession')) {
      if (exactMatch('what he do', 'what does he do', 'his work', 'his profession', 'what is his job')) {
        if (exactMatch('what he do') || exactMatch('his work')) {
          clarify('role', "Do you mean what Shaijad does professionally?");
        } else {
          detectedIntent = 'role';
        }
      } else {
        detectedIntent = 'role';
      }
    }
    // ==========================================
    // 12. Extras (Resume/Github)
    // ==========================================
    else if (has('resume', 'cv')) {
      if (exactMatch('cv', 'cv?')) clarify('resume', "Do you mean download Shaijad's resume?");
      else detectedIntent = 'resume';
    }
    else if (has('github')) {
      if (exactMatch('github', 'github?')) clarify('github', "Do you mean view Shaijad's GitHub?");
      else detectedIntent = 'github';
    }
    // ==========================================
    // 13. Greeting/Help/Fallback
    // ==========================================
    else if (normalized === 'hi' || normalized === 'hello' || normalized === 'hey' || has('greetings')) {
      detectedIntent = 'greeting';
    }
    else if (has('help', 'what can you do')) {
      detectedIntent = 'help';
    }
  }

  if (isClarification) {
    newContext.pendingClarificationIntent = targetClarificationIntent;
    return {
      text: clarificationMessage,
      intent: 'clarification',
      newContext
    };
  }

  newContext.pendingClarificationIntent = undefined;

  return generateResponse(detectedIntent, newContext);
}

function generateResponse(intent: ChatIntent, context: ChatContext): EngineResponse {
  let responseText = '';

  switch (intent) {
    case 'no-clarification':
      responseText = "No problem. What would you like to know about Shaijad?";
      intent = 'fallback';
      break;

    case 'location':
      responseText = `Shaijad is based in ${portfolio.location}.`;
      break;

    case 'greeting':
    case 'help':
      responseText = "Hi! I'm Shaijad's assistant. I can help with his projects, skills, experience, education, availability, or contact details. Try asking about QLix or AgriTech!";
      break;
    
    case 'identity':
      responseText = `${portfolio.name} is a ${portfolio.role} based in ${portfolio.location} with a strong focus on Android and mobile application development. He also builds web applications, backend systems, and AI-based solutions.`;
      break;
    
    case 'role':
      responseText = `Shaijad is a ${portfolio.role} focused on Android and application development. ${portfolio.hero.description}`;
      break;

    case 'qlix': {
      const p = portfolio.projects.find(x => x.id === 'qlix');
      responseText = `QLix is a ${p?.subtitle.toLowerCase()} — Shaijad's latest project.\n\nIt supports live polls, quizzes, Q&A, real-time leaderboards via Socket.IO, and was deployed on AWS EC2.\n\nStack: ${p?.technologies.join(' · ')}`;
      break;
    }
    case 'agritech': {
      const p = portfolio.projects.find(x => x.id === 'agritech');
      responseText = `${p?.title} is a ${p?.subtitle.toLowerCase()} for farmers, labourers, and experts.\n\nStack: ${p?.technologies.join(' · ')}`;
      break;
    }
    case 'box-detection': {
      const p = portfolio.projects.find(x => x.id === 'box-detection');
      responseText = `${p?.title} is an ${p?.subtitle.toLowerCase()} for real-time detection.\n\nStack: ${p?.technologies.join(' · ')}`;
      break;
    }
    case 'e-grampanchayat': {
      const p = portfolio.projects.find(x => x.id === 'e-grampanchayat');
      responseText = `${p?.title} is a ${p?.subtitle.toLowerCase()} for citizen services.\n\nStack: ${p?.technologies.join(' · ')}`;
      break;
    }

    // Contextual Resolvers
    case 'project-role': {
      const p = portfolio.projects.find(x => x.id === context.lastProject);
      if (p && p.role) {
        responseText = `His role was ${p.role}.\n\nHe worked on: ${p.caseStudy?.responsibilities.join(' ')}`;
      } else {
        responseText = "Shaijad's role for this project isn't specified in the portfolio data.";
      }
      break;
    }
    case 'project-stack': {
      const p = portfolio.projects.find(x => x.id === context.lastProject);
      if (p && p.technologies) {
        responseText = `The stack for ${p.title} includes: ${p.technologies.join(', ')}.`;
      } else {
        responseText = "The technologies for this project aren't specified.";
      }
      break;
    }
    case 'project-description': {
      const p = portfolio.projects.find(x => x.id === context.lastProject);
      if (p && p.description) {
        responseText = `${p.description}\n\nOutcome: ${p.caseStudy?.outcome}`;
      } else {
        responseText = "I don't have a detailed description for this project.";
      }
      break;
    }

    case 'projects':
      responseText = `Shaijad has built several projects:\n- QLix (Real-Time Engagement Platform) — his latest\n- AgriTech (Smart Agriculture)\n- Box Detection System (Computer Vision)\n- E-Grampanchayat (Village Admin)\n\nAsk me about a specific one!`;
      break;

    case 'skills':
      responseText = `Shaijad's primary focus is Android development (Java, Kotlin, Jetpack Compose). He also works with Node.js, Express.js, Spring Boot, FastAPI, MongoDB, PostgreSQL, and ML/AI tools like YOLOv8.`;
      break;

    case 'experience':
      responseText = `Shaijad completed a Web & Android Development internship at Sumago Infotech Pvt. Ltd. in Nashik (Jun 2023 – Aug 2023), where he developed Android and web applications.`;
      break;

    case 'education':
      responseText = `Shaijad is pursuing B.E. in Information Technology at K.K. Wagh College of Engineering, Nashik (2024–2027), with a CGPA of 8.0. He previously completed a Diploma in IT (89.88%) from Government Polytechnic College, Ambad.`;
      break;

    case 'certifications':
      responseText = `Shaijad holds certifications in:\n- AI-Powered Fullstack Cohort (2026)\n- Android Development · LearnMKCL (2024)\n- Core & Advanced Java · VJTech Academy (2023)\n- Web Development · Sumago Infotech (2023)`;
      break;

    case 'achievements':
      responseText = `Recent achievements include:\n- SKN Sinhgad Hackathon Finalist (Top 8, 2026)\n- SGGS Ideathon Runner-up (2025)\n- ITSA Committee Lead (2024)`;
      break;

    case 'availability':
    case 'internship':
    case 'freelance':
      responseText = `Yes. Shaijad is currently open to internship and freelance opportunities, especially in Android and application development.`;
      break;

    case 'contact':
      responseText = `You can reach Shaijad at ${portfolio.contact.email}.`;
      break;

    case 'github':
      responseText = `You can view Shaijad's work on GitHub at ${portfolio.socials.github}.`;
      break;

    case 'resume':
      responseText = `You can download Shaijad's resume to see his full experience and skills.`;
      break;

    case 'fallback':
    case 'clarification':
    default:
      responseText = "I can help with Shaijad's projects (like QLix or AgriTech), skills, experience, education, availability, or contact details.";
      break;
  }

  return {
    text: responseText,
    intent,
    newContext: context
  };
}
