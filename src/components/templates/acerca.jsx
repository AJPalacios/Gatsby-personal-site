import React from 'react';
import { graphql, Link } from 'gatsby';

export default (props) => {

    const pageData = props.data.acercadeJson;

    return (
        <div>
            <header className="py-12 border-purple-500 border-solid border-t-8">
                <div className="max-w-4xl mx-auto">
                    <Link to="/" className="uppercase underline text-pink-500">Regresar al Inicio</Link>
                    <h2 className="capitalize text-6xl font-bold">{pageData.title}</h2>
                    <p className="text-xl">{pageData.description}</p>
                </div>
            </header>
            <section className="max-w-4xl mx-auto mt-12">
                {
                    pageData.items.map(item => {
                        return (
                            <p className="text-xl font-light text-justify mr-4">{item.info}</p>
                        );
                    })
                }
            </section>
        </div>
    );
}

export const query = graphql`
    query($slug: String) {
        acercadeJson(slug: {eq: $slug}){
            title
            description
            slug
            items{
                info
            }
        }
    }
`;