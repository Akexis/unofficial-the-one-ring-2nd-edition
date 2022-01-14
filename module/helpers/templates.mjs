/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {Promise}
 */
 export const preloadHandlebarsTemplates = async function() {
  return loadTemplates([

    // Actor partials.
    "systems/unofficial-the-one-ring-2nd-edition/templates/actor/parts/actor-features.html",
    "systems/unofficial-the-one-ring-2nd-edition/templates/actor/parts/actor-items.html",
    "systems/unofficial-the-one-ring-2nd-edition/templates/actor/parts/actor-spells.html",
    "systems/unofficial-the-one-ring-2nd-edition/templates/actor/parts/actor-effects.html",
  ]);
};
