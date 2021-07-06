import { Instance } from "mobx-state-tree"
import { PokemonV2MoveattributemapModelBase } from "./PokemonV2MoveattributemapModel.base"

/* The TypeScript type of an instance of PokemonV2MoveattributemapModel */
export interface PokemonV2MoveattributemapModelType extends Instance<typeof PokemonV2MoveattributemapModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveattributemapModel */
export { selectFromPokemonV2Moveattributemap, pokemonV2MoveattributemapModelPrimitives, PokemonV2MoveattributemapModelSelector } from "./PokemonV2MoveattributemapModel.base"

/**
 * PokemonV2MoveattributemapModel
 *
 * columns and relationships of "pokemon_v2_moveattributemap"
 */
export const PokemonV2MoveattributemapModel = PokemonV2MoveattributemapModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
