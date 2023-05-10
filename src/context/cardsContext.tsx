import React, { useState } from "react";

interface cardsContextProps {
  filterCard: any;
  setFilterCard: any;
  filterCardLocation: any;
  setFilterCardLocation: any;
  handleLocationFilter: any;
  handleCardFilter: any;
}

const context = {} as cardsContextProps;
export const CardsContext = React.createContext(context);

export default function CardsContextWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [filterCard, setFilterCard] = useState("");
  const [filterCardLocation, setFilterCardLocation] = useState("");

  const handleLocationFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterCardLocation(e.target.value);
  };
  const handleCardFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterCard(e.target.value);
  };

  return (
    <CardsContext.Provider
      value={{
        filterCard,
        setFilterCard,
        filterCardLocation,
        setFilterCardLocation,
        handleLocationFilter,
        handleCardFilter,
      }}
    >
      {children}
    </CardsContext.Provider>
  );
}
