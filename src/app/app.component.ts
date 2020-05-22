import { Component } from "@angular/core";
import { DataStreamService } from "./data-stream.service";
import { Tweet } from "./tweet";
import { changeSearchKey } from "./searchKey.actions";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  tweets: Tweet[] = [];
  tweetCount: number;
  searchKey$: Observable<string>;

  constructor(
    private dataStreamService: DataStreamService,
    private store: Store<{ searchKey: string }>
  ) {
    this.searchKey$ = store.pipe(select("searchKey"));
  }

  ngOnInit() {
    this.dataStreamService.initializeStream();
    this.tweets = this.dataStreamService.getTweets();

    setInterval(
      () => (this.tweetCount = this.dataStreamService.getTweetsPerMinute()),
      1000
    );
  }

  handleChange(term) {
    this.store.dispatch(changeSearchKey({ payload: term }));
  }
}
