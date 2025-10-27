import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})

//esse <IExperiences> é a interface TypeScript que define o tipo dos objetos dentro do array arrayExperiences
// Ajuda o TypeScript a validar o que você escreve.Mostra erro se você esquecer uma propriedade ou colocar o tipo errado.
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Analysis and Systems Development (Distance Learning)',
        p: 'Aug 2024/Dec 2026 | Comprehensive training in analysis, planning, implementation, and testing of systems.',
      },
      text: 'Focused on modern technologies, programming, software project management, cloud computing, and big data.',
    },
    {
      summary: {
        strong: 'WebDev Program/OpenCampus.sh',
        p: 'Jun 2025/Nov 2025 | Kiel',
      },
      text: 'Advanced modern web development: HTML, CSS, JavaScript, reactive frameworks, accessibility, responsive design, Git/GitHub, web APIs, and AI tools.',
    },
    {
      summary: {
        strong: 'Frontend Developer Program/OpenCampus.sh',
        p: 'Dec 2023/Jun 2024 | Kiel',
      },
      text: 'In-depth knowledge in frontend technologies such as React.js, web accessibility, responsive design, version control, and API integration.',
    },
    {
      summary: {
        strong: 'Web Project: Introduction to Web Development/OpenCampus.sh',
        p: 'Oct 2023/Jan 2024 | Kiel',
      },
      text: 'Fundamentals of HTML, CSS, and JavaScript with hands-on experience developing a personal portfolio website.',
    },
  ]);
}
