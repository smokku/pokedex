import { Instance } from "mobx-state-tree"
import { PokemonV2BerryAvgFieldsModelBase } from "./PokemonV2BerryAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2BerryAvgFieldsModel */
export interface PokemonV2BerryAvgFieldsModelType extends Instance<typeof PokemonV2BerryAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2BerryAvgFieldsModel */
export { selectFromPokemonV2BerryAvgFields, pokemonV2BerryAvgFieldsModelPrimitives, PokemonV2BerryAvgFieldsModelSelector } from "./PokemonV2BerryAvgFieldsModel.base"

/**
 * PokemonV2BerryAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2BerryAvgFieldsModel = PokemonV2BerryAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
