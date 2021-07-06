import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonStddevFieldsModelBase } from "./PokemonV2PokemonStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonStddevFieldsModel */
export interface PokemonV2PokemonStddevFieldsModelType extends Instance<typeof PokemonV2PokemonStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonStddevFieldsModel */
export { selectFromPokemonV2PokemonStddevFields, pokemonV2PokemonStddevFieldsModelPrimitives, PokemonV2PokemonStddevFieldsModelSelector } from "./PokemonV2PokemonStddevFieldsModel.base"

/**
 * PokemonV2PokemonStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2PokemonStddevFieldsModel = PokemonV2PokemonStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
