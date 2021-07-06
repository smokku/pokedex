import { Instance } from "mobx-state-tree"
import { PokemonV2MoveModelBase } from "./PokemonV2MoveModel.base"

/* The TypeScript type of an instance of PokemonV2MoveModel */
export interface PokemonV2MoveModelType extends Instance<typeof PokemonV2MoveModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveModel */
export { selectFromPokemonV2Move, pokemonV2MoveModelPrimitives, PokemonV2MoveModelSelector } from "./PokemonV2MoveModel.base"

/**
 * PokemonV2MoveModel
 *
 * columns and relationships of "pokemon_v2_move"
 */
export const PokemonV2MoveModel = PokemonV2MoveModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
