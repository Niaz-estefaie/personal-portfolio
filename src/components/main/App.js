import React from "react";
import Footer from "./Footer/index";
import Header from "./Header/index";

class App extends React.Component {
  state = {
    jokes: [
      {
        setup: "What did the fish say when it hit the wall?",
        punchline: "Dam.",
        type: "general",
      },
    ],
    index: 0,
  };

  getRandomIndex = () => {
    const { jokes } = this.state;
    if (jokes.length > 0) {
      const index = Math.floor(Math.random() * jokes.length);
      this.setState({
        index,
      });
    }
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
