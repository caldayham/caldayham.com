import Image from 'next/image';

export default function Page() {

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            <h1>Digital Equity and Inclusion Discussion Activity.</h1>

            <div>
                <p>
                    In summary, what are the main ethical concerns associated with digital equity or inclusion? And share at least one case example like those you have learned about this week.
                </p>
                <p>
                    What are some key strategies that are necessary to help address issues of digital equity or inclusion? And share at least one case example like those you have learned about this week.
                </p>
            </div>

            <div>
                <Image src="/posts/digital-equity.jpg" alt="Equity" width={600} height={300} />
                <p style={{ fontSize: '.8rem' }}>Figure sourced from digitalequityact.org</p>
            </div>

        </div >
    );
};