#!/usr/bin/env node

import inquirer from 'inquirer';
import stripIndent from 'strip-indent';
import { existsSync, rename, writeFile } from 'fs';
import licenses from './licenses.js';

console.log('Hi, let\'s choose the right license for your project!\n\n');

const questions = [
  {
    type: 'confirm',
    name: 'isOpenSource',
    message: 'Is this an Open Source project?',
    default: true,
  },
  {
    type: 'list',
    name: 'permisivness',
    message: 'Which of these statements best describes your situation?',
    choices: [
      {
        name: 'I want a simple, permissive license',
        value: 'permissive',
        short: 'Permissive',
      },
      {
        name: 'I\'m worried about patents or other rights',
        value: 'patents',
        short: 'Patents',
      },
      {
        name: 'I would like people that use my code to release it under the same terms',
        value: 'copyleft',
        short: 'Copyleft',
      },
      {
        name: 'I want my project to be commercially-friendly',
        value: 'commercially-friendly',
        short: 'Commercially-friendly',
      },
      {
        name: 'Huh? I don\'t really care about any of these. Just let people use it.',
        value: 'public-domain',
        short: 'Public domain',
      },
    ],
    when(answers) {
      return answers.isOpenSource;
    },
  },
  {
    type: 'list',
    name: 'licenseType',
    message: (answers) => {
      let licenseType = answers.permisivness;

      if (answers.permisivness === 'patents') {
        licenseType = 'permissive';
      }

      return `Here are a few ${licenseType} licenses for you to choose from.`;
    },
    choices: (answers) => {
      const suitableLicenses = licenses.filter((license) => license.type === answers.permisivness);

      return suitableLicenses.map((license) => ({
        name: license.name,
        value: license,
        short: license.name,
      }));
    },
    when: (answers) => answers.isOpenSource,
  },
  /* {
    type: 'confirm',
    name: 'seeDescription',
    message: (answers) => {
      return chalk.bold('Sounds pretty good!') + chalk.gray(answers.licenseType.description);
    },
    default: true
  }, */
  {
    type: 'input',
    name: 'year',
    message: 'When did you start working on this project (what year?)',
    validate: (input) => {
      if (input < 1950 || input > (new Date()).getFullYear()) {
        return 'Is this the source code for the time machine?';
      }

      return true;
    },
    when: (answers) => {
      const hasParam = answers.licenseType.params.indexOf('year') !== -1;
      return answers.isOpenSource && hasParam;
    },
  },
  {
    type: 'input',
    name: 'name',
    message: 'And your name is...?',
    when: (answers) => {
      const hasParam = answers.licenseType.params.indexOf('name') !== -1;
      return answers.isOpenSource && hasParam;
    },
  },
  {
    type: 'input',
    name: 'description',
    message: 'Tell us a couple of words about your project',
    when: (answers) => {
      const hasParam = answers.licenseType.params.indexOf('description') !== -1;
      return answers.isOpenSource && hasParam;
    },
  },
  {
    type: 'list',
    name: 'saveCheck',
    message: 'Final step! What do you want to do with the license?',
    choices: () => {
      const choices = [{
        name: 'Show in stdout',
        value: 'stdout',
        short: 'stdout',
      }];

      if (!existsSync('./LICENSE')) {
        choices.push({
          name: 'Save content as LICENSE',
          value: 'create',
          short: 'New LICENSE',
        });
      } else {
        choices.push({
          name: 'Save content as LICENSE_NEW (LICENSE file already exists)',
          value: 'create_secondary',
          short: 'New LICENSE_NEW',
        });
        choices.push({
          name: 'Save content as LICENSE and rename existing file to LICENSE.bak',
          value: 'create_secondary_and_rename',
          short: 'New LICENSE and rename old',
        });
      }

      return choices;
    },
  },
];

inquirer.prompt(questions).then((answers) => {
  let params = {};
  let chosenLicense = {};
  for (let i = 0; i < licenses.length; i += 1) {
    if (licenses[i].name === answers.licenseType.name) {
      chosenLicense = answers.licenseType;
      params = chosenLicense.params.reduce((acc, param) => ({
        ...acc,
        [param]: answers[param],
      }), {});

      break;
    }
  }

  const licenseText = stripIndent(chosenLicense.license(params));

  if (answers.saveCheck === 'stdout') {
    console.log(licenseText);
    return;
  }

  let filePath = './LICENSE';
  if (answers.saveCheck === 'create_secondary') {
    filePath += '_NEW';
  }

  if (answers.saveCheck === 'create_secondary_and_rename') {
    rename('./LICENSE', './LICENSE.bak', (err) => {
      if (err) {
        console.warn(err);
      }
      return null;
    });
  }

  writeFile(filePath, licenseText, (err) => {
    if (err) {
      console.warn(err);
    }

    console.log('All done!');
    return null;
  });
});
