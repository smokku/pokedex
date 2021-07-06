import { Instance } from "mobx-state-tree"
import { PokemonV2ItemflavortextMinFieldsModelBase } from "./PokemonV2ItemflavortextMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemflavortextMinFieldsModel */
export interface PokemonV2ItemflavortextMinFieldsModelType extends Instance<typeof PokemonV2ItemflavortextMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemflavortextMinFieldsModel */
export { selectFromPokemonV2ItemflavortextMinFields, pokemonV2ItemflavortextMinFieldsModelPrimitives, PokemonV2ItemflavortextMinFieldsModelSelector } from "./PokemonV2ItemflavortextMinFieldsModel.base"

/**
 * PokemonV2ItemflavortextMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2ItemflavortextMinFieldsModel = PokemonV2ItemflavortextMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
