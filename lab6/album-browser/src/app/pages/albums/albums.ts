import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album.model';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './albums.html',
  styleUrls: ['./albums.css']
})
export class Albums implements OnInit {

  albums: Album[] = [];
  loading = false;
  error = '';

  constructor(private albumService: AlbumService) {}

  ngOnInit(): void {
  console.log('Albums init');
  this.loading = true;

  this.albumService.getAlbums().subscribe({
    next: (data) => {
      console.log('Albums loaded:', data.length);
      this.albums = data;
      this.loading = false;
    },
    error: (err) => {
      console.log('Albums ERROR:', err);
      this.loading = false;
      this.error = 'API error, console қара';
    }
  });
}

  deleteAlbum(id: number) {
    this.albumService.deleteAlbum(id).subscribe(() => {
      this.albums = this.albums.filter(a => a.id !== id);
    });
  }
}