// @ts-check
/** @param {import('@type/script.js').Toolkit} Toolkit */
export default async ({ core, context }) => {
  core.debug("Running something at the moment");

  return context.actor;
};
