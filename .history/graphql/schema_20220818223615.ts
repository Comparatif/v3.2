import {makeSchema} from 'Nexus'
import {join} from 'path'

export const schema = makeSchema({
    types: []
    outputs: {
        typegen: join(
            process.cwd(),
            'nodes_modules',
            '@types',
            'n'
        )
    }
})