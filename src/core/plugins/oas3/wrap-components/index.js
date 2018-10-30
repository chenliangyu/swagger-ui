import Markdown from "./markdown"
import AuthItem from "./auth-item"
import parameters from "./parameters"
import VersionStamp from "./version-stamp"
import OnlineValidatorBadge from "./online-validator-badge"
import Model from "./model"
import JsonSchema_string from "./json-schema-string"

const Components = {
  Markdown,
  AuthItem,
  parameters,
  JsonSchema_string,
  VersionStamp,
  model: Model,
  onlineValidatorBadge: OnlineValidatorBadge,
}

//eslint-disable-next-line
console.log(Components, Markdown, AuthItem, parameters, JsonSchema_string, VersionStamp, OnlineValidatorBadge)

export default Components