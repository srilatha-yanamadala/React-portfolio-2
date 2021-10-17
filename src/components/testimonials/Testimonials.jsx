import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Ravindranath",
      title: "Senior Developer",
      img:
        "https://media-exp1.licdn.com/dms/image/C5603AQGM789RTDHNuw/profile-displayphoto-shrink_400_400/0/1571342045140?e=1640217600&v=beta&t=5UzIwCHL_Uwl27Z2DZPXpQHLr8FGtOKWQhzi347pbhw",
      icon: "assets/twitter.png",
      desc:
        "Seniour software engineer at IKEA, Helsingborg .",
    },
    {
      id: 2,
      name: "Sheliann Olsson",
      title: "Softwarre developer",
      img:
        "https://media-exp1.licdn.com/dms/image/C4D03AQEj6GeXnPe49g/profile-displayphoto-shrink_800_800/0/1629366125457?e=1640217600&v=beta&t=suEDkvMfH_WjzIHzVuODgkATq9_BNci8uBEopiWsdWE",
      icon: "assets/youtube.png",
      desc:
        "Front end developer at Twinpalms, Malmö"  ,   
         featured: true,
    },
    {
      id: 3,
      name: "Charlotta Malmgren ",
      title: "Swedish Language Teacher",
      img:
        "https://media-exp1.licdn.com/dms/image/C5103AQFCPa0ia7lZJg/profile-displayphoto-shrink_800_800/0/1517050869073?e=1640217600&v=beta&t=bTTIoYhYYxWrRYwOgFdjTNB2sNoR-0yyFaumsz6Zxug",
      icon: "assets/linkedin.png",
      desc:
        "Swedish language teacher at Folkuniversitetet, Helsingborg.",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img
                className="user"
                src={d.img}
                alt=""
              />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
