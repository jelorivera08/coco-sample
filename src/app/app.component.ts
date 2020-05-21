import { Component } from "@angular/core";
import { DataStreamService } from "./data-stream.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "coco-sample";

  constructor(private dataStreamService: DataStreamService) {}

  getTweets() {
    console.log(this.dataStreamService.getTweetsPerMinute());
  }

  ngOnInit() {
    this.dataStreamService.initializeStream();
  }
}
