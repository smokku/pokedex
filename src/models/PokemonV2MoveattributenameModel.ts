import { Instance } from "mobx-state-tree"
import { PokemonV2MoveattributenameModelBase } from "./PokemonV2MoveattributenameModel.base"

/* The TypeScript type of an instance of PokemonV2MoveattributenameModel */
export interface PokemonV2MoveattributenameModelType extends Instance<typeof PokemonV2MoveattributenameModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveattributenameModel */
export { selectFromPokemonV2Moveattributename, pokemonV2MoveattributenameModelPrimitives, PokemonV2MoveattributenameModelSelector } from "./PokemonV2MoveattributenameModel.base"

/**
 * PokemonV2MoveattributenameModel
 *
 * columns and relationships of "pokemon_v2_moveattributename"
 */
export const PokemonV2MoveattributenameModel = PokemonV2MoveattributenameModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
