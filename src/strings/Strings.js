export const strings = Object.freeze({
  path: {
    HOME: "/",
    GRAPHQL: "http://localhost:4000/graphql",
    LOGIN: "/login",
    SIGNUP: "/signup",
    SIGNOUT: "/signout",
    RECIPE_BOOK: "/recipebook",
    MY_RECIPES: "/myrecipes",
    MAILS: "/mails",
    MY_EVENTS: "/myevents",
    MY_PROFILE: "/myprofile",
    LINKEDIN: "https://www.linkedin.com/in/paul-del-priore-9b8b1114b/",
    SERVER_REQUEST: "http://localhost:4000/graphql",
    USER_PHOTO: "#",
    IMAGE_REQUEST: "http://localhost:4000",
    MAP_REQUEST: "http://localhost:4000/heremaprender",
  },
  navbar: {
    navType: {
      LOGO: "logo",
      LOGO_GET_STARTED: "logoGetStarted",
      LOGO_USER_LOGGED: "logoUserLogged",
      HOME_MENU: "homeMenu",
      GET_STARTED_MENU: "getStartedMenu",
      USER_LOGGED_MENU: "userLoggedMenu",
    },
    navHomeItems: {
      LOGO: "quoi manger ?",
      MAIN: "main",
      ABOUT: "en savoir plus",
      CONTACT: "contact",
    },
    navGetStartedItems: {
      LOGIN: "se connecter",
      SIGNUP: "s'inscrire",
    },
    navUserLoggedItems: {
      RECIPE_BOOK: "livre de recettes",
      MY_RECIPES: "mes recettes",
      MAILS: "boîte aux messages",
      MY_EVENTS: "mes événements",
      MY_PROFILE: "mon profil",
      USER_PHOTO: "userPhoto",
      SIGNOUT: "déconnexion",
    },
  },
  main: {
    MAIN_TEXT: "recherche une idée de plat ?",
    MAIN_SUB_TEXT: "tu es en bon endroit",
    BUTTON_TEXT: "commence ici",
  },
  about: {
    FIRST_AREA: "trouve ta recette",
    SECOND_AREA: "partage tes recettes",
    THIRD_AREA: "contacte d'autres passionnés",
    FOURTH_AREA: "organise tes événements",
  },
  contact: {
    FIRST_SECTION: "une question ?",
    BUTTON_TEXT: "envoyer",
    BUTTON_TEXT_LOADING: "j'envoie ...",
    FOOTER: "Paul Del Priore",
    SUBJECT: "sujet *",
    SUBJECT_PLACEHOLDER: "sujet",
    EMAIL: "ton email *",
    EMAIL_PLACEHOLDER: "email",
    MESSAGE: "message *",
    MESSAGE_PLACEHOLDER: "message",
  },
  login: {
    EMAIL: "email *",
    EMAIL_PLACEHOLDER: "email",
    PASSWORD: "mot de passe *",
    PASSWORD_PLACEHOLDER: "mot de passe",
    BUTTON_TEXT: "connecte moi !",
    BUTTON_TEXT_LOADING: "je te connecte ...",
    FORGOT_PASSWORD: "mot de passe oublié ?",
  },
  signup: {
    USER_NAME: "nom d'utilisateur (min. 5 caractères) *",
    USER_NAME_PLACEHOLDER: "nom d'utilisateur",
    EMAIL: "email *",
    EMAIL_PLACEHOLDER: "email",
    CONFIRM_EMAIL: "confirme ton email *",
    CONFIRM_EMAIL_PLACEHOLDER: "confirme ton email",
    PASSWORD: "mot de passe (min. 8 caractères) *",
    PASSWORD_PLACEHOLDER: "mot de passe",
    BUTTON_TEXT: "inscris moi !",
    BUTTON_TEXT_LOADING: "je t'inscris ...",
    CHECK_EMAIL: "Compte enregistré avec succès. Confirme ton adresse email",
    inputName: {
      USER_NAME: "name",
    },
  },
  signupGoogle: {
    BUTTON_TEXT: "inscris moi !",
    GOOGLE_USER_CREATED: "google compte créé.",
  },
  remindPass: {
    EMAIL: "ton email *",
    EMAIL_PLACEHOLDER: "email",
    BUTTON_TEXT: "envoyer",
    BUTTON_TEXT_LOADING: "j'envoie ...",
    BUTTON_TEXT_CANCEL: "annuler",
  },
  searchRecipe: {
    SEARCH: "trouve une recette ...",
  },
  logout: {
    LOGOUT: "je te déconnecte ...",
  },
  recipeBook: {
    BUTTON_NEW: "nouveautés",
    CAT_NEWS: "news",
    BUTTON_FAST_FOOD: "fast food",
    CAT_FAST_FOOD: "fast food",
    BUTTON_LUNCH: "lunch",
    CAT_LUNCH: "lunch",
    BUTTON_DESSERT: "desserts",
    CAT_DESSERT: "desserts",
    BUTTON_DRINKS: "boissons",
    CAT_DRINKS: "drinks",
    BUTTON_EVENING: "soirée",
    CAT_EVENING: "evening",
    BUTTON_SALADES: "salades",
    CAT_SALADES: "salades",
  },
  recipeBookDetails: {
    DESCRIBE: "description:",
    INGREDIENTS: "ingrédients:",
  },
  rating: {
    DETAILS: "details",
    LIST: "list",
    COMMENT_RATE: "commentRate",
    RATE_AND_COMMENT: "rateAndComment",
    RATING_STARS: "ratingStars",
    COMMENT: "ton commentaire",
    BUTTON_TEXT: "ajoute",
    BUTTON_TEXT_LOADING: "j'ajoute ...",
    NOTE: "note",
    BUTTON_EDIT_TEXT: "modifie",
    BUTTON_EDIT_TEXT_LOADING: "je modifie ...",
    BUTTON_CANCEL_TEXT: "annule",
  },
  myRecipes: {
    BUTTON_NEW_RECIPE: "nouvelle recette",
    BUTTON_CORRECTION: "corrige",
    BUTTON_REMOVE: "supprime",
    BUTTON_REMOVE_LOADING: "je supprime ...",
    TITLE: "titre (max 21 caractères) *",
    TITLE_PLACEHOLDER: "titre",
    PICTURE: "image",
    VIDEO: "vidéo",
    VIDEO_PLACEHOLDER: "https://www.youtube.com/watch?v=xd",
    CATEGORY: "catégorie *",
    COOK_TIME: "temps de cuisson / préparation *",
    COOK_TIME_PLACEHOLDER: "en minutes",
    LOADING_IMAGE: "j'ajuste l'image ...",
    INGREDIENTS: "ingrédients *",
    INGREDIENTS_EX: "50ml huile,sel,poivre, ...",
    DESCRIPTION: "description *",
    DESCRIPTION_PLACEHOLDER: "description",
    CHOOSE_PICTURE: "choisis une image",
    CHOOSE_CATEGORY: "choisis une catégorie ...",
    MAX_PICTURE_SIZE: "max 9 MB accepté",
    category: {
      LUNCH: "lunch",
      DESSERTS: "desserts",
      DRINKS: "boissons",
      EVENING: "soirée",
      SALADES: "salades",
      FAST_FOOD: "fast food",
    },
    inputName: {
      TITLE: "title",
      COOK_TIME: "cookTime",
      INGREDIENTS: "ingredients",
      DESCRIPTION: "description",
    },
    error: {
      VIDEO_URL_ERROR: "adresse de vidéo incorrecte",
      IMAGE_SIZE_ERROR: "taille d'image dépasse 9 MB",
      IMAGE_UNACCEPTABLE: "image inappropriée",
      IMAGE_FORMAT: "format inaccepté",
      VIDEO_UNACCEPTABLE: "vidéo inappropriée",
    },
  },
  myProfile: {
    USER_NAME: "nom d'utilisateur (min. 5 caractères) *",
    USER_NAME_PLACEHOLDER: "nom d'utilisateur",
    BUTTON_TEXT_EDIT: "modifier ?",
    BUTTON_TEXT: "modifie",
    BUTTON_TEXT_LOADING: "je modifie ...",
    BUTTON_EDIT_PASS: "mot de passe à changer ?",
    CURRENT_PASS: "mot de passe actuel *",
    CURRENT_PASS_PLACEHOLDER: "mot de passe actuel",
    NEW_PASS: "nouveau mot de passe *",
    NEW_PASS_PLACEHOLDER: "nouveau mot de passe",
    CONFIRM_PASS: "confirme ton nouveau mot de passe *",
    CONFIRME_PASS_PLACEHOLDER: "confirme ton nouveau mot de passe",
    PASSWORD_CHANGED: "ton mot de passe a été changé.",
    REMOVE_ACCOUNT: "tu veux bien supprimer ton compte ?",
  },
  myEvents: {
    BUTTON_ALL: "événements",
    CAT_ALL: "all",
    BUTTON_MY_EVENTS: "mes événements",
    CAT_MY_EVENTS: "myEvents",
    BUTTON_EVENTS_JOINED: "je participe à",
    CAT_EVENTS_JOINED: "eventsJoined",
    BUTTON_NEW_EVENT: "nouvel événement",
    TITLE: "titre (max 21 caractères) *",
    TITLE_PLACEHOLDER: "titre",
    PHOTO: "photo d'événement",
    ADDRESS: "lieu *",
    ADDRESS_PLACEHOLDER: "46 rue de rivoli, Paris, etc.",
    DESCRIPTION: "description *",
    DESCRIPTION_PLACEHOLDER: "description",
    AVAILABLE_PLACES: "places disponibles *",
    AVAILABLE_PLACES_PLACEHOLDER: "places disponibles",
    AVAILABLE_PLACES_PREVIEW: "places dispos:",
    EVENT_DATE: "date d'événement *",
    EVENT_DATE_PLACEHOLDER: "date d'événement",
    TEL: "contact tel *",
    TEL_PLACEHOLDER: "718523694",
    error: {
      NO_SUGGESTIONS: "pas de résultat",
    },
    inputName: {
      TITLE: "title",
      DESCRIPTION: "description",
      AVAILABLE_PLACES: "availablePlaces",
    },
  },
});
