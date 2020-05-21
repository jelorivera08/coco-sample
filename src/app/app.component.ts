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

  constructor(private dataStreamService: DataStreamService) {}

  ngOnInit() {
    this.dataStreamService.initializeStream();
    this.tweets = this.dataStreamService.getTweets();
  }
}
