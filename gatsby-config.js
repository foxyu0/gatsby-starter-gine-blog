module.exports = {
    plugins: [
        {
            resolve: `gatsby-theme-gine-blog`,
            options: {
                configTable: "https://www.notion.so/a31e1f01ad7c4aa588b188b2c72e5fb6?v=b128319138a44b0fb656736534d141b4"
            }
        },
        {
            resolve: `gatsby-source-notion-database`,
            options: {
                configTable: "https://www.notion.so/1e51bf8c0fbf4a4f8c0e415e40cd6f61?v=65a50530b29840788f7137cf61c34de4"
            }
        }
    ],
}
