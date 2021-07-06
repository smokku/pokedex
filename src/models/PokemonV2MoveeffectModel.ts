import { Instance } from "mobx-state-tree"
import { PokemonV2MoveeffectModelBase } from "./PokemonV2MoveeffectModel.base"

/* The TypeScript type of an instance of PokemonV2MoveeffectModel */
export interface PokemonV2MoveeffectModelType extends Instance<typeof PokemonV2MoveeffectModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveeffectModel */
export { selectFromPokemonV2Moveeffect, pokemonV2MoveeffectModelPrimitives, PokemonV2MoveeffectModelSelector } from "./PokemonV2MoveeffectModel.base"

/**
 * PokemonV2MoveeffectModel
 *
 * columns and relationships of "pokemon_v2_moveeffect"
 */
export const PokemonV2MoveeffectModel = PokemonV2MoveeffectModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
