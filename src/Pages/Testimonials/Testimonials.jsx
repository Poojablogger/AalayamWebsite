import React from "react";
import "./Testimonials.css";

import { useTranslation } from "react-i18next";
import testimonialBg from "../../assets/images/testimonial-bg.png";
import avatar1 from "../../assets/images/avatar1.png";
import avatar2 from "../../assets/images/avatar2.png";
import avatar3 from "../../assets/images/avatar3.png";
import avatar4 from "../../assets/images/avatar4.png";
import avatar5 from "../../assets/images/avatar5.png";
import avatar6 from "../../assets/images/avatar6.png";

function Testimonials() {
  const { t } = useTranslation();
  const testimonials = [
  {
    name: "VijayKumar M.",
    place: "Chennai",
    avatar: avatar5,
    review:
      "ஒவ்வொரு நாளும் புதிய போஸ்டர்கள் வருவது எனக்கு ரொம்ப பிடிக்கும். குடும்பத்தினருக்கும் நண்பர்களுக்கும் அனுப்புவேன்."
  },
  {
    name: "Pooja K.",
    place: "Coimbatore",
    avatar: avatar3,
    review:
      "Festival wishes and temple updates are available in one place. It has become part of my daily routine.",
  },
  {
    name: "Gayathri G.",
    place: "Madurai",
    avatar: avatar2,
    review:
      "The app is easy to use and the devotional content is excellent. I highly recommend Alayam.",
  },
  {
    name: "Kirthika S.",
    place: "Banglore",
    avatar: "K",
    review:
      "ಈ ಆಪ್ ಬಳಸಲು ತುಂಬಾ ಸುಲಭ. ಪ್ರತಿದಿನ ಹೊಸ ಭಕ್ತಿ ವಿಷಯಗಳು ಸಿಗುತ್ತವೆ.",
  },
  {
    name: "Kothai S.E",
    place: "Coimbatore",
    avatar: "K",
    review:
      "The temple updates and festival wishes are always timely. A must-have devotional app.",
  },
  {
    name: "Vidya M.",
    place: "Chennai",
    avatar: avatar4,
    review:
      "I use Alayam every day for devotional greetings. The app is smooth and very easy to use.",
  },
  {
    name: "Yogeshprabhu A.",
    place: "Salem",
    avatar: avatar6,
    review:
      "The designs are elegant and inspiring. I love creating personalized devotional posters.",
  },
  {
    name: "Selvaraj X.",
    place: "Erode",
    avatar: "C",
    review:
      "A wonderful app for every devotee. Daily spiritual content keeps me connected with faith.",
  },
  {
    name: "Rajaguru K.",
    place: "Vellore",
    avatar: "R",
    review:
      "A simple and elegant app with inspiring spiritual content. The daily updates are always fresh and meaningful.",
  },
  {
    name: "Sruthi E.",
    place: "Ooty",
    avatar: avatar1,
    review:
      "Really good app. I use it every day for devotional posters.",
  },
  {
  name: "Abiram A",
  place: "Kerala",
  avatar: "A",
  review:
    "വളരെ നല്ല ആപ്പാണ്. ദിവസവും പുതിയ ഭക്തി പോസ്റ്ററുകൾ ലഭിക്കുന്നു. വളരെ ഉപകാരപ്രദം.",
  stars: "★★★★★",
},
{
  name: "Saakshi",
  place: "Delhi",
  avatar: "S",
  review:
    "आलयम ऐप बहुत सुंदर है। रोज़ नए भक्ति पोस्टर और त्योहार की शुभकामनाएँ मिलती हैं। इसे इस्तेमाल करना बहुत आसान है।",
  stars: "★★★★★",
},
   
];
  return (
    <section className="testimonial-section">
    <div
  className="testimonial-background"
  style={{ backgroundImage: `url(${testimonialBg})` }}
></div>
      <div className="container">

        <div className="testimonial-title">

          <span className="testimonial-subtitle">
            {t("testimonials.subtitle")}
          </span>

          <h2>
            {t("testimonials.title")}
          </h2>

          <p>
           {t("testimonials.description")}
          </p>

        </div>

        <div className="testimonial-grid">

          {testimonials.map((item, index) => (

            <div
              className="testimonial-card"
              key={index}
            >

               <div className="testimonial-user">

  <div className="testimonial-avatar">
  {typeof item.avatar === "string" && item.avatar.length === 1 ? (
    item.avatar
  ) : (
    <img src={item.avatar} alt={item.name} />
  )}
</div>

  <div className="testimonial-user-details">

    <h4>{item.name}</h4>

    <span>{item.place}</span>

  </div>

</div>

  <p className="testimonial-review">
  {item.review}
</p>

<div className="testimonial-stars">
  ★★★★★
</div>          
            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;