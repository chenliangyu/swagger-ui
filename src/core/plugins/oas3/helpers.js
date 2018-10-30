import React from "react"

export function isOAS3(jsSpec) {
  const oasVersion = jsSpec.get("openapi")
  //eslint-disable-next-line
  console.log("oasVersion:", oasVersion)
  if (typeof oasVersion !== "string") {
    return false
  }

  // we gate against `3.1` becasue we want to explicitly opt into supporting it
  // at some point in the future -- KS, 7/2018

  // starts with, but is not `3.0.` exactly
  return oasVersion.startsWith("3.0.") && oasVersion.length > 4
}

export function isSwagger2(jsSpec) {
  const swaggerVersion = jsSpec.get("swagger")
  if (typeof swaggerVersion !== "string") {
    return false
  }

  return swaggerVersion.startsWith("2.0")
}

export function OAS3ComponentWrapFactory(Component) {
  return (Ori, system, componentName) => (props) => {
    if (system && system.specSelectors && system.specSelectors.specJson) {
      const spec = system.specSelectors.specJson()
      const isOAS3Spec = isOAS3(spec)
      //eslint-disable-next-line
      console.log("componentName:", componentName, "isOAS3Spec:", isOAS3Spec)
      if (isOAS3(spec)) {
        return <Component {...props} {...system} Ori={Ori}></Component>
      } else {
        return <Ori {...props}></Ori>
      }
    } else {
      console.warn("OAS3 wrapper: couldn't get spec")
      return null
    }
  }
}
