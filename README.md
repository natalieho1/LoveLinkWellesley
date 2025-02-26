# Valentine's Day Matchmaking Service ❤️

A fun and interactive web app designed to match students at Wellesley College based on their preferences. Built with **Flask** (backend) and **React** (frontend), this project allows users to answer a questionnaire and find their perfect match!

---

## Features ✨
- **Questionnaire**: Users answer 8 multiple-choice questions about their preferences.
- **Matching Algorithm**: Uses Euclidean distance to find the closest match.
- **Email Notifications**: Sends an email to users with their match’s details (optional).
- **Responsive Design**: Works seamlessly on both desktop and mobile devices.

---

## Technologies Used 🛠️
- **Backend**: Flask (Python)
- **Frontend**: React (JavaScript) 
- **Database**: SQLite
- **Email Service**: Gmail SMTP 
- **Hosting**: PythonAnywhere

---

## How It Works 🧠
1. Users visit the website and answer a series of questions.
2. The backend calculates the Euclidean distance between the user’s answers and all other users’ answers.
3. The user with the smallest distance is selected as the match.
4. An email is sent to the user with their match’s details.

---

## Installation 🚀

### Prerequisites
- Python 3.x
- Node.js (for React frontend)
- SQLite (for database)

### Backend Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/valentines-matchmaker.git
   cd valentines-matchmaker
2. Set up a virtual environment:
   ```bash
   python3 -m venv venv
   source venv/bin/activate
4. Install Python dependencies
   ```bash
   pip install -r requirements.txt
5. Intialize the database
   ```
   python
    >>> from models import Base
    >>> from sqlalchemy import create_engine
    >>> engine = create_engine('sqlite:///matches.db')
    >>> Base.metadata.create_all(engine)
6. Run the Flask app
    ```bash
    python app.py

### Frontend Setup
1. Navigate to the React app directory

2. Install dependencies
```bash
npm install
```
3. Build the React app
```bash
npm run build
```
4. Move the build/ folder to the root directory
```bash
mv build/ ../
```
### Acknowledgements 🙏
- Built with ❤️ by Natalie, DeepSeek, and Lovable.dev
