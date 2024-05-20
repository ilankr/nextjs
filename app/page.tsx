import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

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
There is really nothing on this list that I don't enjoy doing.
<hr>
<h3>Item 2</h3>

<p>What I'll need to learn to work at Vercel is front end, JavaScript development. This
is not an area that I focused on before, and clearly, I will need to improve in
it so I can do a great job here.</p>
<hr>

<h3>Item 4</h3>

<p>It is not clear if the question is about when to use Vercel in general, or when to choose between these
components. I'm going to answer the second question.</p>

<p>Edge function should be used when we need fast, dynamic functions
that run closer to the user location. For example, OAuth callbacks, responding
to webhook requests.</p>

<p>Serverless functions require full node.js runtime and can be
scaled up and down. They should be used to execute server-side logic like form
submission parsing and response, database queries, or serving as API endpoint.</p>

<p>Edge Middleware is a function
that operates at the edge of the network and is invoked before a request hits
the actual page. It is useful for managing authentication, geo and language routing,
A/B testing, etc.</p>

</hr>
  
    </main>
  );
}
