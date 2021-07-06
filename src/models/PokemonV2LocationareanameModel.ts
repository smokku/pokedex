import { Instance } from "mobx-state-tree"
import { PokemonV2LocationareanameModelBase } from "./PokemonV2LocationareanameModel.base"

/* The TypeScript type of an instance of PokemonV2LocationareanameModel */
export interface PokemonV2LocationareanameModelType extends Instance<typeof PokemonV2LocationareanameModel.Type> {}

/* A graphql query fragment builders for PokemonV2LocationareanameModel */
export { selectFromPokemonV2Locationareaname, pokemonV2LocationareanameModelPrimitives, PokemonV2LocationareanameModelSelector } from "./PokemonV2LocationareanameModel.base"

/**
 * PokemonV2LocationareanameModel
 *
 * columns and relationships of "pokemon_v2_locationareaname"
 */
export const PokemonV2LocationareanameModel = PokemonV2LocationareanameModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
