import { CardType } from "@/types/CardTypes";
import _ from "lodash";

export default function shuffleCards(collection: Array<CardType>) {
  return _.shuffle(collection);
}
