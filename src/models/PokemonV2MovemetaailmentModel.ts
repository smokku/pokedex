import { Instance } from "mobx-state-tree"
import { PokemonV2MovemetaailmentModelBase } from "./PokemonV2MovemetaailmentModel.base"

/* The TypeScript type of an instance of PokemonV2MovemetaailmentModel */
export interface PokemonV2MovemetaailmentModelType extends Instance<typeof PokemonV2MovemetaailmentModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovemetaailmentModel */
export { selectFromPokemonV2Movemetaailment, pokemonV2MovemetaailmentModelPrimitives, PokemonV2MovemetaailmentModelSelector } from "./PokemonV2MovemetaailmentModel.base"

/**
 * PokemonV2MovemetaailmentModel
 *
 * columns and relationships of "pokemon_v2_movemetaailment"
 */
export const PokemonV2MovemetaailmentModel = PokemonV2MovemetaailmentModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
