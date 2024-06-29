import { Component } from '@angular/core';

@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.scss']
})
export class PublishComponent {

  publish(): void {
    console.log('Publishing post...');
    // Here you would implement the logic to publish the post using Instagram Graph API
  }
}
