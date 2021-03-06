import { Instance, types } from "mobx-state-tree"
import { PokemonV2PokemonModelBase } from "./PokemonV2PokemonModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonModel */
export interface PokemonV2PokemonModelType extends Instance<typeof PokemonV2PokemonModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonModel */
export { selectFromPokemonV2Pokemon, pokemonV2PokemonModelPrimitives, PokemonV2PokemonModelSelector } from "./PokemonV2PokemonModel.base"

/**
 * PokemonV2PokemonModel
 *
 * columns and relationships of "pokemon_v2_pokemon"
 */
export const PokemonV2PokemonModel = PokemonV2PokemonModelBase
  .props({
    captured: types.maybe(types.boolean),
  })
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    },
    toggleCaptured() {
      self.captured = !self.captured
    },
  }))
