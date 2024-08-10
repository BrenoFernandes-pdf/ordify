import { createContext, ReactNode, useContext, useState } from "react";

type Item = {
  id: number;
  name: string;
  quantity: number;
};

type Organizer = {
  id: number;
  name: string;
  description: string;
  items: Item[];
};

type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  organizers: Organizer[];
};

type UserContextProps = {
  user: User;
  setUser: (user: User) => void;
  addOrganizer: (organizer: Organizer) => void;
  addItemToOrganizer: (organizerId: number, item: Item) => void;
};

const UserContext = createContext<UserContextProps>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>();

  const addOrganizer = (organizer: Organizer) => {
    if (user) {
      setUser({
        ...user,
        organizers: [...user.organizers, organizer],
      });
    }
  };

  const addItemToOrganizer = (organizerId: number, item: Item) => {
    if (user) {
      const updatedOrganizers = user.organizers.map((organizer) =>
        organizer.id === organizerId
          ? { ...organizer, items: [...organizer.items, item] }
          : organizer
      );

      setUser({ ...user, organizers: updatedOrganizers });
    }
  };

  return (
    <UserContext.Provider
      value={{ user, setUser, addOrganizer, addItemToOrganizer }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUser deve estar dentro do UserProvider");
  }

  return context;
};
