import Image from "next/image";

export default function Page() {

    return (
        <div style={{display:'flex', flexDirection:'column', gap: '20px'}}>
            <h1>AI Design and Manufacturing, an Ethical Analysis.</h1>
            <p>by Cal Day Ham</p>

            <hr></hr>

            <p>
                Manufacturing processes are one of the most integral parts of society, but until recently we had not realized how bottlenecked our design and execution phases were.
            </p>
            <Image src='/posts/rocket-engine.jpg' alt='rocket engine' width={600} height={350} />
            <p>
                Humans are very creative but our bandwidth to communicate with computers is very low as comparative to AI, recently there have been many companies that have begin to integrate AI design and 3D An additive manufacturing to create highly organic, strong, and resource efficient products by specifying parameters and allowing the AI to iterate over thousands or millions of design possibilities to find the best one. This is both a beautiful and terrifying thing, beautiful because of the efficiency, terrifying because of the loss of human need in the process. I have done some work with this technology in the past so I will be talking to old coworkers and referencing company whitepapers to complete this essay.
            </p>
        </div>
    );
};