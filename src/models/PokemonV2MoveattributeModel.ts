import { Instance } from "mobx-state-tree"
import { PokemonV2MoveattributeModelBase } from "./PokemonV2MoveattributeModel.base"

/* The TypeScript type of an instance of PokemonV2MoveattributeModel */
export interface PokemonV2MoveattributeModelType extends Instance<typeof PokemonV2MoveattributeModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveattributeModel */
export { selectFromPokemonV2Moveattribute, pokemonV2MoveattributeModelPrimitives, PokemonV2MoveattributeModelSelector } from "./PokemonV2MoveattributeModel.base"

/**
 * PokemonV2MoveattributeModel
 *
 * columns and relationships of "pokemon_v2_moveattribute"
 */
export const PokemonV2MoveattributeModel = PokemonV2MoveattributeModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
