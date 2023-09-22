import Image from 'next/image';

export default function Page() {

    return (
        <div style={{display: 'flex', flexDirection: 'column', gap: '40px'}}>
            <h1>Computational Evolution - Exponential Potential.</h1>

            <div>
                <p>
                    Computer based technologies have massively changed the output potential of the human species, and their growth follows a curve that
                    humans are not used to dealing with.
                    There are many definitions of computer but most agree the first modern computer was developed in the 30's using plates and pins to perform calculations <a style={{textDecoration: 'underline'}} target='_blank' href='https://www.insider.com/how-computers-evolved-history-2019-9#in-the-1940s-computers-took-up-entire-rooms-like-the-eniac-which-was-once-called-a-mathematical-robot-2'>(source)</a>.
                    Since then, builders have innovated using vacuum tubes, and increasingly smaller transistors, small electrical gates that can quickly perform logic operations.
                </p>
            </div>

            <div>
                <p>This figure shows the massive growth in computational ability over the years as it relates to cost of a calculation performed.</p>
                <Image src="/images/progress-of-computing.png" alt="Evolution" width={600} height={400} />
                <p style={{ fontSize: '.8rem' }}>Figure adapted from (Kurzweil, 2005)</p>
            </div>

            <div>Along the path of computer evolution there have been many extremely influential creators, one of these creators was Grace Hopper. Hopper was a mathematician and computer scientist at Harvard.
                Hopper was one of the first people to expand on the technology of 'linkers' which are essentially meta programs that combine many smaller ones into a single program. <a style={{textDecoration: 'underline'}} target='_blank' href='http://content.yudu.com/A2qfj4/201403March/resources/3.htm'>(source)</a>.
                Another very influential person in the field of computer science was Granville Woods, who was a black inventor who created many electrical devices that were used in the creation of the modern computer such as the telephone transmitter. <a style={{textDecoration: 'underline'}} target='_blank' href='https://www.techtarget.com/whatis/feature/Black-leaders-in-technology#:~:text=Clarence%20Ellis%20was%20the%20first,for%20the%20ILLIAC%20IV%20supercomputer.'>(source)</a>.
            </div>

            <div>
                Someone who I respect for their drive and creativity in the computer space is Jensen Huang, a Taiwanese American who is the CEO of Nvidia, a company that makes graphics cards and other computer hardware. <a style={{textDecoration: 'underline'}} target='_blank' href='https://blogs.nvidia.com/blog/2023/09/21/ai-summit/#:~:text=NVIDIA%20founder%20and%20CEO%20Jensen,from%20Oct.%2015%2D16.'> (source)</a>.
                Nvidia has been a leader in the field of graphics processing units (GPUs) which are specialized computer chips that are very good at performing many calculations in parallel.
            </div>

            <div>
                One thing that surprised me greatly during my research and readings was the massive scale of early computers relative to their output, expecially when compared to todays computers. 
                This rapid compaction and explosion of computational power is a very interesting phenomenon that, if it continues, will definitely have a massive impact on the human species.
                There is a large part of me that is worried about being left behind as the ability and agency of these machines increases, but I am also very excited to see what the future holds.
            </div>

        </div >
    );
};