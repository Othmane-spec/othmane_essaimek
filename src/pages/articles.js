import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import article1 from "../../public/images/articles/pagination component in reactjs.jpg";
import article2 from "../../public/images/articles/create loading screen in react js.jpg";
import { motion, useMotionValue } from "framer-motion";
import article3 from "../../public/images/articles/create modal component in react using react portals.png";
import article4 from "../../public/images/articles/form validation in reactjs using custom react hook.png";
import article5 from "../../public/images/articles/smooth scrolling in reactjs.png";
import article6 from "../../public/images/articles/create modal component in react using react portals.png";
import article7 from "../../public/images/articles/todo list app built using react redux and framer motion.png";
import article8 from "../../public/images/articles/What is Redux with easy explanation.png";
import article9 from "../../public/images/articles/What is higher order component in React.jpg";

import Transition from "@/components/Transition";

const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }

  return (
    <Link
      href={link}
      target="_blank
    "
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>
      <FramerImage
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        ref={imgRef}
        src={img}
        alt={title}
        className="z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden"
      />
    </Link>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between
    bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4
    dark:border-light dark:bg-dark dark:text-light
    sm:flex-col
    "
    >
      <MovingImg title={title} img={img} link={link} />
      <span className="text-primary font-semibold pl-4 dark:text-primaryDark sm:self-start sm:pl-0 xs:text-sm">
        {date}
      </span>
    </motion.li>
  );
};
const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className="relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light">
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark
      rounded-br-3xl
      "
      />

      <Link
        href={link}
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
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
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg">
          {title}
        </h2>
        <p className="text-sm mb-2">{summary}</p>
        <span className="text-primary font-semibold dark:text-primaryDark">
          {time}
        </span>
      </Link>
    </li>
  );
};

const articles = () => {
  return (
    <>
      <Head>
        <title>Othmane | Articles Page</title>
        <meta name="description" content="any description"></meta>
      </Head>
      <Transition />
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Les mots peuvent changer le monde ! "
            className="mb-16 lg:!text-7xl sm:!mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
            <FeaturedArticle
              title="Créer un composant de pagination personnalisé dans Reactjs à partir de zéro"
              summary="Découvrez comment créer un composant de pagination personnalisé dans ReactJS à partir de zéro. 
              Suivez ce guide étape par étape pour intégrer le composant Pagination dans votre projet ReactJS."
              time="9 min read"
              link="https://devdreaming.com/blogs/create-pagination-component-reactjs"
              img={article1}
            />
            <FeaturedArticle
              title="Création de superbes écrans de chargement dans React"
              summary=" Build 3 Types d’écrans de chargement
              Découvrez comment créer de superbes écrans de chargement dans React avec 3 méthodes différentes."
              time="9 min read"
              link="https://devdreaming.com/blogs/create-3-different-types-of-loading-screens-in-react"
              img={article2}
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32 ">
            All Articles
          </h2>
          <ul>
            <Article
              title="Validation des formulaires dans Reactjs : Créer un crochet personnalisé réutilisable pour les entrées et la gestion des erreurs

          "
              date="March 22 2023"
              link="https://devdreaming.com/blogs/react-form-validation-custom-hook"
              img={article4}
            />
            <Article
              title="Défilement fluide et soyeux dans Reactjs : un guide étape par étape pour les développeurs de React

          "
              date="March 22 2023"
              link="https://devdreaming.com/blogs/smooth-scrolling-in-react-js"
              img={article5}
            />
            <Article
              title="Créer une composante modale efficace pour réagir à l’aide de crochets et de portails
          "
              date="March 22 2023"
              link="https://devdreaming.com/blogs/create-efficient-modal-react-portals"
              img={article6}
            />
            <Article
              title="Créez une fabuleuse application Todo List avec React, Redux et Framer-Motion
          "
              date="March 22 2023"
              link="https://devdreaming.com/blogs/build-react-redux-framer-motion-todo-app"
              img={article7}
            />
            <Article
              title="Redux simplifié : Guide du débutant pour les développeurs Web
          "
              date="March 22 2023"
              link="https://devdreaming.com/blogs/redux-simply-explained"
              img={article8}
            />
            <Article
              title="Qu’est-ce que la composante d’ordre supérieur (Hoc) en réaction?
          "
              date="March 22 2023"
              link="https://devdreaming.com/blogs/higher-order-component-hoc-react"
              img={article9}
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default articles;
