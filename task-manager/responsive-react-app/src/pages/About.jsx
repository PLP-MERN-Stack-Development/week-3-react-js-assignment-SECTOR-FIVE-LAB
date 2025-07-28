import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">About This Application</h1>
      <p className="mb-2">
        This application is a responsive React app built using JSX and Tailwind CSS. 
        It demonstrates a component-based architecture, state management with hooks, 
        and the use of the Context API for theme management.
      </p>
      <p className="mb-2">
        The app integrates with the JSONPlaceholder API to fetch and display data, 
        showcasing how to handle loading and error states effectively.
      </p>
      <p>
        The goal of this project is to provide a clear example of modern React practices 
        and to create a user-friendly interface that adapts to different screen sizes.
      </p>
    </div>
  );
};

export default About;