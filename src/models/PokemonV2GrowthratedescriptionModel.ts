import { Instance } from "mobx-state-tree"
import { PokemonV2GrowthratedescriptionModelBase } from "./PokemonV2GrowthratedescriptionModel.base"

/* The TypeScript type of an instance of PokemonV2GrowthratedescriptionModel */
export interface PokemonV2GrowthratedescriptionModelType extends Instance<typeof PokemonV2GrowthratedescriptionModel.Type> {}

/* A graphql query fragment builders for PokemonV2GrowthratedescriptionModel */
export { selectFromPokemonV2Growthratedescription, pokemonV2GrowthratedescriptionModelPrimitives, PokemonV2GrowthratedescriptionModelSelector } from "./PokemonV2GrowthratedescriptionModel.base"

/**
 * PokemonV2GrowthratedescriptionModel
 *
 * columns and relationships of "pokemon_v2_growthratedescription"
 */
export const PokemonV2GrowthratedescriptionModel = PokemonV2GrowthratedescriptionModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
