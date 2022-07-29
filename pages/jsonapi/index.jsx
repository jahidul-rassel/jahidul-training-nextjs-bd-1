import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import { DRUPAL_URL, IMAGE_URL } from "../../lib/constants.jsx"

export default function index( {data: arrData} ) {
  //console.log(arrData);

  return (
    <div className='divPostList'>
        
        <Head>
            <title>Article List [JSON:API]</title>
        </Head>

        <h3>All Articles List [JSON:API]</h3>

        <div className='postsListDiv'>
            <p>https://www.drupal.org/docs/core-modules-and-themes/core-modules/jsonapi-module/api-overview</p> 
            <p>Doc: https://www.drupal.org/docs/core-modules-and-themes/core-modules/jsonapi-module/fetching-resources-get</p>

            <p><Link href={ DRUPAL_URL+"/jsonapi/node/article" }><a>{ DRUPAL_URL }/jsonapi/node/article</a></Link></p> 

            <p></p>
            <ul>
            {
                arrData.data.map( (article, index) =>
                    <li key={ index+"getStaticPaths" } >
                        <Link href={ "/jsonapi/"+article.id }><a>{ article.attributes.title }</a></Link>
                    </li>
                )
            }
            </ul>
        </div>
        
    </div>
  )
}


export async function getServerSideProps(context) {
  console.log(`<<<<<Custom Message>>>>> [jsonapi/index] -> getServerSideProps`);
  
  const req = await fetch(`https://dev-cse-bd-decouple-training.pantheonsite.io/jsonapi/node/article`);

  const data = await req.json();

  if (!data) {
      return {
          notFound: true
      }
  }

  return {
      props: { data },
  }
}