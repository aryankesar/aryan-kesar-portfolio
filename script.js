// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    hamburger.classList.toggle('active');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Project Data
const projects = [
    {
        title: "Project 1",
        description: "A brief description of your first project. Explain what it does and what technologies you used.",
        image: "https://via.placeholder.com/400x300",
        technologies: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/yourusername/project1",
        demo: "https://project1-demo.com"
    },
    {
        title: "Project 2",
        description: "A brief description of your second project. Explain what it does and what technologies you used.",
        image: "https://via.placeholder.com/400x300",
        technologies: ["React", "Node.js", "MongoDB"],
        github: "https://github.com/yourusername/project2",
        demo: "https://project2-demo.com"
    },
    // Add more projects as needed
];

// Function to create project cards
function createProjectCard(project) {
    return `
        <div class="project-card fade-in">
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-technologies">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.github}" target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-github"></i> GitHub
                    </a>
                    <a href="${project.demo}" target="_blank" rel="noopener noreferrer">
                        <i class="fas fa-external-link-alt"></i> Live Demo
                    </a>
                </div>
            </div>
        </div>
    `;
}

// Populate projects section
const projectsGrid = document.querySelector('.projects-grid');
projectsGrid.innerHTML = projects.map(createProjectCard).join('');

// Form submission handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Show success message
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
    });
}

// Add animation on scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(26, 27, 38, 0.95)';
    } else {
        navbar.style.background = 'rgba(26, 27, 38, 0.8)';
    }
});

// Chatbot Functionality
const chatbotContainer = document.querySelector('.chatbot-container');
const chatbotToggleBtn = document.querySelector('.chatbot-toggle-btn');
const chatbotToggle = document.querySelector('.chatbot-toggle');
const userInput = document.getElementById('user-input');
const sendMessageBtn = document.querySelector('.send-message');
const messagesContainer = document.querySelector('.chatbot-messages');

// Chatbot responses
const responses = {
    greeting: ["Hi!", "Hello!", "Hey there!"],
    about: [
        "Aryan is a second-year BTech CSE student with a passion for software development.",
        "He loves creating innovative solutions and learning new technologies.",
        "Currently, he's focused on building a strong foundation in computer science."
    ],
    skills: [
        "Aryan has skills in various programming languages including Python, Java, and JavaScript.",
        "He's proficient in web development technologies like HTML, CSS, and React.",
        "He also has experience with tools like Git, GitHub, and SQL."
    ],
    projects: [
        "Aryan has worked on several projects showcasing his skills.",
        "You can find his projects in the Projects section of this portfolio.",
        "Each project demonstrates different aspects of his technical expertise."
    ],
    contact: [
        "You can contact Aryan through the contact form on this website.",
        "He's also available on GitHub and LinkedIn.",
        "Feel free to reach out for collaborations or questions!"
    ],
    default: [
        "I'm not sure about that. Could you please rephrase your question?",
        "I don't have information about that. Try asking about Aryan's skills, projects, or background.",
        "I'm here to tell you about Aryan. What would you like to know?"
    ]
};

// Enhanced Scroll Animations
const scrollAnimations = () => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Navbar Scroll Effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth Scroll with Progress Indicator
const scrollProgress = () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    
    // Create progress bar if it doesn't exist
    let progressBar = document.querySelector('.scroll-progress');
    if (!progressBar) {
        progressBar = document.createElement('div');
        progressBar.className = 'scroll-progress';
        document.body.appendChild(progressBar);
    }
    
    progressBar.style.width = scrolled + '%';
};

// Initialize animations
window.addEventListener('scroll', () => {
    scrollAnimations();
    scrollProgress();
});

// Add hover effect to skill items
document.querySelectorAll('.skill-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Add hover effect to project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Add typing animation to bot messages
const addMessage = (message, sender) => {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender);
    
    if (sender === 'bot') {
        messageDiv.textContent = '';
        messagesContainer.appendChild(messageDiv);
        
        let i = 0;
        const typing = setInterval(() => {
            if (i < message.length) {
                messageDiv.textContent += message.charAt(i);
                i++;
            } else {
                clearInterval(typing);
            }
        }, 30);
    } else {
        messageDiv.textContent = message;
        messagesContainer.appendChild(messageDiv);
    }
    
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
};

// Enhanced bot responses with typing effect
const getBotResponse = (message) => {
    message = message.toLowerCase();
    
    // Add a small delay to simulate thinking
    return new Promise(resolve => {
        setTimeout(() => {
            let response;
            
            if (message.match(/hi|hello|hey|greetings/)) {
                response = responses.greeting[Math.floor(Math.random() * responses.greeting.length)];
            } else if (message.match(/about|who|tell me about|background/)) {
                response = responses.about[Math.floor(Math.random() * responses.about.length)];
            } else if (message.match(/skills|what can|expertise|proficient/)) {
                response = responses.skills[Math.floor(Math.random() * responses.skills.length)];
            } else if (message.match(/projects|work|portfolio|built/)) {
                response = responses.projects[Math.floor(Math.random() * responses.projects.length)];
            } else if (message.match(/contact|reach|get in touch|email/)) {
                response = responses.contact[Math.floor(Math.random() * responses.contact.length)];
            } else {
                response = responses.default[Math.floor(Math.random() * responses.default.length)];
            }
            
            resolve(response);
        }, 500);
    });
};

// Enhanced send message function
const sendMessage = async () => {
    const message = userInput.value.trim();
    if (message) {
        addMessage(message, 'user');
        userInput.value = '';
        
        const response = await getBotResponse(message);
        addMessage(response, 'bot');
    }
};

// Event listeners
sendMessageBtn.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// Toggle chatbot with animation
chatbotToggleBtn.addEventListener('click', () => {
    chatbotContainer.classList.add('active');
    chatbotToggleBtn.style.display = 'none';
});

chatbotToggle.addEventListener('click', () => {
    chatbotContainer.classList.remove('active');
    chatbotToggleBtn.style.display = 'flex';
});

// Initialize animations on page load
document.addEventListener('DOMContentLoaded', () => {
    scrollAnimations();
    scrollProgress();
}); 