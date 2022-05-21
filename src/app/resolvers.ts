import path from 'path'
import { mergeResolvers } from '@graphql-tools/merge'
import { loadFilesSync } from '@graphql-tools/load-files'

const resolversArray = loadFilesSync(path.join(__dirname, 'graphql', '**', 'resolvers.ts'))
const resolvers = mergeResolvers(resolversArray)

export default resolvers