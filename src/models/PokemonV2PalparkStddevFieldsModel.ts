import { Instance } from "mobx-state-tree"
import { PokemonV2PalparkStddevFieldsModelBase } from "./PokemonV2PalparkStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PalparkStddevFieldsModel */
export interface PokemonV2PalparkStddevFieldsModelType extends Instance<typeof PokemonV2PalparkStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PalparkStddevFieldsModel */
export { selectFromPokemonV2PalparkStddevFields, pokemonV2PalparkStddevFieldsModelPrimitives, PokemonV2PalparkStddevFieldsModelSelector } from "./PokemonV2PalparkStddevFieldsModel.base"

/**
 * PokemonV2PalparkStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2PalparkStddevFieldsModel = PokemonV2PalparkStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
