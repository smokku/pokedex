import { Instance } from "mobx-state-tree"
import { PokemonV2PalparkStddevPopFieldsModelBase } from "./PokemonV2PalparkStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PalparkStddevPopFieldsModel */
export interface PokemonV2PalparkStddevPopFieldsModelType extends Instance<typeof PokemonV2PalparkStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PalparkStddevPopFieldsModel */
export { selectFromPokemonV2PalparkStddevPopFields, pokemonV2PalparkStddevPopFieldsModelPrimitives, PokemonV2PalparkStddevPopFieldsModelSelector } from "./PokemonV2PalparkStddevPopFieldsModel.base"

/**
 * PokemonV2PalparkStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2PalparkStddevPopFieldsModel = PokemonV2PalparkStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
