import { Instance } from "mobx-state-tree"
import { PokemonV2ItemflavortextMaxFieldsModelBase } from "./PokemonV2ItemflavortextMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemflavortextMaxFieldsModel */
export interface PokemonV2ItemflavortextMaxFieldsModelType extends Instance<typeof PokemonV2ItemflavortextMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemflavortextMaxFieldsModel */
export { selectFromPokemonV2ItemflavortextMaxFields, pokemonV2ItemflavortextMaxFieldsModelPrimitives, PokemonV2ItemflavortextMaxFieldsModelSelector } from "./PokemonV2ItemflavortextMaxFieldsModel.base"

/**
 * PokemonV2ItemflavortextMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2ItemflavortextMaxFieldsModel = PokemonV2ItemflavortextMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
