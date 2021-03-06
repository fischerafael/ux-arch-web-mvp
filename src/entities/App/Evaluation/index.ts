export interface IEvaluationOptions {
    emoji: string
    value: number
    title: string
    active: boolean
}

const baseValue = 0.066

export const options: IEvaluationOptions[] = [
    {
        emoji: '๐ฌ',
        value: baseValue * 0,
        title: '#tenso',
        active: false
    },
    {
        emoji: '๐ข',
        value: baseValue * 1,
        title: '#triste',
        active: false
    },
    {
        emoji: '๐',
        value: baseValue * 2,
        title: '#calmo',
        active: false
    },
    {
        emoji: '๐',
        value: baseValue * 3,
        title: '#feliz',
        active: false
    },
    {
        emoji: '๐ฃ',
        value: baseValue * 4,
        title: '#nervoso',
        active: false
    },
    {
        emoji: '๐',
        value: baseValue * 5,
        title: '#deprimido',
        active: false
    },
    {
        emoji: '๐',
        value: baseValue * 6,
        title: '#relaxado',
        active: false
    },
    {
        emoji: '๐',
        value: baseValue * 7,
        title: '#exaltado',
        active: false
    },
    {
        emoji: '๐ค',
        value: baseValue * 8,
        title: '#estressado',
        active: false
    },
    {
        emoji: '๐ด',
        value: baseValue * 9,
        title: '#letรกrgico',
        active: false
    },
    {
        emoji: '๐',
        value: baseValue * 10,
        title: '#sereno',
        active: false
    },
    {
        emoji: '๐คฉ',
        value: baseValue * 11,
        title: '#excitado',
        active: false
    },
    {
        emoji: '๐',
        value: baseValue * 12,
        title: '#chateado',
        active: false
    },
    {
        emoji: '๐',
        value: baseValue * 13,
        title: '#fatigado',
        active: false
    },
    {
        emoji: '๐',
        value: baseValue * 14,
        title: '#contente',
        active: false
    },
    {
        emoji: '๐ฎ',
        value: baseValue * 15,
        title: '#alerta',
        active: false
    }
]
