import { Instance } from "mobx-state-tree"
import { PokemonV2MovedamageclassAvgFieldsModelBase } from "./PokemonV2MovedamageclassAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovedamageclassAvgFieldsModel */
export interface PokemonV2MovedamageclassAvgFieldsModelType extends Instance<typeof PokemonV2MovedamageclassAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovedamageclassAvgFieldsModel */
export { selectFromPokemonV2MovedamageclassAvgFields, pokemonV2MovedamageclassAvgFieldsModelPrimitives, PokemonV2MovedamageclassAvgFieldsModelSelector } from "./PokemonV2MovedamageclassAvgFieldsModel.base"

/**
 * PokemonV2MovedamageclassAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2MovedamageclassAvgFieldsModel = PokemonV2MovedamageclassAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
