import { Instance } from "mobx-state-tree"
import { PokemonV2MoveeffecteffecttextModelBase } from "./PokemonV2MoveeffecteffecttextModel.base"

/* The TypeScript type of an instance of PokemonV2MoveeffecteffecttextModel */
export interface PokemonV2MoveeffecteffecttextModelType extends Instance<typeof PokemonV2MoveeffecteffecttextModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveeffecteffecttextModel */
export { selectFromPokemonV2Moveeffecteffecttext, pokemonV2MoveeffecteffecttextModelPrimitives, PokemonV2MoveeffecteffecttextModelSelector } from "./PokemonV2MoveeffecteffecttextModel.base"

/**
 * PokemonV2MoveeffecteffecttextModel
 *
 * columns and relationships of "pokemon_v2_moveeffecteffecttext"
 */
export const PokemonV2MoveeffecteffecttextModel = PokemonV2MoveeffecteffecttextModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
