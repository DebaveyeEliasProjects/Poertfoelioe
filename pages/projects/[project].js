import React from 'react';
import fs from "fs";
import path from "path";
import Head from "next/head"
import matter from "gray-matter";
import marked from "marked";
import Navigation from '../../components/navigation/Navigation';
import Header from '../../components/main/Header';
import Hashtag from "../../components/main/Hashtag"
import Footer from '../../components/navigation/Footer';

const Project = ({htmlString,data}) => {

  return (
    <>
      <Head>
        <title>{data.title}</title>
      </Head>
      <div className="c-page__container c-footer__spreader">
        <Navigation/>
        <div className="c-header__container">
            <Header header={data.title}/>
            <div className="c-header__tags">
              {
                data.tags.map((tag, index) => (
                  <Hashtag key={index} tag={tag}/>
                ))
              }
            </div>
        </div>
        <div className="c-project-page markdown-body" dangerouslySetInnerHTML={{__html: htmlString}}> 
        </div>
      </div>
      <Footer/>
      
    </>
    
  );

};

export const getStaticPaths = async () => {

  const files = fs.readdirSync('projects');


  const paths = files.map(filename => ({
    params: {
      project: filename.replace(".md", "")
    }
  }))

  return {
    paths: paths,
    fallback: false
  }
}

export const getStaticProps = async ({params: {project}}) => {


  const markdownWithMeta = fs.readFileSync(path.join('projects', project + ".md")).toString();
  const parsedMarkdown = matter(markdownWithMeta);
  const html = marked(parsedMarkdown.content)

  return {
    props: {
      htmlString: html,
      data: parsedMarkdown.data
    }
  }
}

export default Project