import path from 'path'
const { mergeResolvers } = require('@graphql-tools/merge')
const { loadFilesSync } = require('@graphql-tools/load-files')

const resolversArray = loadFilesSync(path.join(__dirname, 'graphql', '**', 'resolvers.ts'))
const resolvers = mergeResolvers(resolversArray)

export default resolvers