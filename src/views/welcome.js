import React from "react";
import { Link, Route } from "react-router-dom";
import Nav from "../components/nav";
import DecCard from "../components/decCard";
import { FcIdea } from "react-icons/fc";
import { HiLink } from "react-icons/hi";

const Welcome = () => {
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
              <h1>اختر طريقة توليد الأفكار</h1>
            </div>
          </div>
          <div className="app-content-cards">
            <DecCard
              type="journey"
              head="رحلة الأفكار"
              color="purple"
              desc="رحلتك هنا استثنائية؛ تعرف لماذا؟ لأنك سوف تسير في طريقٍ غير مألوف لديك. الهدف هو الخروج بأفكار ربما تكون مجنووووونة"
              Icon={() => <FcIdea size={125} />}
            />
            <DecCard
              type="match"
              head="الرابط العجيب"
              color="yellow"
              desc="اللامنطق في توليد الأفكار هو الذي يجعلك تخرج بمجموعة غير اعتيادية من الأفكار العجيبة، حاول أن تخرج بأكثر من فكرة من خلال ربطك بين شيئين مختلفين، ورينا قوت عقلك"
              Icon={() => <HiLink size={125} color="rgb(251, 192, 45)" />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
