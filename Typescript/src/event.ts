type Event = "click" | "scroll" | "mousemove";
type ExcludeEvent = Exclude<Event, "scroll">; // 'click' | 'mousemove'

const handleEvent = (event: ExcludeEvent) => {
  console.log(`Handling event: ${event}`);
};

handleEvent("click"); // OK
