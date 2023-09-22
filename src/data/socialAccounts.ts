import { SocialAccount } from "@/models/socialAccount.model";

const socialAccounts:SocialAccount[] = [
    {
        id: 3,
        platform: 'github',
        iconPath: '/icons/github2.png',
        link: 'https://github.com/caldayham',
    },
    {
        id: 1,
        platform: 'spotify',
        iconPath: '/icons/spotify.png',
        link: 'https://open.spotify.com/user/24zbjre8kpkb4zd5vh17nhgt6?si=HxbgYrVGTS2RzPqOrt27Eg',
    },
    {
        id: 0,
        platform: 'linkedin',
        iconPath: '/icons/linkedin.png',
        link: 'https://www.linkedin.com/in/caldayham/',
    },
    {
        id: 2,
        platform: 'venmo',
        iconPath: '/icons/venmo.png',
        link: 'https://account.venmo.com/u/caldayham',
    },
    {
        id: 5,
        platform: 'twitter',
        iconPath: '/icons/twitter.png',
        link: 'https://twitter.com/caldayham',
    },
    {
        id: 7,
        platform: 'stripe',
        iconPath: '/icons/stripe.png',
        link: 'https://buy.stripe.com/9AQ02L4318D8gmYaEI',
    },
    {
        id: 6,
        platform: 'instagram',
        iconPath: '/icons/instagram.png',
        link: 'https://www.instagram.com/caldayham/',
    },
    {
        id: 4,
        platform: 'youtube',
        iconPath: '/icons/youtube.png',
        link: 'https://www.youtube.com/@caldayham',
    },
]

export default socialAccounts;