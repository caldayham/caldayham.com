import Image from "next/image";

export default function Page() {

    return (
        <div>
            <h1>Working to solve ethical issues around <u>company outsourcing.</u></h1>
            <h3>Cal Day Ham's Design Challenge phase 3 submission.</h3>
            <br />
            <br />
            <p>
                Outsourcing, a prevalent business strategy in today's globalized economy, involves hiring outside a business for contracted work rather than relying on in-house employees. This practice offers companies numerous benefits such as cost reduction, focusing on core business, resolving capacity issues, enhancing service quality, and accessing intellectual capital​​1. This activity is particularly attractive for companies in developed nations, which have been increasingly outsourcing parts of their business processes to developing countries like India and the Philippines for over two decades2​​. There are many major ethical concerns with this practice though, such as minimal or non-existant working condition standards, bribery with regulatory bodies, and human capital exploitation.
            </p>
            <br />
            <Image src="/images/outsourcing.jpg" alt="Outsourcing" width={500} height={300} />
            <br />
            <br />
            <p>

                The economic impact of outsourcing in developing countries is quite significant. For instance, in the Philippines, the outsourcing industry has become a major economic contributor, employing over 500,000 Filipinos in the business process outsourcing (BPO) sector2. This industry is a top foreign exchange earner, bringing substantial revenue to the country. Similarly, in India, cities like Bangalore are home to hundreds of thousands of tech workers employed by US companies, with major corporations like IBM employing a substantial portion of its workforce there. Outsourcing has positively impacted the unemployment rates and labor force development in these countries, addressing critical economic needs​​2.
            </p>
            <br />
            <p>
                Ethically, outsourcing raises several dilemmas. The primary concern is the potential exploitation of workers in countries with lower labor costs, often leading to low wages, long working hours, and substandard working conditions. This situation can perpetuate a cycle of poverty and exploitation, undermining labor rights and simply not allowing people to capture the true value they are producing with their labor. Additionally, outsourcing can result in job losses in the home country, negatively impacting local communities and economies. Another significant issue is the environmental impact of relocating production to countries with lax environmental regulations, leading to pollution and environmental degradation​​​​​​3.
            </p>
            <br />
            <p>
                To address these ethical challenges, companies are increasingly adopting responsible and sustainable outsourcing practices. This involves ensuring that outsourcing partners adhere to international labor standards, including fair wages and safe working conditions. Regular audits and monitoring of supplier practices are crucial for compliance. Engaging with local communities in the outsourcing countries to understand the impact of operations and contributing to community development is also vital. Furthermore, companies are encouraged to work with outsourcing partners who adhere to strict environmental standards, thereby promoting sustainable practices throughout the supply chain​​3. This final point is extremely important, it is common in the industry for many companies to turn a blind eye to shady regulation or inspection organizations who will simply give the required inspection approval for a bribe or other accommodation. To address this issue, setting up an independent third party who can randomly inspect facilities and severely punish those not only breaking the law for working conditions, but also soliciting bribes could be a great step to reducing this activity.
            </p>
            <br />
            <p>
                While outsourcing presents economic benefits, it's essential for companies to consider and address the ethical, legal, and environmental implications to create a more sustainable and equitable global economy. Responsible outsourcing not only benefits the companies but also supports the well-being of workers and communities in the host countries, fostering a more balanced and fair global business environment.
            </p>

        </div>
    );
};