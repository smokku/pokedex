import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonspeciesdescriptionModelBase } from "./PokemonV2PokemonspeciesdescriptionModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonspeciesdescriptionModel */
export interface PokemonV2PokemonspeciesdescriptionModelType extends Instance<typeof PokemonV2PokemonspeciesdescriptionModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonspeciesdescriptionModel */
export { selectFromPokemonV2Pokemonspeciesdescription, pokemonV2PokemonspeciesdescriptionModelPrimitives, PokemonV2PokemonspeciesdescriptionModelSelector } from "./PokemonV2PokemonspeciesdescriptionModel.base"

/**
 * PokemonV2PokemonspeciesdescriptionModel
 *
 * columns and relationships of "pokemon_v2_pokemonspeciesdescription"
 */
export const PokemonV2PokemonspeciesdescriptionModel = PokemonV2PokemonspeciesdescriptionModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
