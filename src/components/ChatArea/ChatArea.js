import React, { useState, useEffect } from "react";

import axios from "axios"; // You will need axios or a similar library for HTTP requests

function ChatArea() {
  const [chatHistory, setChatHistory] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState("");
  const [answers, setAnswers] = useState([]);
  const [showChatHistory, setShowChatHistory] = useState(false);
  useEffect(() => {
    // Fetch chat history from the backend (replace with actual API endpoint)

    // axios.get("/api/chat/history").then((response) => {
    //   setChatHistory(response.data);
    // });

    // Fetch predefined questions from the backend (replace with actual API endpoint)

    // axios.get("/api/questions").then((response) => {
    //   setQuestions(response.data);
    // });
  }, []);

  const handleSelectQuestion = (question) => {
    setSelectedQuestion(question);
    // Fetch answers from the backend based on the selected question
    // axios.get(`/api/answers?question=${question}`).then((response) => {
    //   setAnswers(response.data);
    // });
  };

  const handleShowChatHistory = () => {
    setShowChatHistory(true);
  };

  const handleClearConversation = () => {
    // Clear the conversation on the frontend
    setChatHistory([]);
  };

  const handleLogout = () => {
    // Implement your logout functionality here (e.g., clearing user session)
  };

  return (
    <div className="chat-container">
      <h2>Chat Area</h2>
      <div className="chat-history">
        {chatHistory.map((entry, index) => (
          <div key={index} className={`chat-entry ${entry.user}`}>
            <span>{entry.user}: </span>
            <span>{entry.message}</span>
          </div>
        ))}
      </div>
      <div className="actions">
        <button onClick={handleClearConversation}>Clear Conversation</button>
        <button onClick={handleShowChatHistory}>Show Chat History</button>
        <button onClick={handleLogout}>Logout</button>
      </div>
      {showChatHistory && (
        <div className="chat-history-popup">
          {/* Display chat history here */}
          {chatHistory.map((entry, index) => (
            <div key={index} className={`chat-entry ${entry.user}`}>
              <span>{entry.user}: </span>
              <span>{entry.message}</span>
            </div>
          ))}
        </div>
      )}
      <div className="question-dropdown">
        <select
          onChange={(e) => handleSelectQuestion(e.target.value)}
          value={selectedQuestion}
        >
          <option value="">Select a question</option>
          {questions.map((question, index) => (
            <option key={index} value={question}>
              {question}
            </option>
          ))}
        </select>
      </div>
      <div className="answers">
        {answers.map((answer, index) => (
          <div key={index} className="answer">
            {answer}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChatArea;
