import { Instance } from "mobx-state-tree"
import { PokemonV2ItemflavortextAvgFieldsModelBase } from "./PokemonV2ItemflavortextAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemflavortextAvgFieldsModel */
export interface PokemonV2ItemflavortextAvgFieldsModelType extends Instance<typeof PokemonV2ItemflavortextAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemflavortextAvgFieldsModel */
export { selectFromPokemonV2ItemflavortextAvgFields, pokemonV2ItemflavortextAvgFieldsModelPrimitives, PokemonV2ItemflavortextAvgFieldsModelSelector } from "./PokemonV2ItemflavortextAvgFieldsModel.base"

/**
 * PokemonV2ItemflavortextAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2ItemflavortextAvgFieldsModel = PokemonV2ItemflavortextAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
