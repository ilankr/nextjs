import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-left justify-between p-24">
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
      <p>------------</p>
      <h3>Item 2</h3>
      <p>What I&apos;ll need to learn to work
        at Vercel is front end, JavaScript development. This
        is not an area that I focused on before, and clearly, I will need to improve in
        it so I can do a great job here.</p>
      <p>------------</p>
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
     <p>------------</p>
      <h3>Item 4</h3>
      <p>It is not clear if the question is about when to use Vercel in general, or when to choose between these components. I&apos;m going to answer the second question.</p>
      <p>Edge function should be used when we need fast, dynamic functions that run closer to the user location. For example, OAuth callbacks, responding to webhook requests.</p>
      <p>Serverless functions require full node.js runtime and can be scaled up and down. They should be used to execute server-side logic like form submission parsing and response, database queries, or serving as API endpoint.</p>
      <p>Edge Middleware is a function that operates at the edge of the network and is invoked before a request hits the actual page. It is useful for managing authentication, geo and language routing, A/B testing, etc.</p>
      <p>------------</p>
      <h3>Item 5</h3>
      <p>Before asking the customers too many questions, I&apos;ll review
        the errors that we see. It may be (and may not be) self-explanatory. If not, I&apos;ll
        check our internal and external docs in case that was answered before. Lastly,
        I&apos;ll Google the error. It has happened before that knowing what the error is about
        and knowing our software, I&apos;m able to determine the problem.</p>
      <p>If these did not find a
        solution, I&apos;ll ask the customer if they know what change caused it. Since the
        code is in git, we should be able to pinpoint the commit that caused the error.
        That may give us information on what caused it. Lastly, I&apos;ll ask them what they
        are trying to do. It is possible that I can offer a workaround using technology
        I&apos;m familiar with.</p>
      <p>------------</p>
      <h3>Item 6</h3>
      <p>Hi customer,</p>
      <p>I totally understand that troubleshooting this issue is
        taking too much of your time. I&apos;m here  to help. The point of using Vercel is to make your life easier and get deployment to
        happen faster. This is not what we want to see. I would very much like to solve
        it for you, but with the information I now have, I don&apos;t know how to do that. A
        few answers from you will go a long way for me finding the problem and a good
        solution.</p>
      <p>If it easier for you, I&apos;m happy to jump on a zoom call to shorten communication round trip. I look forward to your answers or to meeting you on zoom,</p>
      <p>Ilan</p>
      <p>------------</p>

      
    </main>
  );
}
