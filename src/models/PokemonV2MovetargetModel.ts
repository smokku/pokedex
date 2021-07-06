import { Instance } from "mobx-state-tree"
import { PokemonV2MovetargetModelBase } from "./PokemonV2MovetargetModel.base"

/* The TypeScript type of an instance of PokemonV2MovetargetModel */
export interface PokemonV2MovetargetModelType extends Instance<typeof PokemonV2MovetargetModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovetargetModel */
export { selectFromPokemonV2Movetarget, pokemonV2MovetargetModelPrimitives, PokemonV2MovetargetModelSelector } from "./PokemonV2MovetargetModel.base"

/**
 * PokemonV2MovetargetModel
 *
 * columns and relationships of "pokemon_v2_movetarget"
 */
export const PokemonV2MovetargetModel = PokemonV2MovetargetModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
