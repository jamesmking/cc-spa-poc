import Head from 'next/head';
import Link from 'next/link'
import Layout from '../components/layouts/layout';

const Homepage = () => {
    return (
        <Layout>
            <Head>
                <title>Homepage</title>
            </Head>
            <h1>CC React/NextJS Demo</h1>

            <p>This is a very simple demo to show how we could structure an application.
                You will find the markup for the pages in the <code>pages/care</code> directory in the root.</p>

            <p>
                The care summary page gives a quick example of how we can mix UI logic and markup. We have a JS object
                containing patient data, and we decide where to render some of the values in our html.
                Its makes the view easier to understand, rather than having to look through a JS file.
            </p>

            <p>The care review shows a form field, we are storing the value of the field in the state
                of the page, but not doing anything with it yet.</p>

            <p>Both pages are using a layout component located at <code>components/layoutCare</code>.
                This is turn imports components for the Care page <code>header</code> and <code>navigation</code>.
                Each component can have its own CSS file, and these styles will only be loaded when the component
                is included. NextJS will change the class names when rendering the view, this will ensure class names
                are namespaced and can't affect other styles.
                This approach is called CSS Modules.
            </p>

            <ul>
                <li><Link href="/care/review">Care review</Link></li>
                <li><Link href="/care/summary">Care summary</Link></li>
            </ul>
        </Layout>
    );
}

export default Homepage