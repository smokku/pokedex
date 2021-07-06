import { Instance } from "mobx-state-tree"
import { PokemonV2MovetargetnameModelBase } from "./PokemonV2MovetargetnameModel.base"

/* The TypeScript type of an instance of PokemonV2MovetargetnameModel */
export interface PokemonV2MovetargetnameModelType extends Instance<typeof PokemonV2MovetargetnameModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovetargetnameModel */
export { selectFromPokemonV2Movetargetname, pokemonV2MovetargetnameModelPrimitives, PokemonV2MovetargetnameModelSelector } from "./PokemonV2MovetargetnameModel.base"

/**
 * PokemonV2MovetargetnameModel
 *
 * columns and relationships of "pokemon_v2_movetargetname"
 */
export const PokemonV2MovetargetnameModel = PokemonV2MovetargetnameModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
