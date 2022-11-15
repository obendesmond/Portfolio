import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      img: "marc.jpeg",
      text: `I'm really happy with your determination, communication and
              consistency to finish this project Desmond. I know it wasn't
              easy, but I knew you could do it. Your helpful attitude makes it
              clear that you can continue to take on new challenges and grow
              with the company. Thank you for your extra effort Desmond.`,
    },
    {
      id: 2,
      img: "john.jpg",
      text: `Desmond is the best. No wonder he always calls himself super hero lol. He's a react super hero indeed. I highly recomend him for his skill (ReactJS)`,
    },
    {
      id: 3,
      img: "",
      text: `Working with Desmond has been fun so far. Working on a project currently with him. He's communication and determination is outstanding. There're many developers out there, but Desmond is an expert. I recommend you use him for big projects`,
    },
    {
      id: 4,
      img: "Perick.webp",
      text: ` I’ll like to recommend Desmond O. in the React industry. I’m a UI/UX designer and I’ve recently been working with Desmond for some time now, he knows what he knows, he can bring your UI or Idea to a living react app. His communication is top-notch and he’s so time conscious. I like the fact that he likes taking on new challenges and finishing up victorious with them. He’s a plus if you have him as one of your team members.`,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    swipeToSlide: true,
    arrows: false,
    customPaging: i => (
      <div className="border-2 border-myOrange w-10 h-10 rounded-full overflow-hidden">
        {testimonials[i].img ? (
          <Image
            objectFit="cover"
            objectPosition="top"
            width="100px"
            height="100px"
            src={`/assets/testimonials/${testimonials[i].img}`}
            alt={i}
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-gray-600" />
        )}
      </div>
    ),
    dotsClass: "slick-dots custom-indicator",
  };

  return (
    <div
      id="education"
      className="relative flex flex-col space-y-10 mx-auto bg-[#051926] pt-40 px-10 py-20 md:space-y-0"
    >
      {/* top title */}
      <h1 className="leading-[60px] mb-20 text-center text-5xl font-bold text-white md:text-[80px] md:leading-[80px]">
        Testimonials
      </h1>

      <Slider {...settings} className="container max-w-3xl mx-auto">
        {testimonials.map(testimonial => (
          <div
            key={testimonial.id}
            className=" bg-[#132C3A] rounded-3xl p-10 md:px-20 md:py-28"
          >
            <p className="text-white text-[12px] text-left leading-4 md:text-[15px] md:leading-6 md:text-justify">
              {testimonial.text}
            </p>
          </div>
        ))}
      </Slider>

      {/* absolute circle */}
      <div className="absolute top-64 right-64 p-10 blur-2xl bg-white rounded-full md:blur-3xl md:p-14"></div>
    </div>
  );
}
