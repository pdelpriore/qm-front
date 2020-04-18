export const addMyRecipeQuery = (
  title,
  image,
  video,
  category,
  cookTime,
  ingredients,
  description,
  email
) => {
  return {
    query: `mutation($title: String!, $image: String, $video: String, $category: String!, $cookTime: Int!, $ingredients: [String!]!, $description: String!, $email: String!) {
    addMyRecipe(title: $title, image: $image, video: $video, category: $category, cookTime: $cookTime, ingredients: $ingredients, description: $description, email: $email) {
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
            googlePhoto
        }
        comments {
          _id
          commentator {
            _id
            name
            email
            photo
            googlePhoto
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
      title,
      image,
      video,
      category,
      cookTime,
      ingredients,
      description,
      email,
    },
  };
};
