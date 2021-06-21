import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'question',
    templateUrl: './question.component.html'
})
export class QuestionComponent {

    question: any = {}
    quizId

    constructor(public api: ApiService, public router: Router, public route: ActivatedRoute) { }
    currentRouter = this.router.url;
    ngOnInit() {
        this.quizId = this.route.snapshot.paramMap.get('quizId')
        this.api.questionSelected.subscribe(question => this.question = question)
    }

    post(question) {
        question.quizId = this.quizId
        this.api.postQuestion(question)
    }

    reloadPage() {
        this.router.navigate([this.currentRouter])
    }
}