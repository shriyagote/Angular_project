import { Component, OnInit } from '@angular/core';
import { Profile } from '../profile.model';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent implements OnInit {
  profiles: Profile[] = [];

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.profiles = this.profileService.getProfiles();
  }

  showSummary(profile: Profile): void {
    // Implement logic to show the map component with the selected profile's address
    // You can use routing or other methods to achieve this
  }
}
