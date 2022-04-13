// ==UserScript==
// @name         Change dark mode
// @version      0.0.1
// @description  Enables/disables dark mode
// @author       Felipe
// @match        *
// @grant        GM.registerButton
// @grant        GM.updateButton
// @grant        GM.darkmode
// @grant        GM.isDarkmodeEnabled
// @noframes
// ==/UserScript==

console.log('--> start')

const enableTitle = 'Enable Dark Mode';
const disableTitle = 'Disable Dark Mode';
const enableIcon = { name: 'sun', style: 'solid', font: 'font-awesome' };
const disableIcon = { name: 'moon', style: 'solid', font: 'font-awesome' };

const run = async () => {
  let enabled = await GM.isDarkmodeEnabled();

  GM.registerButton({
    id: 'change-darkmode',
    icon: enabled ? enableIcon : disableIcon,
    caption: enabled ? enableTitle : disableTitle,
    callback: async () => {
      enabled = await GM.isDarkmodeEnabled();
      GM.darkmode(!enabled);
      GM.updateButton({
        id: 'change-darkmode',
        icon: enabled ? enableIcon : disableIcon,
        caption: enabled ? enableTitle : disableTitle,
      });
    },
  });  
};
