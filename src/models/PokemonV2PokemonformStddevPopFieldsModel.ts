import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonformStddevPopFieldsModelBase } from "./PokemonV2PokemonformStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonformStddevPopFieldsModel */
export interface PokemonV2PokemonformStddevPopFieldsModelType extends Instance<typeof PokemonV2PokemonformStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonformStddevPopFieldsModel */
export { selectFromPokemonV2PokemonformStddevPopFields, pokemonV2PokemonformStddevPopFieldsModelPrimitives, PokemonV2PokemonformStddevPopFieldsModelSelector } from "./PokemonV2PokemonformStddevPopFieldsModel.base"

/**
 * PokemonV2PokemonformStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2PokemonformStddevPopFieldsModel = PokemonV2PokemonformStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
