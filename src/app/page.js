import Image from "next/image";
import FoodItem from "./components/FoodItem";
import StoryCard from "./components/StoryCard";
import Modal from "./components/Modal";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-8 p-4 sm:p-8 ">
      <Modal />
      <div className="flex flex-wrap items-center justify-center md:justify-start  gap-8 md:gap-10 z-20">
        <StoryCard image={"/images/story1.png"} />
        <StoryCard image={"/images/story2.png"} />
        <StoryCard image={"/images/story3.png"} />
        <StoryCard image={"/images/story4.png"} />
      </div>
      <div className="h-[300px] w-full sm:h-[400px] my-4 lg:my-8">
        <iframe
          className="w-full h-full"
          width="400"
          height="315"
          src="https://www.youtube.com/embed/sv3TXMSv6Lw?si=LYEMBTm0EAqZNDFm"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>

      {/* pizza section  */}
      <div className="font-medium tracking-wide text-lg xl:text-xl rounded-3xl p-2 px-3 sm:px-4 text-center h-auto bg-[#f86400] text-white my-5">
        Pizza
      </div>
      <div className="w-screen px-10 xl:px-16 h-full flex gap-10 md:gap-12 xl:gap-14 overflow-x-auto ">
        <FoodItem
          summary={
            "Tomato sauce, Spicy chicken, Spicy meatballs, Mozzarella, Onion, Green pepper, Tomato, Fried Plantain, Sweet Chili sauce"
          }
          title={"Dodo Supreme"}
          price={"5,500"}
          image={"/images/pizza2.png"}
        />
        <FoodItem
          summary={
            "Chicken, Green pepper, red pepper, sausage, corn, plantain, tomato sauce, mozzarella, BBQ"
          }
          title={"Dodo BBQ"}
          price={"4800"}
          image={"/images/pizza1.png"}
        />
        <FoodItem
          summary={
            "Chicken, pineapple, mozzarella, sweet chili sauce, tomato sauce"
          }
          title={"Hawaiian"}
          price={"5,000"}
          image={"/images/pizza3.png"}
        />
        <FoodItem
          summary={
            "Beef crumbles, Tomato sauce, Onion, Tomato, Mozzarella, Cheddar, Mexican Sauce"
          }
          title={"Mexican Beef pizza"}
          price={"5,500"}
          image={"/images/pizza4.png"}
        />
      </div>
      <div className="w-full font-light text-lg underline underline-offset-4 text-end decoration-orange-400 cursor-not-allowed hover:text-gray-400">
        more
      </div>

      {/* combo section  */}
      <div
        className="w-screen h-[300px] sm:h-[400px]  my-5"
        style={{
          backgroundImage: "url('/images/combopizza.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="font-medium tracking-wide text-lg xl:text-xl rounded-3xl p-2 px-3 sm:px-4 text-center h-auto bg-[#f86400] text-white my-5">
        Combo
      </div>

      <div className="w-screen px-10 xl:px-16 h-full flex gap-10 md:gap-12 xl:gap-14 overflow-x-auto ">
        <FoodItem
          summary={
            "Look, its a pizza duet! Buy 2 medium pizzas and 2 Coca-Cola drinks for N7,000"
          }
          title={"Pizza Duet"}
          price={"7,500"}
          image={"/images/combo1.png"}
        />
        <FoodItem
          summary={"One pasta, one Dodster and 1 coca cola drink"}
          title={"Lunch Deal"}
          price={"5,500"}
          image={"/images/combo2.png"}
        />
        <FoodItem
          summary={
            "Buy any extra large pizza + 10 pieces of chicken wings + 2 coca-cola drinks for N11,500"
          }
          title={"Deluxe Offer"}
          price={"15,500"}
          image={"/images/combo3.png"}
        />
        <FoodItem
          summary={
            "Boost your day with our signature Dodster + any chilled Coca-Cola drink for N2,700"
          }
          title={"Daily Boost"}
          price={"3,000"}
          image={"/images/combo4.png"}
        />
      </div>
      <div className="w-full font-light text-lg underline underline-offset-4 text-end decoration-orange-400 cursor-not-allowed hover:text-gray-400">
        more
      </div>

      {/* snack section  */}
      <div
        className="w-screen h-[300px] sm:h-[400px] my-5"
        style={{
          backgroundImage: "url('/images/snacksection.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="font-medium tracking-wide text-lg xl:text-xl rounded-3xl p-2 px-3 sm:px-4 text-center h-auto bg-[#f86400] text-white my-5">
        Snacks
      </div>

      <div className="w-screen px-10 xl:px-16 h-full flex gap-10 md:gap-12 xl:gap-14 overflow-x-auto ">
        <FoodItem
          summary={"Baked chicken wings marinated in buffalo sauce"}
          title={"Buffalo Chicken Wings"}
          price={"3,500"}
          image={"/images/snack1.png"}
        />
        <FoodItem
          summary={
            "Hot baked wrap with chicken strips, sausages, chili pepper, shawarma sauce"
          }
          title={"Shawarma Dodster "}
          price={"3,500"}
          image={"/images/snack2.png"}
        />
        <FoodItem
          summary={
            "Specialty. Small rolls of Dodo dough with mozzarella and cheese sauce"
          }
          title={"Cheese Rolls"}
          price={"2,500"}
          image={"/images/snack3.png"}
        />
        <FoodItem
          summary={
            "Pasta, tomato sauce, beef grounded, onion, tomatoes, chili pepper, mayonnaise & suya"
          }
          title={"Bolognese Pasta"}
          price={"3,500"}
          image={"/images/snack4.png"}
        />
      </div>
      <div className="w-full font-light text-lg underline underline-offset-4 text-end decoration-orange-400 cursor-not-allowed hover:text-gray-400">
        more
      </div>

      {/* donwlnoad etc  */}
      <div className="font-medium tracking-wide text-lg  xl:text-xl rounded-3xl p-2 px-3 sm:px-4 text-center h-auto bg-[#f86400] text-white my-5">
        Order From The App
      </div>

      <div className="flex cursor-pointer ">
        <div className="w-full h-full">
          <Image
            src={"/images/google-play-badge.png"}
            width={120}
            height={50}
            alt="google play store"
          />
        </div>
        <div className="w-full h-full">
          <Image
            src={"/images/app-store-badge.png"}
            width={120}
            height={50}
            alt="apple store"
          />
        </div>
      </div>
    </main>
  );
}
