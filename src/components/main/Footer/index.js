import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer className="text-gray-500 dark:text-gray-400">
        <div className="text-center text-xs p-2">
          Made with LOVE by{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Niaz-estefaie"
          >
            Niaz Estefaie.
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
