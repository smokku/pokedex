import { Instance } from "mobx-state-tree"
import { PokemonV2StatAvgFieldsModelBase } from "./PokemonV2StatAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2StatAvgFieldsModel */
export interface PokemonV2StatAvgFieldsModelType extends Instance<typeof PokemonV2StatAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2StatAvgFieldsModel */
export { selectFromPokemonV2StatAvgFields, pokemonV2StatAvgFieldsModelPrimitives, PokemonV2StatAvgFieldsModelSelector } from "./PokemonV2StatAvgFieldsModel.base"

/**
 * PokemonV2StatAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2StatAvgFieldsModel = PokemonV2StatAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
