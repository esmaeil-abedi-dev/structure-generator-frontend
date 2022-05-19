module.exports = {
    templatePath: {
        screens: "components.md",
        components: "components.md",
    },
    directories: {
        components: {
            type: 'component',
            subDirectories: [],
            parentDirectories: []

        },
        screens: {
            type: 'component',
            subDirectories: [],
            parentDirectories: ['features']
        },
        features: {
            type: 'structure',
            subDirectories: {
                api: {
                    type: 'util',
                    isCreateThisDirectory: true,
                    isCreateSubFilesForThisDirectory: true,
                },
                constants: {
                    type: 'util',
                    isCreateThisDirectory: true,
                    isCreateSubFilesForThisDirectory: true,
                },
                helpers: {
                    type: 'util',
                    isCreateThisDirectory: true,
                    isCreateSubFilesForThisDirectory: true,
                },
                hooks: {
                    type: 'util',
                    isCreateThisDirectory: true,
                    isCreateSubFilesForThisDirectory: true,
                },
                redux: {
                    type: 'util',
                    isCreateThisDirectory: true,
                    isCreateSubFilesForThisDirectory: true,
                },
                routes: {
                    type: 'util',
                    isCreateThisDirectory: true,
                    isCreateSubFilesForThisDirectory: true,
                },
                screens: {
                    type: 'component',
                    isCreateThisDirectory: true,
                    isCreateSubFilesForThisDirectory: false,
                },
                types: {
                    type: 'util',
                    isCreateThisDirectory: true,
                    isCreateSubFilesForThisDirectory: true,
                },
            }
        }
    }
};