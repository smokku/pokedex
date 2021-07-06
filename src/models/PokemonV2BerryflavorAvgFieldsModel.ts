import { Instance } from "mobx-state-tree"
import { PokemonV2BerryflavorAvgFieldsModelBase } from "./PokemonV2BerryflavorAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2BerryflavorAvgFieldsModel */
export interface PokemonV2BerryflavorAvgFieldsModelType extends Instance<typeof PokemonV2BerryflavorAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2BerryflavorAvgFieldsModel */
export { selectFromPokemonV2BerryflavorAvgFields, pokemonV2BerryflavorAvgFieldsModelPrimitives, PokemonV2BerryflavorAvgFieldsModelSelector } from "./PokemonV2BerryflavorAvgFieldsModel.base"

/**
 * PokemonV2BerryflavorAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2BerryflavorAvgFieldsModel = PokemonV2BerryflavorAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
