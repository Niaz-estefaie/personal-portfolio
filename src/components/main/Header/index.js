import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header className="flex flex-col items-center justify-center p-8">
        <img
          className="shadow-lg rounded-full inline-block w-40 h-40 m-8"
          alt="logo"
        />
        <h1 className="font-bold capitalize text-gray-500 dark:text-gray-400 text-center text-lg pt-4">
          Try-Not-to-Laugh Challenge
        </h1>
      </header>
    );
  }
}

export default Header;
