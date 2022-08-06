export const getTeamColor = (team) => {
  switch (team) {
    case "red_bull":
      return "border-red_bull";
    case "ferrari":
      return "border-ferrari";
    case "mercedes":
      return "border-mercedes";
    case "alpine":
      return "border-alpine";
    case "mclaren":
      return "border-mclaren";
    case "alfa":
      return "border-alfa";
    case "haas":
      return "border-haas";
    case "alphatauri":
      return "border-alphatauri";
    case "aston_martin":
      return "border-aston_martin";
    case "williams":
      return "border-williams";
  }
};
