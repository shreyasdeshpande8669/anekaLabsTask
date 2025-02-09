import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-side-filter',
  templateUrl: './server-side-filter.component.html',
  styleUrls: ['./server-side-filter.component.css']
})
export class ServerSideFilterComponent implements OnInit {
  filterObj = {
    "Name": "",
    "ContactNo": "",
    "Email": "",
    "PageNumber": 1,
    "PageSize": 10
  }
  constructor(private http: HttpClient){}
  ngOnInit(): void {
    this.filetrCandidates('')
  }
  candidates: any []= [];
  
  filetrCandidates(param: string) {
    
    this.http.post('http://onlinetestapi.gerasim.in/api/OnlineTest/GetCandidatesByFilter',this.filterObj).subscribe((res:any)=> {
      this.candidates = res.data;
      console.log(this.candidates, 'candidates');
      
    })
  }
  onPrevious() {
    this.filterObj.PageNumber --;
    this.filetrCandidates('');
  }
  onNext() {
    this.filterObj.PageNumber ++;
    this.filetrCandidates('');
  }

  // dependent dropdown

  categories = ['login', 'credit-card', 'saving-account', 'landing-page'];
  categoryOptions: { [key: string]: string[] } = {
    login: ['shreyas', 'vishal', 'nilesh'],
    'credit-card': [''],
    'saving-account': [''],
    'landing-page': [''],
  };

  selectedCategory: string = '';
  options: string[] = [];
  selectedOption: string = '';

  onCategoryChange(): void {
    this.options = this.categoryOptions[this.selectedCategory] || [];
    this.selectedOption = '';
  }
}
