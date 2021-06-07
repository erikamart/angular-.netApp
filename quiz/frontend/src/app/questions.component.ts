import { Component } from '@angular/core'
import { ApiService } from './api.service';
import { ActivatedRoute } from '@angular/router'

@Component({
    selector: 'questions',
    templateUrl: './questions.component.html'
})
export class QuestionsComponent {

    question
    questions

    constructor(public api: ApiService, public route: ActivatedRoute) { }
    // ngOnInit is used to be called by angular once the component is initialized
    // This is to help not slow up the app 
    ngOnInit() {
        var quizId = this.route.snapshot.paramMap.get('quizId')

        this.api.getQuestions(quizId).subscribe(res => {
            this.questions = res
        })
    }

}