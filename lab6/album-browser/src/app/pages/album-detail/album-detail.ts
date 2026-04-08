import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album.model';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './album-detail.html',
  styleUrls: ['./album-detail.css'],
})
export class AlbumDetail implements OnInit {
  album: Album | null = null;

  loading = false;
  saving = false;
  error = '';

  editedTitle = '';
  albumId = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    this.albumId = Number(this.route.snapshot.paramMap.get('id'));
    this.fetchAlbum();
  }

  fetchAlbum() {
    this.loading = true;
    this.error = '';

    this.albumService.getAlbum(this.albumId).subscribe({
      next: (data) => {
        this.album = data;
        this.editedTitle = data.title;
        this.loading = false;
      },
      error: () => {
        this.error = 'Album табылмады немесе жүктелмеді';
        this.loading = false;
      },
    });
  }

  save() {
    if (!this.album) return;

    this.saving = true;

    const updated: Album = {
      ...this.album,
      title: this.editedTitle,
    };

    this.albumService.updateAlbum(updated).subscribe({
      next: (data) => {
        this.album = data;
        this.saving = false;
      },
      error: () => {
        alert('Save істемеді');
        this.saving = false;
      },
    });
  }

  back() {
    this.router.navigate(['/albums']);
  }
}