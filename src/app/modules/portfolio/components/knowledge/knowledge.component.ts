import { Component, signal } from '@angular/core';
import { IKnowledge } from '../../interface/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss',
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: 'assets/icons/knowledge/html5.svg',
      alt: 'Icon HTML',
    },
    {
      src: 'assets/icons/knowledge/css3.svg',
      alt: 'Icon CSS',
    },
    {
      src: 'assets/icons/knowledge/javascript.svg',
      alt: 'Icon JavaScript',
    },
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'Icon Angular',
    },
    {
      src: 'assets/icons/knowledge/nodejs.svg',
      alt: 'Icon NodeJS',
    },
  ]);
}
