const fs = require('fs/promises')
const path = require('path')
const { srcPath } = require('../constants/path.constants')

const configStructureBuilder = async () => {
    const destinationPath = path.join(srcPath, '@templateGenerator')
    await fs.mkdir(destinationPath)

    await fs.writeFile(
        path.join(destinationPath, '.structuregenerator.config.js'),
        configTemplate
    );

    const templateDirectoryPath = path.join(destinationPath, 'templates')
    await fs.mkdir(templateDirectoryPath)
    await fs.writeFile(
        path.join(templateDirectoryPath, 'components.md'),
        componentTemplate
    );
}

configStructureBuilder();

const configTemplate = `module.exports = {
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
`

const componentTemplate = `import { memo } from "react";

const screen-name = memo(() => {
    return <div>Raw Template</div>;
});

export default screen-name;

`