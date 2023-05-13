export function getComponentNameKebab(componentName: string) {
  const componentNameWithoutSuffix = componentName.replace('Component', '');

  return componentNameWithoutSuffix
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .toLowerCase();
}

export function convertOutletToComponentName(outlet: string) {
  return `${toPascalCase(outlet)}Component`;
}

function toPascalCase(value: string) {
  return value.replace(/(^\w|-\w)/g, clearAndUpper);
}

function clearAndUpper(value: string) {
  return value.replace(/-/, '').toUpperCase();
}
