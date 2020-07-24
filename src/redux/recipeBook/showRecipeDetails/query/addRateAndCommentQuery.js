export const addRateAndCommentQuery = (
  recipeId,
  rateValue,
  commentContent,
  userId,
  email
) => {
  return {
    query: `
                mutation($recipeId: ID!, $rateValue: Int!, $commentContent: String!, $userId: ID!, $email: String!) {
                  addRecipeRateComment(recipeId: $recipeId, rateValue: $rateValue, commentContent: $commentContent, userId: $userId, email: $email) {
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
                        _id
                          name
                          photo
                          email
                          followers {
                            email
                          }
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
                }
                `,
    variables: { recipeId, rateValue, commentContent, userId, email },
  };
};
