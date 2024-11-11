import React, { useState } from "react";
import axios from "axios";
import Logo from "./assets/logo.svg";
import Logo2 from "./assets/chips.png";
import ArrowRight from "./assets/Arrow_right.svg";
import "./App.css";
import Footer from "./Footer";
import { Helmet } from "react-helmet";

function App() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const cards = [
    {
      title: "More Than Just a Link-in-bio",
      text: "Don’t just put blind links together. Add versatile formats to your links and group them into meaningful curation for more context and direct engagement with your audience. Don’t let your site get lost in bios—stay relevant and increase your reach through the discovery feed.",
      text2:
        "Build curated profiles, share content, sell courses & collaborate with the community",
      image:
        "https://chips-social.s3.ap-south-1.amazonaws.com/cards/card_login.png",
      color: "#fcd34d",
      textcolor: "#e9b81a",
    },
    {
      title: "Create Your Digital Space",
      text: "Build your website effortlessly without relying on developers or designers. Creating your website is now as simple as texting with Chips. Set up a custom web address, seamlessly organize your information, and actively engage with your community. No code required, just pure bliss!",
      text2:
        "Join conversations you care about or just hangout in a group sesh",
      image:
        "https://chips-social.s3.ap-south-1.amazonaws.com/cards/card_message.png",
      color: "#ff8c4e",
      textcolor: "#e7783d",
    },
    {
      title: "Manage and Share Content",
      text: "Explore curations and profiles that match your vibes. Subscribe to profiles to stay updated whenever new content is added. Publish your work on the explore page to reach a wider audience, and share your Chips domain with friends to create a shared space for quality content.",
      text2:
        "Keep your audience engaged and informed with events & updates sent to their mail inbox!",
      image:
        "https://chips-social.s3.ap-south-1.amazonaws.com/cards/card_profile.png",
      color: "#a4fc4d",
      textcolor: "#7ed527",
    },
    {
      title: "Discover and Connect",
      text: "Explore curations and profiles that match your vibes. Subscribe to profiles to stay updated whenever new content is added. Publish your work on the explore page to reach a wider audience, and share your Chips domain with friends to create a shared space for quality content.",
      text2:
        "Explore communities around the world and join those which resonate with you!",
      image:
        "https://chips-social.s3.ap-south-1.amazonaws.com/cards/card_newsletter.png",
      color: "#d0bcff",
      textcolor: "#b7a0ed",
    },
  ];

  const handleSubmit = async (event) => {
    setMessage("");
    event.preventDefault();
    if (email === "") {
      alert("Email can't be empty");
    } else {
      const response = await axios.post(
        `https://api.chips.social/api/join-waitlist`,
        {
          email: email.trim(),
        }
      );
      setEmail("");
      const data = await response.data.message;
      setMessage(data);
    }
  };
  return (
    <div className="container">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Channels.social</title>
        <link rel="icon" href={Logo2} />
      </Helmet>
      <header className="header">
        <img src={Logo} alt="Logo" style={{ height: "30px" }} />
        <h1>
          Your Space to Connect, Collaborate, and Create with Like-Minded Peers
        </h1>
        <p>
          Dive into topic specific chats, collaborate with your audience,
          organize events, share content,{" "}
          <span style={{ fontStyle: "italic" }}>or just hangout.</span>
        </p>
        <h4>
          Join waitlist to get early access to create your channel, And Not
          another whatsapp group!
        </h4>
      </header>
      <div className="flex-container">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          type="email"
          placeholder="email address"
          className="input-field"
        />
        <div className="button-image" onClick={handleSubmit}>
          <img src={ArrowRight} alt="arrow-right" />
        </div>
      </div>
      <div className="message">{message}</div>
      <section className="content">
        {cards.map((card, index) => (
          <div className="card" style={{ backgroundColor: card.color }}>
            {index % 2 !== 0 && <p className="card-text">{card.text2}</p>}
            <img src={card.image} alt="carousel" className="card-img" />
            {index % 2 === 0 && <p className="card-text top">{card.text2}</p>}
          </div>
        ))}
      </section>
      <div className="bottom-text">
        Wherever you post, hangout on
        <span style={{ fontStyle: "italic", fontWeight: "bold" }}>
          <br />
          your Channel with your community!
        </span>
      </div>
      <Footer />
    </div>
  );
}

export default App;
