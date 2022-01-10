import React, { createContext, useState } from 'react'

export const RecipeContext = createContext()


export default function RecipeProvider({children}) {

    // const [articles, setArticles] = useState(
    //     [
    //     {id:1, title:'title1', body: 'body1'},
    //     {id:2, title:'title2', body: 'body2'},
    //     {id:3, title:'title3', body: 'body3'},
    //     {id:4, title:'title4', body: 'body4'}
    // ])

    // const saveArticle = article => {

    //     const newArticle = {
    //         id: Math.floor(Math.random() * 100),
    //         title: article.title,
    //         body: article.body
    //     }

    //     setArticles([
    //         ...articles,
    //         newArticle
    //     ])
    // }

    return (
        // <ArticleContext.Provider value = {{articles, saveArticle}}>
        <ArticleContext.Provider>
            {children}
        </ArticleContext.Provider>
    )
}