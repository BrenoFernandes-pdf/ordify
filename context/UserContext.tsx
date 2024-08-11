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
  updateOrganizer: (updatedOrganizer) => void;
  removeOrganizer: (organizerId: number) => void;
  addItemToOrganizer: (organizerId: number, item: Item) => void;
  removeItemFromOrganizer: (organizerId: number, itemId: number) => void;
};

const UserContext = createContext<UserContextProps | undefined>(undefined);

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

  const updateOrganizer = (updatedOrganizer) => {
    setUser((prevUser) => ({
      ...prevUser,
      organizers: prevUser.organizers.map((organizer) =>
        organizer.id === updatedOrganizer.id ? updatedOrganizer : organizer
      ),
    }));
  };

  const removeOrganizer = (organizerId) => {
    setUser((prevUser) => ({
      ...prevUser,
      organizers: prevUser.organizers.filter(
        (organizer) => organizer.id !== organizerId
      ),
    }));
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

  const removeItemFromOrganizer = (organizerId: number, itemId: number) => {
    if (user) {
      const updatedOrganizers = user.organizers.map((organizer) =>
        organizer.id === organizerId
          ? {
              ...organizer,
              items: organizer.items.filter((item) => item.id !== itemId),
            }
          : organizer
      );

      setUser({ ...user, organizers: updatedOrganizers });
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        addOrganizer,
        updateOrganizer,
        removeOrganizer,
        addItemToOrganizer,
        removeItemFromOrganizer,
      }}
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
