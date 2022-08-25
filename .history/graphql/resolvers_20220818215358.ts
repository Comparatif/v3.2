import {prisma} from "../prisma/db"

export const resolvers = {
    Query:{
        links: () => [{
category: "Open Source",
description: "Fullstack React"

        },
    
    {category: "Blabla",
    description: "Blablabla"}],
    },
};