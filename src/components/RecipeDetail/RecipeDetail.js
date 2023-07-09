import React, { useEffect, useState } from 'react'
import { fetchRecipesById } from '../../utils/api'
import { Link, useParams } from 'react-router-dom'
import Loader from '../Loader/Loader'
import styles from './RecipeDetail.module.scss'
import cx from 'classnames'

function RecipeDetail() {

    const [recipe, setRecipe] = useState({})
    const [loading, setLoading] = useState(true)
    const [isFavorite, setIsFavorite] = useState(false)
    const { id } = useParams()

    useEffect(() => {
        const fetchRecipesData = async () => {
            try {
                const data = await fetchRecipesById(id)
                setRecipe(data)
                setLoading(false)
            } catch {
                setLoading(false)
            }
        }
        fetchRecipesData()
    }, [id])

    useEffect(()=>{
        const fav = JSON.parse(localStorage.getItem('fav')) || []
        const isRecipeFav = fav.some(rec =>  rec.id === recipe.id)
        setIsFavorite(isRecipeFav)
    }, [recipe])
    
    const handleToggleFav = () => {
        setIsFavorite(preVal => !preVal)
        const fav = JSON.parse(localStorage.getItem('fav')) || []
        const updateFav = isFavorite ? fav.filter(rec => rec.id !== recipe.id)
        : [...fav, recipe]
        localStorage.setItem('fav', JSON.stringify(updateFav))
    }

    return (
        <div>
            {loading ? <Loader /> :
                <div className={styles.details}>
                    <Link to={'/'}>Go back</Link>
                    <div className={styles.header}>
                        <h2>{recipe.title}</h2>
                        <button 
                        onClick={handleToggleFav}
                        className={styles.favBtn}>
                            {!isFavorite ? '+ Add to favorites' : '- remove from favorites'}
                            </button>
                    </div>
                    <div className={styles.content}>
                        <img className={styles.image} src={recipe.image}  alt={recipe.title}/>
                        <div className={styles.recipeInfo}>
                                <span className={cx(styles.tag, styles.level)}>{recipe.level}</span>
                                <span className={cx(styles.tag, styles.time)}>{recipe.time}</span>
                                <span className={cx(styles.tag, styles.veg)}>{recipe.isVeg ? "Veg" : "Non-Veg"}</span>
                            </div>
                            <div className={styles.tags}>
                                {recipe.ingredients.map((ingredient, ind) => (
                                    <span key={ind} className={styles.ingredient}>{ingredient}</span>
                                ))}
                            </div>
                            <h3>Instructions</h3>
                            <ol className={styles.instructions}>
                                {recipe.instructions.map((instruction, ind) => (
                                    <li key={ind}>{instruction}</li>
                                ))}
                            </ol>
                    </div>
                </div>
            }
        </div>
    )
}

export default RecipeDetail