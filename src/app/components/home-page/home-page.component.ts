import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {FooterComponent} from "../footer/footer.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    NgOptimizedImage,
    FooterComponent,
    RouterLink
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  employeement:boolean=false;
  office:string="Acheron";
  position:string="Associate Software Engineer";

  projectshow:any = [
    {
      "id": 1,
      "projectName": "Employment Management using Spring Boot",
      "simpleName": "Emp Spring",
      "url": "https://github.com/Abuthair11/Employmanagement_SpringBoot",
      "logo": "https://img.icons8.com/officel/48/spring-logo.png",
      "Description": "Join our fast-paced project developing an Employment System using Spring Boot with advanced credential features. Contribute to crafting secure backend services.",
      "techStack": "Java, Spring Boot, MySQL, POSTMAN"
    },
    {
      "id": 2,
      "projectName": "Movie Application using Angular",
      "simpleName": "bookMyShow",
      "url": "https://github.com/Abuthair11/Angular_MovieApp",
      "logo": "https://img.icons8.com/fluency/48/angularjs.png",
      "Description": "Explore Angular's capabilities with our Movie Review Page, a hands-on project for learning. Dive into building dynamic components, managing state, and crafting a responsive UI, providing a practical introduction to Angular development.",
      "techStack": "TypeScript, Angular, JSON"
    },
    {
      "id": 3,
      "projectName": "Calculator Android App",
      "simpleName": "Calculator",
      "url": "https://github.com/Abuthair11/AndroidStudio_CalculatorApp",
      "logo": "https://img.icons8.com/color/48/android-studio--v3.png",
      "Description": "Embark on your Android development journey with our Basic Calculator App created in Android Studio. This simple yet essential application showcases fundamental skills in UI design, user input handling, and arithmetic operations.",
      "techStack": "Kotlin"
    },
    {
      "id": 4,
      "projectName": "LinkTree using HTML CSS JS",
      "simpleName": "LinkTree",
      "url": "https://abuthair11.github.io/LinkTreeClone/",
      "logo": "https://img.icons8.com/pulsar-color/48/linktree.png",
      "Description": "Dive into web development with our Linktree Clone project, built using HTML, CSS, and JavaScript. This hands-on exercise allows you to recreate the popular Linktree interface, showcasing your proficiency in responsive design, navigation structures, and dynamic content.",
      "techStack": "HTML, CSS, JS"
    },
    {
      "id": 5,
      "projectName": "Piano JS",
      "simpleName": "Piano",
      "url": "https://github.com/Abuthair97/PianoJs",
      "logo": "https://img.icons8.com/fluency/48/javascript.png",
      "Description": "Immerse yourself in the world of music with our Piano Simulation project, crafted using HTML, CSS, and JavaScript. This interactive web application replicates the elegance of a piano, offering a seamless blend of visual appeal and functional playability.",
      "techStack": "HTML, CSS, JS"
    },
    {
      "id": 6,
      "projectName": "Player Management Application",
      "simpleName": "PlayerApp",
      "url": "https://github.com/Abuthair/Player_scouting_application_BE",
      "logo": "https://img.icons8.com/officel/48/spring-logo.png",
      "Description": "Effortlessly register players with our full-stack Team Management Application, merging the power of Spring Boot and Angular. Seamlessly capture player details, utilizing Spring Boot for robust backend functionality and Angular for a sleek, responsive frontend.",
      "techStack": "Java, Spring Boot, MySQL, POSTMAN, Angular, JSON"
    },
    {
      "id": 7,
      "projectName": "Disney Clone Using HTML CSS JS",
      "simpleName": "Disney",
      "url": "https://abuthair11.github.io/Disney-Hotstar_Clone/",
      "logo": "https://img.icons8.com/fluency/48/disney-plus.png",
      "Description": "Experience the magic of Disney with our Clone project, crafted using HTML, CSS, and JavaScript. Immerse yourself in a visually stunning and interactive replica, showcasing your front-end skills.",
      "techStack": "HTML, CSS, JS"
    },
    {
      "id": 8,
      "projectName": "Movie Spring Boot Application",
      "simpleName": "MovieApp",
      "url": "https://github.com/Abuthair11/MovieBookingApp",
      "logo": "https://img.icons8.com/officel/48/spring-logo.png",
      "Description": "Revolutionize cinema experiences with our Spring Boot Movie Booking System. This project, developed with efficiency in mind, seamlessly handles movie reservations, showcasing the power of Spring Boot in crafting robust backend solutions for modern booking applications.",
      "techStack": "Java, Spring Boot, MySQL, POSTMAN"
    }
  ];

  // Skills

  skillslist:any=[
    {
      "title":"Java",
      "Subtitle":"7/10"
    },
    {
      "title":"HTML",
      "Subtitle":"8/10"
    },
    {
      "title":"CSS",
      "Subtitle":"3/10"
    },
    {
      "title":"JS",
      "Subtitle":"5/10"
    },
    {
      "title":"Spring",
      "Subtitle":"6/10"
    },
    {
      "title":"Angular",
      "Subtitle":"5/10"
    },
    {
      "title":"MySQL",
      "Subtitle":"7/10"
    },
    {
      "title":"PostMan",
      "Subtitle":"8/10"
    },
    {
      "title":"  Googling😌",
      "Subtitle":"100/10"
    },

  ]

}
