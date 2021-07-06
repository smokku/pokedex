import { Instance } from "mobx-state-tree"
import { PokemonV2MoveflavortextAvgFieldsModelBase } from "./PokemonV2MoveflavortextAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveflavortextAvgFieldsModel */
export interface PokemonV2MoveflavortextAvgFieldsModelType extends Instance<typeof PokemonV2MoveflavortextAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveflavortextAvgFieldsModel */
export { selectFromPokemonV2MoveflavortextAvgFields, pokemonV2MoveflavortextAvgFieldsModelPrimitives, PokemonV2MoveflavortextAvgFieldsModelSelector } from "./PokemonV2MoveflavortextAvgFieldsModel.base"

/**
 * PokemonV2MoveflavortextAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2MoveflavortextAvgFieldsModel = PokemonV2MoveflavortextAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
