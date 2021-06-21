import { Component } from '@angular/core'
import { ApiService } from './api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'quiz',
    templateUrl: './quiz.component.html'
})
export class QuizComponent {

    quiz: any = {}

    constructor(public api: ApiService, public router: Router, public activatedRoute: ActivatedRoute) { }
    currentRouter = this.router.url;
    ngOnInit() {
        this.api.quizSelected.subscribe(quiz => this.quiz = quiz)
    }

    reloadPage() {
        this.router.navigate([this.currentRouter])
    }
}