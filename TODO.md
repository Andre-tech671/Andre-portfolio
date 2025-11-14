- [x] Improve spacing in Skills.scss for skills icons and text
- [x] Improve spacing in Skills.scss for experiences paragraphs and elements
- [ ] Test the updated styles
- [x] Update Sanity contact schema to include name and message fields
- [x] Install @emailjs/browser for email sending
- [x] Integrate EmailJS in Footer.jsx for form submission
- [x] Set up EmailJS account and configure service/template
- [x] Replace placeholders in Footer.jsx with actual EmailJS IDs
- [ ] Test form submission to ensure emails are sent to nyanjahia@gmail.com
- [x] Build the project for production

EmailJS Setup Instructions:
1. Sign up at https://www.emailjs.com/
2. Create an email service (e.g., connect your Gmail)
3. Create an email template with variables: {{from_name}}, {{from_email}}, {{message}}, {{to_email}}
4. Set the recipient to nyanjahia@gmail.com
5. Get Service ID, Template ID, and User ID from dashboard
6. Replace 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', 'YOUR_USER_ID' in Footer.jsx
7. Rebuild and redeploy
