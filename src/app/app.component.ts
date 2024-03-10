import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'anekaLabTask';




  rangeValues = [25, 75];

  myArr = [{
    id: 1,
    company : 'Amazon',
    date : '20 May, 2024',
    title: 'Senior UI/UX Designer',
    jobType : ['Part Time','Senior level', 'Distant', 'Project Work'],
    logoUrl : 'https://www.fintechfutures.com/files/2018/01/amazon-2.png',
    rate: 250,
    city: 'San Francisco, CA',
    bgColor: 'rgb(231, 219, 221)',
    jd: 'Senior UI/UX Designer'

  },
  {
    id: 2,
    company : 'Google',
    date : '4 Feb, 2023',
    title: 'Junior UI/UX Designer',
    jobType : ['Full Time','Junior level', 'Distant', 'Project Work', 'Flexible Schedule'],
    logoUrl : 'https://blog.hubspot.com/hs-fs/hubfs/image8-2.jpg?width=600&name=image8-2.jpg',
    rate: 150,
    city: 'California, CA',
    bgColor: 'rgb(209, 205, 212)',
    jd: 'Junior UI/UX Designer'

  },
  {
    id: 3,
    company : 'Dribbble',
    date : '29 Jan, 2023',
    title: 'Senior Motion Designer',
    jobType : ['Part Time','Senior level', 'Full Day', 'Shift Work'],
    logoUrl : 'https://uploads-ssl.webflow.com/6198a2e43048192ebafec2cc/6240d37abf695bbb89ef883d_61df198b1c04893d984ff657_61b7c328dd98b439dc7f3cac_dribbble-logo-143FF96D65-seeklogo.com.png',
    rate: 260,
    city: 'New York, NY',
    bgColor: 'rgb(209, 224, 230)',
    jd: 'Senior Motion Designer'

  },
  {
    id: 4,
    company : 'Twitter',
    date : '11 April, 2023',
    title: 'UX Designer',
    jobType : ['Full Time','Middle level', 'Distant', 'Project Work'],
    logoUrl : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/220px-Logo_of_Twitter.svg.png',
    rate: 120,
    city: 'California, CA',
    bgColor: 'rgb(210, 233, 232)',
    jd: 'UX Designer'

  },
  {
    id: 5,
    company : 'Airbnb',
    date : '2 April, 2023',
    title: 'Graphic Designer',
    jobType : ['Part Time','Senior level'],
    logoUrl : 'https://pbs.twimg.com/profile_images/1604935435007901696/BpgKDmvE_400x400.jpg',
    rate: 250,
    city: 'San Francisco, CA',
    bgColor: 'rgb(221, 191, 179)',
    jd: 'Graphic Designer Airbnb'

  },
  {
    id: 6,
    company : 'Apple',
    date : '18 Jan 2023',
    title: 'Graphic Designer',
    jobType : ['Part Time', 'Distant'],
    logoUrl : 'https://assets-global.website-files.com/62b0e6308cc691625470b227/62dec0259f18b71442a15966_Apple-Logo.png',
    rate: 140,
    city: 'San Francisco, CA',
    bgColor: 'rgb(207, 224, 230)',
    jd: 'Graphic Designer Apple'

  },
];



clickedObj = '';


openModel(myId:any) {
  const modelDiv = document.getElementById('myModal');
  if(modelDiv!= null) {
    modelDiv.style.display = 'block';
    console.log('data from obj', myId);
    
    for (let index = 0; index < this.myArr.length; index++) {
      if (this.myArr[index].id==myId) {
        //console.log(' id matched', );
         this.clickedObj = this.myArr[index].jd
        console.log(this.clickedObj);
        
      }
      
    }
}
}

CloseModel() {
  const modelDiv = document.getElementById('myModal');
  if(modelDiv!= null) {
    modelDiv.style.display = 'none';
  } 
}





}
