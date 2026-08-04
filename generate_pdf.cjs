const PDFDocument = require('pdfkit');
const fs = require('fs');

const doc = new PDFDocument({ margin: 50 });
doc.pipe(fs.createWriteStream('public/Maheen_CV.pdf'));

doc.fontSize(20).font('Helvetica-Bold').text('MOHIDEEN MAHEEN P', { align: 'center' });
doc.fontSize(14).text('FULL STACK DEVELOPER', { align: 'center' });
doc.moveDown();

doc.fontSize(10).font('Helvetica').text('Email: maheenmohideen@gmail.com | Phone: +91 8870573574', { align: 'center' });
doc.text('LinkedIn: https://www.linkedin.com/in/mohideen-maheen-a00214280', { align: 'center' });
doc.text('Portfolio: https://mohideenmaheen.vercel.app/', { align: 'center' });
doc.moveDown();

doc.fontSize(14).font('Helvetica-Bold').text('Professional Summary');
doc.fontSize(10).font('Helvetica').text('Full Stack Web Developer with strong expertise in front-end and back-end technologies, including HTML, CSS, JavaScript, React and Node.js. Skilled in building scalable, user-friendly applications with a focus on performance and seamless user experience. Adept at solving complex technical challenges and delivering impactful, high-quality solutions tailored to business needs.');
doc.moveDown();

doc.fontSize(14).font('Helvetica-Bold').text('Technical Skills');
doc.fontSize(10).font('Helvetica')
  .text('• Programming languages: JavaScript, HTML, CSS')
  .text('• Frontend Technologies: React.js, Bootstrap, Tailwind CSS')
  .text('• Backend Technologies: Node.js, Express.js')
  .text('• Databases: Mongo DB, MySQL')
  .text('• Development Tools: Git, GitHub, VS Code')
  .text('• AI Tools: ChatGPT, Github Copilot, Gemini, Claude');
doc.moveDown();

doc.fontSize(14).font('Helvetica-Bold').text('Education');
doc.fontSize(10).font('Helvetica')
  .text('• UG 2025 - Nellai College of Engineering, Tirunelveli (CGPA: 7.6)')
  .text('• HSC 2021 - St.John\'s Matric. Hr. Sec. School, Veeravanallur (90.71%)')
  .text('• SSLC 2019 - St.John\'s Matric. Hr. Sec. School, Veeravanallur (87.8%)');
doc.moveDown();

doc.fontSize(14).font('Helvetica-Bold').text('Work Experience');
doc.fontSize(12).font('Helvetica-Bold').text('Associate Software Engineering - Syntronics Systems, Eruvadi (JAN 2026 - Present)');
doc.fontSize(10).font('Helvetica').text('I create user-focused digital solutions across design, development and animation. Skilled in UI/UX design with Adobe tools, responsive web development with React, WordPress customization, interactive animations, and quality assurance through testing and debugging.');
doc.moveDown(0.5);

doc.fontSize(12).font('Helvetica-Bold').text('Web Development Intern - Corizo.in, Bangalore (FEB 2025 - APR 2025)');
doc.fontSize(10).font('Helvetica').text('Project: E-Commerce');
doc.text('Technologies: HTML, CSS, JavaScript, Tailwind CSS');
doc.text('Description: E-commerce websites allow users to buy and sell products online. Using HTML, CSS, JavaScript, and Tailwind CSS, these sites are made interactive, responsive, and visually appealing.');
doc.moveDown(0.5);
doc.text('Project: CRUD Application');
doc.text('Technologies: HTML, CSS, JavaScript, Tailwind CSS, Mongo DB, Node.js');
doc.text('Description: A CRUD application allows users to Create, Read, Update, and Delete data efficiently.');
doc.moveDown(0.5);

doc.fontSize(12).font('Helvetica-Bold').text('AI & ML and Web Application Intern - Neural Transformers.AI, Chennai (Aug 2024 - SEP 2024)');
doc.fontSize(10).font('Helvetica').text('Project: Computer Numerical Control');
doc.text('Technologies: Python, Google Colab, G-code, Matplotlib / Plotly');
doc.text('Description: Computer Numerical Control (CNC) automates machines using programmed instructions.');
doc.moveDown();

doc.fontSize(14).font('Helvetica-Bold').text('Academic Project');
doc.fontSize(12).font('Helvetica-Bold').text('Real Time Code Collaboration - Nellai College of Engineering (NOV 2024 - JAN 2025)');
doc.fontSize(10).font('Helvetica').text('Technologies: MongoDB, Express.js, React.js, Node.js, JavaScript, Socket.io, Agora.io');
doc.text('Description: This project enables multiple users to write and edit code together in real-time. Socket.io ensures instant synchronization, Agora.io integrates live video/voice chat.');

doc.end();
