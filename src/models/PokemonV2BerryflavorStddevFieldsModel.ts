import { Instance } from "mobx-state-tree"
import { PokemonV2BerryflavorStddevFieldsModelBase } from "./PokemonV2BerryflavorStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2BerryflavorStddevFieldsModel */
export interface PokemonV2BerryflavorStddevFieldsModelType extends Instance<typeof PokemonV2BerryflavorStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2BerryflavorStddevFieldsModel */
export { selectFromPokemonV2BerryflavorStddevFields, pokemonV2BerryflavorStddevFieldsModelPrimitives, PokemonV2BerryflavorStddevFieldsModelSelector } from "./PokemonV2BerryflavorStddevFieldsModel.base"

/**
 * PokemonV2BerryflavorStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2BerryflavorStddevFieldsModel = PokemonV2BerryflavorStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
