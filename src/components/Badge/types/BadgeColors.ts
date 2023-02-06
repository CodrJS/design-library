export type BadgeColorType =
  | "gray"
  | "red"
  | "yellow"
  | "green"
  | "blue"
  | "indigo"
  | "purple"
  | "pink"
  | "primary";

enum BadgeColors {
  "primary" = "bg-primary-100 text-primary-800 border-primary-500",
  "gray" = "bg-gray-100 text-gray-800 border-gray-500",
  "red" = "bg-red-100 text-red-800 border-red-500",
  "yellow" = "bg-yellow-100 text-yellow-800 border-yellow-500",
  "green" = "bg-green-100 text-green-800 border-green-500",
  "blue" = "bg-blue-100 text-blue-800 border-blue-500",
  "indigo" = "bg-indigo-100 text-indigo-800 border-indigo-500",
  "purple" = "bg-purple-100 text-purple-800 border-purple-500",
  "pink" = "bg-pink-100 text-pink-800 border-pink-500",
}

export default BadgeColors;
