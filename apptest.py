from flask import Flask, render_template, request, redirect, url_for
from models import User, Base
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
import smtplib
from email.message import EmailMessage
from dotenv import load_dotenv
import os

# Load environment variables (for Gmail credentials)
load_dotenv()

# Initialize Flask app
app = Flask(__name__)

# Configure SQLite database
engine = create_engine('sqlite:///matches.db')
Base.metadata.create_all(engine)
Session = sessionmaker(bind=engine)

# ----------------- Routes -----------------
@app.route('/')
def home():
    """Welcome page with a 'Begin' button."""
    return render_template('index.html')

@app.route('/start', methods=['POST'])
def start_questionnaire():
    """Redirect to the questionnaire page."""
    return redirect(url_for('questions'))

@app.route('/questions')
def questions():
    """Display the questionnaire form."""
    return render_template('questions.html')

@app.route('/submit', methods=['POST'])
def submit():
    """Handle form submission and find matches."""
    # Save user to database
    session = Session()
    new_user = User(
        name=request.form['name'],
        email=request.form['email'],
        q1=int(request.form['q1']),
        q2=int(request.form['q2']),
        q3=int(request.form['q3']), 
        q4=int(request.form['q4']), 
        q5=int(request.form['q5']), 
        q6=int(request.form['q6']), 
        q7=int(request.form['q7']), 
        q8=int(request.form['q8']), 
        # Add q2 to q15 here (e.g., q2=int(request.form['q2']))
    )
    session.add(new_user)
    session.commit()

    # Find best match
    best_match, min_distance = find_match(new_user.user_id, session)
    if not best_match:
        session.close()
        return "No matches found!", 404

    print(f"Best match for {new_user.name}: {best_match.name} (Distance: {min_distance})")
    

    # Send email
    '''
    send_match_email(
        user_email=new_user.email,
        match_name=best_match.name,
        match_email=best_match.email
    )
    '''
    session.close()
    return redirect(url_for('matches', match_id=best_match.user_id))

@app.route('/matches/<int:match_id>')
def matches(match_id):
    """Display the match result."""
    session = Session()
    match = session.query(User).filter_by(user_id=match_id).first()
    session.close()
    return render_template('matches.html', match=match)

@app.route('/run_matching')
def run_matching():
    """Find the closest match using Euclidean distance."""
    # ... time check ...
    session = Session()
    users = session.query(User).all()
    matches = {}
    for user in users:
        best_match, _ = find_match(user.user_id, session)
        matches[user.name] = best_match.name
    session.close()
    # Email all users their matches here
    print(matches)
    return "Matches generated!"


# ----------------- Helper Functions -----------------
def find_match(current_user_id, session):
    """Find the closest match using Euclidean distance."""
    current_user = session.query(User).filter_by(user_id=current_user_id).first()
    all_users = session.query(User).filter(User.user_id != current_user_id).all()
    
    if not all_users:
        return None, None

    current_vec = [current_user.q1 or 0,
                   current_user.q2 or 0,  
                   current_user.q3 or 0, 
                   current_user.q4 or 0,
                   current_user.q5 or 0,
                   current_user.q6 or 0,
                   current_user.q7 or 0,
                   current_user.q8 or 0]  # Add q2 to q15 here
    
    best_match = None
    min_distance = float('inf')
    
    for user in all_users:
        user_vec = [user.q1 or 0,
                    user.q2 or 0,
                    user.q3 or 0,
                    user.q4 or 0,
                    user.q5 or 0,
                    user.q6 or 0,
                    user.q7 or 0,
                    user.q8 or 0]  # Add q2 to q15 here
        print(f"Current user vector: {current_vec}")
        print(f"Comparing to {user.name}: {user_vec}")
        distance = sum((a - b)**2 for a, b in zip(current_vec, user_vec))**0.5
        if distance < min_distance:
            min_distance = distance
            best_match = user
    
    return best_match, min_distance

if __name__ == '__main__':
    app.run(debug=True)
