import React from 'react';

// GreetingCard Component
const GreetingCard = ({ title, message }) => {
  return (
    <div style={styles.card}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
};

// Header Component
const Header = () => {
  return (
    <header>
      <h1>Welcome to Greeting Cards</h1>
    </header>
  );
};

// App Component
const App = () => {
  const cardData = [
    { title: "Happy Birthday!", message: "Wishing you a day filled with love and happiness." },
    { title: "Congratulations!", message: "You did it! So proud of you." },
    { title: "Get Well Soon!", message: "Wishing you a speedy recovery." }
  ];

  return (
    <div>
      <Header />
      {cardData.map((card, index) => (
        <GreetingCard key={index} title={card.title} message={card.message} />
      ))}
    </div>
  );
};

// Styles for the GreetingCard
const styles = {
  card: {
    border: '1px solid #ccc',
    padding: '20px',
    margin: '10px',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
  },
};

export default App;