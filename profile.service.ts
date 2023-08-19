import { Injectable } from '@angular/core';
import { Profile } from './profile.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private profiles: Profile[] = [
    {
      id: 1,
      name: 'John Doe',
      photoUrl: 'path-to-photo/john.jpg',
      description: 'Software Engineer',
      address: '123 Main St, City, Country'
    },
    // Add more profiles here
  ];

  getProfiles(): Profile[] {
    return this.profiles;
  }
}
