import { Component } from "@angular/core";
import { DataStreamService } from "./data-stream.service";
import { Tweet } from "./tweet";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  tweets: Tweet[] = [];
  searchKey: string = "";
  tweetCount;

  constructor(private dataStreamService: DataStreamService) {}

  ngOnInit() {
    this.dataStreamService.initializeStream();
    this.tweets = this.dataStreamService.getTweets();

    setInterval(
      () => (this.tweetCount = this.dataStreamService.getTweetsPerMinute()),
      1000
    );
  }

  handleChange(term) {
    this.searchKey = term;
  }
}
