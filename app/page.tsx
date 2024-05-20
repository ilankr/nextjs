import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    
      <p>this is text text</p>
      <h2>These are notes from Ilan Krayn for Skills Assessment</h2>
      <h3>Item 1</h3>
      <p>5 favorite support tasks</p>
      <ul>
        <li>Manage a support team</li>
        <li>Find and recruit teammates for the support team </li>
        <li>Help train and onboard new support teammates</li>
        <li>Work with the product team to develop a newfeature based on feedback from customers</li>
        <li>Analyze hundreds of support tickets to spot trends the product team can use</li>
      </ul>
      <p>5 least favorite support tasks</p>
      There is really nothing on this list that I don&apos;t enjoy doing.
      <hr>
      <h3>Item 2</h3>
      <p>What I&apos;ll need to learn to work at Vercel is front end, JavaScript development. This
      is not an area that I focused on before, and clearly, I will need to improve in it so I can do a great job here.</p>
      <hr>
      <h3>Item 3</h3>
      <p>At Harness I was working with a banking customer facing
        failed deployment and was not able to understand why (this was a very common
        support issue). Since this was a P1 issue, we had a call going to work on this.
        Looking at our agent logs I found the root issue and showed the customer how to
        fix it. The customer immediately tried my suggestion, and the deployment was
        completed successfully. Once it was fixed, I showed the customer how I was able
        to find the problem so in the future they can troubleshoot themselves and solve
        issues faster.</p>

      <p>Another example, At Aisera I worked with a large national retail store chain.
        They felt that they were not getting value from the product. Working together
        with the dedicated CSE of the account we helped figure out what features they
        were not using to get value and walked the customer through configuring them. This
        allowed us to turn a churn risk customer into a happy, renewing one.</p>
      <hr>
      <h3>Item 4</h3>

      
    </main>
  );
}
