document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav');
    
    mobileMenuBtn.addEventListener('click', function() {
        mainNav.classList.toggle('active');
        mobileMenuBtn.innerHTML = mainNav.classList.contains('active') ? 
            '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            if (mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            }
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        });
    });
    
    // Sticky header on scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 50);
    });
    
    // Load hero image
    const heroSection = document.querySelector('.hero');
    heroSection.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('')";
    // You can upload your own hero image by replacing the empty URL
    
    // Load about image
    const aboutImg = document.getElementById('about-img');
    aboutImg.src = "";
    aboutImg.alt = "German class in session";
    // You can upload your own about image by replacing the empty URL
    
    // Courses Data - Updated with your course details
    const courses = [
        {
            id: 1,
            title: "German A1 - Beginner",
            description: "Start your German journey with basic vocabulary and simple sentences.",
            level: "beginner",
            duration: "2 months",
            schedule: "Mon-Fri, 8am-4pm",
            image: ""
        },
        {
            id: 2,
            title: "German A2 - Elementary",
            description: "Build on your basics with more vocabulary and grammar structures.",
            level: "beginner",
            duration: "2.5 months",
            schedule: "Mon-Fri, 8am-4pm",
            image: ""
        },
        {
            id: 3,
            title: "German B1 - Intermediate",
            description: "Express opinions and handle most situations while traveling.",
            level: "intermediate",
            duration: "2.5 months",
            schedule: "Mon-Fri, 8am-4pm",
            image: ""
        }
    ];
    
    // Display courses
    const courseCardsContainer = document.getElementById('course-cards');
    const tabButtons = document.querySelectorAll('.tab-btn');
    
    function displayCourses(level = 'all') {
        courseCardsContainer.innerHTML = '';
        
        const filteredCourses = level === 'all' ? 
            courses : 
            courses.filter(course => course.level === level);
            
        filteredCourses.forEach(course => {
            const courseCard = document.createElement('div');
            courseCard.className = 'course-card';
            courseCard.innerHTML = `
                <div class="course-img">
                    <img src="${course.image}" alt="${course.title}">
                </div>
                <div class="course-info">
                    <span class="course-level">${course.level.toUpperCase()}</span>
                    <h3 class="course-title">${course.title}</h3>
                    <p class="course-desc">${course.description}</p>
                    <div class="course-meta">
                        <span class="course-duration"><i class="far fa-clock"></i> ${course.duration}</span>
                        <span class="course-schedule"><i class="far fa-calendar-alt"></i> ${course.schedule}</span>
                    </div>
                </div>
            `;
            courseCardsContainer.appendChild(courseCard);
        });
    }
    
    // Initial display
    displayCourses();
    
    // Tab switching
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            const level = this.getAttribute('data-level');
            displayCourses(level);
        });
    });
    
    // Upcoming Courses Data
    const upcomingCourses = [
        {
            id: 1,
            title: "German A1 Intensive Course",
            level: "A1",
            day: "15",
            month: "Jun",
            time: "8:00 AM - 10:00 AM",
            seats: "5 seats left",
            image: ""
        },
        {
            id: 2,
            title: "German A2 Evening Course",
            level: "A2",
            day: "20",
            month: "Jun",
            time: "2:00 PM - 4:00 PM",
            seats: "3 seats left",
            image: ""
        }
    ];
    
    // Display upcoming courses
    const upcomingContainer = document.getElementById('upcoming-courses');
    
    upcomingCourses.forEach(course => {
        const upcomingCourse = document.createElement('div');
        upcomingCourse.className = 'upcoming-course';
        upcomingCourse.innerHTML = `
            <div class="upcoming-date">
                <span class="upcoming-day">${course.day}</span>
                <span class="upcoming-month">${course.month}</span>
            </div>
            <div class="upcoming-details">
                <h3 class="upcoming-title">${course.title}</h3>
                <span class="upcoming-level">${course.level}</span>
                <p class="upcoming-time"><i class="far fa-clock"></i> ${course.time}</p>
                <p class="upcoming-seats"><i class="fas fa-user-friends"></i> ${course.seats}</p>
                <div class="upcoming-actions">
                    <a href="#contact" class="btn">Register Now</a>
                </div>
            </div>
        `;
        upcomingContainer.appendChild(upcomingCourse);
    });
    
    // Fees Data - Updated with your fee structure
    const feeData = [
        { level: "A1", duration: "2 months", mode: "Online/Physical", monthly: "14,000 PKR", total: "28,000 PKR" },
        { level: "A2", duration: "2.5 months", mode: "Online/Physical", monthly: "16,000 PKR", total: "40,000 PKR" },
        { level: "B1", duration: "2.5 months", mode: "Online/Physical", monthly: "18,000 PKR", total: "45,000 PKR" }
    ];
    
    // Display fee table
    const feeTableBody = document.getElementById('fee-table-body');
    
    feeData.forEach(fee => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${fee.level}</td>
            <td>${fee.duration}</td>
            <td>${fee.mode}</td>
            <td>${fee.monthly}</td>
            <td>${fee.total}</td>
        `;
        feeTableBody.appendChild(row);
    });
    
    // Gallery Data - You can add your own images here
    const galleryImages = [
        { id: 1, src: "", category: "classes", title: "Classroom Session" },
        { id: 2, src: "", category: "classes", title: "Group Discussion" },
        { id: 3, src: "", category: "events", title: "Cultural Event" }
    ];
    
    // Display gallery
    const galleryGrid = document.getElementById('gallery-grid');
    const galleryTabs = document.querySelectorAll('.gallery-tab');
    
    function displayGallery(category = 'all') {
        galleryGrid.innerHTML = '';
        
        const filteredImages = category === 'all' ? 
            galleryImages : 
            galleryImages.filter(img => img.category === category);
            
        filteredImages.forEach(img => {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item';
            galleryItem.innerHTML = `
                <img src="${img.src}" alt="${img.title}" class="gallery-img">
                <div class="gallery-overlay">
                    <p>${img.title}</p>
                </div>
            `;
            galleryGrid.appendChild(galleryItem);
        });
    }
    
    // Initial display
    displayGallery();
    
    // Tab switching
    galleryTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            galleryTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            const category = this.getAttribute('data-category');
            displayGallery(category);
        });
    });
    
    // Certificates Data - You can add your certificate images here
    const certificates = [
        { id: 1, src: "", alt: "Course Completion Certificate" },
        { id: 2, src: "", alt: "Language Proficiency Certificate" }
    ];
    
    // Display certificates slider
    const certificateSlider = document.getElementById('certificate-slider');
    
    certificates.forEach((cert, index) => {
        const slide = document.createElement('div');
        slide.className = `certificate-slide ${index === 0 ? 'active' : ''}`;
        slide.innerHTML = `<img src="${cert.src}" alt="${cert.alt}">`;
        certificateSlider.appendChild(slide);
    });
    
    // Certificate slider functionality
    let currentCertSlide = 0;
    
    function showCertSlide(n) {
        const slides = document.querySelectorAll('.certificate-slide');
        slides.forEach(slide => slide.classList.remove('active'));
        
        currentCertSlide = (n + slides.length) % slides.length;
        slides[currentCertSlide].classList.add('active');
    }
    
    // Auto slide change
    setInterval(() => {
        showCertSlide(currentCertSlide + 1);
    }, 3000);
    
    // Testimonials Data
    const testimonials = [
        {
            id: 1,
            content: "I completed my A1 and A2 courses at Die deutsche Sprachschule and the teaching quality was excellent. The flexible timings helped me balance my studies with work.",
            author: "Aisha Khan",
            role: "Student, A2 Level",
            image: "https://randomuser.me/api/portraits/women/44.jpg"
        },
        {
            id: 2,
            content: "The B1 course helped me improve my German significantly. The teachers are very professional and the course material is well-structured.",
            author: "Ali Ahmed",
            role: "Student, B1 Level",
            image: "https://randomuser.me/api/portraits/men/32.jpg"
        }
    ];
    
    // Display testimonials
    const testimonialSlider = document.getElementById('testimonial-slider');
    
    testimonials.forEach((testimonial, index) => {
        const slide = document.createElement('div');
        slide.className = `testimonial-slide ${index === 0 ? 'active' : ''}`;
        slide.innerHTML = `
            <p class="testimonial-content">${testimonial.content}</p>
            <div class="testimonial-author">
                <img src="${testimonial.image}" alt="${testimonial.author}">
                <div class="author-info">
                    <h4>${testimonial.author}</h4>
                    <p>${testimonial.role}</p>
                </div>
            </div>
        `;
        testimonialSlider.appendChild(slide);
    });
    
    // Testimonial slider functionality
    let currentTestimonialSlide = 0;
    
    function showTestimonialSlide(n) {
        const slides = document.querySelectorAll('.testimonial-slide');
        slides.forEach(slide => slide.classList.remove('active'));
        
        currentTestimonialSlide = (n + slides.length) % slides.length;
        slides[currentTestimonialSlide].classList.add('active');
    }
    
    // Auto slide change
    setInterval(() => {
        showTestimonialSlide(currentTestimonialSlide + 1);
    }, 5000);
    
    // Contact Form Submission
    const contactForm = document.getElementById('institute-contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Here you would typically send the data to a server
        console.log({ name, email, subject, message });
        
        // Show success message
        alert('Thank you for your message! We will contact you soon.');
        contactForm.reset();
    });
    
    // Newsletter Form Submission
    const newsletterForm = document.getElementById('newsletter-form');
    
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = newsletterForm.querySelector('input').value;
        
        // Here you would typically send the email to a server
        console.log('Newsletter subscription:', email);
        
        // Show success message
        alert('Thank you for subscribing to our newsletter!');
        newsletterForm.reset();
    });
});