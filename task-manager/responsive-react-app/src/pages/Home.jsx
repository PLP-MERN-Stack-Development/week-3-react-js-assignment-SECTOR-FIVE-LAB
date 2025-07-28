import React from 'react';
import Header from '../components/Header';
import ApiDataDisplay from '../components/ApiDataDisplay';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <ApiDataDisplay />
      </main>
      <Footer />
    </div>
  );
};

export default Home;