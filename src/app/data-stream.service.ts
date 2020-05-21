import { Injectable } from "@angular/core";
import PubNub from "pubnub";
import { Tweet } from "./tweet";

@Injectable({
  providedIn: "root",
})
export class DataStreamService {
  tweets: Tweet[] = [];

  count = 0;

  initializeStream() {
    setInterval(() => this.count++, 1000);

    var pubnub = new PubNub({
      subscribe_key: "sub-c-78806dd4-42a6-11e4-aed8-02ee2ddab7fe",
    });

    pubnub.addListener({
      message: (data) => {
        this.tweets.push({
          userName: data.message.user.name,
          screenName: data.message.user.screen_name,
          imageUrl: data.message.user.profile_image_url,
          id: data.message.id,
          content: data.message.text,
          countryCode: data.message.place
            ? data.message.place.country_code
            : null,
        });
      },
    });
    pubnub.subscribe({
      channels: ["pubnub-twitter"],
    });
  }

  getTweetsPerMinute(): number {
    return Math.round((this.tweets.length / this.count) * 60);
  }

  getTweets() {
    return this.tweets;
  }

  ngOnInit() {}
  constructor() {}
}
