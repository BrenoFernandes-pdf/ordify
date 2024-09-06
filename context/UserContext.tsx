import { releaseId } from "@/utils/idManager";
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
  isFavorited: boolean;
  items: Item[];
};

type Event = {
  id: number;
  name: string;
  description: string;
  eventType: string;
  date: string;
};

type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  organizers: Organizer[];
  events: Event[];
};

type UserContextProps = {
  user: User | null;
  setUser: (user: User) => void;

  createUser: (user: User) => void;
  readUser: (userId: number) => User | undefined;
  updateUser: (updatedUser: User) => void;
  deleteUser: (userId: number) => void;

  createOrganizer: (organizer: Organizer) => void;
  readOrganizer: (organizerId: number) => Organizer | undefined;
  updateOrganizer: (updatedOrganizer: Organizer) => void;
  deleteOrganizer: (organizerId: number) => void;

  createItem: (organizerId: number, item: Item) => void;
  readItem: (organizerId: number, itemId: number) => Item | undefined;
  updateItem: (organizerId: number, updatedItem: Item) => void;
  deleteItem: (organizerId: number, itemId: number) => void;

  createEvent: (event: Event) => void;
  readEvent: (eventId: number) => Event | undefined;
  updateEvent: (updatedEvent: Event) => void;
  deleteEvent: (eventId: number) => void;
};

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [users, setUsers] = useState<User[]>([]);

  const createUser = (newUser: User) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };

  const readUser = (userId: number): User | undefined => {
    return users.find((user) => user.id === userId);
  };

  const updateUser = (updatedUser: User) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );
  };

  const deleteUser = (userId: number) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));

    if (user && user.id === userId) {
      setUser(null);
    }

    releaseId("user", userId);
  };

  const createOrganizer = (newOrganizer: Organizer) => {
    if (user) {
      const updatedUser = {
        ...user,
        organizers: [...user.organizers, newOrganizer],
      };

      setUser(updatedUser);
      updateUser(updatedUser);
    }
  };

  const readOrganizer = (organizerId: number): Organizer | undefined => {
    return user?.organizers.find((organizer) => organizer.id === organizerId);
  };

  const updateOrganizer = (updatedOrganizer: Organizer) => {
    if (user) {
      const updatedUser = {
        ...user,
        organizers: user.organizers.map((organizer) =>
          organizer.id === updatedOrganizer.id ? updatedOrganizer : organizer
        ),
      };

      setUser(updatedUser);
      updateUser(updatedUser);
    }
  };

  const deleteOrganizer = (organizerId: number) => {
    if (user) {
      const updatedUser = {
        ...user,
        organizers: user.organizers.filter(
          (organizer) => organizer.id !== organizerId
        ),
      };

      releaseId("organizer", organizerId);
      setUser(updatedUser);
      updateUser(updatedUser);
    }
  };

  const createItem = (organizerId: number, newItem: Item) => {
    if (user) {
      const updatedUser = {
        ...user,
        organizers: user.organizers.map((organizer) =>
          organizer.id === organizerId
            ? { ...organizer, items: [...organizer.items, newItem] }
            : organizer
        ),
      };

      setUser(updatedUser);
      updateUser(updatedUser);
    }
  };

  const readItem = (organizerId: number, itemId: number): Item | undefined => {
    return user?.organizers
      .find((organizer) => organizer.id === organizerId)
      ?.items.find((item) => item.id === itemId);
  };

  const updateItem = (organizerId: number, updatedItem: Item) => {
    if (user) {
      const updatedUser = {
        ...user,
        organizers: user.organizers.map((organizer) =>
          organizer.id === organizerId
            ? {
                ...organizer,
                items: organizer.items.map((item) =>
                  item.id === updatedItem.id ? updatedItem : item
                ),
              }
            : organizer
        ),
      };

      setUser(updatedUser);
      updateUser(updatedUser);
    }
  };

  const deleteItem = (organizerId: number, itemId: number) => {
    if (user) {
      const updatedUser = {
        ...user,
        organizers: user.organizers.map((organizer) =>
          organizer.id === organizerId
            ? {
                ...organizer,
                items: organizer.items.filter((item) => item.id !== itemId),
              }
            : organizer
        ),
      };

      releaseId("item", itemId);
      setUser(updatedUser);
      updateUser(updatedUser);
    }
  };

  const createEvent = (newEvent: Event) => {
    if (user) {
      const updatedUser = {
        ...user,
        events: [...user.events, newEvent],
      };

      setUser(updatedUser);
      updateUser(updatedUser);
    }
  };

  const readEvent = (eventId: number): Event | undefined => {
    return user?.events.find((event) => event.id === eventId);
  };

  const updateEvent = (updatedEvent: Event) => {
    if (user) {
      const updatedUser = {
        ...user,
        events: user.events.map((event) =>
          event.id === updatedEvent.id ? updatedEvent : event
        ),
      };

      setUser(updatedUser);
      updateUser(updatedUser);
    }
  };

  const deleteEvent = (eventId: number) => {
    if (user) {
      const updatedUser = {
        ...user,
        events: user.events.filter((event) => event.id !== eventId),
      };

      releaseId("event", eventId);
      setUser(updatedUser);
      updateUser(updatedUser);
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        createUser,
        readUser,
        updateUser,
        deleteUser,
        createOrganizer,
        readOrganizer,
        updateOrganizer,
        deleteOrganizer,
        createItem,
        readItem,
        updateItem,
        deleteItem,
        createEvent,
        readEvent,
        updateEvent,
        deleteEvent,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { Organizer };
export { Event };

export const useUserContext = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error(
      "useUserContext deve ser utilizado dentro do UserProvider."
    );
  }

  return context;
};
