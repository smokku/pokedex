import { Instance } from "mobx-state-tree"
import { PokemonV2BerryStddevPopFieldsModelBase } from "./PokemonV2BerryStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2BerryStddevPopFieldsModel */
export interface PokemonV2BerryStddevPopFieldsModelType extends Instance<typeof PokemonV2BerryStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2BerryStddevPopFieldsModel */
export { selectFromPokemonV2BerryStddevPopFields, pokemonV2BerryStddevPopFieldsModelPrimitives, PokemonV2BerryStddevPopFieldsModelSelector } from "./PokemonV2BerryStddevPopFieldsModel.base"

/**
 * PokemonV2BerryStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2BerryStddevPopFieldsModel = PokemonV2BerryStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
