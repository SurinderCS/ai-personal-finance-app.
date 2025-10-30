# AI Personal Finance App

**Description:**  
The *AI Personal Finance App* helps users track income, expenses, and savings using intelligent AI recommendations.

**Tech Stack:**  
- **Frontend:** React Native (Expo)  
- **Backend:** Node.js + Express  
- **Database:** MongoDB (Mongoose)  
- **Authentication:** Firebase (upcoming)  
- **Analytics:** Splunk (planned)

---

### 🧩 Local Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/SurinderCS/ai-personal-finance-app.git
   	2.	Go to the project folder
   cd ai-personal-finance-app
   	3.	Install dependencies
   npm install
   	4.	Run backend (port 5000)
   cd backend
npm run dev
	5.	Run mobile app (Expo, port 8081)
   cd ai-finance-mobile
npm start
Health Check (Backend)

Open http://localhost:5000/health￼


**Local Setup**
1. Clone:  
   git clone https://github.com/SurinderCS/ai-personal-finance-app.git
2. Go to folder:  
   cd ai-personal-finance-app
3. Install deps:  
   npm install
4. Run backend (port 3000):  
   node server.js
5. Run mobile app (Expo, port 8081):  
   cd ai-finance-mobile  # if your frontend folder is here  
   npm start

**Health Check (backend):**  
Open http://localhost:3000/health

**Team**
- Surinder Kaur
- Kaaran Rahul S
- Srija Julakanti

**Planned Features**
- AI budget recommendations  
- Subscription cancel suggestions  
- Firebase login  
- Splunk dashboards
Here’s what I finished today for our AI Personal Finance App:
	•	✅ Set up and connected MongoDB Atlas successfully.
	•	✅ Created and tested the backend (Node.js + Express) — it runs on http://localhost:5000.
	•	✅ Verified all API routes in Postman (/api/txns, /api/txns/seed) — working fine.
	•	✅ Added .env file for database credentials and secured it using .gitignore.
	•	✅ Pushed the updated backend code to GitHub.
🔗 https://github.com/SurinderCS/ai-personal-finance-app￼
	•	✅ Documented environment setup steps for the team in README.
## 🧠 Project Setup – Backend

### 1. Clone the repository
```bash
git clone https://github.com/SurinderCS/ai-personal-finance-app.git
cd ai-personal-finance-app/backend
2. Install dependenciesnpm install
npm install
3. Create .env file
MONGODB_URI=your_mongodb_connection_string
PORT=5000
4. Run the server
npm run dev
You should see:
MongoDB connected
Backend on http://localhost:5000

Added backend setup, MongoDB connection, and documentation updates
- Successfully connected MongoDB Atlas and verified backend API routes
- Created and tested Node.js + Express server on port 5000
- Verified /api/txns and /api/txns/seed routes in Postman
- Added .env file for secure database credentials
- Updated README with local setup instructions and team progress
- Pushed all backend updates to main branch
