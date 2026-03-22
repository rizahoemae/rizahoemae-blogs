import type { Core } from "@strapi/strapi";

const config = ({
  env,
}: Core.Config.Shared.ConfigParams): Core.Config.Plugin => ({
  "strapi-csv-import-export": {
    enabled: true,
    config: {
      authorizedExports: ["api::skill.skill"],
      authorizedImports: [
        "api::skill.skill",
        "api::experience.experience",
        "api::project.project",
      ],
    },
  },
});

export default config;
