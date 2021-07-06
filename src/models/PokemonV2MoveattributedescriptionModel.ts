import { Instance } from "mobx-state-tree"
import { PokemonV2MoveattributedescriptionModelBase } from "./PokemonV2MoveattributedescriptionModel.base"

/* The TypeScript type of an instance of PokemonV2MoveattributedescriptionModel */
export interface PokemonV2MoveattributedescriptionModelType extends Instance<typeof PokemonV2MoveattributedescriptionModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveattributedescriptionModel */
export { selectFromPokemonV2Moveattributedescription, pokemonV2MoveattributedescriptionModelPrimitives, PokemonV2MoveattributedescriptionModelSelector } from "./PokemonV2MoveattributedescriptionModel.base"

/**
 * PokemonV2MoveattributedescriptionModel
 *
 * columns and relationships of "pokemon_v2_moveattributedescription"
 */
export const PokemonV2MoveattributedescriptionModel = PokemonV2MoveattributedescriptionModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
