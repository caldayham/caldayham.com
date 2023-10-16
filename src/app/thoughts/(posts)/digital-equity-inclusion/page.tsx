import Image from 'next/image';

export default function Page() {

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', marginBottom:"80px", paddingRight:"20%"}}>
            <h1>Digital Equity and Inclusion Discussion Activity.</h1>

            <div>
                <Image src="/posts/digital-equity.jpg" alt="Equity" width={600} height={300} />
                <p style={{ fontSize: '.8rem' }}>Figure sourced from digitalequityact.org</p>
            </div>

            <div>
                <q>
                    <i>
                        In summary, what are the main ethical concerns associated with digital equity or inclusion? 
                        And share at least one case example like those you have learned about this week.
                    </i>
                </q>
                <p>-</p>
                <p style={{lineHeight: '2rem', fontSize:"1.4rem", fontWeight:"600"}}>
                    Some of the main ethical concerns associated with digital equity or inclusion are the lack of access to technology, 
                    low or no access to the internet, and disparities in digital literacy among different communities. These concerns are especially prevalent 
                    in rural areas and in low-income communities. The lack of access to technology and internet can be due to the low 
                    levels of funding for schools, libraries, and other enrichment sources that are often far more supplemented in affluent areas. 
                    The lack of access to digital literacy can be due to limited 
                    training and education and even limited access for those who seek out the necessary training and education.
                     These concerns are also prevalent in developing countries where the lack of access to technology 
                    and the internet can be due in part to low quality infrastructure.
                </p>
            </div>

            <div>
                <q>
                    <i>
                        What are some key strategies that are necessary to help address issues of digital equity or inclusion? And share at 
                        least one case example like those you have learned about this week.
                    </i>
                </q>
                <p>-</p>
                <p style={{lineHeight: '2rem', fontSize:"1.4rem", fontWeight:"600"}}>
                    Some key strategies that are necessary to help address issues of digital equity or inclusion are to provide funding
                     for schools and libraries, possibly through taxation of higher income areas. This can be seen as an investment in the future generations who will benefit and contribute back to society.
                     Additionally we should work to provide funding for training and education, and to provide funding for infrastructure in communities who are lagging. 
                     These strategies are especially important in rural areas and in low-income communities.
                </p>
            </div>
        </div >
    );
};