import { Instance } from "mobx-state-tree"
import { PokemonV2GrowthrateModelBase } from "./PokemonV2GrowthrateModel.base"

/* The TypeScript type of an instance of PokemonV2GrowthrateModel */
export interface PokemonV2GrowthrateModelType extends Instance<typeof PokemonV2GrowthrateModel.Type> {}

/* A graphql query fragment builders for PokemonV2GrowthrateModel */
export { selectFromPokemonV2Growthrate, pokemonV2GrowthrateModelPrimitives, PokemonV2GrowthrateModelSelector } from "./PokemonV2GrowthrateModel.base"

/**
 * PokemonV2GrowthrateModel
 *
 * columns and relationships of "pokemon_v2_growthrate"
 */
export const PokemonV2GrowthrateModel = PokemonV2GrowthrateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
