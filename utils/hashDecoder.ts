export const encodeIdToHash = (organizerId: number): string => {
  const stringId = organizerId.toString();
  const encoded = btoa(stringId);

  return encoded;
};

export const decodeHashToId = (hash: string): number => {
  try {
    const decoded = atob(hash);

    return parseInt(decoded, 10);
  } catch (error) {
    throw new Error("Invalid hash");
  }
};
