import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  professionalExperience = [
    {
      'position': 'Fullstack Software Engineer',
      'companyName': 'Adia',
      'from': 'Feb 2022',
      'to': 'present',
      'companyWebsite': 'https://adia.works/'
    },
    {
      'position': 'Advanced Software Engineer',
      'companyName': 'JHA',
      'from': 'Apr 2018',
      'to': 'Feb 2022',
      'companyWebsite': 'https://jackhenry.com/'
    },
    {
      'position': 'Software Engineer II',
      'companyName': 'MSA',
      'from': 'May 2016',
      'to': 'Apr 2018',
      'companyWebsite': 'https://msa.com/'
    },
    {
      'position': 'Software Engineer (Contract)',
      'companyName': 'Encima',
      'from': 'Nov 2014',
      'to': 'May 2016',
      'companyWebsite': '#'
    }
  ]

  educationalBackground = [
    {
      'degree': 'MBA in Project Management',
      'universityName': 'Amberton',
      'universityWebsite': 'https://www.amberton.edu/',
      'graduationDate': 'May 2019'
    },
    {
      'degree': 'BSc in Electrical Engineering',
      'universityName': 'UTA',
      'universityWebsite': 'https://www.uta.edu/',
      'graduationDate': 'May 2014'
    }
  ]
}
