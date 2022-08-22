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

export const getTeamColorBg = (team) => {
  switch (team) {
    case "red_bull":
      return "bg-red_bull";
    case "ferrari":
      return "bg-ferrari";
    case "mercedes":
      return "bg-mercedes";
    case "alpine":
      return "bg-alpine";
    case "mclaren":
      return "bg-mclaren";
    case "alfa":
      return "bg-alfa";
    case "haas":
      return "bg-haas";
    case "alphatauri":
      return "bg-alphatauri";
    case "aston_martin":
      return "bg-aston_martin";
    case "williams":
      return "bg-williams";
  }
};

export const getTeamColorHover = (team) => {
  switch (team) {
    case "red_bull":
      return "hover:border-red_bull dark:hover:border-red_bull";
    case "ferrari":
      return "hover:border-ferrari dark:hover:border-ferrari";
    case "mercedes":
      return "hover:border-mercedes dark:hover:border-mercedes";
    case "alpine":
      return "hover:border-alpine dark:hover:border-alpine";
    case "mclaren":
      return "hover:border-mclaren dark:hover:border-mclaren";
    case "alfa":
      return "hover:border-alfa dark:hover:border-alfa";
    case "haas":
      return "hover:border-haas dark:hover:border-haas";
    case "alphatauri":
      return "hover:border-alphatauri dark:hover:border-alphatauri";
    case "aston_martin":
      return "hover:border-aston_martin dark:hover:border-aston_martin";
    case "williams":
      return "hover:border-williams dark:hover:border-williams";
  }
};
