import { heroes } from "../data/heroe";

export const getHeroesByPublisher = (publisher) => {
  const validPublishers = ["DC Comics", "Marvel Comics"];

  if (!validPublishers.includes(publisher)) {
    throw new Error(`${publisher} is not valid publisher`);
  }

  return heroes.filter((heroe) => heroe.publisher === publisher);
};
