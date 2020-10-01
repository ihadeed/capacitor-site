import { parse, outputReadme } from '@capacitor/docgen';
import { parseMarkdown } from '@stencil/ssg/parse';
import path from 'path';

async function main() {
  // parse the core plugin dts file
  const apiFinder = parse({
    inputFiles: [
      path.join(
        __dirname,
        '..',
        'node_modules',
        '@capacitor',
        'core',
        'dist',
        'esm',
        'core-plugin-definitions.dts',
      ),
    ],
  });

  // get all the mardown files we want to update
  const markdownFilePaths = getPluginApiMardownFiles();

  // loop through all the markdown files and update them
  await Promise.all(
    markdownFilePaths.map(async markdownFilePath => {
      const markdownResults = await parseMarkdown(markdownFilePath);

      if (markdownResults.attributes.pluginapi) {
        const docsData = apiFinder(markdownResults.attributes.pluginapi);
        if (docsData) {
          await outputReadme(markdownFilePath, docsData);
          console.log(`Updated: ${markdownFilePath}`);
        }
      }
    }),
  );

  console.log(`Plugin V2 API Files Updated 🏄‍♂️`);
}

function getPluginApiMardownFiles() {
  // return a list of all the markdown files in the
  // pages/docs/apis directory we want to parse and add docs to
  return [];
}

main();
