import { useState } from "react";
import "./Destinations.css";
import { Header } from "@widgets/ui/Header/Header";
import { Footer } from "@widgets/ui/Footer/Footer";
import { MiniCard } from "@shared/ui/DestinationMiniCard";
import { Hotels } from "@shared/ui/Hotels/Hotels";
import { Modal } from "@shared/ui/ModalView";
const destinationsData = [
  {
    id: 1,
    imgSrc: "https://revelo.vercel.app/assets/images/destinations/destination-five1.jpg",
    country: "Switzerland",
    tours: 230,
    description: "Switzerland is known for its stunning lakes, mountains, and winter sports.",
    reviews: [
      { id: 1, user: "Ivan", text: "Great place, loved the mountains!" },
      { id: 2, user: "Anna", text: "Beautiful scenery and cozy hotels." },
    ],
  },
  {
    id: 2,
    imgSrc: "https://revelo.vercel.app/assets/images/destinations/destination-five2.jpg",
    country: "Poland",
    tours: 190,
    description: "Poland offers rich history and vibrant cultural experiences.",
    reviews: [
      { id: 1, user: "Olga", text: "Fascinating architecture and friendly people." },
      { id: 2, user: "Marek", text: "Delicious food and lively cities." },
    ],
  },
  {
    id: 3,
    imgSrc: "https://revelo.vercel.app/assets/images/destinations/destination-five3.jpg",
    country: "Indonesia",
    tours: 178,
    description: "Indonesia is famous for its beautiful beaches and unique culture.",
    reviews: [
      { id: 1, user: "Wayan", text: "Amazing beaches and wonderful weather." },
      { id: 2, user: "Sari", text: "Rich culture and delicious food." },
    ],
  },
  {
    id: 4,
    imgSrc: "https://revelo.vercel.app/assets/images/destinations/destination-five4.jpg",
    country: "Thailand",
    tours: 196,
    description: "Thailand offers diverse landscapes and incredible cuisine.",
    reviews: [
      { id: 1, user: "Somchai", text: "Great street food and friendly locals." },
      { id: 2, user: "Narin", text: "Beautiful temples and tropical islands." },
    ],
  },
  {
    id: 5,
    imgSrc: "https://revelo.vercel.app/assets/images/destinations/destination-five5.jpg",
    country: "Italy",
    tours: 58,
    description: "Italy is renowned for its art, history, and cuisine.",
    reviews: [
      { id: 1, user: "Marco", text: "Delicious pasta and stunning architecture." },
      { id: 2, user: "Luisa", text: "Romantic cities and beautiful landscapes." },
    ],
  },
  {
    id: 6,
    imgSrc: "https://revelo.vercel.app/assets/images/destinations/destination-five6.jpg",
    country: "New York",
    tours: 28,
    description: "New York City is the bustling metropolis of dreams and culture.",
    reviews: [
      { id: 1, user: "John", text: "Broadway shows and amazing skyline." },
      { id: 2, user: "Emily", text: "Diverse food and vibrant nightlife." },
    ],
  },
  {
    id: 7,
    imgSrc: "https://revelo.vercel.app/assets/images/destinations/destination-five8.jpg",
    country: "Wroclaw, Poland",
    tours: 34,
    description: "Wroclaw is known for its charming squares and rich history.",
    reviews: [
      { id: 1, user: "Kasia", text: "Lovely old town and warm atmosphere." },
      { id: 2, user: "Piotr", text: "Great cultural events and cafes." },
    ],
  },
  {
    id: 8,
    imgSrc: "https://revelo.vercel.app/assets/images/destinations/destination-five10.jpg",
    country: "Antalya, Turkey",
    tours: 298,
    description: "Antalya combines beautiful beaches with ancient history.",
    reviews: [
      { id: 1, user: "Ahmet", text: "Perfect beaches and rich cultural heritage." },
      { id: 2, user: "Elif", text: "Friendly people and delicious Turkish cuisine." },
    ],
  },
];


export const DestinationsPage = () => {
const [modalOpen, setModalOpen] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState<typeof destinationsData[0] | null>(null);

  const openModal = (destination: typeof destinationsData[0]) => {
    setSelectedDestination(destination);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedDestination(null);
  };

  return (
    <>
      <Header />
      <main>
        <h1>Explore Our Popular Destinations</h1>
        <div className="mini-cards">
          {destinationsData.map((dest) => (
            <MiniCard
              key={dest.id}
              imgSrc={dest.imgSrc}
              country={dest.country}
              tours={dest.tours}
              onShowDetails={() => openModal(dest)}
            />
          ))}
        </div>
        <Hotels />
      </main>
      <Footer />
       {selectedDestination && (
        <Modal
          isOpen={modalOpen}
          onClose={closeModal}
          country={selectedDestination.country}
          description={selectedDestination.description}
          reviews={selectedDestination.reviews}
        />
      )}
    </>
  );
};