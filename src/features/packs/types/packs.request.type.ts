export type FetchCardPacksRequestType = {
  packName?: "english"; // не обязательно
  min?: number; // не обязательно
  max?: number; // не обязательно
  sortPacks?: "0updated"; // не обязательно
  page?: number; // не обязательно
  pageCount?: number; // не обязательно

  user_id?: number;
  // чьи колоды не обязательно, или придут все

  block?: boolean; // не обязательно
  // если вас кто то забанил. То с помощью
  // данного параметра можно увидеть свои колоды
  // и поправить их или удалить или обжаловать 🙃
};
