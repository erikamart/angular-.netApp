import { Component } from '@angular/core'
import { ApiService } from './api.service';

@Component({
    selector: 'quizzes',
    templateUrl: './quizzes.component.html'
})
export class QuizzesComponent {

    quiz
    quizzes

    constructor(public api: ApiService) { }
    // ngOnInit is used to be called by angular once the component is initialized
    // This is to help not slow up the app 
    ngOnInit() {
        this.api.getQuizzes().subscribe(res => {
            this.quizzes = res
        })
    }
}