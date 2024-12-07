# 🎬 AI Movie Suggestion

AI Movie Suggestion is a user friendly application that recommends related movies based on a user's input.
Powered by AI, it helps movie enthusiasts discover new films similar to their favorites, enhancing their viewing experience.

---

## 🌟 Features

- **personalized Recommendation**: Get movie suggestions based on your input.
-  **AI-Powered Suggestions**: Uses advanced machine learning to find related movies.
-  **Interactive Interface**: Simple, intuitive, and easy-to-use UI.
- **Diverse Database**: Access to a wide variety of movies across genres and languages.
---

## 🚀 Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites



### Installation

1. **Clone the Repository**
    ---bash
    git clone https://github.com/officialryder1/ai-movie.git
    cd ai-movie

2. **Install Dependencies**
    --bash
    npm install

3. **Set Environment variable**
    create a .env file and add the following
    __.env

    OMDB_API_KEY=your_api_key
    QUOQ_AI_KEY=your_api_key

4. **Run the Project**
    --bash
    npm run dev

5. **Open the app in your browser at http://localhost:5173**

## ⚒️ Technologies Used
 - Frontend: SvelteKit.
 - Database: TMDb/OMDb API.
 - AI Model:
    NLP techniques for movie name parsing.
    Recommendation algorithm using cosine similarity or collaborative filtering.

## 📖 How it Works
1. **User Input:** The user enters the name of a movie they like.
2. **AI Processing:** The app fetches related movies using an AI model or recommendation engine
3. **Query OMDB APi:** The app then get movies details from omdb api as recommendation.
4. **Results:** The related movies are displayed in a user-friendly format with details like title, posters, and release year.

## 💡 Future Enhancements
- User ratings and reviews integration.
- Multi-language support.
- Genre-specific recommendations.
- Advance Ai models like embeddings for better suggestions.

### 🤝🏾Contributing
**Contributing are welcome! To contribute:**
1. Fork the repository.
2. Create a new branch (git checkout -b feature-name).
3. Commit your changes (git commit -m "Add feature").
4. Push to the branch (git push origin feature-name).
5. Open a pull request.

### 🧑‍💻 Authors
- Github @officialryder1
- twitter: @official_ryder0

### 📜 License
**This project is licensed under the MIT License - see the LICENSE file for details**.