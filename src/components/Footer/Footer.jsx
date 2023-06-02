import React from 'react';

const Footer = () => {
  return (
    <footer className="footer flex flex-col md:flex-row justify-between bg-DeepBlue p-4 md:p-8">
      <h1 className="text-2xl font-extrabold text-white mb-4 md:mb-0">Eater's Guide</h1>
      <span className="text-base md:text-2xl font-extrabold text-white">
        Copyright © 2023. All rights are reserved
      </span>
    </footer>
  );
};

export default Footer;
