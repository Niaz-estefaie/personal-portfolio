import React from "react";
import Footer from "./Footer/index";
import Header from "./Header/index";

class App extends React.Component {
  state = {
    // 
  };

  render() {
    return (
      <div className="flex flex-col min-h-screen">
        {/* Header section */}
        <Header/>

        {/* Main section */}
        <main className="flex-grow">
          <div
            className="container text-gray-500 dark:text-gray-400 flex flex-col items-center justify-center gap-4 p-4 md:p-8"
            id="quote-box"
          ></div>
        </main>

        {/* Footer section */}
        <Footer />
      </div>
    );
  }
}

export default App;
