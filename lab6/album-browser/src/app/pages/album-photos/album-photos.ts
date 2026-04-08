import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AlbumService } from '../../services/album.service';
import { Photo } from '../../models/photo.model';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './album-photos.html',
  styleUrls: ['./album-photos.css'],
})
export class AlbumPhotos implements OnInit {
  photos: Photo[] = [];
  loading = false;
  error = '';
  albumId = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    this.albumId = Number(this.route.snapshot.paramMap.get('id'));
    this.fetchPhotos();
  }

  fetchPhotos() {
    this.loading = true;
    this.error = '';

    this.albumService.getAlbumPhotos(this.albumId).subscribe({
      next: (data) => {
        this.photos = data;
        this.loading = false;
      },
      error: () => {
        this.error = 'Фотолар жүктелмеді';
        this.loading = false;
      },
    });
  }

  back() {
    this.router.navigate(['/albums', this.albumId]);
  }
}