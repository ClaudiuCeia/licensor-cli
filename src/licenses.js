import MITLicense from './licenses/MITLicense.js';
import ApacheLicense2 from './licenses/ApacheLicense2.js';
import GNUGeneralPublicLicense3 from './licenses/GNUGeneralPublicLicense3.js';
import BSD2Simplified from './licenses/BSD2Simplified.js';
import BSD3ClauseNewOrRevisedLicense from './licenses/BSD3ClauseNewOrRevisedLicense.js';
import EclipsePublicLicense2 from './licenses/EclipsePublicLicense2.js';
import GNUAfferoGeneralPublicLicense3 from './licenses/GNUAfferoGeneralPublicLicense3.js';
import GNUGeneralPublicLicense2 from './licenses/GNUGeneralPublicLicense2.js';
import GNULesserGeneralPublicLicense21 from './licenses/GNULesserGeneralPublicLicense2_1.js';
import GNULesserGeneralPublicLicense3 from './licenses/GNULesserGeneralPublicLicense3.js';
import MozillaPublicLicense2 from './licenses/MozillaPublicLicense2.js';
import TheUnlicense from './licenses/TheUnlicense.js';

export default [{
  name: 'MIT License',
  license: MITLicense,
  params: ['name', 'year'],
  type: 'permissive',
  description: `
    A short and simple permissive license with conditions only
    requiring preservation of copyright and license notices. Licensed works,
    modifications, and larger works may be distributed under different terms
    and without source code.
  `,
},
{
  name: 'Apache License 2.0',
  license: ApacheLicense2,
  params: ['name', 'year'],
  type: 'patents',
  description: `
    A permissive license whose main conditions require preservation of
    copyright and license notices. Contributors provide an express grant of
    patent rights. Licensed works, modifications, and larger works may be
    distributed under different terms and without source code.
  `,
},
{
  name: 'GNU General Public License v3.0',
  license: GNUGeneralPublicLicense3,
  params: ['name', 'year', 'description'],
  type: 'copyleft',
  description: `
    Permissions of this strong copyleft license are conditioned on making
    available complete source code of licensed works and modifications, which
    include larger works using a licensed work, under the same license.
    Copyright and license notices must be preserved. Contributors provide an
    express grant of patent rights
  `,
},
{
  name: 'BSD 2-Clause "Simplified" License',
  license: BSD2Simplified,
  params: ['year', 'name'],
  type: 'permissive',
  description: `
    A permissive license that comes in two variants, the BSD 2-Clause and
    BSD 3-Clause. Both have very minute differences to the MIT license.
  `,
},
{
  name: 'BSD 3-Clause "New" or "Revised" License',
  license: BSD3ClauseNewOrRevisedLicense,
  type: 'permissive',
  params: ['year', 'name'],
  description: `
    A permissive license that comes in two variants, the BSD 2-Clause and
    BSD 3-Clause. Both have very minute differences to the MIT license.
  `,
},
{
  name: 'Eclipse Public License 2.0',
  license: EclipsePublicLicense2,
  type: 'commercially-friendly',
  params: [],
  description: `
    This commercially-friendly copyleft license provides the ability to
    commercially license binaries; a modern royalty-free patent license
    grant; and the ability for linked works to use other licenses, including
    commercial ones
  `,
},
{
  name: 'GNU Affero General Public License 3.0',
  license: GNUAfferoGeneralPublicLicense3,
  type: 'copyleft',
  params: ['year', 'name', 'description'],
  description: `
    Permissions of this strongest copyleft license are conditioned on making
    available complete source code of licensed works and modifications, which
    include larger works using a licensed work, under the same license.
    Copyright and license notices must be preserved. Contributors provide an
    express grant of patent rights. When a modified version is used to provide
    a service over a network, the complete source code of the modified version
    must be made available.
  `,
},
{
  name: 'GNU General Public License v2.0',
  license: GNUGeneralPublicLicense2,
  params: ['year', 'name', 'description'],
  type: 'copyleft',
  description: `
  The GNU GPL is the most widely used free software license and has a strong
  copyleft requirement. When distributing derived works, the source code of the
  work must be made available under the same license. There are multiple
  variants of the GNU GPL, each with different requirements.
  `,
},
{
  name: 'GNU Lesser General Public License v2.1',
  license: GNULesserGeneralPublicLicense21,
  params: ['year', 'name', 'description'],
  type: 'copyleft',
  description: `
  Primarily used for software libraries, the GNU LGPL requires that derived
  works be licensed under the same license, but works that only link to it do
  not fall under this restriction. There are two commonly used versions of the
  GNU LGPL.
  `,
},
{
  name: 'GNU Lesser General Public License v3.0',
  license: GNULesserGeneralPublicLicense3,
  params: ['year', 'name', 'description'],
  type: 'copyleft',
  description: `
  Permissions of this strong copyleft license are conditioned on making available
  complete source code of licensed works and modifications, which include larger
  works using a licensed work, under the same license. Copyright and license
  notices must be preserved. Contributors provide an express grant of patent
  rights  `,
},
{
  name: 'Mozilla Public License 2.0',
  license: MozillaPublicLicense2,
  params: [],
  type: 'copyleft',
  description: `
    Permissions of this weak copyleft license are conditioned on making
    available source code of licensed files and modifications of those files
    under the same license (or in certain cases, one of the GNU licenses).
    Copyright and license notices must be preserved. Contributors provide an
    express grant of patent rights. However, a larger work using the licensed
    work may be distributed under different terms and without source code for
    files added in the larger work
  `,
},
{
  name: 'The Unlicense',
  license: TheUnlicense,
  params: [],
  type: 'public-domain',
  description: `
    A license with no conditions whatsoever which dedicates works to the public
    domain. Unlicensed works, modifications, and larger works may be distributed
    under different terms and without source code
  `,
}];
