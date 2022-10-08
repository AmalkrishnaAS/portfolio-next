import React from 'react'
import Title from './Title'
import HorizontalScroll from 'react-scroll-horizontal'
import ProjectCard from './ProjectCard'
import Link from 'next/link'

const Projects = () => {

  const data=[
    {
      title: "HelloCoder",
      tags:['NextJS','Flask','PostgreSQL'],
      desc:"A multi-user blog  website that allows users to login and publish their own blogs. it also features an integrated web-scraper that scrapes trending repositories from github.  ",
      links:{
        contribute:'https://www.github.com',
        preview:'https://www.preview.com'
      }
    },
    {
      title:"Metalage Technologies",
      tags:['NextJS','TailwindCSS','Strapi'],
      desc:'A full stack website built for metalage technologies. includes an authenticated admin panel to update the product catalogue.',
      links:{
        contribute:'https://www.github.com',
        preview:'https://www.preview.com'
      }
    },
    {
      title:'Tathva`21 Website ',
      tags:['NextJS','CSS','Strapi',],
      desc:'Official website for Tathva 2021 ,The annual technical fest of National Institute of Technology, Calicut.',
      links:{
        contribute:'https://www.github.com',
        preview:'https://www.preview.com'
      }
    },
    {
      title:'NITCMUN`21 Website',
      tags:['NextJS','Firebase','CSS'],
      desc:'Official Website for NITC Model United Nations 2021 Website with Registration and Payment Gateway Integration. ',
      links:{
        contribute:'https://www.github.com',
        preview:'https://www.preview.com'
      }
    },
    {
      title:'IPF Official Website',
      tags:['React','SCSS','Firebase'],
      desc:'Official Website for Industrial Planning Forum, a cultural club in National Institute of Technology Calicut. ',
      links:{
        contribute:'https://www.github.com',
        preview:'https://www.preview.com'
      }
    },
    {
      title:'CITRA Official Website',
      tags:['NextJS','TailwindCSS','Strapi'],
      desc:'Official Website for Centre for Information Technology Research and Automation built as a part of their summer internship programme.',
      links:{
        contribute:'https://www.github.com',
        preview:'https://www.preview.com'
      }

    },
    {
      title:'Garbage Classifier',
      tags:['Tensorflow','CNN','Logistic Regression'],
      desc:'a multi-class image classifier which classifies images of Garbage materials in to 6 different categories using Convolutional Neural Network and Logistic Regression.',
      links:{
        contribute:'https://www.github.com',
        preview:null
      }
    },
    {
      title:'Recipe Scout',
      tags:['React','Bootstrap 5','Edamam-API'],
      desc:'a simple website which allows you to search recipes by keywords and also filter them on the basis of diet requirements',
      links:{
        contribute:'https://www.github.com',
        preview:'https://www.preview.com'
      }

    }
  ]
  return (
    <div
    className='mt-12 text-gray-400'
    >
        <Title text='Projects'></Title>
       <div className='p-4 flex flex-wrap gap-4 justify-center'>
        
        
      {data.map((item,key)=>{
        return (
          <ProjectCard item={item} key={key} />

        )
      })}
       </div>
     
    </div>
  )
}

export default Projects