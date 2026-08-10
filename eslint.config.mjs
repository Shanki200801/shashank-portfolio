// Next 16 ships eslint-config-next as native flat config, so the old
// FlatCompat/.eslintrc bridge is no longer needed.
import coreWebVitals from "eslint-config-next/core-web-vitals";
import typescript from "eslint-config-next/typescript";

const eslintConfig = [
  ...coreWebVitals,
  ...typescript,
  {
    ignores: [".next/**", "node_modules/**", "out/**", "build/**"],
  },
];

export default eslintConfig;
