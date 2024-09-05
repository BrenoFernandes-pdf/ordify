import { Activity, CalendarDays, Car, Plane, Cake } from "lucide-react-native";

type IconProps = {
  type: string;
  size: number;
  color: string;
};

export default function GetIcon({ type, size, color }: IconProps) {
  switch (type) {
    case "Consulta Médica":
      return <Activity size={size} color={color} />;
    case "Revisão do Carro":
      return <Car size={size} color={color} />;
    case "Viagem":
      return <Plane size={size} color={color} />;
    case "Aniversário":
      return <Cake size={size} color={color} />;
    default:
      return <CalendarDays size={size} color={color} />;
  }
}
