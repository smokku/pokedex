import { Instance } from "mobx-state-tree"
import { PokemonV2MovetargetdescriptionModelBase } from "./PokemonV2MovetargetdescriptionModel.base"

/* The TypeScript type of an instance of PokemonV2MovetargetdescriptionModel */
export interface PokemonV2MovetargetdescriptionModelType extends Instance<typeof PokemonV2MovetargetdescriptionModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovetargetdescriptionModel */
export { selectFromPokemonV2Movetargetdescription, pokemonV2MovetargetdescriptionModelPrimitives, PokemonV2MovetargetdescriptionModelSelector } from "./PokemonV2MovetargetdescriptionModel.base"

/**
 * PokemonV2MovetargetdescriptionModel
 *
 * columns and relationships of "pokemon_v2_movetargetdescription"
 */
export const PokemonV2MovetargetdescriptionModel = PokemonV2MovetargetdescriptionModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
