import React from "react";
import { Link } from "react-router-dom";
import Nav from "../components/nav";
import DecCard from "../components/decCard";
import { FcIdea } from "react-icons/fc";
import { HiLink } from "react-icons/hi";
const NewIdeas = () => {
  return (
    <div className="app">
      <Nav />
      <div className="wrapper">
        <div className="app-content">
          <div className="app-content-text">
            <h1 className="app-content-text--1">
              أهلاً و سهلاً بك في استيديو 010
            </h1>
            <div className="app-content-text--2">
              <h1>اختر طريقة توليد الآفكار</h1>
            </div>
          </div>
          <div className="app-content-cards">
            <DecCard
              type="journey"
              head="رحلة الأفكار"
              color="purple"
              desc="اختر منتجًا واحدًا وحاول أن تخرج بأكبر قدر ممكن من الأفكار"
              Icon={() => <FcIdea size={125} />}
            />
            <DecCard
              type="match"
              head="الرابط العجيب"
              color="yellow"
              desc="حاول أن تخرج بأكثر من فكرة من خلال ربطك بين شيئين مختلفين"
              Icon={() => <HiLink size={125} color="rgb(251, 192, 45)" />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewIdeas;
