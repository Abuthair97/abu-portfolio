// @ts-ignore
// @ts-ignore

import { Component } from '@angular/core';
import {NgClass} from "@angular/common";
import {FooterComponent} from "../footer/footer.component";
import {NavBarComponent} from "../nav-bar/nav-bar.component";

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [
    NgClass,
    FooterComponent,
    NavBarComponent
  ],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
ListProjectComponent:any=
  [
    {
      "id": 1,
      "projectName": "Cricket Updates Full Stack project",
      "simpleName": "Cricket Updates",
      "url": "https://github.com/Abuthair97/CricketUpdate_FullStack",
      "cover": "./assets/cricketUpdates.png",
      "logo": "https://img.icons8.com/officel/48/spring-logo.png",
      "Description": "This Cricket Update Application is a Full Stack project that provides real-time cricket updates through a combination of Angular, Spring Boot, and MySQL. The application fetches data from Cricbuzz using Jsoup for web scraping and a RESTful API to deliver comprehensive cricket information. The main functionalities include retrieving a list of live matches and the latest news",
      "techStack": [
        {"stack": "Angular"},
        {"stack": "SpringBoot"},
        {"stack": "MYSQL"},
        {"stack": "POSTMAN"}
      ]
    },
    {
      "id": 2,
      "projectName": "Management using SpringBoot",
      "simpleName": "EmploymentManagement",
      "url": "https://github.com/Abuthair11/Employmanagement_SpringBoot",
      "cover": "./assets/employement.png",
      "logo": "https://img.icons8.com/officel/48/spring-logo.png",
      "Description": "Revolutionize Employment Management experiences with our Spring Boot. This project, developed with efficiency in mind, seamlessly handles Management reservations, showcasing the power of Spring Boot in crafting robust backend solutions for modern Employment Management applications.",
      "techStack": [
        {"stack": "Java"},
        {"stack": "SpringBoot"},
        {"stack": "MYSQL"},
        {"stack": "POSTMAN"}
      ]
    },
    {
      "id": 3,
      "projectName": "Movie Application using Angular",
      "simpleName": "bookMyShow",
      "url": "https://github.com/Abuthair11/Angular_MovieApp",
      "cover": "./assets/moviereview.jpeg",
      "logo": "https://img.icons8.com/fluency/48/angularjs.png",
      "Description": "Explore Angular's power with our Movie Review Page, a hands-on project for learning. Dive into building dynamic components, managing state, and crafting a responsive UI, providing a practical introduction to Angular development. Start your journey into web development by creating a movie-centric page that's both educational and fun!",
      "techStack": [
        {"stack": "TypeScript"},
        {"stack": "Angular"},
        {"stack": "JSON"}
      ]
    },
    {
      "id": 4,
      "projectName": "Calculator Android App",
      "simpleName": "Calculator",
      "url": "https://github.com/Abuthair11/AndroidStudio_CalculatorApp",
      "cover": "./assets/kotlin.png",
      "logo": "https://img.icons8.com/color/48/android-studio--v3.png",
      "Description": "Embark on your Android development journey with our Basic Calculator App created in Android Studio. This simple yet essential application showcases fundamental skills in UI design, user input handling, and arithmetic operations. Dive into the world of mobile app development by building and customizing this beginner-friendly calculator",
      "techStack": [{"stack": "Kotlin"}]
    },
    {
      "id": 5,
      "projectName": "LinkTree using HTML CSS JS",
      "simpleName": "LinkTree",
      "url": "https://abuthair11.github.io/LinkTreeClone/",
      "cover": "./assets/linktree.jpeg",
      "logo": "https://img.icons8.com/pulsar-color/48/linktree.png",
      "Description": "Dive into web development with our Linktree Clone project, built using HTML, CSS, and JavaScript. This hands-on exercise allows you to recreate the popular Linktree interface, showcasing your proficiency in responsive design, navigation structures, and dynamic content. Enhance your front-end skills by crafting a user-friendly platform that aggregates links effectively",
      "techStack": [{"stack": "HTML"}, {"stack": "CSS"}, {"stack": "JS "}]
    },

    {
      "id": 6,
      "projectName": "Player Management Application",
      "simpleName": "Player Management",
      "url": "https://github.com/Abuthair/Player_scouting_application_BE",
      "cover": "./assets/playermanagement.jpeg",
      "logo": "https://img.icons8.com/officel/48/spring-logo.png",
      "Description": "Effortlessly register players with our full-stack Team Management Application, merging the power of Spring Boot and Angular. Seamlessly capture player details, utilizing Spring Boot for robust backend functionality and Angular for a sleek, responsive frontend. Elevate your team management experience with this streamlined, end-to-end solution.",
      "techStack": [{"stack": "Java"}, {"stack": "Spring Boot"}, {"stack": "MYSQL"}, {"stack": "Angular"}, {"stack": "JSON  "}]
    },
    {
      "id": 7,
      "projectName": "Disney Clone Using HTML CSS JS",
      "simpleName": "Disney",
      "url": "https://abuthair11.github.io/Disney-Hotstar_Clone/",
      "cover": "./assets/disney.png",
      "logo": "https://img.icons8.com/fluency/48/disney-plus.png",
      "Description": "Experience the magic of Disney with our Clone project, crafted using HTML, CSS, and JavaScript. Immerse yourself in a visually stunning and interactive replica, showcasing your front-end skills. Dive into web development by creating this captivating Disney-inspired experience in just a few lines of code!",
      "techStack": [{"stack": "HTML"}, {"stack": "CSS"}, {"stack": "JS "}]
    }
];

  // getClassOf(id: number) {
  //   if (id % 2 != 0) {
  //     return 'order-md-1';
  //   }
  //   else {
  //     return ' order-md-2'
  //   }
  // }
}
