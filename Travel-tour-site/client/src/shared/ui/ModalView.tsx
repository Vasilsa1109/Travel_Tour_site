import React, { FC } from "react";

interface Review {
  id: number;
  user: string;
  text: string;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  country?: string;
  description?: string;
  title?: string;
  imgSrc?: string;
  date?: string;
  commets?: number;
  reviews?: Review[];
}

export const Modal: FC<ModalProps> = ({ isOpen, onClose, country, description, reviews }) => {
  if (!isOpen) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <button onClick={onClose} style={styles.closeButton} aria-label="Закрыть модальное окно">✖</button>
        <h2>{country}</h2>
        <p>{description}</p>
        <h3>Отзывы:</h3>
        <ul>
          {reviews.map(({ id, user, text }) => (
            <li key={id}><b>{user}:</b> {text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  overlay: {
    position: "fixed",
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: "rgba(206, 206, 206, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  modal: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 8,
    maxWidth: 500,
    maxHeight: "80vh",
    overflowY: "auto",
    position: "relative",
    color: "black"
  },
  closeButton: {
    backgroundColor: 'black',
    position: "absolute",
    top: 10,
    right: 10,
    fontSize: 10,
    border: "none",
    cursor: "pointer",
  },
};
