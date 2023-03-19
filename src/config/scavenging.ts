import items from "./items";

export default {
  zone1: {
    minFound: 0,
    maxFound: 3,
    searchSpeedSecs: 10,
    dropTable: [{
      item: items.scrap,
      chance: 0.1,
    }],
  }
}