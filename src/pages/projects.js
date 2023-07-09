import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import project1 from "../../public/images/projects/Services Rh.png";
import project2 from "../../public/images/projects/ecomerce.png";
import project3 from "../../public/images/projects/portfolio1_img.png";
import project4 from "../../public/images/projects/Travel.png";
import project5 from "../../public/images/projects/airbnb.webp";

import { motion } from "framer-motion";
import Transition from "@/components/Transition";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full flex items-center justify-between relative rounded-br-2xl
    rounded-3xl border border-solid border-dark bg-light shadow-2xl dark:bg-dark dark:border-light
    p-12 lg:flex-col lg:p-8 xs:rounded-br-3xl xs:p-6
    "
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light
      rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]
      "
      />

      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100w,
                (max-width: 1200px) 50w,
                50w"
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark
            sm:px-4 sm:text-base
            "
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-center rounded-2xl
    border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light
    xs:p-4
    "
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark
      rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h[102%] xs:rounded-[1.5rem]
      "
      />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4 ">
        <span className="text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>

        <div className=" w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className=" text-lg  font-semibold underline md:text-base"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Othmane | Projects Page</title>
        <meta name="description" content="any description"></meta>
      </Head>
      <Transition />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="L’imagination l’emporte sur la connaissance!"
            className="mb-16 lg:!text-7xl sm:!mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="Services RH Application"
                img={project1}
                summary="Une application web pour la gestion des ressources humaines a été programmée en utilisant les langages suivants : PHP/Laravel, JavaScript, HTML et CSS."
                link="https://github.com/Othmane-spec/Services_RH"
                github="https://github.com/Othmane-spec/Services_RH"
                type="Projet Sélectionné"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Dovshop"
                img={project2}
                summary="Un site ecommerce des vetements a été programer par Laravel Php"
                link="https://github.com/3WA-F21/Dovshop"
                github="https://github.com/3WA-F21/Dovshop"
                type="Projet Sélectionné"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Portfolio"
                img={project3}
                summary="Portfolio d'un dev "
                link="https://github.com/Othmane-spec/Portfolio_othmane"
                github="https://github.com/Othmane-spec/Portfolio_othmane"
                type="Projet Sélectionné"
              />
            </div>

            <div className="col-span-12 ">
              <FeaturedProject
                title="Aplication web Travel"
                img={project4}
                summary="Grâce à l'application web Trizen, les utilisateurs ont la possibilité de rechercher, de comparer et de réserver en toute simplicité des hébergements hôteliers en ligne, offrant ainsi une expérience utilisateur intuitive et fluide tout en leur permettant de bénéficier d'un large choix d'options d'hébergement aux prix les plus compétitifs sur le marché."
                link="https://github.com/Othmane-spec/Travel_laravel"
                github="https://github.com/Othmane-spec/Travel_laravel"
                type="Projet Sélectionné"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              {" "}
              <Project
                title="Clone Airbnb"
                img={project5}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                local currency."
                link="https://github.com/Othmane-spec/airbnb-clone"
                github="https://github.com/Othmane-spec/airbnb-clone"
                type="Projet Sélectionné"
              />
            </div>
            {/* <div className="col-span-6 sm:col-span-12">
              {" "}
              <Project
                title="Crypto Screener Application"
                img={project1}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                local currency."
                link="/"
                github="/"
                type="Projet Sélectionné"
              />
            </div> */}
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
