import { Post } from "@/models/post.model";

export const thoughtPosts: Post[] = [
    {
        path: 'computational-evolution',
        title: 'Computational Evolution - Exponential Potential.',
        desc: 'How computers have evolved, and how they will continue to evolve, and how that will affect us.',
        img: '/imgs/progress-of-computing.png',
        date: '22-09-2023',
        tags: ['thought', 'technology'],
    },
    {
        path: 'severity-of-being',
        title: 'You Exist, I Think That is Severely Epic',
        desc: 'I guess it makes sense that something exists and is, because true isn-ness would not really be able to be, that said, quite grateful.',
        img: '/imgs/thoughtPosts/severity-of-being.png',
        date: '21-06-2023',
        tags: ['thought', 'severity-of-being'],
    },
    {
        path: 'addiction',
        title: 'Good vs Bad Addiction',
        desc: 'Addiction gets a bad rap, and often it is a very negative positive feedback loop to find yourself in, but not always.',
        img: '/imgs/thoughtPosts/addiction.png',
        date: '21-06-2023',
        tags: ['thought', 'addiction'],
    },
];