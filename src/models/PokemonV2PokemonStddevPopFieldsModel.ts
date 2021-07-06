import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonStddevPopFieldsModelBase } from "./PokemonV2PokemonStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonStddevPopFieldsModel */
export interface PokemonV2PokemonStddevPopFieldsModelType extends Instance<typeof PokemonV2PokemonStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonStddevPopFieldsModel */
export { selectFromPokemonV2PokemonStddevPopFields, pokemonV2PokemonStddevPopFieldsModelPrimitives, PokemonV2PokemonStddevPopFieldsModelSelector } from "./PokemonV2PokemonStddevPopFieldsModel.base"

/**
 * PokemonV2PokemonStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2PokemonStddevPopFieldsModel = PokemonV2PokemonStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
