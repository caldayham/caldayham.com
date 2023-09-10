import { SocialAccount } from "@/models/socialAccount.model";

const socialAccounts:SocialAccount[] = [
    {
        id: 3,
        platform: 'github',
        iconPath: '/icons/github2.png',
        link: 'https://github.com/caldayham',
    },
    {
        id: 0,
        platform: 'linkedin',
        iconPath: '/icons/linkedin.png',
        link: 'https://www.linkedin.com/in/caldayham/',
    },
    {
        id: 1,
        platform: 'facebook',
        iconPath: '/icons/facebook.png',
        link: 'https://www.facebook.com/caldayham',
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