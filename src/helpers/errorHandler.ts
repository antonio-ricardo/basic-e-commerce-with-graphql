import { GraphQLError } from 'graphql'

export const GraphqlErrorHandler = (error: GraphQLError) => {
  const isGraphqlError =
    error.extensions?.code && !error.extensions?.exception.name

  const code = isGraphqlError
    ? getGraphqlErrorCode(error.extensions.code)
    : getErrorCode(error.extensions.exception.name)

  return { message: error.message, code }
}

const getGraphqlErrorCode = (code: string): number => {
  switch (code) {
    case 'GRAPHQL_VALIDATION_FAILED':
      return 400
    default:
      return 500
  }
}

const getErrorCode = (errorName: string): number => {
  switch (errorName) {
    case 'NotFoundError':
      return 404
    case 'ClientBadRequest':
      return 400
    default:
      return 500
  }
}
