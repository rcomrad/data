interface Object{
    name():string
}
[]
export class User{
    id: number
    login: string
    password?: string
    name: string
    patronymic?: string
    surname: string
    sex?: string
    roles: string[]
    school_id?: number
}

export class School{
    id: number
    full_name: string
    short_name: string
    start_date: Date
}

export class Grade{
    id: number
    head: User
    students: User[]
}

export class Group{
    id: number
    students: User[]
    grade: Grade
}

export class Subject{
    id: number
    name: string
}

export class Plan{
    id: number
    name: string
    url: string
}

export class Lesson{
    theme: string
    date: Date
    homework?: string
    control?: string
}

export class Journal{
    id: number
    teacher: User
    methodis: User
    is_group: boolean
    plan: Plan
    schedule: number[]
    subject: Subject
    group: Group|Grade
    lessons: Lesson[]
}

export class Mark{
    value: string
    student_id: number
    lesson_id: number
}

