using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using quiz_backend.Models;

namespace quiz_backend.Controllers
{
    [Produces("application/json")]
    [Route("api/Questions")]
    //[ApiController]
    public class QuestionsController : Controller
    {
        readonly QuizContext context;

        public QuestionsController(QuizContext context)
        {
            this.context = context;
        }
        // GET: api/Questions
        [HttpGet]
        public IEnumerable<Question> Get()
        {
            return context.Questions;
        }
        // GET: api/QuestionsQuizId
        [HttpGet("{quizId}")]
        public IEnumerable<Question> Get([FromRoute] int quizId)
        {
            return context.Questions.Where(q => q.QuizId == quizId);
        }
        // POST: api/Questions
        [HttpPost]
        public async Task<IActionResult> Post([FromBody]Question question)
        {
            var quiz = context.Quiz.SingleOrDefault(q => q.ID == question.QuizId);

            if (quiz == null)
            {
                return NotFound();
            }

            context.Questions.Add(question);
            await context.SaveChangesAsync();
            return Ok(question);
        }
        // PUT: api/Questions
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] Question question)
        {
            if (id != question.ID)
                return BadRequest();

            context.Entry(question).State = EntityState.Modified;

            await context.SaveChangesAsync();

            return Ok(question);
        }
    }
}