export const tasks_routes = [
    {
        path: '',
        name: 'task_filler',
        component: ()=>import("@/views/competition/TaskFiller.vue")
    },
    {
        path: 'problem/:id',
        name: 'problem_page',
        component: ()=>import("@/views/competition/ProblemsPage.vue")
    },
    {
        path: 'question/:id',
        name: 'question_page',
        component: ()=>import("@/views/competition/QuestionPage.vue")
    }
]