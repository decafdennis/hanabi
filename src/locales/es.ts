/* eslint-disable @typescript-eslint/camelcase */

export const es = {
  hanabi: "Hanabi",
  welcome: "Bienvenido",
  newGame: "Nuevo juego",
  tagline: "¡Juega Hanabi en línea con tus amigos!",
  subTagline: "Juego de cartas multijugador y cooperativo, disponible en teléfonos, tabletas y ordenadores",
  createRoom: "Crear un juego",
  joinRoom: "Unirse a un juego",
  rejoinGame: "Volver al juego",
  whatsHanabi: "¿Qué es Hanabi?",
  invitationByPlayers: "{{playersNames}} te invitan a un juego de Hanabi 🎉",
  invitationByPlayer: "{{{nombre del jugador}} te invita a un juego de Hanabi 🎉",
  invitationNoPlayers: "Ha recibido una invitación a un juego de Hanabi 🎉",
  gameFull: "¡Llegaron todos!",
  gameNotFull: "Ya llegó {{joined}} / {{playersCount}}",
  gameNotFullPlural: "Ya llegaron {{joined}} / {{playersCount}}",
  startGame: "Comenzar juego",
  addAi: "+ añadir una IA",
  lobby: "Lobby",
  choosePlayerName: "Escoge tu nombre de jugador",
  join: "Unirse",
  autoplay: "Autoplay",
  shareGame: "Comparte este juego",
  copy: "Copia",
  waitForOthers: "Puedes esperar a los demás o ",
  gameStarted: "¡Comenzó el juego!",
  gameStarts: "¡Comienza el juego!",
  discardPile: "Descarte ({{discardLength}})",
  preventLossContent: "Tu acción te hace perder un punto - Continúa?",
  rewind: "Rebobinar 🕑",
  backToGame: "Vuelve al juego",
  theirTurn: "¡Le toca a {{currentPlayerName}}!",
  go: "¡Vamos!",
  estimatedMaxScore: "Puntuación máxima est. para este mazo: {{reachableScore}}",
  keepPracticing: "¡Nada mal!",
  congrats: "¡Increíble!",
  hideStats: "Mostrar cartas",
  showStats: "Mostrar estadísticas",
  gameOver: "¡Game over! - Tu puntuación es {{playedCardsLength}} 🎉",
  score: "Hanabi - Puntuación: {{score}} / {{maxPossibleScore}}",
  turnLeftDisclaimer: "· queda 1 turno",
  turnsLeftDisclaimer: "· quedan {{actionsLeft}} turnos",
  cardLeft: "quedan {{pileLength}}",
  tokens: "fichas",
  deck: "mazo",
  loading: "Cargando...",
  menu: "Menú",
  tutorial: "Tutorial",
  rules: "Reglas",
  yourTurn: "¡Te toca!",
  youWillStart: "Jugarás de primero",
  hide: "Ocultar",
  reveal: "Revelar",
  cardSelected: "Carta {{position}} seleccionada",
  eightTokens: "8 fichas",
  cannotDiscard: "No se puede descartar",
  noTokens: "No quedan fichas para dar datos",
  selectVignette: "Selecciona un color o un valor para dar un datos",
  hint: "Dar dato",
  negativeHintColor: "No tienes ningún {{color}}",
  negativeHintNumber: "No tienes ningún {{number}}",
  positiveHintColor: "Tu carta {{position}} es de color {{ color}}",
  positiveHintNumber: "Tu carta {{position}} es un {{number}}",
  positiveHintNumberSequence: "Tu carta {{ position }} es un {{ number }} o más",
  positiveHintColorPlural: "Tus cartas {{ positions }} son de color {{ color }}",
  positiveHintNumberPlural: "Tus cartas {{ positions }} son {{ number }}",
  positiveHintNumberSequencePlural: "Tus cartas {{ positions }} son {{ number }} o más",
  you: "Tú",
  hinted: "Pistas",
  played: "Cartas jugadas",
  discarded: "Descartes",
  rollback: "Retroceder",
  rollbackDisclaimer: "Estás a punto de retroceder la última acción.",
  cannotRollback: "Todavía no puedes retroceder el juego",
  abort: "Volver al juego",
  introTutorial: "Tutorial",
  introContent: "¡Aprendamos a jugar juntos!",
  playCardsTutorial: "Cartas jugadas",
  playedCardsTutorialContent:
    "Aquí estarán las cartas que se han jugado.\nJuntos, hay que llegar al 5 en cada color para ganar el juego.",
  discardTutorial: "Descarte",
  discardTutorialContent:
    "Los descartes aparecerán aquí.\nEvita descartar las que sean\nnecesarias para terminar el juego.",
  yourGameTutorial: "Tu juego",
  yourGameTutorialContent:
    "Estas son tus cartas.\nTú no puedes verlas, pero los demás jugadores sí, y te darán datos sobre ellas.",
  teammatesTutorial: "Compañeros",
  teammatesTutorialContent:
    "Estos son tus compañeros de equipo.\nAl igual que tú, no pueden ver sus cartas.\nDales datos para ayudarlos a jugar o a descartar cartas.",
  hintTokensTutorial: "Fichas azules",
  hintTokensTutorialContent:
    "Algunas acciones tienen un costo.\n\n- Dar un dato cuesta 1 ficha para datos.\n- Al descartar una carta, ganas 1 ficha para datos.\n- Al jugar un 5, ganas 1 bono de 1 ficha para datos.",
  strikeTokensTutorial: "Fichas rojas",
  strikeTokensTutorialContent:
    "Jugar una carta equivocada hará que se descarte y costará 1 ficha de error.\nSi acumulan 3 fichas de error, perderán el juego al instante.",
  yourTurnTutorial: "¡Es tu turno!",
  yourTurnTutorialContent:
    "Tienes 3 opciones:\n\n- Toca tus cartas para jugar una...\n- ... o para descartarla\n- Toca las cartas de uno de tus compañeros para darle un dato.",
  skip: "✕ Saltar",
  offline: "¡Estás sin conexión!",
  apologies: "Lo lamentamos, algo salió mal 😕",
  errorWillInvestigate:
    "Lo investigaremos lo más pronto posible. No dudes en <1>escribirnos</1> para contarnos lo que pasó.",
  earlyDevelopment: "El juego está aún en desarrollo y nos encantaría recibir tus comentarios.",
  publicRepo: "También tenemos un <1>repositorio público de Github</1> si quieres contribuir o reportar un problema.",
  backMenu: "Regresar al menú",
  landingImageAlt: "Logotipo del juego de cartas Hanabi en línea",
  classicVariant: "Clásico",
  orangeVariant: "Naranja",
  multicolorVariant: "Multicolor",
  rainbowVariant: "Arcoiris",
  sequenceVariant: "Secuencia",
  classicVariantDescription: "Un juego clásico de Hanabi con 5 colores",
  multicolorVariantDescription: "Se añade una 6ta pinta con solo una carta de cada número",
  rainbowVariantDescription: "Se añade una 6ta pinta que se nombra como todos los demás colores",
  orangeVariantDescription: "Se añade una 6ta pinta clásica",
  secuenciaVarianteDescripción: "Las pistas numéricas también apuntan a las cartas de mayor valor",
  showDirectHints: "Mostrar datos directos",
  hideDirectHints: "Esconder datos",
  botSpeed: "Velocidad de los bots",
  normalGameExplanation: "Podrás jugar en línea compartiendo el enlace del juego con tus amigos",
  passandplayExplanation:
    "En este modo pass-and-play, puedes jugar con varios jugadores que estén físicamente en el mismo lugar pasando el dispositivo a cada jugador que esté de turno",
  private: "Privado",
  hints: "Datos",
  allowRollback: "Permitir devolverse",
  preventLoss: "Evitar perder",
  passandplay: "Pasa y Juega",
  passandplaySubtext: "Pásale físicamente el dispositivo a cada jugador para que tome su turno",
  privateSubtext: "Su juego no será visible en la sección 'Únete a un juego'",
  advancedOptions: "Opciones avanzadas",
  players: "Jugadores",
  mode: "Modo",
  seed: "Semilla",
  objective: "Objetivo",
  rulesIntro:
    "Hanabi es un juego de cartas creado por Antoine Bauza. Es cooperativo, es decir, los jugadores no juegan unos contra otros sino que colaboran para lograr un objetivo común. Los jugadores representan pirotécnicos distraídos, quienes por falta de atención confundieron su pólvora, mechas y cohetes para un espectáculo de fuegos artificiales. El espectáculo comenzará pronto y la situación es un poco caótica. Tendrán que colaborar entre ellos para evitar que el espectáculo se vuelva un desastre.",
  rulesGoal:
    "El objetivo del equipo de pirotécnicos es construir 5 fuegos artificiales, uno de cada color (blanco, rojo, azul, amarillo y verde), combinando cartas de valor ascendente (1,2,3,4,5) del mismo color.",
  rulesSetupTitle: "Instalación",
  rulesSetup:
    "La aplicación prepara todo por ti. Muy útil, ¿no? 😉. Al inicio del juego, tendrán 8 fichas azules, para dar datos, y 3 fichas rojas: los errores.\n\nEl mazo contiene 50 cartas, 10 de cada color, <1>numeradas 1, 1, 1, 2, 2, 3, 3, 4, 4, 5</1>.\n· En un juego con 2 o 3 jugadores, cada uno recibirá 5 cartas\n· En un juego con 4 o 5 jugadores, cada uno recibirá 4 cartas.\n\nComo verán, ¡los jugadores no pueden ver sus propias cartas!",
  rulesGameTitle: "Mecanismo del juego",
  rulesGame:
    "En su turno, cada jugador realiza una (y solamente una) de las siguientes acciones. No está permitido pasar. \n1. Darle un dato a otro jugador.\n2. Descartar una carta.\n3. Jugar una carta\n\n¡Los jugadores no tienen permitido dar datos o sugerencias durante el turno de otro jugador!",
  rulesHintTitle: "1. Dar un dato",
  rulesHint:
    "Cuando das un dato, gastarás una ficha azul. Nota: Si no hay más fichas azules, no puedes decidir dar un dato, debes realizar otra acción.\n\nEntonces le das un dato a un compañero sobre las cartas que tiene en su mano, haciendo clic sobre ella. Puedes decirle al jugador algo sobre un color (y sólo uno), o sobre ún número (y sólo uno) de carta.",
  rulesDiscardTitle: "2. Descartar una carta",
  rulesDiscard:
    "Descartando una carta ganarás una ficha azul. Descartas una carta de tu mano haciendo clic sobre ella. Luego tomas una carta del mazo, que se añadirá a tu mano. \nNota: Si tienen todas las 8 fichas azules, no puedes descartar y debes realizar otra acción. \nPuedes consultar las cartas descartadas a todo tiempo.",
  rulesPlayTitle: "3. Jugar una carta",
  rulesPlay:
    "Cuando sea tu turno, para jugar una carta, tómala de tu mano y juégala.\nPasará una de dos cosas:\n· Si la carta comienza o continúa un color de fuegos artificiales, se añadirá a ese montón\n· Si la carta no inicia ni añade un color de fuegos artificiales, será descartada, y se añadirá una ficha roja de error\nLuego tomas una carta del mazo.\n\nCuando un jugador termina un color de fuegos artificiales jugando una carta con valor de 5, ganará una ficha azul como bono. Si todas las fichas azules están disponibles, no recibirán el bono.",
  rulesEndTitle: "Fin del juego",
  rulesEnd:
    "Hanabi puede terminar de tres maneras diferentes:\n· Si reciben la tercera ficha roja de error, ¡los fuegos artificiales se incendiarán!\n· Si el equipo completa todos los 5 colores de fuegos artificiales con una carta de valor 5, el equipo hace un espectáculo maravilloso de fuegos artificiales y obtiene la puntuación máxima de 25, ¡30 con la opción multicolor!\n· Si un jugador toma la última carta del mazo, el juego casi se acaba. Cada jugador tendrá un turno más, incluyendo al jugador que tomó la última carta. Los jugadores no pueden tomar más cartas durante estos turnos finales.\n\nLos jugadores califican su desempeño según los fuegos artificiales que ensamblaron.",
  rulesExtensionTitle: "Extensión",
  rulesExtensionMulticolor:
    "🎨 La variante multicolor añade un 6to montón y una 6ta pinta de cartas con solo una carta de cada número: 1, 2, 3, 4, 5. Estos fuegos artificiales, por lo tanto, son más escasos, y tendrás que tener cuidado de no descartarlos. Las reglas son las mismas, y hay que completar los 6 montones para lograr la puntuación máxima de 30 puntos.",
  rulesExtensionRainbow:
    "🌈 La variante arcoiris añade un 6to montón con la misma cantidad de cartas de los otros 5 (tres 1, 2 de cada número 2/3/4, y un 5). La particularidad es que las cartas arcoiris son de todos los colores. Cuando des un dato sobre cualquier color, afectará a las cartas arcoiris.",
  rulesUsTitle: "¿Quiénes somos?",
  rulesUs:
    "Somos un grupo de adictos a los juegos de mesa. En la cuarentena en 2020 nos propusimos encontrar una alternativa para jugar juntos remotamente. \nComo nos divertimos tanto programando como jugando Hanabi, decidimos crear una versión del juego en línea, compatible para móviles.\n\n👉 Al igual que nosotros, si te gusta el juego, ¡por favor compra la <2>versión física</2> para apoyar al creador!",
  rulesBuy:
    "No dudes en <1>comunicarte con nosotros</1> si tienes alguna pregunta o sugerencia. También tenemos un <2>repositorio público en Github</2> si quieres contribuir.",
  noRoom: "No hay ningún salón disponible",
  faster: "Más rápido",
  fast: "Rápido",
  slow: "Lento",
  discard: "Descarte",
  play: "Jugar",
  green: "verde",
  red: "rojo",
  yellow: "amarillo",
  blue: "azul",
  white: "blanco",
  multicolor: "multicolor",
  orange: "naranja",
  green_plural: "verde",
  red_plural: "rojo",
  yellow_plural: "amarillo",
  blue_plural: "blue",
  white_plural: "blanco",
  multicolor_plural: "multicolor",
  orange_plural: "naranja",
  summary: "Resumen",
  summarySubtitle: "Nuestro juego de Hanabi",
  gameCompleted: "Juego completado en {{ gameDuration }}",
  result: "Nuestro resultado",
  evolution: "Evolución",
  evolutionSubtext:
    "¡Sigue la historia del juego! Las cartas de cada jugador se muestran, sin importar si podían jugarse, descartarse o peligrosas (una carta que reduciría la puntuación máxima posible si la descartas, como una multicolor o un 5).",
  playHints: "Jugadas promedio por dato: <1>{{playsPerHint}}</1>",
  playerHints: "¿Quién dio más datos?",
  tryOutTitle: "¡Pruébalo!",
  tryOutButton: "Prueba esta mezcla",
  tryOutAlternative:
    "También puedes jugar con otras configuraciones y conocer a nuestra Inteligencia Artificialen <1>hanabi.cards</1>",
  back: "Volver",
  statsPlayable: "jugable",
  estadísticasDescartables: "descartable",
  statsDiscardable: "peligrosa",
  statsTurnCard: "Ese turno, la carta era",
  statsTurnAction: "Acción del jugador en ese turno",
  showInsights: "Montrar informaciones",
  ShowCards: "Mostrar cartas",
  started: "Comenzó",
  youGaveHintTurn: "Diste el dato a <1></1> sobre sus <3></3>",
  youDiscardedTurn: "Descartaste el <1></1>",
  youPlayedTurn: "Jugaste <1></1>",
  somebodyHintedYouTurn: "<0></0> te dio un dato sobre tus <2></2>",
  somebodyHintedSomebodyTurn: "<0></0> dio un dato a <2></2> sobre sus <4></4>",
  somebodyDiscardedTurn: "<0></0> descartó el <2></2>",
  somebodyPlayedTurn: "<0></0> jugó el <2></2>",
  whatYouDrewTurn: "y tomaste <1></1>",
  whatTheyDrewTurn: "y tomó <1></1>",
  selectLanguage: "Seleccione un idioma",
  creatingGame: "Partida en creación...",
  partySetup: "Jugadores: {{players}} · Modo: {{variant}} · Semilla #{{shuffle}}",
  sendMessagePlaceholder: "Envía un mensaje a tus compañeros de equipo",
  sendMessage: "Enviado",
  message: "<0></0>: <1></1>",
};
