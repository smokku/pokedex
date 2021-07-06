import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonformtypeStddevFieldsModelBase } from "./PokemonV2PokemonformtypeStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonformtypeStddevFieldsModel */
export interface PokemonV2PokemonformtypeStddevFieldsModelType extends Instance<typeof PokemonV2PokemonformtypeStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonformtypeStddevFieldsModel */
export { selectFromPokemonV2PokemonformtypeStddevFields, pokemonV2PokemonformtypeStddevFieldsModelPrimitives, PokemonV2PokemonformtypeStddevFieldsModelSelector } from "./PokemonV2PokemonformtypeStddevFieldsModel.base"

/**
 * PokemonV2PokemonformtypeStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2PokemonformtypeStddevFieldsModel = PokemonV2PokemonformtypeStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
