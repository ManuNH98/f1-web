export const getTeamDriver = (team, id) => {
  switch (true) {
    case team == "red_bull" && id == 1:
      return "Max VERSTAPPEN";
    case team == "red_bull" && id == 2:
      return "Sergio PEREZ";
    case team == "ferrari" && id == 1:
      return "Charles LECLERC";
    case team == "ferrari" && id == 2:
      return "Carlos SAINZ";
    case team == "mercedes" && id == 1:
      return "George RUSSELL";
    case team == "mercedes" && id == 2:
      return "Lewis HAMILTON";
    case team == "alpine" && id == 1:
      return "Fernando ALONSO";
    case team == "alpine" && id == 2:
      return "Esteban OCON";
    case team == "mclaren" && id == 1:
      return "Daniel RICCIARDO";
    case team == "mclaren" && id == 2:
      return "Lando NORRIS";
    case team == "alfa" && id == 1:
      return "Valtteri BOTTAS";
    case team == "alfa" && id == 2:
      return "Guanyu ZHOU";
    case team == "haas" && id == 1:
      return "Kevin MAGNUSSEN";
    case team == "haas" && id == 2:
      return "Mick SCHUMACHER";
    case team == "alphatauri" && id == 1:
      return "Pierre GASLY";
    case team == "alphatauri" && id == 2:
      return "YUKI TSUNODA";
    case team == "aston_martin" && id == 1:
      return "Sebastian VETTEL";
    case team == "aston_martin" && id == 2:
      return "Lance STROLL";
    case team == "williams" && id == 1:
      return "Alex ALBON";
    case team == "williams" && id == 2:
      return "Nicholas LATIFI";
  }
};
