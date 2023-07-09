import React from 'react'
import styles from './RecipeList.module.scss'
import { Link } from 'react-router-dom'
import cx from 'classnames'

function RecipeList({ recipes = [] }) {

    const checkForRecipes = () => {
        if (recipes.length === 0)
            return <div className={styles.noRecipes}>No recipes Found, search for different item</div>
        else
          return renderList()
    }

    const renderList = () => {
        return <div className={styles.list}>
            {recipes.map(recipe => (
                <Link
                    to={`/recipe/${recipe.id}`}
                    className={styles.linkItem}
                    key={recipe.id}>
                    <div className={styles.cardContainer}>
                        <div className={styles.cardHeading}>
                            {recipe.title}
                        </div>
                        <div className={styles.recipeInfo}>
                            <span className={cx(styles.tag, styles.level)}>{recipe.level}</span>
                            <span className={cx(styles.tag, styles.time)}>{recipe.time}</span>
                            <span className={cx(styles.tag, styles.veg)}>{recipe.isVeg ? "Veg" : "Non-Veg"}</span>
                        </div>
                        <img
                            src={recipe.image}
                            alt={recipe.title}
                            className={styles.image}
                        />
                    </div>
                </Link>
            ))}
        </div>
    }

    return (
        <div className={styles.recipeList}>
            <h3 className={styles.title}>Check out these recipes</h3>
            {checkForRecipes()}
        </div>
    )
}

export default RecipeList