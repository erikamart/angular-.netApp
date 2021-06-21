# Full Stack Application using Angular + ASP.NET Core + Entity Framework Core
## Quiz Web App

## Features

- A Quiz web application to help you study anything.
- Allows a user to Register, Login, Logout.
- Logged in user creates a quiz where the name can be edited and questions added or edited too.
- Users quizzes are added to a public Play area with other user quizzes.
- Anyone can play with the quizzes but only the creators of the quiz can edit their own quiz.
- Quiz results are scored based on amount of questions answered correctly.
- Score is displayed in a pop-up window.
- App allows the creation of as many quizzes and questions as wanted.
- App works on computer and mobile browsers due to the use of Angular materials.

## Software
- VScode from https://code.visualstudio.com/Download
- Visual Studio Community 2019 (requires a minimum version of 15.3) from https://visualstudio.microsoft.com/vs/community/
- .NET Core 2.0 SDK from www.microsoft.com/net/download/core
- Firefox or Chrome Browsers

## Frameworks
- Node.js from https://nodejs.org/en/download/
- Angular 12, in terminal: “npm install -g @angular/cli”
- ASP.net Core 3.1 from Visual Studio Community NuGet Manager
- Microsoft Entity Framework Core 5.0 from Visual Studio Community NuGet Manager
- Microsoft.AspNetCore.Mvc.NewtonsoftJson from Visual Studio Community NuGet Manager

## Installation

Download and install the necessary Software listed above. Clone this repository.

Open VScode, navigate to the frontend/ directory and use terminal to install Angular CLI, the dependencies, and start the server.

```sh
npm install -g @angular.cli
npm install
ng serve -o
```

If there are errors:
```sh
npm i -g npm-check-updates
ncu -u
npm install
```

Open VS Community, select to open existing project and navigate to the quiz-backend/quiz-backend.csproj file. Click Run. Take note of the URL that opens in the browser and replace the URL in the frontend/ directory files called api.service.ts and auth.service.ts to match.


## Sources
- https://www.linkedin.com/learning/building-applications-with-angular-asp-dot-net-core-and-entity-framework-core/welcome?u=79828372
- https://www.red-gate.com/simple-talk/homepage/building-an-angularjs-application-with-asp-net-core/
- https://stackoverflow.com/questions/61746688/angular-compile-error-on-missing-dependencies
- https://stackoverflow.com/questions/66731356/ts2339-property-text-does-not-exist-on-type
- https://stackoverflow.com/questions/48061096/why-cant-i-call-the-useinmemorydatabase-method-on-dbcontextoptionsbuilder
- https://www.ryadel.com/en/the-command-node-node_modules-webpack-bin-webpack-js-env-prod-exited-with-code-2-error-fix-angular-node/
- https://stackoverflow.com/questions/57626878/the-json-value-could-not-be-converted-to-system-int32
- https://stackblitz.com/edit/angular-nqts82?file=src%2Fapp%2Fhome%2Fhome.component.html
- https://stackoverflow.com/questions/59552387/how-to-reload-a-page-in-angular-8-the-proper-way
- https://stackoverflow.com/questions/63277435/edit-and-delete-table-data-in-angular


## License

MIT