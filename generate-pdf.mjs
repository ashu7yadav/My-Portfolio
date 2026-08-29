import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const assetsDir = path.join(__dirname, 'public', 'assets');
if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

// Generate the exact Ashutosh Yadav Resume PDF
const pdfContent = `%PDF-1.4
1 0 obj
<< /Title (Ashutosh Yadav - Resume)
   /Author (Ashutosh Yadav)
   /Subject (AI/ML Engineer Resume)
   /Keywords (Machine Learning, Python, Flutter, XGBoost, Scikit-learn, Full-Stack, MNNIT Allahabad)
   /Creator (Portfolio System)
>>
endobj
2 0 obj
<< /Type /Catalog
   /Pages 3 0 R
>>
endobj
3 0 obj
<< /Type /Pages
   /Kids [4 0 R]
   /Count 1
>>
endobj
4 0 obj
<< /Type /Page
   /Parent 3 0 R
   /MediaBox [0 0 612 792]
   /Resources <<
      /Font <<
         /F1 5 0 R
         /F2 6 0 R
      >>
   >>
   /Contents 7 0 R
>>
endobj
5 0 obj
<< /Type /Font
   /Subtype /Type1
   /BaseFont /Helvetica-Bold
>>
endobj
6 0 obj
<< /Type /Font
   /Subtype /Type1
   /BaseFont /Helvetica
>>
endobj
7 0 obj
<< /Length 2100 >>
stream
BT
/F1 20 Tf
50 748 Td
(ASHUTOSH YADAV) Tj
/F2 9.5 Tf
0 -17 Td
(+91-XXXXXXXXXX  |  ashutosh7yadav@gmail.com  |  linkedin.com/in/ashutosh-yadav-632540342  |  github.com/ashu7yadav) Tj

/F1 11 Tf
0 -22 Td
(PROFESSIONAL SUMMARY) Tj
/F2 9 Tf
0 -13 Td
(Passionate B.Tech Computer Science (Artificial Intelligence & Machine Learning) student with hands-on experience in) Tj
0 -11.5 Td
(Machine Learning, Python, Flutter, and Full-Stack Development. Completed an AI & ML internship at MNNIT Allahabad) Tj
0 -11.5 Td
(and developed real-world AI applications. Strong interest in Generative AI, Data Science, Mobile App Development, and) Tj
0 -11.5 Td
(Software Engineering.) Tj
/F1 11 Tf
0 -20 Td
(EDUCATION) Tj
/F1 9.5 Tf
0 -14 Td
(SR Group of Institutions) Tj
/F2 9 Tf
240 0 Td
(Expected Graduation: 2028) Tj
-240 -12 Td
(B.Tech in Computer Science Engineering (AI & ML)) Tj
/F1 11 Tf
0 -20 Td
(EXPERIENCE) Tj
/F1 9.5 Tf
0 -14 Td
(Innovation & Incubation Hub, MNNIT Allahabad) Tj
/F2 9 Tf
240 0 Td
(May 2026 -- June 2026) Tj
-240 -12 Td
/F1 9 Tf
(AI & Machine Learning Intern) Tj
/F2 8.5 Tf
0 -11.5 Td
(- Engineered an end-to-end Loan Approval Prediction System using Python and XGBoost to automate credit assessment workflows.) Tj
0 -11 Td
(- Executed exploratory data analysis (EDA), missing value imputation, and feature engineering to enhance model accuracy.) Tj
0 -11 Td
(- Developed a responsive web platform integrated with a SQLite database using the Flask framework.) Tj
0 -11 Td
(- Containerized and deployed the machine learning model to Google Cloud Run to ensure scalable and reliable cloud hosting.) Tj
/F1 11 Tf
0 -19 Td
(PROJECTS) Tj
/F1 9.5 Tf
0 -13 Td
(Loan Approval Prediction & Analytical AI System) Tj
/F2 8.5 Tf
0 -11 Td
(Tech Stack: Python, Flask, SQLite, XGBoost, Scikit-learn) Tj
0 -11 Td
(- Architected a machine learning system to evaluate credit applicant eligibility utilizing advanced classification models.) Tj
0 -11 Td
(- Formulated comprehensive data preprocessing, feature scaling, and model evaluation pipelines to maximize performance.) Tj
0 -11 Td
(- Designed an interactive Admin Dashboard facilitating real-time prediction analytics and transactional data visualization.) Tj
/F1 9.5 Tf
0 -14 Td
(Smart Calculator AI) Tj
/F2 8.5 Tf
0 -11 Td
(Tech Stack: Flutter, Firebase, Dart, OCR APIs) Tj
0 -11 Td
(- Built a cross-platform mobile utility application incorporating an AI-powered Math Solver and OCR equation recognition.) Tj
0 -11 Td
(- Integrated voice input capabilities, interactive graph plotting, currency conversion, EMI estimation, and PDF export tools.) Tj
0 -11 Td
(- Configured offline mode functionality alongside real-time data synchronization utilizing Cloud Firestore.) Tj
/F1 9.5 Tf
0 -14 Td
(AI-Based Fraud Detection System) Tj
/F2 8.5 Tf
0 -11 Td
(Tech Stack: Python, Flask, Scikit-learn, SQLite) Tj
0 -11 Td
(- Developed an anomaly detection pipeline designed to identify fraudulent financial transactions in real time.) Tj
0 -11 Td
(- Constructed an administrative dashboard featuring interactive visual charts, prediction history tracking, and risk metrics.) Tj
/F1 11 Tf
0 -18 Td
(TECHNICAL SKILLS) Tj
/F2 8.5 Tf
0 -12 Td
(Languages: Python, Java, C, SQL, HTML, CSS, JavaScript) Tj
0 -11 Td
(Machine Learning & AI: Scikit-learn, XGBoost, Pandas, NumPy, Data Preprocessing, Feature Engineering) Tj
0 -11 Td
(Frameworks & Databases: Flask, Flutter, Firebase, Cloud Firestore, SQLite) Tj
0 -11 Td
(Development Tools: Git, GitHub, VS Code, Google Cloud Run, Google Colab, Jupyter Notebook) Tj
0 -11 Td
(Relevant Coursework: Data Structures, Object-Oriented Programming (OOP), Database Management Systems (DBMS)) Tj
/F1 11 Tf
0 -18 Td
(CERTIFICATIONS) Tj
/F2 8.5 Tf
0 -12 Td
(- AI & Machine Learning Internship Certification -- Innovation & Incubation Hub, MNNIT Allahabad) Tj
0 -11 Td
(- Remote Sensing Techniques Online Course -- ISRO (IIRS)) Tj
0 -11 Td
(- Google AI-Powered Shopping Ads Certification -- Google) Tj
/F1 11 Tf
0 -18 Td
(ACHIEVEMENTS & LANGUAGES) Tj
/F2 8.5 Tf
0 -12 Td
(Languages: English (Professional Working Proficiency), Hindi (Native)) Tj
0 -11 Td
(Extracurricular: Active Participant, SRGI Hostel League (Volleyball)) Tj
ET
endstream
endobj
xref
0 8
0000000000 65535 f 
0000000009 00000 n 
0000000205 00000 n 
0000000258 00000 n 
0000000317 00000 n 
0000000490 00000 n 
0000000566 00000 n 
0000000637 00000 n 
trailer
<< /Size 8
   /Root 2 0 R
   /Info 1 0 R
>>
startxref
2850
%%EOF`;

fs.writeFileSync(path.join(assetsDir, 'Ashutosh_Yadav_Resume.pdf'), pdfContent);
console.log('Resume PDF updated with exact OCR data at public/assets/Ashutosh_Yadav_Resume.pdf');
