// Music player: Plyr from https://plyr.io (loaded from the internet in the HTML).
// This line is from Plyr's guide. It turns every <audio> on the page into a Plyr player:
// play button, time slider, mute button and volume slider.
// volume: 0.15 starts the songs at 15% because full volume is really loud (0 = muted, 1 = full)
Plyr.setup("audio", { volume: 0.15, controls: ["play", "progress", "mute", "volume"] });
