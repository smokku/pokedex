import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonformtypeStddevPopFieldsModelBase } from "./PokemonV2PokemonformtypeStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonformtypeStddevPopFieldsModel */
export interface PokemonV2PokemonformtypeStddevPopFieldsModelType extends Instance<typeof PokemonV2PokemonformtypeStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonformtypeStddevPopFieldsModel */
export { selectFromPokemonV2PokemonformtypeStddevPopFields, pokemonV2PokemonformtypeStddevPopFieldsModelPrimitives, PokemonV2PokemonformtypeStddevPopFieldsModelSelector } from "./PokemonV2PokemonformtypeStddevPopFieldsModel.base"

/**
 * PokemonV2PokemonformtypeStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2PokemonformtypeStddevPopFieldsModel = PokemonV2PokemonformtypeStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
