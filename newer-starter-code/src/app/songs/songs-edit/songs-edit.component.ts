import { Component, OnInit } from '@angular/core';
import { SongsService } from '../songs.service';

@Component({
  selector: 'app-songs-edit',
  templateUrl: './songs-edit.component.html',
  styleUrls: ['./songs-edit.component.css']
})
export class SongsEditComponent implements OnInit {

	updatedSong = <any>{};

  constructor(
  	private songsService: SongsService
  ) { }

  ngOnInit() {
  }

  updateSong(updatedSong) {
  	console.log('Updating song...');
  	this.songsService.updateSong(updatedSong)
  	.subscribe(response => {
  		console.log(response.json());
  		let song = response.json();
  		window.location.href = `/songs/${song.id}`;
  	})
  }

}
