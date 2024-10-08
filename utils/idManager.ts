const idStorage: Record<string, Set<number>> = {
  user: new Set(),
  organizer: new Set(),
  item: new Set(),
  event: new Set(),
};

const getNextId = (type: string): number => {
  let id = 1;

  while (idStorage[type].has(id)) {
    id++;
  }

  return id;
};

export const generateId = (
  type: "user" | "organizer" | "item" | "event"
): number => {
  const id = getNextId(type);

  idStorage[type].add(id);

  return id;
};

export const releaseId = (
  type: "user" | "organizer" | "item" | "event",
  id: number
): void => {
  idStorage[type].delete(id);
};
