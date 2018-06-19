# Breaker Takehome Project
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

I only had around 3-4 hours to put this together, so it's not completely finished. I think it's a reasonable representation of what I can do in a short period of time, though (although, honestly, around 30-45 min were spent in confirming that you couldn't change User-Agent headers in Chrome, haha).

To test this repo:
- clone it
- run `npm install`
- run `npm run dev`
- should automatically compile and open browser to localhost:3000

In the final version, had I more time, I would have added in the episode data in the right sidebar, given it a bit of a margin, so that they weren't quite right next to each other. Then, I would have added in the RR link to the edit page, and drawn that out (was planning on just using a form, and submitting directly to the backend).

I also would have liked to style the audio element, but that turned out to be far more complex than I was expecting. Lastly, I would have liked to add a linter, and give it a pass over and comment out more of the code, so it makes a bit more sense on first glance.

Thanks for looking it over. Sorry it's not more complete; I had a very busy weekend/start of the week.

Bianca


## Project specs: 
Build two webpages: one for a single episode of a podcast and one to edit that episode. The episode page should include relevant information about the episode, including the episode title, artwork, description, date published, etc. as well as a link to edit the episode. The fields for the title, artwork, description, etc. should all be editable.

The episode webpage should include an audio player that allows users to see the episode playback progress as well as buttons to play, pause, skip ahead, and skip back. When editing the episode, the web player should still be visible and continue playing the episode.

Here’s an API endpoint to get a single podcast episode:

https://api.breaker.audio/shows/185226/episodes/29314799

To use this API endpoint, you’ll need to send a User-Agent header with the value:  Breaker/1.0.0 (0)

If you are receiving a 406 Not Acceptable response, it’s because you’re not setting this header correctly.

To update the episode, send a PATCH request to the same URL above. You will receive a 401 Unauthorized response, which you can ignore.
