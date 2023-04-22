import { defineStore } from "pinia";

export const useEventStore = defineStore("EventStore", () => {
  const onClick = (event, timing) => {
    event.value = true;
    setTimeout(() => {
      event.value = false;
    }, timing);
  };
  return { onClick };
});
