import { Instance } from "mobx-state-tree"
import { PokemonV2BerryflavorStddevPopFieldsModelBase } from "./PokemonV2BerryflavorStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2BerryflavorStddevPopFieldsModel */
export interface PokemonV2BerryflavorStddevPopFieldsModelType extends Instance<typeof PokemonV2BerryflavorStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2BerryflavorStddevPopFieldsModel */
export { selectFromPokemonV2BerryflavorStddevPopFields, pokemonV2BerryflavorStddevPopFieldsModelPrimitives, PokemonV2BerryflavorStddevPopFieldsModelSelector } from "./PokemonV2BerryflavorStddevPopFieldsModel.base"

/**
 * PokemonV2BerryflavorStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2BerryflavorStddevPopFieldsModel = PokemonV2BerryflavorStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
