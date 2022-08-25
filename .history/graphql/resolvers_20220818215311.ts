import db from "../prisma/"
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