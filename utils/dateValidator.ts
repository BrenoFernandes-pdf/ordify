export function isValidDate(dateString: string): boolean {
  const regex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
  const match = dateString.match(regex);

  if (!match) return false;

  const [, day, month, year] = match.map(Number);

  const date = new Date(year, month - 1, day);

  return (
    date.getFullYear() === year &&
    date.getMonth() + 1 === month &&
    date.getDate() === day
  );
}

export function formatDate(dateString: string): string | null {
  if (!isValidDate(dateString)) return null;

  const [day, month, year] = dateString.split("/");

  return `${day}/${month}/${year}`;
}
