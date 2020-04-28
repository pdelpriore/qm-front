export const editMyRecipeQuery = (
  recipeId,
  title,
  recipeImage,
  video,
  category,
  cookTime,
  ingredients,
  description,
  email
) => {
  return {
    query: `mutation($recipeId: ID!, $title: String!, $recipeImage: RecipeImage, $video: String, $category: String!, $cookTime: Int!, $ingredients: [String!]!, $description: String!, $email: String!) {
      editMyRecipe(recipeId: $recipeId title: $title, recipeImage: $recipeImage, video: $video, category: $category, cookTime: $cookTime, ingredients: $ingredients, description: $description, email: $email) {
          _id
          title
          picture
          video
          date
          category
          cookTime
          ingredients
          description
          author {
              name
              photo
              email
          }
          comments {
            _id
            commentator {
              _id
              name
              email
              photo
            }
            comment {
              _id
              content
              date
            }
            rate {
              _id
              value
            }
          }
      }
    }`,
    variables: {
      recipeId,
      title,
      recipeImage,
      video,
      category,
      cookTime,
      ingredients,
      description,
      email,
    },
  };
};
