import {only_teacher} from "@/utils/authorization";
import {tasks_routes} from "@/router/tasks";

export const home_routes = [
    {
        path: '',
        name: 'homepage',
        component: ()=>import("@/views/system_functions/HomeFiller.vue")
    },
    {
        path: 'journal',
        name: 'journal',
        beforeEnter: only_teacher,
        component: ()=>import("@/views/journal/JournalView.vue")
    },
    {
        path: 'user',
        name: 'user_management',
        component: ()=>import("@/views/metodist/MakeUser.vue")
    },
    {
        path: 'plan',
        name: 'plan_management',
        component: ()=>import("@/views/metodist/MakePlan.vue")
    },
    {
        path: 'grade',
        name: 'grade_management',
        component: ()=>import("@/views/metodist/MakeGrade.vue")
    },
    {
        path: 'group/:grade',
        name: 'group_management',

        component: ()=>import("@/views/metodist/MakeGroup.vue")
    },
    {
        path: 'journal_manage',
        name: 'journal_management',
        component: ()=>import("@/views/metodist/MakeJournal.vue")
    },
    {
        path: 'head_journal',
        name: 'head_journal',
        component: ()=>import("@/views/journal/HeadView.vue")
    },
    {
        path: 'move',
        name: 'move',
        component: ()=>import("@/views/metodist/MakeMove.vue")
    },
    {
        path: 'competitions',
        name: 'competitions',
        component: ()=>import("@/views/competition/CompetitonPage.vue")
    },
    {
        path: 'task_list/:c_id',
        name: 'task_list',
        children: tasks_routes,
        component: ()=>import("@/views/competition/Tasks.vue")
    }
]