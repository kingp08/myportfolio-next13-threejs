import { buildLegacyTheme } from "sanity";

const props = {
    '--my-white': '#EEEEEE',
    '--my-black': '#2A2D32',
    '--my-blue': '#20AFDB',
    '--my-red': '#db4437',
    '--my-yellow': '#f4b400',
    '--my-green': '#0f9d58',
}
// 225CAE; 20AFDB; 38bdf8
// 57da3d

export const myTheme = buildLegacyTheme({
    // Base color
    '--black': props['--my-black'],
    '--white': props['--my-white'],
    '--gray': '#666',
    '--gray-base': '#666',
    '--component-bg': props['--my-black'],
    '--component-text-color': props['--my-white'],
    // brand
    '--brand-primary': props['--my-blue'],

    // Default button
    '--default-button-color': '#666',
    '--default-button-primary-color': props['--my-blue'],
    '--default-button-success-color': props['--my-green'],
    '--default-button-warning-color': props['--my-yellow'],
    '--default-button-danger-color': props['--my-red'],
  
    /* State */
    '--state-info-color': props['--my-blue'],
    '--state-success-color': props['--my-green'],
    '--state-warning-color': props['--my-yellow'],
    '--state-danger-color': props['--my-red'],
  
    /* Navbar */
    '--main-navigation-color': props['--my-black'],
    '--main-navigation-color--inverted': props['--my-white'],
  
    '--focus-color': props['--my-blue'],
})