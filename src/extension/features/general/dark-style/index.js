import { Feature } from 'toolkit/extension/features/feature';

export class DarkStyle extends Feature {
  injectCSS() { return require('./darkstyle.css'); }

  shouldInvoke() { return true; }

  invoke() {
    console.log('DarkStyle is working!');
  }
}
