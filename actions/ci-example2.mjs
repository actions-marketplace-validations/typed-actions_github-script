// @ts-check
/** @param {import('@typed-actions/github-script').Toolkit} Toolkit */
export default async ({ core, context }) => {
  core.debug("Running something at the moment");

  return context.actor;
};
