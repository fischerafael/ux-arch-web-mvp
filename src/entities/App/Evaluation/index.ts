export interface IEvaluationOptions {
    emoji: string
    value: number
    title: string
    active: boolean
}

const baseValue = 0.066

export const options: IEvaluationOptions[] = [
    {
        emoji: '😬',
        value: baseValue * 0,
        title: '#tenso',
        active: false
    },
    {
        emoji: '😢',
        value: baseValue * 1,
        title: '#triste',
        active: false
    },
    {
        emoji: '😌',
        value: baseValue * 2,
        title: '#calmo',
        active: false
    },
    {
        emoji: '😀',
        value: baseValue * 3,
        title: '#feliz',
        active: false
    },
    {
        emoji: '😣',
        value: baseValue * 4,
        title: '#nervoso',
        active: false
    },
    {
        emoji: '😞',
        value: baseValue * 5,
        title: '#deprimido',
        active: false
    },
    {
        emoji: '🙂',
        value: baseValue * 6,
        title: '#relaxado',
        active: false
    },
    {
        emoji: '😂',
        value: baseValue * 7,
        title: '#exaltado',
        active: false
    },
    {
        emoji: '😤',
        value: baseValue * 8,
        title: '#estressado',
        active: false
    },
    {
        emoji: '😴',
        value: baseValue * 9,
        title: '#letárgico',
        active: false
    },
    {
        emoji: '😉',
        value: baseValue * 10,
        title: '#sereno',
        active: false
    },
    {
        emoji: '🤩',
        value: baseValue * 11,
        title: '#excitado',
        active: false
    },
    {
        emoji: '😒',
        value: baseValue * 12,
        title: '#chateado',
        active: false
    },
    {
        emoji: '🙄',
        value: baseValue * 13,
        title: '#fatigado',
        active: false
    },
    {
        emoji: '😄',
        value: baseValue * 14,
        title: '#contente',
        active: false
    },
    {
        emoji: '😮',
        value: baseValue * 15,
        title: '#alerta',
        active: false
    }
]
